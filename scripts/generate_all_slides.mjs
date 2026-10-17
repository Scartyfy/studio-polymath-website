import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/ux');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function writeSvg(filename, svgContent) {
  fs.writeFileSync(path.join(outDir, filename), svgContent.trim());
  console.log(`Generated: ${filename}`);
}

// 1. Observation Orsay & Quai Branly
writeSvg('slide_observation_orsay_branly.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <circle cx="90" cy="80" r="28" fill="#310273"/>
  <circle cx="86" cy="76" r="12" fill="none" stroke="#FFFFFF" stroke-width="4"/>
  <line x1="95" y1="85" x2="108" y2="98" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
  <text x="135" y="85" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273">Observations</text>
  
  <g transform="translate(60, 130)">
    <rect width="510" height="360" rx="16" fill="#F0F0F4"/>
    <g transform="translate(20, 20)">
      <rect width="470" height="320" rx="12" fill="#E2E2EA"/>
      <path d="M 40 280 Q 235 40 430 280 Z" fill="#D2D2DC" opacity="0.6"/>
      <circle cx="235" cy="150" r="42" fill="#FFFFFF" stroke="#310273" stroke-width="5"/>
      <line x1="235" y1="150" x2="235" y2="125" stroke="#310273" stroke-width="4" stroke-linecap="round"/>
      <line x1="235" y1="150" x2="252" y2="150" stroke="#310273" stroke-width="4" stroke-linecap="round"/>
      <rect x="180" y="220" width="110" height="50" rx="8" fill="#BE99F2"/>
      <text x="235" y="252" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">Grande Nef d'Orsay</text>
    </g>
    <text x="20" y="420" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#111111">Musée d'Orsay (Paris)</text>
    <text x="20" y="450" font-family="system-ui, sans-serif" font-size="16" fill="#666666">Vendredi de février (hors vacances scolaires)</text>
  </g>

  <g transform="translate(630, 130)">
    <rect width="510" height="360" rx="16" fill="#1C1822"/>
    <g transform="translate(20, 20)">
      <rect width="470" height="320" rx="12" fill="#2A2234"/>
      <path d="M 30 260 C 120 160, 280 320, 440 200" fill="none" stroke="#D7F205" stroke-width="12" stroke-linecap="round"/>
      <rect x="260" y="60" width="70" height="90" rx="4" fill="#BE99F2"/>
      <text x="295" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">EXPO</text>
      <rect x="60" y="220" width="140" height="45" rx="8" fill="#310273"/>
      <text x="130" y="248" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Rampe &amp; Verrière</text>
    </g>
    <text x="20" y="420" font-family="system-ui, sans-serif" font-size="22" font-weight="700" fill="#111111">Musée du quai Branly (Paris)</text>
    <text x="20" y="450" font-family="system-ui, sans-serif" font-size="16" fill="#666666">Vendredi de février (hors vacances scolaires)</text>
  </g>
</svg>`);

// 2. Stats Juan Prim (Slide 10)
writeSvg('slide_stats_juan_prim.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <path d="M 700 0 L 1200 0 L 1200 675 L 600 675 Z" fill="#9B8FB5" opacity="0.45"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Observations</text>

  <!-- Donut Chart Left -->
  <g transform="translate(280, 360)">
    <circle cx="0" cy="0" r="160" fill="none" stroke="#E6E6EE" stroke-width="70"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#BE99F2" stroke-width="70" stroke-dasharray="552 1005" stroke-dashoffset="0"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#853BF2" stroke-width="70" stroke-dasharray="351 1005" stroke-dashoffset="-552"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#310273" stroke-width="70" stroke-dasharray="100 1005" stroke-dashoffset="-903"/>
    
    <text x="190" y="10" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#310273">Passe 55%</text>
    <text x="-260" y="40" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#853BF2">Nom &amp; Auteur 35%</text>
    <text x="-90" y="-200" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#310273">Lis tout 10%</text>
  </g>

  <!-- Painting Card Right -->
  <g transform="translate(730, 110)">
    <rect width="400" height="420" rx="16" fill="#1C1822" stroke="#853BF2" stroke-width="2"/>
    <rect x="25" y="25" width="350" height="280" rx="8" fill="#2D2738"/>
    <circle cx="200" cy="130" r="50" fill="#BE99F2" opacity="0.3"/>
    <path d="M 120 280 C 160 160, 220 220, 280 150 L 300 280 Z" fill="#853BF2" opacity="0.6"/>
    <text x="200" y="70" font-family="serif" font-size="24" font-weight="700" fill="#FFFFFF" text-anchor="middle">Juan Prim</text>
    <text x="200" y="100" font-family="system-ui, sans-serif" font-size="16" fill="#BE99F2" text-anchor="middle">Henri Regnault</text>
    <text x="25" y="340" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" width="350">
      <tspan x="25" dy="0">Les visiteurs passent devant le tableau, le regardent</tspan>
      <tspan x="25" dy="24">sans s'attarder sur le cartel. Seuls les habitués ou</tspan>
      <tspan x="25" dy="24">passionnés lisent l'intégralité du texte.</tspan>
    </text>
  </g>
</svg>`);

// 3. Stats Victor Navlet (Slide 11)
writeSvg('slide_stats_victor_navlet.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <path d="M 700 0 L 1200 0 L 1200 675 L 600 675 Z" fill="#9B8FB5" opacity="0.45"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Observations</text>

  <!-- Donut Chart Left -->
  <g transform="translate(280, 360)">
    <circle cx="0" cy="0" r="160" fill="none" stroke="#E6E6EE" stroke-width="70"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#853BF2" stroke-width="70" stroke-dasharray="402 1005" stroke-dashoffset="0"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#BE99F2" stroke-width="70" stroke-dasharray="351 1005" stroke-dashoffset="-402"/>
    <circle cx="0" cy="0" r="160" fill="none" stroke="#310273" stroke-width="70" stroke-dasharray="251 1005" stroke-dashoffset="-753"/>
    
    <text x="190" y="10" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#853BF2">Rien 35%</text>
    <text x="-260" y="80" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#853BF2">Nom &amp; Auteur 40%</text>
    <text x="-140" y="-190" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273">Nom, Auteur, Desc. 25%</text>
  </g>

  <!-- Painting Card Right -->
  <g transform="translate(710, 110)">
    <rect width="440" height="430" rx="16" fill="#FFFFFF" stroke="#853BF2" stroke-width="2" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.06))"/>
    <text x="30" y="45" font-family="serif" font-size="22" font-weight="700" fill="#111111">Victor Navlet (1855)</text>
    <text x="30" y="70" font-family="system-ui, sans-serif" font-size="14" fill="#666666">Vue générale de Paris, prise de l'Observatoire, en ballon</text>
    <rect x="30" y="90" width="380" height="220" rx="10" fill="#DDE4EF"/>
    <circle cx="120" cy="150" r="22" fill="#BE99F2"/>
    <line x1="120" y1="172" x2="120" y2="185" stroke="#310273" stroke-width="2"/>
    <path d="M 50 280 L 180 200 L 260 260 L 400 180" stroke="#853BF2" stroke-width="3" fill="none"/>
    <text x="30" y="350" font-family="system-ui, sans-serif" font-size="14" fill="#333333">
      <tspan x="30" dy="0">Les visiteurs s'attardent devant le tableau et essaient de</tspan>
      <tspan x="30" dy="24">reconnaître les différents quartiers de Paris puis</tspan>
      <tspan x="30" dy="24">regardent attentivement le cartel.</tspan>
    </text>
  </g>
</svg>`);

// 4. Stats Questions Photos (Slide 14)
writeSvg('slide_stats_photos.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Interviews</text>
  
  <text x="80" y="610" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#111111">Pourquoi prenez-vous des photos ?</text>

  <!-- Donut Chart Left -->
  <g transform="translate(290, 310)">
    <circle cx="0" cy="0" r="145" fill="none" stroke="#E6E6EE" stroke-width="65"/>
    <circle cx="0" cy="0" r="145" fill="none" stroke="#BE99F2" stroke-width="65" stroke-dasharray="343 911" stroke-dashoffset="0"/>
    <circle cx="0" cy="0" r="145" fill="none" stroke="#310273" stroke-width="65" stroke-dasharray="343 911" stroke-dashoffset="-343"/>
    <circle cx="0" cy="0" r="145" fill="none" stroke="#853BF2" stroke-width="65" stroke-dasharray="224 911" stroke-dashoffset="-686"/>
    
    <text x="165" y="-10" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#853BF2">Si belle 37.7%</text>
    <text x="-240" y="-10" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273">Partage 37.7%</text>
    <text x="-40" y="195" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#853BF2">Étude 24.6%</text>
  </g>

  <!-- Verbatims Right -->
  <g transform="translate(580, 160)">
    <rect width="540" height="170" rx="16" fill="#F8F8FC" stroke="#853BF2" stroke-width="1.5"/>
    <text x="30" y="50" font-family="serif" font-size="18" fill="#111111" font-style="italic">
      <tspan x="30" dy="0">« Je ne photographie pas pour le plaisir, mais pour</tspan>
      <tspan x="30" dy="28">apprendre. Je prends l'œuvre avec son cartel, ou je</tspan>
      <tspan x="30" dy="28">zoome sur des détails précis pour mes cours. »</tspan>
    </text>

    <rect y="200" width="540" height="170" rx="16" fill="#F8F8FC" stroke="#853BF2" stroke-width="1.5"/>
    <text x="30" y="250" font-family="serif" font-size="18" fill="#111111" font-style="italic">
      <tspan x="30" dy="0">« Oui, en complément de mes notes écrites. Je prends des</tspan>
      <tspan x="30" dy="28">photos pour être sûre de ne rien perdre et pouvoir revoir</tspan>
      <tspan x="30" dy="28">tous les détails tranquillement chez moi. »</tspan>
    </text>
  </g>
</svg>`);

// 5. Stats Qu'en faites-vous (Slide 15)
writeSvg('slide_stats_usage.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Interviews</text>
  
  <text x="80" y="610" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="#111111">Qu'en faites-vous ?</text>

  <!-- Donut Chart Left -->
  <g transform="translate(290, 310)">
    <circle cx="0" cy="0" r="145" fill="none" stroke="#E6E6EE" stroke-width="65"/>
    <circle cx="0" cy="0" r="145" fill="none" stroke="#BE99F2" stroke-width="65" stroke-dasharray="568 911" stroke-dashoffset="0"/>
    <circle cx="0" cy="0" r="145" fill="none" stroke="#310273" stroke-width="65" stroke-dasharray="224 911" stroke-dashoffset="-568"/>
    <circle cx="0" cy="0" r="145" fill="none" stroke="#853BF2" stroke-width="65" stroke-dasharray="120 911" stroke-dashoffset="-792"/>
    
    <text x="170" y="30" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#853BF2">Partage 62.3%</text>
    <text x="-200" y="-80" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273">Travail 24.6%</text>
    <text x="-210" y="80" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#853BF2">Archive 13.2%</text>
  </g>

  <!-- Verbatims Right -->
  <g transform="translate(580, 160)">
    <rect width="540" height="170" rx="16" fill="#F8F8FC" stroke="#853BF2" stroke-width="1.5"/>
    <text x="30" y="50" font-family="serif" font-size="18" fill="#111111" font-style="italic">
      <tspan x="30" dy="0">« Je ne prends pas de photos, je sais très bien comment</tspan>
      <tspan x="30" dy="28">ça finit : je vais m'encombrer le téléphone pour rien et finir</tspan>
      <tspan x="30" dy="28">par les effacer sans même les regarder. »</tspan>
    </text>

    <rect y="200" width="540" height="170" rx="16" fill="#F8F8FC" stroke="#853BF2" stroke-width="1.5"/>
    <text x="30" y="250" font-family="serif" font-size="18" fill="#111111" font-style="italic">
      <tspan x="30" dy="0">« C'est surtout pour du partage instantané ou pour les</tspan>
      <tspan x="30" dy="28">montrer en direct sur l'écran. Honnêtement, je ne les</tspan>
      <tspan x="30" dy="28">regarde pas par la suite, elles finissent perdues. »</tspan>
    </text>
  </g>
</svg>`);

// 6. User Journey Phase 1 (Slide 20)
writeSvg('slide_user_journey_1.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#3F394B"/>
  
  <!-- Banner Top -->
  <path d="M 400 40 L 800 40 L 830 75 L 800 110 L 400 110 Z" fill="#310273"/>
  <text x="600" y="82" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">PHASE 1. AVANT LA VISITE</text>

  <!-- Step Titles -->
  <rect x="360" y="130" width="220" height="50" rx="8" fill="#5A3A8E"/>
  <text x="470" y="162" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">Idée de visite</text>

  <rect x="620" y="130" width="220" height="50" rx="8" fill="#5A3A8E"/>
  <text x="730" y="162" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">Organisation</text>

  <!-- Table Grid Rows -->
  <g transform="translate(100, 200)">
    <!-- Headers on Left -->
    <rect x="0" y="0" width="220" height="60" rx="6" fill="#310273"/>
    <text x="20" y="38" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Actions</text>

    <rect x="0" y="70" width="220" height="60" rx="6" fill="#310273"/>
    <text x="20" y="108" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Touchpoints</text>

    <rect x="0" y="140" width="220" height="60" rx="6" fill="#310273"/>
    <text x="20" y="178" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Pensées</text>

    <rect x="0" y="210" width="220" height="60" rx="6" fill="#310273"/>
    <text x="20" y="248" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Courbe émotionnelle</text>

    <rect x="0" y="280" width="220" height="60" rx="6" fill="#310273"/>
    <text x="20" y="318" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Pain Points</text>

    <rect x="0" y="350" width="220" height="60" rx="6" fill="#310273"/>
    <text x="20" y="388" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#FFFFFF">Opportunités</text>

    <!-- Column 1: Idée de visite -->
    <rect x="240" y="0" width="370" height="60" fill="#2A2433"/>
    <text x="255" y="26" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">• Découvre une expo sur Instagram / TikTok</text>
    <text x="255" y="46" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">• Bouche-à-oreille entre amis</text>

    <rect x="240" y="70" width="370" height="60" fill="#2A2433"/>
    <text x="255" y="106" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Réseaux sociaux, Affiches métro</text>

    <rect x="240" y="140" width="370" height="60" fill="#2A2433"/>
    <text x="255" y="176" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">"Est-ce que ça vaut le coup ? Je n'y connais rien..."</text>

    <rect x="240" y="210" width="750" height="60" fill="#2A2433"/>
    <!-- Emotional Curve -->
    <path d="M 250 255 Q 400 230 600 240 T 950 220" fill="none" stroke="#D7F205" stroke-width="5"/>
    <path d="M 250 255 L 950 255" fill="none" stroke="#853BF2" stroke-width="2" stroke-dasharray="4 4"/>

    <rect x="240" y="280" width="370" height="60" fill="#2A2433"/>
    <text x="255" y="316" font-family="system-ui, sans-serif" font-size="13" fill="#FF8888">Infos vagues, peu de projection sur l'expérience</text>

    <rect x="240" y="350" width="370" height="60" fill="#2A2433"/>
    <text x="255" y="386" font-family="system-ui, sans-serif" font-size="13" fill="#BE99F2">Teaser immersif montrant l'ambiance réelle</text>

    <!-- Column 2: Organisation -->
    <rect x="620" y="0" width="370" height="60" fill="#2A2433"/>
    <text x="635" y="26" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">• Vérifie horaires et tarifs, compare billets</text>
    <text x="635" y="46" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">• Planifie le transport, invite des proches</text>

    <rect x="620" y="70" width="370" height="60" fill="#2A2433"/>
    <text x="635" y="106" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Site officiel, Billetterie, WhatsApp</text>

    <rect x="620" y="140" width="370" height="60" fill="#2A2433"/>
    <text x="635" y="176" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">"C'est cher ? On y va comment ? On sera combien ?"</text>

    <rect x="620" y="280" width="370" height="60" fill="#2A2433"/>
    <text x="635" y="316" font-family="system-ui, sans-serif" font-size="13" fill="#FF8888">Tarifs peu clairs, difficulté à motiver le groupe</text>

    <rect x="620" y="350" width="370" height="60" fill="#2A2433"/>
    <text x="635" y="386" font-family="system-ui, sans-serif" font-size="13" fill="#BE99F2">Page récapitulative unique &amp; estimation temps</text>
  </g>
</svg>`);

// 7. User Journey Phase 2 (Slide 21)
writeSvg('slide_user_journey_2.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#3F394B"/>
  <path d="M 350 40 L 850 40 L 880 75 L 850 110 L 350 110 Z" fill="#310273"/>
  <text x="600" y="82" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">PHASE 2. PENDANT LA VISITE</text>

  <g transform="translate(60, 140)">
    <!-- 3 Stages -->
    <rect x="0" y="0" width="340" height="460" rx="12" fill="#2A2433" stroke="#853BF2" stroke-width="2"/>
    <rect x="0" y="0" width="340" height="50" rx="12" fill="#5A3A8E"/>
    <text x="170" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">1. Arrivée &amp; Repérage</text>
    <text x="20" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Actions :</text>
    <text x="20" y="115" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Fait la queue, présente billet, cherche plan</text>
    <text x="20" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#FF8888" font-weight="700">Pain Points :</text>
    <text x="20" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Signalétique peu intuitive, trop d'entrées</text>
    <text x="20" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#D7F205" font-weight="700">Opportunité :</text>
    <text x="20" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Parcours recommandé en 3 niveaux</text>

    <rect x="370" y="0" width="340" height="460" rx="12" fill="#2A2433" stroke="#853BF2" stroke-width="2"/>
    <rect x="370" y="0" width="340" height="50" rx="12" fill="#5A3A8E"/>
    <text x="540" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">2. Déambulation</text>
    <text x="390" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Actions :</text>
    <text x="390" y="115" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Regarde les œuvres, lit cartels, photos</text>
    <text x="390" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#FF8888" font-weight="700">Pain Points :</text>
    <text x="390" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Textes trop longs, saturation cognitive</text>
    <text x="390" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#D7F205" font-weight="700">Opportunité :</text>
    <text x="390" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Version courte des cartels (3 lignes max)</text>

    <rect x="740" y="0" width="340" height="460" rx="12" fill="#2A2433" stroke="#853BF2" stroke-width="2"/>
    <rect x="740" y="0" width="340" height="50" rx="12" fill="#5A3A8E"/>
    <text x="910" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">3. Fatigue &amp; Sortie</text>
    <text x="760" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Actions :</text>
    <text x="760" y="115" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Cherche un banc, regarde téléphone, sortie</text>
    <text x="760" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#FF8888" font-weight="700">Pain Points :</text>
    <text x="760" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Perte d'engagement, oubli rapide des noms</text>
    <text x="760" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#D7F205" font-weight="700">Opportunité :</text>
    <text x="760" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Récapitulatif des œuvres vues &amp; Top 3</text>
  </g>
</svg>`);

// 7b. User Journey Phase 3: Après la visite (Slide 22)
writeSvg('slide_user_journey_3.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#3F394B"/>
  <path d="M 330 40 L 870 40 L 900 75 L 870 110 L 330 110 Z" fill="#310273"/>
  <text x="600" y="82" font-family="system-ui, sans-serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">PHASE 3. APRÈS LA VISITE &amp; SOUVENIR</text>

  <g transform="translate(60, 140)">
    <!-- 3 Stages -->
    <rect x="0" y="0" width="340" height="460" rx="12" fill="#2A2433" stroke="#853BF2" stroke-width="2"/>
    <rect x="0" y="0" width="340" height="50" rx="12" fill="#5A3A8E"/>
    <text x="170" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">1. Notification Déclic</text>
    <text x="20" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Actions :</text>
    <text x="20" y="115" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Reçoit un push 3 jours plus tard à 12h50</text>
    <text x="20" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#FF8888" font-weight="700">Pain Points :</text>
    <text x="20" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Peur du spam ou d'une notification intrusive</text>
    <text x="20" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#D7F205" font-weight="700">Opportunité :</text>
    <text x="20" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Timing contextuel : pause détente sans contrainte</text>

    <rect x="370" y="0" width="340" height="460" rx="12" fill="#2A2433" stroke="#853BF2" stroke-width="2"/>
    <rect x="370" y="0" width="340" height="50" rx="12" fill="#5A3A8E"/>
    <text x="540" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">2. Révélation &amp; Grattage</text>
    <text x="390" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Actions :</text>
    <text x="390" y="115" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Gratte la carte pour dévoiler l'œuvre vue</text>
    <text x="390" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#FF8888" font-weight="700">Pain Points :</text>
    <text x="390" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Oubli du titre et du nom de l'artiste</text>
    <text x="390" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#D7F205" font-weight="700">Opportunité :</text>
    <text x="390" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Cartel interactif + 1 anecdote mémorable</text>

    <rect x="740" y="0" width="340" height="460" rx="12" fill="#2A2433" stroke="#853BF2" stroke-width="2"/>
    <rect x="740" y="0" width="340" height="50" rx="12" fill="#5A3A8E"/>
    <text x="910" y="32" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#FFFFFF" text-anchor="middle">3. Défi &amp; Partage</text>
    <text x="760" y="90" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF" font-weight="700">Actions :</text>
    <text x="760" y="115" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Défie ses amis : Rat de musée ou IA/Vrai</text>
    <text x="760" y="160" font-family="system-ui, sans-serif" font-size="14" fill="#FF8888" font-weight="700">Pain Points :</text>
    <text x="760" y="185" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Les photos dorment dans la pellicule sans fin</text>
    <text x="760" y="240" font-family="system-ui, sans-serif" font-size="14" fill="#D7F205" font-weight="700">Opportunité :</text>
    <text x="760" y="265" font-family="system-ui, sans-serif" font-size="13" fill="#D2D2DC">Ancrage mémoriel à long terme par le jeu</text>
  </g>
</svg>`);

// 8. Inspirations Board (Slide 24)
writeSvg('slide_inspirations.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Inspirations</text>

  <!-- 1. FDJ Scratch Cards -->
  <g transform="translate(60, 130)">
    <rect width="320" height="230" rx="14" fill="#FFF5E5" stroke="#FFAA00" stroke-width="2"/>
    <rect x="20" y="20" width="280" height="40" rx="6" fill="#E60000"/>
    <text x="160" y="46" font-family="system-ui, sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">MILLIONNAIRE</text>
    <rect x="20" y="75" width="130" height="80" rx="6" fill="#0088CC"/>
    <text x="85" y="120" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#FFFFFF" text-anchor="middle">CASH</text>
    <rect x="170" y="75" width="130" height="80" rx="6" fill="#310273"/>
    <text x="235" y="120" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFFFFF" text-anchor="middle">BLACKJACK</text>
    <text x="160" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#333333" text-anchor="middle">Mécanique de Grattage Ludique</text>
  </g>

  <!-- 2. BeReal / Locket -->
  <g transform="translate(420, 130)">
    <rect width="250" height="480" rx="30" fill="#000000" stroke="#333333" stroke-width="4"/>
    <circle cx="545" cy="155" r="8" fill="#222222"/>
    <rect x="440" y="180" width="210" height="260" rx="20" fill="#1C1822"/>
    <circle cx="545" cy="300" r="60" fill="#BE99F2" opacity="0.4"/>
    <text x="545" y="470" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle">Reste proche de tes amis</text>
    <text x="545" y="495" font-family="system-ui, sans-serif" font-size="12" fill="#888888" text-anchor="middle">Partage instantané &amp; widget</text>
  </g>

  <!-- 3. DuoLingo Gamification -->
  <g transform="translate(710, 130)">
    <rect width="430" height="230" rx="14" fill="#F0FAF0" stroke="#58CC02" stroke-width="2"/>
    <circle cx="800" cy="220" r="45" fill="#58CC02"/>
    <text x="800" y="235" font-family="system-ui, sans-serif" font-size="32" text-anchor="middle">🦉</text>
    <text x="960" y="200" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#58CC02">3 🔥 SÉRIE</text>
    <text x="960" y="230" font-family="system-ui, sans-serif" font-size="14" fill="#666666">Streak quotidien d'apprentissage</text>
    <text x="925" y="320" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#333333" text-anchor="middle">Boucle d'engagement &amp; habitudes</text>
  </g>

  <!-- 4. Gartic Phone -->
  <g transform="translate(710, 380)">
    <rect width="430" height="230" rx="14" fill="#FBF8FF" stroke="#853BF2" stroke-width="2"/>
    <text x="925" y="450" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#853BF2" text-anchor="middle">GARTIC PHONE 🎨</text>
    <text x="925" y="485" font-family="system-ui, sans-serif" font-size="14" fill="#555555" text-anchor="middle">Dessin rapide, interprétation &amp; rire</text>
    <text x="925" y="550" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#310273" text-anchor="middle">Défis créatifs entre amis</text>
  </g>
</svg>`);

// 8b. Inspirations Scénographie Muséale
writeSvg('slide_inspirations_scenography.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#1C1822"/>
  <rect x="60" y="60" width="1080" height="555" rx="16" fill="#262030"/>
  <path d="M 120 450 Q 600 120 1080 450" stroke="#853BF2" stroke-width="4" fill="none" opacity="0.6"/>
  <circle cx="600" cy="280" r="100" fill="#BE99F2" opacity="0.2"/>
  <text x="600" y="380" font-family="serif" font-size="34" font-weight="700" fill="#FFFFFF" text-anchor="middle">Scénographie &amp; Écrin Muséal</text>
  <text x="600" y="420" font-family="system-ui, sans-serif" font-size="16" fill="#D7F205" text-anchor="middle">Sublimer l'œuvre sans la dénaturer</text>
  <text x="600" y="460" font-family="system-ui, sans-serif" font-size="14" fill="#AAAAAA" text-anchor="middle">Lumière tamisée • Recul contemplatif • Silence visuel</text>
</svg>`);

// 8c. Inspirations Gamification
writeSvg('slide_inspirations_gamification.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#310273"/>
  <rect x="60" y="60" width="1080" height="555" rx="16" fill="#3E078F"/>
  <circle cx="350" cy="330" r="80" fill="#D7F205"/>
  <text x="350" y="350" font-family="system-ui, sans-serif" font-size="60" text-anchor="middle">🔥</text>
  <circle cx="600" cy="330" r="80" fill="#853BF2"/>
  <text x="600" y="350" font-family="system-ui, sans-serif" font-size="60" text-anchor="middle">🪙</text>
  <circle cx="850" cy="330" r="80" fill="#BE99F2"/>
  <text x="850" y="350" font-family="system-ui, sans-serif" font-size="60" text-anchor="middle">🏆</text>
  <text x="600" y="160" font-family="system-ui, sans-serif" font-size="32" font-weight="800" fill="#FFFFFF" text-anchor="middle">Mécaniques d'Ancrage Ludique</text>
  <text x="600" y="500" font-family="system-ui, sans-serif" font-size="16" fill="#D7F205" text-anchor="middle">Streaks quotidiens • Cartes d'art à débloquer • Défis amicaux</text>
</svg>`);

// 8d. Inspirations Typographie
writeSvg('slide_inspirations_typography.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#F5F5F3"/>
  <rect x="60" y="60" width="1080" height="555" rx="16" fill="#FFFFFF" stroke="#002FA7" stroke-width="2"/>
  <text x="600" y="240" font-family="system-ui, sans-serif" font-size="52" font-weight="900" fill="#002FA7" text-anchor="middle" letter-spacing="-1">HELVETICA &amp; CARTELS</text>
  <text x="600" y="310" font-family="serif" font-size="28" font-style="italic" fill="#310273" text-anchor="middle">L'élégance de la retenue éditoriale</text>
  <line x1="400" y1="360" x2="800" y2="360" stroke="#002FA7" stroke-width="3"/>
  <text x="600" y="420" font-family="system-ui, sans-serif" font-size="16" font-weight="600" fill="#333333" text-anchor="middle">Typographie lisible à distance • Hiérarchie immédiate • Cartels synthétiques</text>
</svg>`);

// 9. Arborescence (Slide 26)
writeSvg('slide_arborescence.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FAFAFD"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Arborescence &amp; Navigation</text>

  <!-- Top Tab Bar -->
  <g transform="translate(360, 60)">
    <rect width="480" height="60" rx="30" fill="#FFFFFF" stroke="#310273" stroke-width="2" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))"/>
    <text x="60" y="38" font-family="system-ui, sans-serif" font-size="20">🏠</text>
    <text x="150" y="38" font-family="system-ui, sans-serif" font-size="20">🖼️</text>
    <text x="240" y="38" font-family="system-ui, sans-serif" font-size="20">🎮</text>
    <text x="330" y="38" font-family="system-ui, sans-serif" font-size="20">➕</text>
    <text x="420" y="38" font-family="system-ui, sans-serif" font-size="20">👤</text>
  </g>

  <!-- Level 1 Columns -->
  <!-- 1. Accueil -->
  <g transform="translate(80, 200)">
    <rect width="180" height="120" rx="12" fill="#FFFFFF" stroke="#310273" stroke-width="2"/>
    <text x="90" y="45" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273" text-anchor="middle">Accueil</text>
    <circle cx="90" cy="85" r="24" fill="#D7F205" stroke="#310273" stroke-width="2"/>
    <text x="90" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">GRATTER</text>

    <line x1="90" y1="120" x2="90" y2="180" stroke="#310273" stroke-width="2"/>
    <circle cx="90" cy="205" r="25" fill="#BE99F2"/>
    <text x="90" y="210" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">QCM</text>
    <text x="90" y="250" font-family="system-ui, sans-serif" font-size="12" fill="#666666" text-anchor="middle">4 questions (+1)</text>
  </g>

  <!-- 2. Ma Galerie -->
  <g transform="translate(290, 200)">
    <rect width="180" height="120" rx="12" fill="#FFFFFF" stroke="#310273" stroke-width="2"/>
    <text x="90" y="65" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273" text-anchor="middle">Ma Galerie</text>

    <line x1="90" y1="120" x2="90" y2="160" stroke="#310273" stroke-width="2"/>
    <path d="M 40 160 L 140 160" stroke="#310273" stroke-width="2"/>
    <line x1="40" y1="160" x2="40" y2="190" stroke="#310273" stroke-width="2"/>
    <line x1="140" y1="160" x2="140" y2="190" stroke="#310273" stroke-width="2"/>
    <circle cx="40" cy="215" r="25" fill="#F0F0F7" stroke="#310273" stroke-width="1.5"/>
    <text x="40" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#310273" text-anchor="middle">Retourner</text>
    <text x="40" y="228" font-family="system-ui, sans-serif" font-size="9" fill="#310273" text-anchor="middle">carte</text>

    <circle cx="140" cy="215" r="25" fill="#F0F0F7" stroke="#310273" stroke-width="1.5"/>
    <text x="140" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#310273" text-anchor="middle">Upload</text>
    <text x="140" y="228" font-family="system-ui, sans-serif" font-size="9" fill="#310273" text-anchor="middle">photo</text>
  </g>

  <!-- 3. Studio de Jeux -->
  <g transform="translate(500, 200)">
    <rect width="210" height="120" rx="12" fill="#FFFFFF" stroke="#310273" stroke-width="2"/>
    <text x="105" y="65" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273" text-anchor="middle">Studio de Jeux</text>

    <line x1="105" y1="120" x2="105" y2="160" stroke="#310273" stroke-width="2"/>
    <path d="M 25 160 L 185 160" stroke="#310273" stroke-width="2"/>
    
    <rect x="0" y="180" width="60" height="60" rx="6" fill="#853BF2"/>
    <text x="30" y="215" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">IA/VRAI</text>

    <rect x="75" y="180" width="60" height="60" rx="6" fill="#BE99F2"/>
    <text x="105" y="215" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#310273" text-anchor="middle">Gartic</text>

    <rect x="150" y="180" width="60" height="60" rx="6" fill="#D7F205"/>
    <text x="180" y="215" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#310273" text-anchor="middle">Rat Musée</text>
  </g>

  <!-- 4. Ajout d'amis -->
  <g transform="translate(740, 200)">
    <rect width="170" height="120" rx="12" fill="#FFFFFF" stroke="#310273" stroke-width="2"/>
    <text x="85" y="65" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273" text-anchor="middle">Ajout d'amis</text>

    <line x1="85" y1="120" x2="85" y2="180" stroke="#310273" stroke-width="2"/>
    <circle cx="85" cy="205" r="25" fill="#F0F0F7" stroke="#310273" stroke-width="1.5"/>
    <text x="85" y="210" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">Recherche</text>
  </g>

  <!-- 5. Compte -->
  <g transform="translate(940, 200)">
    <rect width="180" height="120" rx="12" fill="#FFFFFF" stroke="#310273" stroke-width="2"/>
    <text x="90" y="65" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#310273" text-anchor="middle">Compte</text>

    <line x1="90" y1="120" x2="90" y2="160" stroke="#310273" stroke-width="2"/>
    <path d="M 40 160 L 140 160" stroke="#310273" stroke-width="2"/>
    <circle cx="40" cy="205" r="25" fill="#F0F0F7" stroke="#310273" stroke-width="1.5"/>
    <text x="40" y="210" font-family="system-ui, sans-serif" font-size="9" font-weight="700" fill="#310273" text-anchor="middle">Déconnexion</text>

    <circle cx="140" cy="205" r="25" fill="#BE99F2"/>
    <text x="140" y="210" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#FFFFFF" text-anchor="middle">Settings</text>
  </g>
</svg>`);

// 10. Sketch 1: Wireframes & Ergonomie (Slide 28)
writeSvg('slide_sketch_1.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#310273"/>
  <text x="850" y="180" font-family="system-ui, sans-serif" font-size="70" font-weight="900" fill="#FFFFFF" letter-spacing="-2">SKETCH ET</text>
  <text x="850" y="260" font-family="system-ui, sans-serif" font-size="70" font-weight="900" fill="#FFFFFF" letter-spacing="-2">IDÉES</text>

  <!-- Wireframe 1: Accueil -->
  <g transform="translate(60, 60)">
    <rect width="160" height="280" rx="14" fill="#21004E" stroke="#BE99F2" stroke-width="2"/>
    <text x="80" y="35" font-family="cursive, sans-serif" font-size="12" fill="#FFFFFF" text-anchor="middle">Bonjour Arthur (3🔥)</text>
    <rect x="25" y="55" width="110" height="140" rx="8" fill="none" stroke="#D7F205" stroke-width="2" stroke-dasharray="4 4"/>
    <text x="80" y="130" font-family="cursive, sans-serif" font-size="16" fill="#D7F205" text-anchor="middle">Gratter ici !</text>
    <text x="80" y="-15" font-family="cursive, sans-serif" font-size="12" fill="#BE99F2" text-anchor="middle">Info principale au centre</text>
  </g>

  <!-- Wireframe 2: Question -->
  <g transform="translate(260, 60)">
    <rect width="160" height="280" rx="14" fill="#21004E" stroke="#BE99F2" stroke-width="2"/>
    <text x="80" y="35" font-family="cursive, sans-serif" font-size="12" fill="#FFFFFF" text-anchor="middle">Question ?</text>
    <rect x="25" y="65" width="110" height="30" rx="6" fill="#853BF2"/>
    <rect x="25" y="105" width="110" height="30" rx="6" fill="#853BF2"/>
    <rect x="25" y="145" width="110" height="30" rx="6" fill="#853BF2"/>
  </g>

  <!-- Wireframe 3: Ma Galerie -->
  <g transform="translate(460, 60)">
    <rect width="160" height="280" rx="14" fill="#21004E" stroke="#BE99F2" stroke-width="2"/>
    <text x="80" y="35" font-family="cursive, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle">Ma Galerie</text>
    <rect x="20" y="60" width="55" height="80" rx="6" fill="#BE99F2"/>
    <rect x="85" y="60" width="55" height="80" rx="6" fill="#BE99F2"/>
    <text x="80" y="-15" font-family="cursive, sans-serif" font-size="12" fill="#BE99F2" text-anchor="middle">Peinture déjà retenue</text>
  </g>

  <!-- Wireframe 4: Compte -->
  <g transform="translate(360, 360)">
    <rect width="160" height="260" rx="14" fill="#21004E" stroke="#BE99F2" stroke-width="2"/>
    <circle cx="80" cy="50" r="22" fill="#BE99F2"/>
    <rect x="30" y="90" width="100" height="25" rx="4" fill="#853BF2"/>
    <text x="80" y="106" font-family="cursive, sans-serif" font-size="11" fill="#FFFFFF" text-anchor="middle">Déconnexion</text>
    <text x="80" y="150" font-family="cursive, sans-serif" font-size="14" fill="#FFFFFF" text-anchor="middle">3 🔥  |  4 tableaux</text>
  </g>

  <!-- Ergonomic note bottom right -->
  <g transform="translate(680, 360)">
    <rect width="440" height="80" rx="12" fill="#21004E" stroke="#BE99F2" stroke-width="1.5"/>
    <text x="20" y="35" font-family="cursive, sans-serif" font-size="16" fill="#D7F205">Placement en bas de page pour</text>
    <text x="20" y="60" font-family="cursive, sans-serif" font-size="16" fill="#D7F205">une utilisation ergonomique avec un pouce 👍</text>
    <text x="20" y="110" font-family="cursive, sans-serif" font-size="15" fill="#FFFFFF">Évolution du logo : 🏠 🖼️ 🎮 ➕ 👤</text>
  </g>
</svg>`);

// 10b. Sketch 2: Gestuelle & Interactions
writeSvg('slide_sketch_2.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#21004E"/>
  <text x="830" y="180" font-family="system-ui, sans-serif" font-size="62" font-weight="900" fill="#FFFFFF" letter-spacing="-2">GESTUELLE &amp;</text>
  <text x="830" y="250" font-family="system-ui, sans-serif" font-size="62" font-weight="900" fill="#D7F205" letter-spacing="-2">INTERACTIONS</text>

  <!-- Sketch 1: Grattage interactif -->
  <g transform="translate(60, 70)">
    <rect width="165" height="270" rx="16" fill="#310273" stroke="#BE99F2" stroke-width="2"/>
    <text x="82" y="35" font-family="cursive, sans-serif" font-size="13" fill="#D7F205" text-anchor="middle">Friction du doigt</text>
    <rect x="25" y="55" width="115" height="130" rx="10" fill="#1C1822"/>
    <path d="M 40 100 Q 82 140 125 90" stroke="#D7F205" stroke-width="8" stroke-linecap="round" fill="none"/>
    <circle cx="82" cy="115" r="14" fill="#FFFFFF" opacity="0.8"/>
    <text x="82" y="210" font-family="cursive, sans-serif" font-size="11" fill="#FFFFFF" text-anchor="middle">Vibration haptique</text>
    <text x="82" y="230" font-family="cursive, sans-serif" font-size="10" fill="#BE99F2" text-anchor="middle">Révélation 60fps</text>
  </g>

  <!-- Sketch 2: Mode Rat de Musée -->
  <g transform="translate(260, 70)">
    <rect width="165" height="270" rx="16" fill="#310273" stroke="#BE99F2" stroke-width="2"/>
    <text x="82" y="35" font-family="cursive, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle">Rat de Musée 🐀</text>
    <rect x="25" y="55" width="115" height="130" rx="10" fill="#2A2433"/>
    <text x="82" y="110" font-family="system-ui, sans-serif" font-size="28" text-anchor="middle">🖼️</text>
    <text x="82" y="150" font-family="cursive, sans-serif" font-size="11" fill="#D7F205" text-anchor="middle">Trouve l'intrus !</text>
    <text x="82" y="210" font-family="cursive, sans-serif" font-size="11" fill="#FFFFFF" text-anchor="middle">Comparaison visuelle</text>
  </g>

  <!-- Sketch 3: Écran Dessin / Gartic -->
  <g transform="translate(460, 70)">
    <rect width="165" height="270" rx="16" fill="#310273" stroke="#BE99F2" stroke-width="2"/>
    <text x="82" y="35" font-family="cursive, sans-serif" font-size="13" fill="#FFFFFF" text-anchor="middle">Dessin Express ✏️</text>
    <rect x="25" y="55" width="115" height="130" rx="10" fill="#FAFAFD"/>
    <path d="M 50 110 Q 82 80 115 110 Q 82 150 50 110" stroke="#310273" stroke-width="3" fill="none"/>
    <rect x="35" y="200" width="95" height="25" rx="6" fill="#853BF2"/>
    <text x="82" y="217" font-family="cursive, sans-serif" font-size="10" fill="#FFFFFF" text-anchor="middle">Valider dessin</text>
  </g>

  <!-- Bottom Details & Thumb reach -->
  <g transform="translate(60, 380)">
    <rect width="1080" height="230" rx="16" fill="#18003A" stroke="#BE99F2" stroke-width="1.5"/>
    <text x="40" y="45" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#D7F205">Architecture des Gestes &amp; Accessibilité</text>
    <text x="40" y="85" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF">• Zone d'interaction principale concentrée dans la zone du pouce inférieur (one-thumb reach).</text>
    <text x="40" y="115" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF">• Effet de vernis dynamique masquant le tableau jusqu'à l'action volontaire de l'utilisateur.</text>
    <text x="40" y="145" font-family="system-ui, sans-serif" font-size="14" fill="#FFFFFF">• Transition instantanée entre la capture photo in situ et la génération de la fiche de collection.</text>
    <text x="40" y="175" font-family="system-ui, sans-serif" font-size="14" fill="#BE99F2">• Aucune barrière de compte obligatoire : utilisation fluide dès la première seconde dans le musée.</text>
  </g>
</svg>`);

// 11. Mockup 1: Écrans Principaux (Slide 30)
writeSvg('slide_mockup_1.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#EAEAEF"/>

  <!-- Phone 1: Accueil Bonjour Arthur -->
  <g transform="translate(50, 40)">
    <rect width="240" height="480" rx="36" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="4" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="55" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#999999">LUNDI 3 MARS</text>
    <text x="25" y="80" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#310273">Bonjour Arthur</text>
    <rect x="175" y="45" width="45" height="26" rx="13" fill="#310273"/>
    <text x="197" y="63" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">3 🔥</text>
    
    <!-- Picasso card -->
    <rect x="25" y="105" width="190" height="270" rx="16" fill="#F8F8FC" stroke="#853BF2" stroke-width="1.5"/>
    <circle cx="120" cy="200" r="50" fill="#D7F205"/>
    <path d="M 80 150 L 160 210 L 100 270 Z" fill="#853BF2"/>
    <text x="120" y="340" font-family="serif" font-size="16" font-weight="700" fill="#310273" text-anchor="middle">PABLO PICASSO</text>
  </g>

  <!-- Phone 2: Ma Galerie -->
  <g transform="translate(320, 40)">
    <rect width="240" height="480" rx="36" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="4" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="60" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#310273">Ma Galerie</text>
    <text x="25" y="80" font-family="system-ui, sans-serif" font-size="10" fill="#888888">TABLEAUX COLLECTIONNÉS</text>
    
    <rect x="25" y="105" width="90" height="150" rx="10" fill="#222233"/>
    <text x="70" y="240" font-family="system-ui, sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle">Vermeer</text>
    <rect x="125" y="105" width="90" height="150" rx="10" fill="#4B6584"/>
    <text x="170" y="240" font-family="system-ui, sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle">Van Gogh</text>
  </g>

  <!-- Phone 3: Ajout d'amis -->
  <g transform="translate(590, 40)">
    <rect width="240" height="480" rx="36" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="4" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="60" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#310273">Ajout d'amis</text>
    
    <rect x="25" y="100" width="190" height="45" rx="8" fill="#F4F4F8"/>
    <circle cx="45" cy="122" r="14" fill="#310273"/>
    <text x="70" y="127" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#310273">Bastien Meunier</text>

    <rect x="25" y="155" width="190" height="45" rx="8" fill="#F4F4F8"/>
    <circle cx="45" cy="177" r="14" fill="#853BF2"/>
    <text x="70" y="182" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#310273">Jocshka Mayer</text>

    <rect x="25" y="210" width="190" height="45" rx="8" fill="#F4F4F8"/>
    <circle cx="45" cy="232" r="14" fill="#BE99F2"/>
    <text x="70" y="237" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273">Dominique Sciamma</text>
  </g>

  <!-- Phone 4: Compte -->
  <g transform="translate(860, 40)">
    <rect width="240" height="480" rx="36" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="4" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <circle cx="120" cy="110" r="35" fill="#310273"/>
    <text x="120" y="175" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#310273" text-anchor="middle">Arthur CHAUVIN</text>

    <rect x="35" y="210" width="75" height="60" rx="10" fill="#310273"/>
    <text x="72" y="245" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle">3 🔥</text>

    <rect x="130" y="210" width="75" height="60" rx="10" fill="#853BF2"/>
    <text x="167" y="245" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#FFFFFF" text-anchor="middle">4 🖼️</text>
  </g>

  <!-- Color Palette Bottom -->
  <g transform="translate(480, 560)">
    <rect x="0" y="0" width="48" height="48" rx="8" fill="#310273"/>
    <text x="24" y="65" font-family="monospace" font-size="10" fill="#666666" text-anchor="middle">#310273</text>
    <rect x="60" y="0" width="48" height="48" rx="8" fill="#853BF2"/>
    <text x="84" y="65" font-family="monospace" font-size="10" fill="#666666" text-anchor="middle">#853BF2</text>
    <rect x="120" y="0" width="48" height="48" rx="8" fill="#9B5CF2"/>
    <text x="144" y="65" font-family="monospace" font-size="10" fill="#666666" text-anchor="middle">#9B5CF2</text>
    <rect x="180" y="0" width="48" height="48" rx="8" fill="#BE99F2"/>
    <text x="204" y="65" font-family="monospace" font-size="10" fill="#666666" text-anchor="middle">#BE99F2</text>
    <rect x="240" y="0" width="48" height="48" rx="8" fill="#D7F205"/>
    <text x="264" y="65" font-family="monospace" font-size="10" fill="#666666" text-anchor="middle">#D7F205</text>
  </g>
</svg>`);

// 12. Mockup 2: Studio de Jeux (Slide 31)
writeSvg('slide_mockup_2.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#EAEAEF"/>

  <!-- Phone 1: Studio de Jeux -->
  <g transform="translate(80, 80)">
    <rect width="230" height="460" rx="32" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="3" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="60" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#310273">Studio de Jeux</text>
    
    <rect x="20" y="85" width="190" height="70" rx="10" fill="#F8F8FC" stroke="#853BF2" stroke-width="1"/>
    <text x="35" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#310273">L'Œil de l'Expert</text>

    <rect x="20" y="165" width="190" height="70" rx="10" fill="#310273"/>
    <text x="35" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">Gartic Master</text>

    <rect x="20" y="245" width="190" height="70" rx="10" fill="#D7F205"/>
    <text x="35" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#310273">Rat de Musée</text>
  </g>

  <!-- Phone 2: Rat de Musée -->
  <g transform="translate(350, 80)">
    <rect width="230" height="460" rx="32" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="3" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#310273">Rat de Musée</text>
    <rect x="25" y="75" width="180" height="230" rx="10" fill="#5F27CD"/>
    <text x="115" y="180" font-family="system-ui, sans-serif" font-size="50" text-anchor="middle">🐀 🖼️</text>
    <text x="115" y="240" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#D7F205" text-anchor="middle">Retrouve le vrai tableau !</text>
  </g>

  <!-- Phone 3: La Jeune Fille à la perle (dessin) -->
  <g transform="translate(620, 80)">
    <rect width="230" height="460" rx="32" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="3" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="55" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#310273">La Jeune Fille à la perle</text>
    <rect x="25" y="75" width="180" height="240" rx="10" fill="#FAFAFD" stroke="#BE99F2" stroke-width="1.5"/>
    <path d="M 60 140 Q 115 90 170 140 Q 140 220 115 250" fill="none" stroke="#310273" stroke-width="3" stroke-linecap="round"/>
    <circle cx="130" cy="180" r="5" fill="#D7F205"/>
    <rect x="30" y="340" width="170" height="40" rx="8" fill="#853BF2"/>
    <text x="115" y="365" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">VALIDER MON DESSIN →</text>
  </g>

  <!-- Phone 4: IA ou Vrai ? -->
  <g transform="translate(890, 80)">
    <rect width="230" height="460" rx="32" fill="#FFFFFF" stroke="#D1D1DB" stroke-width="3" filter="drop-shadow(0 15px 30px rgba(49,2,115,0.15))"/>
    <text x="25" y="55" font-family="system-ui, sans-serif" font-size="16" font-weight="800" fill="#310273">IA ou Vrai ?</text>
    <rect x="25" y="75" width="180" height="220" rx="10" fill="#3B3B4F"/>
    <circle cx="115" cy="160" r="40" fill="#BE99F2" opacity="0.4"/>
    <text x="115" y="170" font-family="serif" font-size="28" fill="#FFFFFF" text-anchor="middle">🎨</text>
    <rect x="30" y="320" width="75" height="40" rx="8" fill="#310273"/>
    <text x="67" y="345" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">VRAI</text>
    <rect x="125" y="320" width="75" height="40" rx="8" fill="#BE99F2"/>
    <text x="162" y="345" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#310273" text-anchor="middle">IA</text>
  </g>
</svg>`);

// 13. Test Utilisateur (Slide 33)
writeSvg('slide_user_testing.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Test utilisateur</text>

  <!-- 6 User Testing In Situ Panels -->
  <g transform="translate(60, 120)">
    <g transform="translate(0, 0)">
      <rect width="160" height="150" rx="8" fill="#E6E6EE"/>
      <circle cx="80" cy="75" r="30" fill="#BE99F2" opacity="0.4"/>
      <text x="80" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">📱 Test In Situ 1</text>
    </g>
    <g transform="translate(180, 0)">
      <rect width="160" height="150" rx="8" fill="#D8D8E5"/>
      <text x="80" y="80" font-family="system-ui, sans-serif" font-size="30" text-anchor="middle">🐀 📱</text>
      <text x="80" y="110" font-family="system-ui, sans-serif" font-size="10" fill="#310273" text-anchor="middle">Peluche Rat &amp; App</text>
    </g>
    <g transform="translate(360, 0)">
      <rect width="160" height="150" rx="8" fill="#E6E6EE"/>
      <circle cx="80" cy="75" r="30" fill="#BE99F2" opacity="0.4"/>
      <text x="80" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">📱 Test In Situ 3</text>
    </g>
    <g transform="translate(0, 170)">
      <rect width="160" height="150" rx="8" fill="#E6E6EE"/>
      <circle cx="80" cy="75" r="30" fill="#BE99F2" opacity="0.4"/>
      <text x="80" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">📱 Test In Situ 4</text>
    </g>
    <g transform="translate(180, 170)">
      <rect width="160" height="150" rx="8" fill="#E6E6EE"/>
      <circle cx="80" cy="75" r="30" fill="#BE99F2" opacity="0.4"/>
      <text x="80" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">📱 Test In Situ 5</text>
    </g>
    <g transform="translate(360, 170)">
      <rect width="160" height="150" rx="8" fill="#E6E6EE"/>
      <circle cx="80" cy="75" r="30" fill="#BE99F2" opacity="0.4"/>
      <text x="80" y="80" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#310273" text-anchor="middle">📱 Test In Situ 6</text>
    </g>
  </g>

  <!-- Right: Questions posées & Axes d'amélioration -->
  <g transform="translate(620, 120)">
    <text x="0" y="30" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#111111">Questions posées :</text>
    <text x="0" y="75" font-family="system-ui, sans-serif" font-size="16" fill="#333333">• Comment feriez-vous pour scanner un tableau ?</text>
    <text x="0" y="115" font-family="system-ui, sans-serif" font-size="16" fill="#333333">• Combien de tableaux avez-vous collectionnés ?</text>
    <text x="0" y="155" font-family="system-ui, sans-serif" font-size="16" fill="#333333">• Lancer le jeu Rat de musée</text>
    <text x="0" y="195" font-family="system-ui, sans-serif" font-size="16" fill="#333333">• Comment ajouteriez-vous un ami ?</text>

    <text x="0" y="270" font-family="system-ui, sans-serif" font-size="22" font-weight="800" fill="#111111">Axes d'amélioration :</text>
    <rect x="0" y="295" width="500" height="110" rx="12" fill="#F8F8FC" stroke="#853BF2" stroke-width="1.5"/>
    <text x="25" y="335" font-family="system-ui, sans-serif" font-size="15" fill="#111111" font-weight="600">
      <tspan x="25" dy="0">⚠️ Gratte le tableau mais ne comprend pas</tspan>
      <tspan x="25" dy="24">qu'il y a une question liée.</tspan>
      <tspan x="25" dy="26">💡 Nécessité d'une explication claire sur l'utilité de l'app.</tspan>
    </text>
  </g>
</svg>`);

// 14. Scénario d'Usage Complet (Slide 36 & 37)
writeSvg('slide_scenario_1.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="100%" height="100%">
  <rect width="1200" height="675" fill="#FFFFFF"/>
  <circle cx="80" cy="70" r="24" fill="#310273"/>
  <text x="115" y="76" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#310273">Scénario d'usage illustré</text>

  <!-- Step 1: Découverte de l'œuvre -->
  <g transform="translate(60, 130)">
    <rect width="250" height="360" rx="12" fill="#F5F5FA" stroke="#D1D1DB" stroke-width="2"/>
    <rect x="65" y="40" width="120" height="160" rx="4" fill="#222233"/>
    <circle cx="125" cy="110" r="25" fill="#BE99F2"/>
    <text x="45" y="90" font-family="cursive, sans-serif" font-size="16" fill="#310273">« Wow ! »</text>
    <text x="125" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#111111" text-anchor="middle">Face au chef-d'œuvre</text>
    <text x="125" y="295" font-family="system-ui, sans-serif" font-size="13" fill="#666666" text-anchor="middle">Émerveillement in situ</text>
  </g>

  <!-- Step 2: Prise de photo -->
  <g transform="translate(340, 130)">
    <rect width="250" height="360" rx="12" fill="#F5F5FA" stroke="#D1D1DB" stroke-width="2"/>
    <rect x="60" y="40" width="130" height="170" rx="8" fill="#111111"/>
    <text x="125" y="130" font-family="system-ui, sans-serif" font-size="30" text-anchor="middle">📸</text>
    <text x="125" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#111111" text-anchor="middle">Prise de photo</text>
    <text x="125" y="295" font-family="system-ui, sans-serif" font-size="13" fill="#666666" text-anchor="middle">Ajout automatique à la galerie</text>
  </g>

  <!-- Step 3: Notification quelques jours plus tard -->
  <g transform="translate(620, 130)">
    <rect width="250" height="360" rx="12" fill="#F5F5FA" stroke="#D1D1DB" stroke-width="2"/>
    <text x="125" y="50" font-family="serif" font-style="italic" font-size="16" fill="#853BF2" text-anchor="middle">Quelques jours plus tard...</text>
    <rect x="40" y="80" width="170" height="150" rx="20" fill="#111111"/>
    <text x="125" y="130" font-family="system-ui, sans-serif" font-size="18" fill="#FFFFFF" text-anchor="middle">12h50</text>
    <rect x="55" y="150" width="140" height="40" rx="8" fill="#853BF2"/>
    <text x="125" y="175" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#FFFFFF" text-anchor="middle">TABLEAU DU JOUR !</text>
    <text x="125" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#111111" text-anchor="middle">Notification Déclic</text>
    <text x="125" y="295" font-family="system-ui, sans-serif" font-size="13" fill="#666666" text-anchor="middle">Rappel ludique au bon moment</text>
  </g>

  <!-- Step 4: Grattage & Ancrage -->
  <g transform="translate(900, 130)">
    <rect width="250" height="360" rx="12" fill="#F5F5FA" stroke="#D1D1DB" stroke-width="2"/>
    <rect x="40" y="40" width="170" height="200" rx="16" fill="#310273"/>
    <rect x="55" y="65" width="140" height="100" rx="8" fill="#D7F205"/>
    <text x="125" y="120" font-family="cursive, sans-serif" font-size="14" fill="#310273" text-anchor="middle">Carte grattée !</text>
    <text x="125" y="270" font-family="system-ui, sans-serif" font-size="15" font-weight="700" fill="#111111" text-anchor="middle">Ancrage Mémoriel</text>
    <text x="125" y="295" font-family="system-ui, sans-serif" font-size="13" fill="#666666" text-anchor="middle">Souvenir consolidé pour toujours</text>
  </g>
</svg>`);

// Vignettes individuelles pour les 4 étapes du scénario d'usage
writeSvg('slide_scenario_step1.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#1E1929"/>
  <circle cx="400" cy="220" r="140" fill="#310273" opacity="0.6"/>
  <rect x="300" y="120" width="200" height="260" rx="12" fill="#2E2442" stroke="#853BF2" stroke-width="3"/>
  <circle cx="400" cy="210" r="45" fill="#BE99F2" opacity="0.5"/>
  <path d="M 330 350 L 470 350" stroke="#D7F205" stroke-width="4" stroke-linecap="round"/>
  <text x="400" y="460" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" text-anchor="middle">01 — Arrivée &amp; Mode Discret</text>
  <text x="400" y="500" font-family="system-ui, sans-serif" font-size="16" fill="#D2D2DC" text-anchor="middle">Immersion dans la grande nef sans distraction</text>
</svg>`);

writeSvg('slide_scenario_step2.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#1E1929"/>
  <rect x="280" y="90" width="240" height="300" rx="20" fill="#111118" stroke="#853BF2" stroke-width="4"/>
  <circle cx="400" cy="200" r="50" fill="#282236"/>
  <text x="400" y="215" font-family="system-ui, sans-serif" font-size="44" text-anchor="middle">📸</text>
  <rect x="330" y="290" width="140" height="35" rx="8" fill="#D7F205"/>
  <text x="400" y="313" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#310273" text-anchor="middle">1 GESTE = SAUVÉ</text>
  <text x="400" y="460" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" text-anchor="middle">02 — Capture en 1 Geste</text>
  <text x="400" y="500" font-family="system-ui, sans-serif" font-size="16" fill="#D2D2DC" text-anchor="middle">L'œuvre et son cartel sont enregistrés instantanément</text>
</svg>`);

writeSvg('slide_scenario_step3.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#1E1929"/>
  <rect x="250" y="100" width="300" height="260" rx="28" fill="#2D2142" stroke="#BE99F2" stroke-width="3" filter="drop-shadow(0 20px 40px rgba(0,0,0,0.5))"/>
  <text x="400" y="160" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="#D7F205" text-anchor="middle">12:50 • 3 JOURS PLUS TARD</text>
  <rect x="290" y="190" width="220" height="65" rx="14" fill="#310273"/>
  <text x="400" y="228" font-family="system-ui, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" text-anchor="middle">TABLEAU DU JOUR !</text>
  <text x="400" y="246" font-family="system-ui, sans-serif" font-size="11" fill="#BE99F2" text-anchor="middle">Gratte pour révéler ton souvenir</text>
  <text x="400" y="460" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" text-anchor="middle">03 — Notification Déclic</text>
  <text x="400" y="500" font-family="system-ui, sans-serif" font-size="16" fill="#D2D2DC" text-anchor="middle">Rappel contextuel pendant une pause propice à la mémoire</text>
</svg>`);

writeSvg('slide_scenario_step4.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <rect width="800" height="600" fill="#1E1929"/>
  <rect x="260" y="80" width="280" height="320" rx="20" fill="#310273" stroke="#D7F205" stroke-width="4"/>
  <rect x="290" y="110" width="220" height="150" rx="12" fill="#D7F205"/>
  <path d="M 320 180 Q 400 130 480 200" stroke="#310273" stroke-width="6" fill="none"/>
  <text x="400" y="295" font-family="serif" font-size="18" font-weight="700" fill="#FFFFFF" text-anchor="middle">PABLO PICASSO</text>
  <text x="400" y="320" font-family="system-ui, sans-serif" font-size="12" fill="#D7F205" text-anchor="middle">Cartel mémorisé • Streak +1 🔥</text>
  <text x="400" y="460" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#FFFFFF" text-anchor="middle">04 — Ancrage Mémoriel</text>
  <text x="400" y="500" font-family="system-ui, sans-serif" font-size="16" fill="#D2D2DC" text-anchor="middle">Le souvenir s'inscrit durablement dans le carnet personnel</text>
</svg>`);

console.log('--- ALL UX SLIDES GENERATED SUCCESSFULLY ---');
