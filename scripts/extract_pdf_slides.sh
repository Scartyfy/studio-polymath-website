#!/bin/bash
set -e

# Find any PDF in public/ or project root matching filrouge or rendu
PDF_FILE=$(find public/ . -maxdepth 2 -iname "*fil*rouge*.pdf" -o -iname "*rendu*.pdf" 2>/dev/null | head -n 1 || true)

if [ -z "$PDF_FILE" ]; then
  # Check if there is any PDF other than cv.pdf
  PDF_FILE=$(find public/ . -maxdepth 2 -iname "*.pdf" ! -iname "cv.pdf" 2>/dev/null | head -n 1 || true)
fi

if [ -z "$PDF_FILE" ]; then
  echo "No PDF found yet. Place 'RENDU FIL ROUGE.pdf' in the public/ folder."
  exit 1
fi

echo "Found PDF: $PDF_FILE"
mkdir -p public/ux

echo "Extracting high-resolution slide images using Ghostscript..."
gs -dNOPAUSE -dBATCH -sDEVICE=jpeg -r200 -dJPEGQ=95 -sOutputFile=public/ux/slide_%02d.jpg "$PDF_FILE"

echo "Extraction complete! Listing generated slides in public/ux/:"
ls -lh public/ux/slide_*.jpg
