const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;
  const logoPath = 'c:/Users/Administrator/Documents/GitHub/Portfolio/public/logo.png';
  const outPath = 'c:/Users/Administrator/Documents/GitHub/Portfolio/public/og-image.jpg';

  // Extract the logo cleanly and fit it with rounded corners
  const roundedMask = Buffer.from(`
    <svg width="450" height="450">
      <rect width="450" height="450" rx="24" fill="#fff" />
    </svg>
  `);

  const logoResized = await sharp(logoPath)
    .resize(450, 450)
    .composite([{ input: roundedMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="20%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4f772d" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#0a130e" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glowRight" cx="85%" cy="55%" r="60%">
          <stop offset="0%" stop-color="#31572c" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#0a130e" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f772d" stop-opacity="0.6" />
          <stop offset="50%" stop-color="#90a955" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#132a13" stop-opacity="0.8" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="100%" height="100%" fill="#080e0a" />
      <rect width="100%" height="100%" fill="url(#glow)" />
      <rect width="100%" height="100%" fill="url(#glowRight)" />

      <!-- Subtle Grid Pattern -->
      <g stroke="rgba(255,255,255,0.03)" stroke-width="1">
        <line x1="0" y1="105" x2="1200" y2="105" />
        <line x1="0" y1="210" x2="1200" y2="210" />
        <line x1="0" y1="315" x2="1200" y2="315" />
        <line x1="0" y1="420" x2="1200" y2="420" />
        <line x1="0" y1="525" x2="1200" y2="525" />
        <line x1="240" y1="0" x2="240" y2="630" />
        <line x1="480" y1="0" x2="480" y2="630" />
        <line x1="720" y1="0" x2="720" y2="630" />
        <line x1="960" y1="0" x2="960" y2="630" />
      </g>

      <!-- Frame Border -->
      <rect x="25" y="25" width="1150" height="580" rx="24" fill="none" stroke="url(#cardBorder)" stroke-width="2" />

      <!-- Left Column: Logo Card Container -->
      <g>
        <rect x="55" y="85" width="450" height="450" rx="24" fill="#000000" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
      </g>

      <!-- Right Column Content -->
      <g font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">
        <!-- Status Pill -->
        <rect x="540" y="95" width="270" height="38" rx="19" fill="rgba(79, 119, 45, 0.28)" stroke="rgba(144, 169, 85, 0.45)" stroke-width="1.2" />
        <circle cx="562" cy="114" r="5" fill="#90a955" />
        <text x="580" y="119" font-size="13" font-weight="800" fill="#e8f5e9" letter-spacing="1">FULL-STACK DEVELOPER</text>

        <!-- Main Title -->
        <text x="540" y="188" font-size="46" font-weight="900" fill="#ffffff" letter-spacing="-0.5">Sergio Manjón</text>
        <text x="540" y="232" font-size="23" font-weight="600" fill="#90a955" letter-spacing="0.3">Software Engineer · Soluciones Web Escalables</text>

        <!-- Value Prop -->
        <text x="540" y="292" font-size="19" font-weight="400" fill="#d0d0d0">Arquitecturas de alto rendimiento, backends sólidos</text>
        <text x="540" y="322" font-size="19" font-weight="400" fill="#d0d0d0">e integración de IA en producción.</text>

        <!-- Tech Stack Badges -->
        <g transform="translate(540, 375)">
          <rect x="0" y="0" width="95" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="47" y="22" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">Next.js</text>

          <rect x="107" y="0" width="85" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="149" y="22" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">React</text>

          <rect x="204" y="0" width="112" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="260" y="22" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">TypeScript</text>

          <rect x="328" y="0" width="95" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="375" y="22" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">Node.js</text>

          <rect x="435" y="0" width="115" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="492" y="22" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">PostgreSQL</text>

          <!-- Second Row -->
          <rect x="0" y="46" width="145" height="34" rx="17" fill="rgba(144,169,85,0.22)" stroke="rgba(144,169,85,0.45)" />
          <text x="72" y="68" font-size="13" font-weight="700" fill="#d8f3dc" text-anchor="middle">Gemini IA &amp; Agentes</text>

          <rect x="157" y="46" width="85" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="199" y="68" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">Stripe</text>

          <rect x="254" y="46" width="95" height="34" rx="17" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
          <text x="301" y="68" font-size="13" font-weight="600" fill="#ffffff" text-anchor="middle">Three.js</text>
        </g>

        <!-- Footer domain url -->
        <text x="540" y="525" font-size="20" font-weight="bold" fill="#90a955">https://smg-dev.es</text>
      </g>
    </svg>
  `);

  const bgWithSvg = await sharp(svgOverlay).png().toBuffer();

  await sharp(bgWithSvg)
    .composite([
      {
        input: logoResized,
        top: 85,
        left: 55
      }
    ])
    .jpeg({ quality: 92 })
    .toFile(outPath);

  console.log('Successfully created ' + outPath);
}

createOgImage().catch(console.error);
