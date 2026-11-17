// Stato globale della carriera
let state = {
  name: "Lorenzo Rossi",
  role: "SG",
  number: 23,
  age: 17,
  seasonYear: 2026,
  bivio: 1, // 1 = Inizio Stagione, 2 = Metà Stagione/Mercato, 3 = Playoff & Offseason
  ovr: 62,
  fit: 88,
  hype: 18,
  cash: 5, // in migliaia di euro/dollari (5 = 5k)
  salary: 12,
  teamId: "mil_u19",
  roleInTeam: "Talento del Vivaio",
  trophies: [],
  history: [],
  seasonStats: { pts: 0, reb: 0, ast: 0 },
  retired: false
};

// Inizializzazione dropdown squadre giovanili
function initSetup() {
  const youthSelect = document.getElementById("youth-team");
  const youthTeams = TEAMS_DB.filter(t => t.tier === 0);
  youthTeams.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${t.name} (${t.league})`;
    youthSelect.appendChild(opt);
  });

  document.getElementById("start-btn").addEventListener("click", startNewCareer);
  document.getElementById("btn-stats").addEventListener("click", showStatsModal);
  document.getElementById("btn-retire").addEventListener("click", confirmRetire);
  document.getElementById("modal-close").addEventListener("click", closeModal);
}

function getTeam(id) {
  return TEAMS_DB.find(t => t.id === id) || TEAMS_DB[0];
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, Math.round(val)));
}

function formatMoney(k) {
  if (k >= 1000) return `€${(k / 1000).toFixed(2)}M`;
  return `€${k}k`;
}

function startNewCareer() {
  const nameInput = document.getElementById("player-name").value.trim();
  const roleInput = document.getElementById("player-role").value;
  const numInput = parseInt(document.getElementById("player-number").value, 10);
  const youthId = document.getElementById("youth-team").value;

  state = {
    name: nameInput || "Lorenzo Rossi",
    role: roleInput,
    number: isNaN(numInput) ? 23 : clamp(numInput, 0, 99),
    age: 17,
    seasonYear: 2026,
    bivio: 1,
    ovr: 62,
    fit: 88,
    hype: 18,
    cash: 5,
    salary: 12,
    teamId: youthId,
    roleInTeam: "Talento del Vivaio",
    trophies: [],
    history: [],
    seasonStats: { pts: 11.4, reb: 3.8, ast: 2.9 },
    retired: false
  };

  document.getElementById("setup-screen").classList.remove("active");
  document.getElementById("game-screen").classList.add("active");
  updateHUD();
  generateDecision();
}

function updateHUD() {
  const team = getTeam(state.teamId);
  const nextYr = String(state.seasonYear + 1).slice(-2);

  document.getElementById("hud-name").textContent = state.name;
  document.getElementById("hud-age").textContent = `${state.age} anni • ${state.role} #${state.number}`;
  document.getElementById("hud-season").textContent = `${state.seasonYear}/${nextYr} • Bivio ${state.bivio}/3`;

  document.getElementById("val-ovr").textContent = state.ovr;
  document.getElementById("bar-ovr").style.width = `${state.ovr}%`;

  document.getElementById("val-fit").textContent = state.fit;
  document.getElementById("bar-fit").style.width = `${state.fit}%`;

  document.getElementById("val-hype").textContent = state.hype;
  document.getElementById("bar-hype").style.width = `${state.hype}%`;

  document.getElementById("val-cash").textContent = formatMoney(state.cash);
  const cashPct = clamp((state.cash / 5000) * 100, 5, 100);
  document.getElementById("bar-cash").style.width = `${cashPct}%`;

  document.getElementById("hud-league").textContent = team.league;
  document.getElementById("hud-team").textContent = team.name;
  document.getElementById("hud-contract").textContent = `${state.roleInTeam} • Ingaggio: ${formatMoney(state.salary)}/anno`;

  renderTeamVisuals(team, state.number);
}

// Seleziona squadre casuali di un certo tier (escludendo l'attuale)
function pickRandomTeams(tier, count = 2) {
  const pool = TEAMS_DB.filter(t => t.tier === tier && t.id !== state.teamId);
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Generatore dei 3 bivi narrativi per stagione
function generateDecision() {
  const team = getTeam(state.teamId);
  const phaseEl = document.getElementById("event-phase");
  const titleEl = document.getElementById("event-title");
  const descEl = document.getElementById("event-desc");
  const container = document.getElementById("choices-container");
  container.innerHTML = "";

  let eventData = null;

  // ================= BIVIO 1: OTTOBRE - PREPARAZIONE E RUOLO =================
  if (state.bivio === 1) {
    phaseEl.textContent = "OTTOBRE • INIZIO STAGIONE (1/3)";
    if (team.tier === 0) {
      eventData = {
        title: "Preparazione con la Prima Squadra",
        desc: `Hai ${state.age} anni e inizi la stagione con ${team.name}. Lo staff della prima squadra ti osserva durante il training camp.`,
        choices: [
          {
            title: "Allenamenti extra all'alba sul tiro",
            hint: "+3 OVR • -6 Fisico • +4 Hype",
            effect: () => { state.ovr += 3; state.fit -= 6; state.hype += 4; }
          },
          {
            title: "Lavoro atletico e prevenzione infortuni",
            hint: "+2 OVR • +6 Fisico",
            effect: () => { state.ovr += 2; state.fit += 6; }
          },
          {
            title: "Pubblica highlight sui social e sfida i senior",
            hint: "+10 Hype • +1 OVR • -4 Fisico",
            effect: () => { state.hype += 10; state.ovr += 1; state.fit -= 4; }
          }
        ]
      };
    } else if (team.tier === 5) {
      eventData = {
        title: "NBA Training Camp & Media Day",
        desc: `I riflettori della NBA sono puntati su ${team.name}. Il coaching staff sta definendo le rotazioni per la Regular Season.`,
        choices: [
          {
            title: "Chiedi più possessi in attacco al coach",
            hint: "+3 OVR • +6 Hype • -7 Fisico",
            effect: () => { state.ovr += 3; state.hype += 6; state.fit -= 7; state.roleInTeam = "Titolare Chiave"; }
          },
          {
            title: "Specializzati come difensore 3&D di sistema",
            hint: "+2 OVR • +5 Fisico • +3 Hype",
            effect: () => { state.ovr += 2; state.fit += 5; state.hype += 3; }
          },
          {
            title: "Firma uno sponsor di scarpe in preseason",
            hint: "+€450k • +8 Hype • -4 Fisico",
            effect: () => { state.cash += 450; state.hype += 8; state.fit -= 4; }
          }
        ]
      };
    } else {
      eventData = {
        title: `Raduno e Supercoppa con ${team.name}`,
        desc: `Inizia una nuova annata in ${team.league}. Come imposti i primi mesi di campionato?`,
        choices: [
          {
            title: "Prendi le chiavi dello spogliatoio da leader",
            hint: "+3 OVR • +5 Hype • -6 Fisico",
            effect: () => { state.ovr += 3; state.hype += 5; state.fit -= 6; state.roleInTeam = "Leader Tecnico"; }
          },
          {
            title: "Gestisci le energie per i big match",
            hint: "+1 OVR • +7 Fisico",
            effect: () => { state.ovr += 1; state.fit += 7; }
          },
          {
            title: "Campagna mediatica locale e clinic giovanili",
            hint: "+9 Hype • +€40k",
            effect: () => { state.hype += 9; state.cash += 40; }
          }
        ]
      };
    }
  }

  // ================= BIVIO 2: GENNAIO/FEBBRAIO - MERCATO, COPPA O INFORTUNIO =================
  else if (state.bivio === 2) {
    phaseEl.textContent = "FEBBRAIO • COPPE & MERCATO (2/3)";

    if (state.fit < 45) {
      eventData = {
        title: "Allarme Sovraccarico Muscolare!",
        desc: "Il tuo fisico è al limite dopo mesi intensi. Lo staff medico ti mette davanti a un bivio delicato.",
        choices: [
          {
            title: "Fermati 3 settimane per riabilitazione totale",
            hint: "+22 Fisico • -1 OVR • -4 Hype",
            effect: () => { state.fit += 22; state.ovr -= 1; state.hype -= 4; }
          },
          {
            title: "Gioca con infiltrazioni nella Final Eight / All-Star",
            hint: "+12 Hype • +2 OVR • -15 Fisico",
            effect: () => { state.hype += 12; state.ovr += 2; state.fit -= 15; }
          },
          {
            title: "Assumi un fisioterapista privato top",
            hint: "-€80k • +16 Fisico • +1 OVR",
            effect: () => { state.cash = Math.max(0, state.cash - 80); state.fit += 16; state.ovr += 1; }
          }
        ]
      };
    } else if (team.tier === 0 && state.ovr >= 66) {
      const [a2Offer] = pickRandomTeams(1, 1);
      eventData = {
        title: "Chiamata tra i Professionisti!",
        desc: `Stai dominando l'Under 19 Eccellenza! ${a2Offer.name} (${a2Offer.league}) ti vuole subito in prestito per chiudere la stagione.`,
        choices: [
          {
            title: `Accetta il salto in Serie A2 con ${a2Offer.name}`,
            hint: "Nuova Squadra • +3 OVR • +8 Hype • €35k/anno",
            effect: () => {
              state.teamId = a2Offer.id;
              state.ovr += 3;
              state.hype += 8;
              state.salary = 35;
              state.roleInTeam = "Rotazione Pro";
            }
          },
          {
            title: `Resta a ${team.name} per vincere le Finali Nazionali U19`,
            hint: "+2 OVR • +5 Fisico • Chance Trofeo U19",
            effect: () => { state.ovr += 2; state.fit += 5; }
          },
          {
            title: "Chiedi il debutto in prima squadra al tuo club",
            hint: "+2 OVR • +6 Hype • -4 Fisico",
            effect: () => { state.ovr += 2; state.hype += 6; state.fit -= 4; }
          }
        ]
      };
    } else if (team.tier >= 1 && team.tier <= 3 && state.ovr >= 76) {
      const [elOffer] = pickRandomTeams(4, 1);
      eventData = {
        title: "Buyout di EuroLeague a Metà Stagione!",
        desc: `Le tue medie stanno impressionando tutta Europa. ${elOffer.name} (${elOffer.league}) offre un buyout per portarti subito sul palcoscenico massimo.`,
        choices: [
          {
            title: `Firma subito con ${elOffer.name} (EuroLeague)`,
            hint: "Salto in EuroLeague • +3 OVR • +12 Hype • €450k/anno",
            effect: () => {
              state.teamId = elOffer.id;
              state.ovr += 3;
              state.hype += 12;
              state.salary = 450;
              state.roleInTeam = "Innesto EuroLeague";
            }
          },
          {
            title: `Rifiuta e punta a vincere la Coppa con ${team.name}`,
            hint: "+2 OVR • +8 Hype • +€60k premio fedeltà",
            effect: () => { state.ovr += 2; state.hype += 8; state.cash += 60; }
          },
          {
            title: "Usa l'offerta per rinegoziare l'ingaggio attuale",
            hint: "+€140k subito • +4 Hype",
            effect: () => { state.cash += 140; state.salary += 90; state.hype += 4; }
          }
        ]
      };
    } else {
      eventData = {
        title: "Febbraio di Fuoco: Coppa Nazionale & Sosta",
        desc: "Il calendario entra nel vivo tra Coppe nazionali, finestre FIBA con la Nazionale e trattative.",
        choices: [
          {
            title: "Rispondi alla convocazione della Nazionale Italiana 🇮🇹",
            hint: "+10 Hype • +2 OVR • -7 Fisico",
            effect: () => { state.hype += 10; state.ovr += 2; state.fit -= 7; }
          },
          {
            title: "Sfrutta la pausa per un camp individuale intenso",
            hint: "+3 OVR • -4 Fisico",
            effect: () => { state.ovr += 3; state.fit -= 4; }
          },
          {
            title: "Recupero totale e vacanza rigenerante",
            hint: "+12 Fisico • -2 Hype",
            effect: () => { state.fit += 12; state.hype -= 2; }
          }
        ]
      };
    }
  }

  // ================= BIVIO 3: MAGGIO/GIUGNO - PLAYOFF, DRAFT NBA & OFFSEASON =================
  else {
    phaseEl.textContent = "GIUGNO • PLAYOFF & OFFSEASON (3/3)";

    // Opportunità Draft NBA se giovane (19-22) e OVR >= 79 in Europa
    if (team.tier < 5 && state.age >= 19 && state.age <= 22 && state.ovr >= 79) {
      const [nbaDraftTeam] = pickRandomTeams(5, 1);
      const [elTopTeam] = pickRandomTeams(4, 1);
      eventData = {
        title: "🏀 È LA NOTTE DEL DRAFT NBA!",
        desc: `Gli scout NBA sono pazzi del tuo talento! ${nbaDraftTeam.name} è pronta a chiamarti al primo giro, mentre ${elTopTeam.name} ti offre un contratto da stella assoluta in EuroLeague.`,
        choices: [
          {
            title: `Vola in America: firma con ${nbaDraftTeam.name} (NBA)`,
            hint: "Ingresso in NBA • +3 OVR • +20 Hype • €2.8M/anno",
            effect: () => {
              state.teamId = nbaDraftTeam.id;
              state.ovr += 3;
              state.hype += 20;
              state.salary = 2800;
              state.roleInTeam = "Scelta al Draft NBA";
            }
          },
          {
            title: `Diventa il re d'Europa con ${elTopTeam.name}`,
            hint: "Top EuroLeague • +2 OVR • +10 Hype • €1.4M/anno",
            effect: () => {
              state.teamId = elTopTeam.id;
              state.ovr += 2;
              state.hype += 10;
              state.salary = 1400;
              state.roleInTeam = "Franchise Player EuroLeague";
            }
          },
          {
            title: `Resta ancora un anno a ${team.name} per dominare`,
            hint: "+3 OVR • +5 Fisico • +€250k",
            effect: () => { state.ovr += 3; state.fit += 5; state.cash += 250; }
          }
        ]
      };
    }
    // Offseason per giocatori già in NBA (Free Agency / Estensione)
    else if (team.tier === 5) {
      const [nbaContender] = pickRandomTeams(5, 1);
      eventData = {
        title: "Playoff NBA & Mercato Free Agency",
        desc: `La stagione NBA volge al termine. È il momento di decidere il tuo futuro tra anelli, contratti max e Summer League.`,
        choices: [
          {
            title: `Firma con ${nbaContender.name} per dare l'assalto all'Anello`,
            hint: `Trasferimento • +2 OVR • +12 Hype • ${formatMoney(Math.round(state.ovr * 110))}/anno`,
            effect: () => {
              state.teamId = nbaContender.id;
              state.ovr += 2;
              state.hype += 12;
              state.salary = Math.round(state.ovr * 110);
              state.roleInTeam = "Star NBA";
            }
          },
          {
            title: `Rinnova al massimo salariale con ${team.name}`,
            hint: `+1 OVR • +€${Math.round(state.ovr * 130)}k/anno • Fedeltà`,
            effect: () => {
              state.ovr += 1;
              state.salary = Math.round(state.ovr * 130);
              state.roleInTeam = "Uomo Franchigia";
            }
          },
          {
            title: "Allenamento estivo con leggende NBA a Los Angeles",
            hint: "+4 OVR • -6 Fisico • +8 Hype",
            effect: () => { state.ovr += 4; state.fit -= 6; state.hype += 8; }
          }
        ]
      };
    }
    // Offseason Europea (promozioni da U19 -> A2 -> LBA -> EuroCup/Europa -> EuroLeague)
    else {
      const nextTier = Math.min(4, team.tier + 1);
      const [upOffer] = pickRandomTeams(nextTier, 1);
      const [sameOffer] = pickRandomTeams(team.tier, 1);

      eventData = {
        title: "Playoff & Mercato Estivo Europeo",
        desc: `Si chiudono i campionati! Sul tavolo del tuo agente ci sono nuove offerte per la prossima stagione.`,
        choices: [
          {
            title: `Accetta l'offerta di ${upOffer.name} (${upOffer.league})`,
            hint: `Salto di categoria • +2 OVR • +9 Hype`,
            effect: () => {
              state.teamId = upOffer.id;
              state.ovr += 2;
              state.hype += 9;
              state.salary = nextTier === 1 ? 45 : nextTier === 2 ? 140 : nextTier === 3 ? 350 : 950;
              state.roleInTeam = "Titolare";
            }
          },
          {
            title: `Cambia aria: firma con ${sameOffer.name} (${sameOffer.league})`,
            hint: `Nuova sfida • +1 OVR • +6 Hype • +€60k`,
            effect: () => {
              state.teamId = sameOffer.id;
              state.ovr += 1;
              state.hype += 6;
              state.cash += 60;
              state.salary += 40;
            }
          },
          {
            title: `Resta a ${team.name} e lavora sul tuo fisico in estate`,
            hint: "+2 OVR • +10 Fisico",
            effect: () => { state.ovr += 2; state.fit += 10; }
          }
        ]
      };
    }
  }

  titleEl.textContent = eventData.title;
  descEl.textContent = eventData.desc;

  eventData.choices.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `<span class="choice-title">${c.title}</span><span class="choice-hint">${c.hint}</span>`;
    btn.addEventListener("click", () => handleChoice(c));
    container.appendChild(btn);
  });
}

function handleChoice(choice) {
  choice.effect();

  // Calo naturale con l'età dopo i 31 anni
  const agePenalty = state.age > 31 ? 1 : 0;
  state.ovr = clamp(state.ovr - agePenalty, 50, 99);
  state.fit = clamp(state.fit, 10, 100);
  state.hype = clamp(state.hype, 0, 100);
  state.cash = Math.max(0, Math.round(state.cash));

  if (state.bivio < 3) {
    state.bivio += 1;
    updateHUD();
    generateDecision();
  } else {
    completeSeason();
  }
}

function completeSeason() {
  const team = getTeam(state.teamId);

  // Calcolo statistiche stagionali realistiche in base a OVR e ruolo
  const basePts = ((state.ovr - 52) * 0.58 + (Math.random() * 4 - 2)).toFixed(1);
  const baseReb = (state.role === "C" || state.role === "PF"
    ? (state.ovr - 55) * 0.28 + 3
    : (state.ovr - 55) * 0.14 + 1.8).toFixed(1);
  const baseAst = (state.role === "PG" || state.role === "SG"
    ? (state.ovr - 55) * 0.24 + 2.2
    : (state.ovr - 55) * 0.1 + 1.1).toFixed(1);

  state.seasonStats = {
    pts: Math.max(3.2, basePts),
    reb: Math.max(1.5, baseReb),
    ast: Math.max(0.8, baseAst)
  };

  // Incasso stipendio annuale netto
  state.cash += state.salary;

  // Calcolo probabilità Trofeo in base a OVR e Tier
  let wonTrophy = null;
  const roll = Math.random() * 100;
  if (team.tier === 5 && state.ovr >= 85 && roll < 32) {
    wonTrophy = `🏆 Anello NBA (${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)})`;
  } else if (team.tier === 4 && state.ovr >= 80 && roll < 35) {
    wonTrophy = `🏆 EuroLeague Champion (${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)})`;
  } else if (team.tier === 3 && state.ovr >= 75 && roll < 38) {
    wonTrophy = `🏆 Campione EuroCup / Nazionale (${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)})`;
  } else if (team.tier === 2 && state.ovr >= 72 && roll < 35) {
    wonTrophy = `🇮🇹 Scudetto LBA Serie A (${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)})`;
  } else if (team.tier === 1 && state.ovr >= 68 && roll < 40) {
    wonTrophy = `🇮🇹 Promozione & Coppa Serie A2 (${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)})`;
  } else if (team.tier === 0 && state.ovr >= 65 && roll < 45) {
    wonTrophy = `🥇 Scudetto Under 19 Eccellenza (${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)})`;
  }

  if (wonTrophy) {
    state.trophies.push(wonTrophy);
    state.hype = clamp(state.hype + 10, 0, 100);
  }

  const seasonLabel = `${state.seasonYear}/${String(state.seasonYear + 1).slice(-2)}`;
  state.history.push({
    season: seasonLabel,
    age: state.age,
    team: team.name,
    league: team.league,
    stats: `${state.seasonStats.pts} PPG • ${state.seasonStats.reb} RPG • ${state.seasonStats.ast} APG`,
    trophy: wonTrophy
  });

  // Avanzamento anno
  state.age += 1;
  state.seasonYear += 1;
  state.bivio = 1;
  state.fit = clamp(state.fit + 8, 20, 100);

  updateHUD();

  // Controllo ritiro forzato a 40 anni
  if (state.age >= 40) {
    showCareerEndModal("Ritiro per limiti d'età a 40 anni! Una carriera leggendaria.");
    return;
  }

  openModal(
    `Riepilogo Stagione ${seasonLabel}`,
    `
      <p><strong>Squadra:</strong> ${team.name} (${team.league})</p>
      <p><strong>Medie Stagionali:</strong> ${state.seasonStats.pts} PTS • ${state.seasonStats.reb} REB • ${state.seasonStats.ast} AST</p>
      <p><strong>Ingaggio incassato:</strong> +${formatMoney(state.salary)} (Patrimonio: ${formatMoney(state.cash)})</p>
      ${wonTrophy ? `<p style="color:#22c55e;font-weight:800;margin-top:8px;">🎉 NUOVO TROFEO: ${wonTrophy}</p>` : `<p style="margin-top:8px;color:#94a3b8;">Nessun trofeo vinto quest'anno, ma l'esperienza cresce.</p>`}
    `,
    () => generateDecision()
  );
}

function showStatsModal() {
  const trophiesHTML = state.trophies.length
    ? `<ul>${state.trophies.map(t => `<li>${t}</li>`).join("")}</ul>`
    : `<p style="color:#94a3b8;">Ancora nessun trofeo in bacheca.</p>`;

  const historyHTML = state.history.length
    ? `<ul>${state.history.slice().reverse().map(h => `<li><strong>${h.season} (${h.age}a)</strong> – ${h.team}: ${h.stats} ${h.trophy ? "🏆" : ""}</li>`).join("")}</ul>`
    : `<p style="color:#94a3b8;">Prima stagione in corso.</p>`;

  openModal(
    `📊 Carriera di ${state.name}`,
    `
      <p><strong>Overall:</strong> ${state.ovr} | <strong>Patrimonio:</strong> ${formatMoney(state.cash)}</p>
      <h4 style="margin-top:10px;color:#f97316;">🏆 Palmarès (${state.trophies.length})</h4>
      ${trophiesHTML}
      <h4 style="margin-top:12px;color:#38bdf8;">📅 Storico Stagioni</h4>
      ${historyHTML}
    `
  );
}

function confirmRetire() {
  showCareerEndModal(`Hai deciso di appendere le scarpette al chiodo a ${state.age} anni.`);
}

function showCareerEndModal(reason) {
  let legacy = "Giocatore di Rotazione";
  if (state.trophies.length >= 5 || state.ovr >= 92) legacy = "🏛️ LEGGENDA HALL OF FAME";
  else if (state.trophies.length >= 2 || state.ovr >= 84) legacy = "⭐ ALL-STAR INTERNAZIONALE";
  else if (state.ovr >= 75) legacy = "🔥 PROTAGONISTA EUROPEO";

  openModal(
    "🏁 Fine della Carriera",
    `
      <p>${reason}</p>
      <p style="margin-top:8px;font-size:1.05rem;"><strong>Status Finale:</strong> ${legacy}</p>
      <p><strong>Stagioni giocate:</strong> ${state.history.length} | <strong>Picco OVR:</strong> ${state.ovr}</p>
      <p><strong>Patrimonio accumulato:</strong> ${formatMoney(state.cash)}</p>
      <p><strong>Trofei vinti:</strong> ${state.trophies.length}</p>
    `,
    () => {
      document.getElementById("game-screen").classList.remove("active");
      document.getElementById("setup-screen").classList.add("active");
    },
    "NUOVA CARRIERA 🔄"
  );
}

let modalCallback = null;

function openModal(title, htmlBody, onClose = null, btnLabel = "CONTINUA") {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").innerHTML = htmlBody;
  const closeBtn = document.getElementById("modal-close");
  closeBtn.textContent = btnLabel;
  modalCallback = onClose;
  document.getElementById("modal-overlay").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  if (modalCallback) {
    const cb = modalCallback;
    modalCallback = null;
    cb();
  }
}

document.addEventListener("DOMContentLoaded", initSetup);
