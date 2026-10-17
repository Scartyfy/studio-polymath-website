import React, { useState, useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { LiquidIcon, SOFTWARE_ICONS } from './LiquidIcon';
import { Language } from '../types';

const SKILLS_DATA = {
  fr: [
    { 
      id: 'shs', 
      label: 'Sc. Humaines', 
      category: 'Stratégie', 
      desc: "Comprendre l'humain pour concevoir avec sens. J'utilise l'anthropologie, la sociologie et la recherche documentaire pour analyser des enjeux complexes et définir une vision stratégique éthique." 
    },
    { 
      id: 'eng', 
      label: 'Ingénierie', 
      category: 'Systèmes', 
      desc: "Développer des solutions informatiques robustes. Je maîtrise le code, l'algorithmique et l'architecture des systèmes pour concevoir des logiciels intelligents et intégrer des technologies complexes." 
    },
    { 
      id: 'design', 
      label: 'Ux/Ui Design', 
      category: 'Visuel', 
      desc: "Créer des interfaces fluides et impactantes. De la recherche utilisateur au prototypage haute fidélité, je maîtrise la Suite Adobe et la modélisation 3D pour rendre chaque interaction intuitive." 
    },
    { 
      id: 'proto', 
      label: 'Prototypage', 
      category: 'Fablab', 
      desc: "Passer de l'idée au Proof of Concept. Je fabrique des prototypes physiques au FabLab (maquettes, IoT, matériaux) pour tester la faisabilité technique et l'ergonomie réelle de mes concepts." 
    },
  ],
  en: [
    { 
      id: 'shs', 
      label: 'Social Sc.', 
      category: 'Strategy', 
      desc: "Understanding humans to design with purpose. I use anthropology, sociology, and documentary research to analyze complex issues and define an ethical strategic vision." 
    },
    { 
      id: 'eng', 
      label: 'Engineering', 
      category: 'Systems', 
      desc: "Developing robust IT solutions. I master code, algorithms, and system architecture to design intelligent software and integrate complex technologies." 
    },
    { 
      id: 'design', 
      label: 'Ux/Ui Design', 
      category: 'Visual', 
      desc: "Creating smooth and impactful interfaces. From user research to high-fidelity prototyping, I master the Adobe Suite and 3D modeling to make every interaction intuitive." 
    },
    { 
      id: 'proto', 
      label: 'Prototyping', 
      category: 'Fablab', 
      desc: "Moving from idea to Proof of Concept. I manufacture physical prototypes in the FabLab (models, IoT, materials) to test technical feasibility and real ergonomics of my concepts." 
    },
  ]
};

// Verified tools mapped to each skill domain
const SKILL_SOFTWARE_MAP: Record<string, string[]> = {
  shs: [],
  eng: ['Python', 'C++', 'Java', 'JavaScript', 'React', 'Three.js', 'Git'],
  design: ['Figma', 'Photoshop', 'Illustrator', 'InDesign', 'Blender', 'Three.js'],
  proto: []
};

// Truly seamless, glitch-free software marquee (zero-jump on loop)
const SoftwareMarquee: React.FC<{ 
  softwareList: string[]; 
  theme?: 'light' | 'dark';
  speedMultiplier?: number;
}> = ({ 
  softwareList, 
  theme = 'light',
  speedMultiplier = 1
}) => {
  if (!softwareList || softwareList.length === 0) return null;

  // Build a track with enough items to ensure full width coverage before repeating
  const repeatCount = Math.max(2, Math.ceil(8 / softwareList.length));
  const sequence: string[] = [];
  for (let r = 0; r < repeatCount; r++) {
    sequence.push(...softwareList);
  }

  // Consistent linear speed calculation (~2.8s per item for a readable, serene pace)
  const duration = Math.max(18, Math.round(sequence.length * 2.8 * speedMultiplier));

  return (
    <div 
      className="w-full mt-6 overflow-hidden relative select-none pointer-events-auto"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)'
      }}
    >
      <div 
        className="flex w-max items-center py-1 animate-skill-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-6 pr-6">
          {sequence.map((name, i) => {
            const icon = SOFTWARE_ICONS.find(s => s.name === name);
            if (!icon) return null;
            return (
              <div key={`t1-${name}-${i}`} className="flex-shrink-0">
                <LiquidIcon icon={icon} index={i} theme={theme} />
              </div>
            );
          })}
        </div>
        {/* Track 2: Identical duplicate with matching gap & padding for 100% seamless 0 to -50% loop */}
        <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden="true">
          {sequence.map((name, i) => {
            const icon = SOFTWARE_ICONS.find(s => s.name === name);
            if (!icon) return null;
            return (
              <div key={`t2-${name}-${i}`} className="flex-shrink-0">
                <LiquidIcon icon={icon} index={i + 100} theme={theme} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const SkillWheel: React.FC<{ lang: Language }> = ({ lang }) => {
  const [activeId, setActiveId] = useState<string>('eng');
  const skills = SKILLS_DATA[lang];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div ref={containerRef} className="w-full bg-[#002FA7] pt-24 pb-32 border-t border-white/5 overflow-hidden">
      {/* Moving Section Title Banner */}
      <div className="w-full mb-20 mt-8 border-y border-white/10 py-8 overflow-hidden flex items-center">
        <motion.div className="flex whitespace-nowrap gap-12" style={{ x }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-widest text-white uppercase">
                {lang === 'fr' ? 'Compétences' : 'Skills'}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Desktop interactive cards */}
        <div 
          className="hidden md:flex flex-row h-[600px] w-full gap-2 p-2 bg-[#001f70]/20 rounded-[40px] border border-white/10"
        >
          {skills.map((skill, index) => {
            const isActive = activeId === skill.id;
            const relatedSoftware = SKILL_SOFTWARE_MAP[skill.id] || [];

            return (
              <div 
                key={skill.id} 
                className={`relative transition-all duration-[800ms] cubic-bezier(0.23, 1, 0.32, 1) rounded-[32px] overflow-hidden group cursor-pointer ${
                  isActive 
                    ? 'flex-[4] bg-white text-[#002FA7] z-10' 
                    : 'flex-[1] bg-[#002FA7] hover:bg-[#002480] text-white border border-white/10'
                }`} 
                onMouseEnter={() => setActiveId(skill.id)}
              >
                <div className="absolute inset-0 flex flex-col justify-between p-6 whitespace-nowrap">
                  <div className="flex justify-end items-start text-[10px] font-mono tracking-widest">
                    <span className={`transition-all duration-300 mt-2 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                      {skill.category}
                    </span>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
                    {/* Collapsed label */}
                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center -rotate-90 transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${isActive ? 'opacity-0 scale-75 blur-sm' : 'opacity-100 scale-100 blur-0'}`}>
                      <span className="text-2xl md:text-3xl font-display font-bold tracking-[0.2em] text-white/40 group-hover:text-white transition-colors whitespace-nowrap">
                        {skill.label}
                      </span>
                    </div>

                    {/* Expanded content */}
                    <div className={`flex flex-col items-center text-center transition-all duration-[1000ms] cubic-bezier(0.19, 1, 0.22, 1) transform w-full px-10 ${isActive ? 'opacity-100 translate-y-0 scale-100 delay-[200ms]' : 'opacity-0 translate-y-12 scale-95 pointer-events-none'}`}>
                      <h3 className="text-4xl lg:text-5xl font-display font-bold tracking-tighter mb-6 whitespace-normal leading-none">
                        {skill.label}
                      </h3>
                      
                      <div className="w-full max-w-xl text-left pl-4 pr-4">
                        <p className={`font-display font-light text-base lg:text-lg text-justify text-wrap whitespace-normal leading-relaxed transition-opacity duration-700 delay-[400ms] ${isActive ? 'opacity-100 text-[#002FA7]/80' : 'opacity-0 text-white/60'}`}>
                          {skill.desc}
                        </p>
                      </div>

                      {/* Domain Software Ticker Marquee */}
                      {relatedSoftware.length > 0 && (
                        <div className={`w-full transition-all duration-1000 delay-[500ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                          <SoftwareMarquee softwareList={relatedSoftware} theme="light" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-start items-end z-20 pointer-events-none">
                    <span className={`flex items-center justify-center w-8 h-8 rounded-full font-mono text-[10px] font-bold transition-colors duration-300 ${isActive ? 'bg-[#002FA7] text-white' : 'bg-white text-[#002FA7]'}`}>
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile accordion */}
        <div className="md:hidden flex flex-col border-t border-white/10">
          {skills.map((skill, index) => {
            const relatedSoftware = SKILL_SOFTWARE_MAP[skill.id] || [];
            const isSelected = activeId === skill.id;
            return (
              <div 
                key={skill.id} 
                className={`border-b border-white/10 overflow-hidden transition-colors duration-300 ${isSelected ? 'bg-white text-[#002FA7]' : 'bg-[#002FA7] text-white'}`} 
                onClick={() => setActiveId(isSelected ? '' : skill.id)}
              >
                <div className="p-5 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center justify-center min-w-[32px] h-8 rounded-full font-mono text-[10px] font-bold transition-colors duration-300 ${isSelected ? 'bg-[#002FA7] text-white' : 'bg-white text-[#002FA7]'}`}>
                      0{index + 1}
                    </span>
                    <div>
                      <span className="font-display font-bold text-lg tracking-tight block">{skill.label}</span>
                      <span className={`font-mono text-[10px] uppercase tracking-wider block ${isSelected ? 'text-[#002FA7]/60' : 'text-white/60'}`}>{skill.category}</span>
                    </div>
                  </div>
                  <span className={`text-2xl font-light transition-transform duration-300 ${isSelected ? 'rotate-45' : 'rotate-0'}`}>+</span>
                </div>
                {isSelected && (
                  <div className="px-5 pb-6">
                    <p className="font-display font-light text-left text-sm leading-relaxed mb-4 text-[#002FA7]/85">
                      {skill.desc}
                    </p>
                    {relatedSoftware.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#002FA7]/15">
                        {relatedSoftware.map((name) => {
                          const icon = SOFTWARE_ICONS.find(s => s.name === name);
                          return (
                            <span key={name} className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 bg-[#002FA7]/10 text-[#002FA7] rounded font-medium">
                              {icon && (
                                <svg viewBox={icon.viewBox} className="w-3.5 h-3.5 shrink-0 overflow-visible">
                                  {icon.path}
                                </svg>
                              )}
                              {name}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
