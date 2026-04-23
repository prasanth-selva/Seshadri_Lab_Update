const fs = require('fs');
const files = [
  'src/components/TeamSection.tsx',
  'src/components/HeroSection.tsx',
  'src/components/PublicationsSection.tsx',
  'src/app/research/page.tsx',
  'src/app/values/page.tsx',
  'src/app/get-involved/page.tsx',
  'src/app/page.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let code = fs.readFileSync(file, 'utf8');
  
  // Text colors
  code = code.replace(/#f5f0e8/g, 'var(--text-primary)');
  code = code.replace(/#a69e8e/g, 'var(--text-secondary)');
  code = code.replace(/#7a7268/g, 'var(--text-secondary)');
  code = code.replace(/#6b6356/g, 'var(--text-muted)');
  code = code.replace(/#666/g, 'var(--text-muted)');

  // Background colors
  code = code.replace(/#080808/g, 'var(--bg-primary)');
  code = code.replace(/#0b0b0b/g, 'var(--bg-secondary)');
  code = code.replace(/#0e0e0e/g, 'var(--bg-secondary)');
  code = code.replace(/#111111/g, 'var(--bg-card)');
  code = code.replace(/#111/g, 'var(--bg-card)');
  code = code.replace(/#1a1a1a/g, 'var(--bg-card-hover)');

  // Border colors
  code = code.replace(/rgba\(255,255,255,0.06\)/g, 'var(--border-card)');
  code = code.replace(/rgba\(255, 255, 255, 0.06\)/g, 'var(--border-card)');
  code = code.replace(/rgba\(255,255,255,0.07\)/g, 'var(--border-card)');
  code = code.replace(/#222222/g, 'var(--border-strong)');
  code = code.replace(/#222/g, 'var(--border-strong)');

  // Accents
  code = code.replace(/#c9a84c/g, 'var(--accent-gold)');

  fs.writeFileSync(file, code);
  console.log(`Refactored ${file}`);
});
