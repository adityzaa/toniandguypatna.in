import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("/Users/adityaraj/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const out = new URL("../public/images/", import.meta.url);
await mkdir(out, { recursive: true });

function svg(width, height, body) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="gold" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#f1d77a"/><stop offset="1" stop-color="#9f7617"/></linearGradient>
    <linearGradient id="dark" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#070707"/><stop offset="0.55" stop-color="#1c1c1c"/><stop offset="1" stop-color="#050505"/></linearGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="18"/></filter>
  </defs>
  ${body}
</svg>`);
}

async function render(name, width, height, body) {
  const file = new URL(name, out);
  await sharp(svg(width, height, body)).png({ quality: 95 }).toFile(fileURLToPath(file));
  return file.pathname;
}

await render("hero-salon.png", 1800, 1200, `
  <rect width="1800" height="1200" fill="url(#dark)"/>
  <rect x="1160" width="640" height="1200" fill="#121212"/>
  <path d="M0 900 C420 760 690 850 1090 670 C1370 545 1560 565 1800 420 L1800 1200 L0 1200 Z" fill="#050505"/>
  <path d="M1040 165 L1780 70 L1780 185 L1040 280 Z" fill="rgba(212,175,55,.35)"/>
  <path d="M1020 240 L1780 160" stroke="#d4af37" stroke-width="6" opacity=".7"/>
  <circle cx="1240" cy="330" r="120" fill="#d4af37" opacity=".12" filter="url(#blur)"/>
  <rect x="940" y="430" width="650" height="54" rx="10" fill="#d4af37" opacity=".22"/>
  <rect x="990" y="520" width="550" height="40" rx="8" fill="#ffffff" opacity=".10"/>
  <rect x="1080" y="600" width="360" height="360" rx="180" fill="#0a0a0a" stroke="#d4af37" stroke-width="7"/>
  <path d="M1140 770 C1180 610 1340 605 1380 770 C1350 850 1170 850 1140 770 Z" fill="#cfcfcf" opacity=".32"/>
  <path d="M1230 575 C1160 625 1130 760 1185 900 C1260 855 1320 700 1290 590 Z" fill="#d4af37" opacity=".45"/>
  <rect x="120" y="155" width="520" height="680" rx="18" fill="#ffffff" opacity=".06"/>
  <rect x="165" y="205" width="430" height="55" rx="10" fill="#d4af37" opacity=".18"/>
  <rect x="160" y="305" width="430" height="390" rx="18" fill="#000000" opacity=".28"/>
  <path d="M215 660 C295 500 455 515 535 665" stroke="#d4af37" stroke-width="12" fill="none" opacity=".6"/>
`);

await render("marble-gold.png", 1600, 700, `
  <rect width="1600" height="700" fill="#080808"/>
  <path d="M-40 120 C300 35 440 260 740 160 C1010 70 1230 60 1660 110" stroke="#cfcfcf" stroke-width="5" opacity=".18" fill="none"/>
  <path d="M-80 430 C340 220 520 630 840 405 C1080 235 1320 270 1680 210" stroke="#d4af37" stroke-width="8" opacity=".55" fill="none"/>
  <path d="M40 650 C340 520 610 560 870 480 C1110 405 1300 470 1590 350" stroke="#ffffff" stroke-width="3" opacity=".16" fill="none"/>
  <circle cx="900" cy="310" r="210" fill="#d4af37" opacity=".12" filter="url(#blur)"/>
`);

function portrait(index, colors) {
  return render(`expert-${index}.png`, 900, 1125, `
    <rect width="900" height="1125" fill="${colors.bg}"/>
    <rect x="0" y="0" width="900" height="1125" fill="url(#dark)" opacity=".55"/>
    <circle cx="450" cy="330" r="150" fill="${colors.skin}"/>
    <path d="M285 330 C295 145 620 145 615 345 C570 260 340 255 285 330 Z" fill="${colors.hair}"/>
    <path d="M292 463 C380 550 520 550 608 463 L682 970 L218 970 Z" fill="${colors.cloth}"/>
    <path d="M250 970 L650 970 L710 1125 L190 1125 Z" fill="#050505"/>
    <path d="M285 735 C395 660 520 655 630 735" stroke="#d4af37" stroke-width="8" opacity=".75" fill="none"/>
    <circle cx="365" cy="338" r="10" fill="#111"/>
    <circle cx="535" cy="338" r="10" fill="#111"/>
    <path d="M385 415 C425 445 485 445 525 415" stroke="#4b2119" stroke-width="8" fill="none" stroke-linecap="round"/>
  `);
}
await portrait(1, { bg: "#1c1c1c", skin: "#b88362", hair: "#17100c", cloth: "#202020" });
await portrait(2, { bg: "#171717", skin: "#c89270", hair: "#2a150f", cloth: "#3b2f25" });
await portrait(3, { bg: "#222222", skin: "#ad7157", hair: "#0c0807", cloth: "#2b1b1f" });

async function transformation(name, after, palette) {
  await render(`${after ? "after" : "before"}-${name}.png`, 900, 1125, `
    <rect width="900" height="1125" fill="${palette.bg}"/>
    <rect width="900" height="1125" fill="url(#dark)" opacity="${after ? ".22" : ".48"}"/>
    <circle cx="450" cy="315" r="135" fill="${palette.skin}"/>
    <path d="M270 340 C255 110 650 95 632 355 C590 240 340 235 270 340 Z" fill="${after ? palette.hairAfter : palette.hairBefore}"/>
    <path d="M300 420 C385 515 515 515 600 420 L680 1005 L220 1005 Z" fill="${after ? "#272727" : "#191919"}"/>
    <path d="M235 700 C330 590 570 590 665 700" stroke="${after ? "#d4af37" : "#707070"}" stroke-width="${after ? "12" : "7"}" opacity=".8" fill="none"/>
    <circle cx="360" cy="325" r="9" fill="#111"/>
    <circle cx="540" cy="325" r="9" fill="#111"/>
  `);
}

await transformation("1", false, { bg: "#141414", skin: "#bd8263", hairBefore: "#27150f", hairAfter: "#6b3d25" });
await transformation("1", true, { bg: "#151515", skin: "#bd8263", hairBefore: "#27150f", hairAfter: "#9a6035" });
await transformation("2", false, { bg: "#121212", skin: "#c69070", hairBefore: "#22140f", hairAfter: "#b5854a" });
await transformation("2", true, { bg: "#191919", skin: "#c69070", hairBefore: "#22140f", hairAfter: "#c59a5b" });
await transformation("3", false, { bg: "#111111", skin: "#b97960", hairBefore: "#140b09", hairAfter: "#2b1511" });
await transformation("3", true, { bg: "#181818", skin: "#b97960", hairBefore: "#140b09", hairAfter: "#3b1e19" });

for (let i = 1; i <= 4; i += 1) {
  await render(`insta-${i}.png`, 900, 900, `
    <rect width="900" height="900" fill="#0a0a0a"/>
    <circle cx="${240 + i * 70}" cy="${260 + i * 35}" r="${170 - i * 12}" fill="#d4af37" opacity=".18" filter="url(#blur)"/>
    <rect x="${90 + i * 15}" y="${95 + i * 10}" width="${580 - i * 22}" height="${610 - i * 28}" rx="18" fill="#ffffff" opacity=".07"/>
    <path d="M220 620 C330 420 565 410 690 620" stroke="#d4af37" stroke-width="${10 + i}" opacity=".72" fill="none"/>
    <path d="M260 250 C320 160 560 155 620 260 C515 225 370 225 260 250 Z" fill="#1c100c"/>
    <text x="90" y="820" fill="#d4af37" font-family="Georgia" font-size="62">TONI&amp;GUY</text>
  `);
}

await render("service-detail.png", 1600, 1000, `
  <rect width="1600" height="1000" fill="#0a0a0a"/>
  <rect x="880" y="0" width="720" height="1000" fill="#1c1c1c"/>
  <circle cx="1170" cy="420" r="250" fill="#d4af37" opacity=".14" filter="url(#blur)"/>
  <path d="M1000 665 C1110 430 1380 425 1490 665" stroke="#d4af37" stroke-width="18" opacity=".72" fill="none"/>
  <rect x="100" y="140" width="600" height="660" rx="22" fill="#ffffff" opacity=".05"/>
  <path d="M170 250 L640 190" stroke="#d4af37" stroke-width="8" opacity=".5"/>
  <path d="M170 335 L570 300" stroke="#ffffff" stroke-width="4" opacity=".14"/>
`);

await render("og-salon.png", 1200, 630, `
  <rect width="1200" height="630" fill="#0a0a0a"/>
  <path d="M680 0 L1200 0 L1200 630 L500 630 C760 500 790 200 680 0 Z" fill="#1c1c1c"/>
  <circle cx="850" cy="270" r="180" fill="#d4af37" opacity=".20" filter="url(#blur)"/>
  <text x="90" y="230" fill="#ffffff" font-family="Georgia" font-size="96">TONI&amp;GUY</text>
  <text x="95" y="330" fill="#d4af37" font-family="Georgia" font-size="92">SAGUNA</text>
  <text x="100" y="415" fill="#cfcfcf" font-family="Arial" font-size="34">Hair • Beauty • Bridal • Color</text>
  <path d="M96 470 L550 470" stroke="#d4af37" stroke-width="5"/>
`);

await writeFile(new URL(".gitkeep", out), "");
