const fs = require('fs');
const path = 'assets/snake-card.svg';
let svg = fs.readFileSync(path, 'utf8');
svg = svg.replace(/\s*<style>[\s\S]*?<\/style>/, `    <style>\n      .snake-dot { fill-opacity: 0.2; }\n    </style>`);
svg = svg.replace(/<circle class="snake-dot s([0-9]+)"([^>]*)\/\>/g, (m, n, attrs) => {
  const delay = (parseInt(n, 10) * 0.1).toFixed(1);
  return `<circle class="snake-dot s${n}"${attrs}><animate attributeName="fill-opacity" values="0.2;1;0.2" dur="1.8s" begin="${delay}s" repeatCount="indefinite" /></circle>`;
});
svg = svg.replace(/<circle cx="535" cy="10" r="6" fill="#00e676"\/>/, '<circle cx="535" cy="10" r="6" fill="#00e676"><animate attributeName="fill-opacity" values="0.5;1;0.5" dur="1.8s" begin="0.1s" repeatCount="indefinite" /></circle>');
fs.writeFileSync(path, svg, 'utf8');
console.log('✅ Patched assets/snake-card.svg with SMIL animation.');
