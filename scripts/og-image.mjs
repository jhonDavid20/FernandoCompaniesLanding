// Generates public/og.png (1200x630). Run: node scripts/og-image.mjs
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#111111"/>
  <g transform="translate(80 76) scale(1.8)">
    <circle cx="20" cy="20" r="17.5" fill="none" stroke="#f7931e" stroke-width="3"/>
    <path d="M14 13.5 27.5 10.5v4.6L14 18.1z" fill="#f7931e"/>
    <path d="M14 20.4 25.5 17.8v4.5L18.6 23.9c-.6 2.6-2 5.4-4.6 7.6z" fill="#f7931e"/>
  </g>
  <text x="168" y="124" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="30" fill="#f6f5f1" letter-spacing="2">COMPANIES BY FERNANDO</text>
  <text x="80" y="300" font-family="Georgia, serif" font-weight="400" font-size="72" fill="#f6f5f1">Framing · Drywall</text>
  <text x="80" y="390" font-family="Georgia, serif" font-weight="400" font-size="72" fill="#f6f5f1">Acoustic Ceilings</text>
  <rect x="80" y="450" width="80" height="6" fill="#f7931e"/>
  <text x="80" y="520" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#f7931e" letter-spacing="3">COMMERCIAL INTERIORS · NORTH DAKOTA &amp; TEXAS</text>
</svg>`;
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile('public/og.png');
console.log('public/og.png written');
