// Database Squadre 2026/27: Giovanili, Serie A2, LBA Serie A, Campionati Europei, EuroCup, EuroLeague e 30 Franchigie NBA
const TEAMS_DB = [
  // ================= SETTORE GIOVANILE (U19 ECCELLENZA) =================
  { id: "mil_u19", name: "Olimpia Milano U19", league: "Under 19 Eccellenza", tier: 0, colors: ["#E30613", "#FFFFFF", "#111111"], pattern: "solid", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/8/87/Pallacanestro_Olimpia_Milano_logo.svg/300px-Pallacanestro_Olimpia_Milano_logo.svg.png" },
  { id: "vir_u19", name: "Virtus Bologna U19", league: "Under 19 Eccellenza", tier: 0, colors: ["#111111", "#FFFFFF", "#D4AF37"], pattern: "vneck", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/8/80/Virtus_Pallacanestro_Bologna_logo.svg/300px-Virtus_Pallacanestro_Bologna_logo.svg.png" },
  { id: "rey_u19", name: "Reyer Venezia U19", league: "Under 19 Eccellenza", tier: 0, colors: ["#8B1E3F", "#D4AF37", "#FFFFFF"], pattern: "sash", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/3/3e/Reyer_Venezia_Mestre_logo.svg/300px-Reyer_Venezia_Mestre_logo.svg.png" },
  { id: "reg_u19", name: "Pall. Reggiana U19", league: "Under 19 Eccellenza", tier: 0, colors: ["#C8102E", "#FFFFFF", "#111111"], pattern: "stripes", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/e/e5/Pallacanestro_Reggiana_logo.svg/300px-Pallacanestro_Reggiana_logo.svg.png" },
  { id: "tre_u19", name: "Aquila Trento U19", league: "Under 19 Eccellenza", tier: 0, colors: ["#111111", "#FFFFFF", "#00843D"], pattern: "side", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/6/64/Aquila_Basket_Trento_logo.svg/300px-Aquila_Basket_Trento_logo.svg.png" },
  { id: "ste_u19", name: "Stella Azzurra Roma U19", league: "Under 19 Eccellenza", tier: 0, colors: ["#0033A0", "#FFFFFF", "#E30613"], pattern: "hoops", logo: "" },

  // ================= SERIE A2 ITALIANA =================
  { id: "for_a2", name: "Fortitudo Bologna", league: "Serie A2 Italia", tier: 1, colors: ["#0033A0", "#FFFFFF", "#001A57"], pattern: "vneck", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/b/b5/Fortitudo_Pallacanestro_Bologna_103_logo.svg/300px-Fortitudo_Pallacanestro_Bologna_103_logo.svg.png" },
  { id: "can_a2", name: "Pallacanestro Cantù", league: "Serie A2 Italia", tier: 1, colors: ["#0055A5", "#FFFFFF", "#002B5C"], pattern: "side", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/0/07/Pallacanestro_Cant%C3%B9_logo.svg/300px-Pallacanestro_Cant%C3%B9_logo.svg.png" },
  { id: "udi_a2", name: "APU Old Wild West Udine", league: "Serie A2 Italia", tier: 1, colors: ["#111111", "#FFFFFF", "#F97316"], pattern: "stripes", logo: "" },
  { id: "pes_a2", name: "VL Pesaro", league: "Serie A2 Italia", tier: 1, colors: ["#D50032", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "bri_a2", name: "New Basket Brindisi", league: "Serie A2 Italia", tier: 1, colors: ["#002B5C", "#FFFFFF", "#F58220"], pattern: "side", logo: "" },
  { id: "forli_a2", name: "Unieuro Forlì", league: "Serie A2 Italia", tier: 1, colors: ["#C8102E", "#FFFFFF", "#002B5C"], pattern: "solid", logo: "" },
  { id: "ver_a2", name: "Scaligera Verona", league: "Serie A2 Italia", tier: 1, colors: ["#0033A0", "#FFD100", "#FFFFFF"], pattern: "sash", logo: "" },
  { id: "rim_a2", name: "RBR Rimini", league: "Serie A2 Italia", tier: 1, colors: ["#C8102E", "#FFFFFF", "#111111"], pattern: "vneck", logo: "" },
  { id: "tor_a2", name: "Reale Mutua Torino", league: "Serie A2 Italia", tier: 1, colors: ["#0033A0", "#FFD100", "#FFFFFF"], pattern: "solid", logo: "" },
  { id: "rie_a2", name: "Real Sebastiani Rieti", league: "Serie A2 Italia", tier: 1, colors: ["#7A1C24", "#87CEEB", "#FFFFFF"], pattern: "hoops", logo: "" },

  // ================= LBA SERIE A 2026/27 =================
  { id: "mil_lba", name: "EA7 Emporio Armani Milano", league: "LBA Serie A & EuroLeague", tier: 4, colors: ["#E30613", "#FFFFFF", "#111111"], pattern: "solid", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/8/87/Pallacanestro_Olimpia_Milano_logo.svg/300px-Pallacanestro_Olimpia_Milano_logo.svg.png" },
  { id: "vir_lba", name: "Virtus Segafredo Bologna", league: "LBA Serie A & EuroLeague", tier: 4, colors: ["#111111", "#FFFFFF", "#D4AF37"], pattern: "vneck", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/8/80/Virtus_Pallacanestro_Bologna_logo.svg/300px-Virtus_Pallacanestro_Bologna_logo.svg.png" },
  { id: "bre_lba", name: "Germani Brescia", league: "LBA Serie A", tier: 2, colors: ["#0055A5", "#FFFFFF", "#002B5C"], pattern: "side", logo: "" },
  { id: "rey_lba", name: "Umana Reyer Venezia", league: "LBA Serie A & EuroCup", tier: 3, colors: ["#8B1E3F", "#D4AF37", "#FFFFFF"], pattern: "sash", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/3/3e/Reyer_Venezia_Mestre_logo.svg/300px-Reyer_Venezia_Mestre_logo.svg.png" },
  { id: "tre_lba", name: "Dolomiti Energia Trentino", league: "LBA Serie A & EuroCup", tier: 3, colors: ["#111111", "#FFFFFF", "#00843D"], pattern: "side", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/6/64/Aquila_Basket_Trento_logo.svg/300px-Aquila_Basket_Trento_logo.svg.png" },
  { id: "reg_lba", name: "UNAHOTELS Reggio Emilia", league: "LBA Serie A", tier: 2, colors: ["#C8102E", "#FFFFFF", "#111111"], pattern: "stripes", logo: "https://upload.wikimedia.org/wikipedia/it/thumb/e/e5/Pallacanestro_Reggiana_logo.svg/300px-Pallacanestro_Reggiana_logo.svg.png" },
  { id: "der_lba", name: "Bertram Derthona Tortona", league: "LBA Serie A", tier: 2, colors: ["#111111", "#FFFFFF", "#E30613"], pattern: "side", logo: "" },
  { id: "sas_lba", name: "Banco di Sardegna Sassari", league: "LBA Serie A", tier: 2, colors: ["#0055A5", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "nap_lba", name: "Napoli Basket", league: "LBA Serie A", tier: 2, colors: ["#0072CE", "#FFFFFF", "#002B5C"], pattern: "vneck", logo: "" },
  { id: "tri_lba", name: "Pallacanestro Trieste", league: "LBA Serie A", tier: 2, colors: ["#C8102E", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "tra_lba", name: "Trapani Shark", league: "LBA Serie A", tier: 2, colors: ["#7A1C24", "#FFFFFF", "#111111"], pattern: "sash", logo: "" },
  { id: "var_lba", name: "Openjobmetis Varese", league: "LBA Serie A", tier: 2, colors: ["#E30613", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "cre_lba", name: "Vanoli Basket Cremona", league: "LBA Serie A", tier: 2, colors: ["#0033A0", "#FFFFFF", "#38BDF8"], pattern: "side", logo: "" },
  { id: "trev_lba", name: "Nutribullet Treviso", league: "LBA Serie A", tier: 2, colors: ["#0072CE", "#FFFFFF", "#111111"], pattern: "stripes", logo: "" },
  { id: "pis_lba", name: "Estra Pistoia", league: "LBA Serie A", tier: 2, colors: ["#C8102E", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "sca_lba", name: "Givova Scafati", league: "LBA Serie A", tier: 2, colors: ["#FFD100", "#0033A0", "#FFFFFF"], pattern: "side", logo: "" },

  // ================= PRINCIPALI CAMPIONATI EUROPEI & EUROCUP =================
  { id: "val_eu", name: "Valencia Basket", league: "Liga ACB & EuroCup", tier: 3, colors: ["#F58220", "#111111", "#FFFFFF"], pattern: "solid", logo: "" },
  { id: "jov_eu", name: "Joventut Badalona", league: "Liga ACB & EuroCup", tier: 3, colors: ["#00843D", "#111111", "#FFFFFF"], pattern: "sash", logo: "" },
  { id: "gca_eu", name: "Dreamland Gran Canaria", league: "Liga ACB & EuroCup", tier: 3, colors: ["#FFD100", "#0055A5", "#FFFFFF"], pattern: "side", logo: "" },
  { id: "uni_eu", name: "Unicaja Málaga", league: "Liga ACB Spagna", tier: 3, colors: ["#00843D", "#5E2750", "#FFFFFF"], pattern: "side", logo: "" },
  { id: "ten_eu", name: "La Laguna Tenerife", league: "Liga ACB Spagna", tier: 2, colors: ["#FFD100", "#111111", "#FFFFFF"], pattern: "solid", logo: "" },
  { id: "bes_eu", name: "Beşiktaş Fibabanka", league: "BSL Turchia & EuroCup", tier: 3, colors: ["#111111", "#FFFFFF", "#E30613"], pattern: "stripes", logo: "" },
  { id: "bah_eu", name: "Bahçeşehir Koleji", league: "BSL Turchia & EuroCup", tier: 3, colors: ["#002B5C", "#E30613", "#FFFFFF"], pattern: "solid", logo: "" },
  { id: "tur_eu", name: "Türk Telekom Ankara", league: "BSL Turchia & EuroCup", tier: 3, colors: ["#0072CE", "#FFFFFF", "#111111"], pattern: "side", logo: "" },
  { id: "bou_eu", name: "JL Bourg-en-Bresse", league: "Betclic Élite & EuroCup", tier: 3, colors: ["#C8102E", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "ulm_eu", name: "Ratiopharm Ulm", league: "BBL Germania & EuroCup", tier: 3, colors: ["#F97316", "#111111", "#FFFFFF"], pattern: "side", logo: "" },
  { id: "hap_eu", name: "Hapoel Tel Aviv", league: "Winner League & EuroCup", tier: 3, colors: ["#E30613", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "ced_eu", name: "Cedevita Olimpija", league: "ABA Liga & EuroCup", tier: 3, colors: ["#00843D", "#F97316", "#FFFFFF"], pattern: "side", logo: "" },
  { id: "bud_eu", name: "Budućnost VOLI", league: "ABA Liga & EuroCup", tier: 3, colors: ["#0055A5", "#FFFFFF", "#111111"], pattern: "solid", logo: "" },
  { id: "ari_eu", name: "Aris Salonicco", league: "Stoiximan GBL & EuroCup", tier: 3, colors: ["#FFD100", "#111111", "#FFFFFF"], pattern: "stripes", logo: "" },

  // ================= EUROLEAGUE 2026/27 =================
  { id: "rma_el", name: "Real Madrid Baloncesto", league: "EuroLeague & Liga ACB", tier: 4, colors: ["#FFFFFF", "#0033A0", "#D4AF37"], pattern: "solid", logo: "" },
  { id: "bar_el", name: "FC Barcelona Basket", league: "EuroLeague & Liga ACB", tier: 4, colors: ["#004D98", "#A50044", "#EDBB00"], pattern: "stripes", logo: "" },
  { id: "bas_el", name: "Baskonia Vitoria-Gasteiz", league: "EuroLeague & Liga ACB", tier: 4, colors: ["#0033A0", "#C8102E", "#FFFFFF"], pattern: "stripes", logo: "" },
  { id: "pao_el", name: "Panathinaikos AKTOR", league: "EuroLeague & GBL", tier: 4, colors: ["#006633", "#FFFFFF", "#D4AF37"], pattern: "vneck", logo: "" },
  { id: "oly_el", name: "Olympiacos Piraeus", league: "EuroLeague & GBL", tier: 4, colors: ["#E30613", "#FFFFFF", "#111111"], pattern: "stripes", logo: "" },
  { id: "fen_el", name: "Fenerbahçe Beko", league: "EuroLeague & BSL", tier: 4, colors: ["#002B5C", "#FFD100", "#FFFFFF"], pattern: "stripes", logo: "" },
  { id: "efe_el", name: "Anadolu Efes Istanbul", league: "EuroLeague & BSL", tier: 4, colors: ["#0033A0", "#FFFFFF", "#E30613"], pattern: "side", logo: "" },
  { id: "mon_el", name: "AS Monaco Roca Team", league: "EuroLeague & Betclic", tier: 4, colors: ["#C8102E", "#FFFFFF", "#D4AF37"], pattern: "sash", logo: "" },
  { id: "par_el", name: "Paris Basketball", league: "EuroLeague & Betclic", tier: 4, colors: ["#111111", "#FFFFFF", "#00A3E0"], pattern: "side", logo: "" },
  { id: "asv_el", name: "LDLC ASVEL Villeurbanne", league: "EuroLeague & Betclic", tier: 4, colors: ["#111111", "#FFFFFF", "#94A3B8"], pattern: "solid", logo: "" },
  { id: "bay_el", name: "FC Bayern Munich", league: "EuroLeague & BBL", tier: 4, colors: ["#DC052D", "#FFFFFF", "#0066B2"], pattern: "solid", logo: "" },
  { id: "alb_el", name: "ALBA Berlin", league: "EuroLeague & BBL", tier: 4, colors: ["#FFD100", "#0033A0", "#FFFFFF"], pattern: "side", logo: "" },
  { id: "parb_el", name: "Partizan Mozzart Bet", league: "EuroLeague & ABA", tier: 4, colors: ["#111111", "#FFFFFF", "#94A3B8"], pattern: "stripes", logo: "" },
  { id: "czv_el", name: "Crvena Zvezda Meridianbet", league: "EuroLeague & ABA", tier: 4, colors: ["#E30613", "#FFFFFF", "#0033A0"], pattern: "stripes", logo: "" },
  { id: "zal_el", name: "Žalgiris Kaunas", league: "EuroLeague & LKL", tier: 4, colors: ["#006633", "#FFFFFF", "#111111"], pattern: "vneck", logo: "" },
  { id: "mac_el", name: "Maccabi Playtika Tel Aviv", league: "EuroLeague & Winner", tier: 4, colors: ["#FFD100", "#0033A0", "#FFFFFF"], pattern: "side", logo: "" },

  // ================= 30 FRANCHIGIE NBA (LOGHI UFFICIALI ESPN CDN) =================
  { id: "atl", name: "Atlanta Hawks", league: "NBA • Eastern", tier: 5, colors: ["#E03A3E", "#C1D32F", "#26282A"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/atl.png" },
  { id: "bos", name: "Boston Celtics", league: "NBA • Eastern", tier: 5, colors: ["#007A33", "#FFFFFF", "#BA9653"], pattern: "vneck", logo: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png" },
  { id: "bkn", name: "Brooklyn Nets", league: "NBA • Eastern", tier: 5, colors: ["#111111", "#FFFFFF", "#777D84"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/bkn.png" },
  { id: "cha", name: "Charlotte Hornets", league: "NBA • Eastern", tier: 5, colors: ["#1D1160", "#00788C", "#FFFFFF"], pattern: "stripes", logo: "https://a.espncdn.com/i/teamlogos/nba/500/cha.png" },
  { id: "chi", name: "Chicago Bulls", league: "NBA • Eastern", tier: 5, colors: ["#CE1141", "#111111", "#FFFFFF"], pattern: "vneck", logo: "https://a.espncdn.com/i/teamlogos/nba/500/chi.png" },
  { id: "cle", name: "Cleveland Cavaliers", league: "NBA • Eastern", tier: 5, colors: ["#860038", "#FDBB30", "#041E42"], pattern: "solid", logo: "https://a.espncdn.com/i/teamlogos/nba/500/cle.png" },
  { id: "dal", name: "Dallas Mavericks", league: "NBA • Western", tier: 5, colors: ["#00538C", "#002B5E", "#B8C4CA"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/dal.png" },
  { id: "den", name: "Denver Nuggets", league: "NBA • Western", tier: 5, colors: ["#0E2240", "#FEC524", "#8B2131"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/den.png" },
  { id: "det", name: "Detroit Pistons", league: "NBA • Eastern", tier: 5, colors: ["#C8102E", "#1D42BA", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/det.png" },
  { id: "gsw", name: "Golden State Warriors", league: "NBA • Western", tier: 5, colors: ["#1D428A", "#FFC72C", "#FFFFFF"], pattern: "hoops", logo: "https://a.espncdn.com/i/teamlogos/nba/500/gs.png" },
  { id: "hou", name: "Houston Rockets", league: "NBA • Western", tier: 5, colors: ["#CE1141", "#111111", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/hou.png" },
  { id: "ind", name: "Indiana Pacers", league: "NBA • Eastern", tier: 5, colors: ["#002D62", "#FDBB30", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/ind.png" },
  { id: "lac", name: "LA Clippers", league: "NBA • Western", tier: 5, colors: ["#C8102E", "#1D428A", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/lac.png" },
  { id: "lal", name: "Los Angeles Lakers", league: "NBA • Western", tier: 5, colors: ["#FDB927", "#552583", "#FFFFFF"], pattern: "vneck", logo: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png" },
  { id: "mem", name: "Memphis Grizzlies", league: "NBA • Western", tier: 5, colors: ["#5D76A9", "#12173F", "#F5B112"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/mem.png" },
  { id: "mia", name: "Miami Heat", league: "NBA • Eastern", tier: 5, colors: ["#98002E", "#F9A01B", "#111111"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/mia.png" },
  { id: "mil", name: "Milwaukee Bucks", league: "NBA • Eastern", tier: 5, colors: ["#00471B", "#EEE1C6", "#0077C0"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/mil.png" },
  { id: "min", name: "Minnesota Timberwolves", league: "NBA • Western", tier: 5, colors: ["#0C2340", "#236192", "#78BE20"], pattern: "hoops", logo: "https://a.espncdn.com/i/teamlogos/nba/500/min.png" },
  { id: "nop", name: "New Orleans Pelicans", league: "NBA • Western", tier: 5, colors: ["#0C2340", "#C8102E", "#85714D"], pattern: "solid", logo: "https://a.espncdn.com/i/teamlogos/nba/500/no.png" },
  { id: "nyk", name: "New York Knicks", league: "NBA • Eastern", tier: 5, colors: ["#006BB6", "#F58426", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/nyk.png" },
  { id: "okc", name: "Oklahoma City Thunder", league: "NBA • Western", tier: 5, colors: ["#007AC1", "#EF3B24", "#FDBB30"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/okc.png" },
  { id: "orl", name: "Orlando Magic", league: "NBA • Eastern", tier: 5, colors: ["#0077C0", "#111111", "#C4CED4"], pattern: "stripes", logo: "https://a.espncdn.com/i/teamlogos/nba/500/orl.png" },
  { id: "phi", name: "Philadelphia 76ers", league: "NBA • Eastern", tier: 5, colors: ["#006BB6", "#ED174C", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/phi.png" },
  { id: "phx", name: "Phoenix Suns", league: "NBA • Western", tier: 5, colors: ["#1D1160", "#E56020", "#F9AD1B"], pattern: "sash", logo: "https://a.espncdn.com/i/teamlogos/nba/500/phx.png" },
  { id: "por", name: "Portland Trail Blazers", league: "NBA • Western", tier: 5, colors: ["#E03A3E", "#111111", "#FFFFFF"], pattern: "sash", logo: "https://a.espncdn.com/i/teamlogos/nba/500/por.png" },
  { id: "sac", name: "Sacramento Kings", league: "NBA • Western", tier: 5, colors: ["#5A2D81", "#63727A", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/sac.png" },
  { id: "sas", name: "San Antonio Spurs", league: "NBA • Western", tier: 5, colors: ["#111111", "#C4CED4", "#FFFFFF"], pattern: "side", logo: "https://a.espncdn.com/i/teamlogos/nba/500/sa.png" },
  { id: "tor", name: "Toronto Raptors", league: "NBA • Eastern", tier: 5, colors: ["#CE1141", "#111111", "#A1A1A4"], pattern: "vneck", logo: "https://a.espncdn.com/i/teamlogos/nba/500/tor.png" },
  { id: "uta", name: "Utah Jazz", league: "NBA • Western", tier: 5, colors: ["#4E008E", "#00A9E0", "#FFFFFF"], pattern: "solid", logo: "https://a.espncdn.com/i/teamlogos/nba/500/utah.png" },
  { id: "was", name: "Washington Wizards", league: "NBA • Eastern", tier: 5, colors: ["#002B5C", "#E31837", "#C4CED4"], pattern: "hoops", logo: "https://a.espncdn.com/i/teamlogos/nba/500/wsh.png" }
];

// Genera uno scudetto vettoriale ufficiale se l'URL CDN esterno non è raggiungibile
function createFallbackCrestSVG(team) {
  const [c1, c2, c3] = team.colors;
  const initials = team.name
    .replace(/EA7|Emporio|Armani|Segafredo|Umana|Dolomiti|Energia|Banco di Sardegna|Openjobmetis|Unieuro|Reale Mutua|Dreamland|LDLC|AKTOR|Beko|Mozzart Bet|Meridianbet|Playtika/gi, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join("")
    .toUpperCase();

  const textColor = (c1 === "#FFFFFF" || c1 === "#FFD100" || c1 === "#FDB927") ? "#111111" : "#FFFFFF";

  return `
    <svg viewBox="0 0 64 64" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 8 H54 V32 C54 47 32 58 32 58 C32 58 10 47 10 32 Z" fill="${c1}" stroke="${c2}" stroke-width="3.5"/>
      <path d="M14 14 H50 V22 H14 Z" fill="${c3}" opacity="0.85"/>
      <circle cx="32" cy="36" r="13" fill="${c2}" opacity="0.2"/>
      <text x="32" y="40" text-anchor="middle" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="${textColor}">${initials || "BB"}</text>
    </svg>
  `;
}

// Genera la canotta ufficiale SVG con colori sociali, pattern e numero scelto
function createJerseySVG(team, playerNumber) {
  const [primary, secondary, trim] = team.colors;
  const numColor = (primary === "#FFFFFF" || primary === "#FFD100" || primary === "#FDB927") ? "#111111" : "#FFFFFF";

  let patternSVG = "";
  if (team.pattern === "stripes") {
    patternSVG = `
      <rect x="23" y="16" width="3" height="42" fill="${secondary}" opacity="0.45"/>
      <rect x="30.5" y="16" width="3" height="42" fill="${secondary}" opacity="0.45"/>
      <rect x="38" y="16" width="3" height="42" fill="${secondary}" opacity="0.45"/>
    `;
  } else if (team.pattern === "sash") {
    patternSVG = `<polygon points="18,14 26,14 46,56 38,56" fill="${secondary}" opacity="0.85"/>`;
  } else if (team.pattern === "hoops") {
    patternSVG = `<rect x="16" y="25" width="32" height="7" fill="${secondary}" opacity="0.9"/>`;
  } else if (team.pattern === "side") {
    patternSVG = `
      <rect x="16" y="22" width="4" height="36" fill="${secondary}"/>
      <rect x="44" y="22" width="4" height="36" fill="${secondary}"/>
    `;
  }

  return `
    <svg viewBox="0 0 64 64" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo Canotta -->
      <path d="M18 6 L24 6 C25 14 39 14 40 6 L46 6 L48 22 L48 58 L16 58 L16 22 Z" fill="${primary}" stroke="${trim}" stroke-width="2.2"/>
      ${patternSVG}
      <!-- Scollo e Giro-manica -->
      <path d="M24 6 C25 14 39 14 40 6" fill="none" stroke="${secondary}" stroke-width="2.5"/>
      <path d="M18 6 L16 22 M46 6 L48 22" stroke="${secondary}" stroke-width="2.5"/>
      <!-- Numero Giocatore -->
      <text x="32" y="42" text-anchor="middle" font-family="Arial Black, Impact, sans-serif" font-weight="900" font-size="16" fill="${numColor}" stroke="${primary}" stroke-width="0.6">${playerNumber}</text>
    </svg>
  `;
}

function renderTeamVisuals(team, playerNumber) {
  const logoWrap = document.getElementById("team-logo-wrap");
  const jerseyWrap = document.getElementById("team-jersey-wrap");

  jerseyWrap.innerHTML = createJerseySVG(team, playerNumber);

  if (team.logo) {
    const img = document.createElement("img");
    img.src = team.logo;
    img.alt = team.name;
    img.onerror = () => {
      logoWrap.innerHTML = createFallbackCrestSVG(team);
    };
    logoWrap.innerHTML = "";
    logoWrap.appendChild(img);
  } else {
    logoWrap.innerHTML = createFallbackCrestSVG(team);
  }
}
