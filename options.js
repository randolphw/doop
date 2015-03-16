var objLegendary = {
		casket: {name: "Casket of Ancient Winters", stats: {DRarea: 1000, DR: 500}},
		ccr: {name: "Cosmic Control Rod", stats: {DRenergy: 600, CRenergy: 600, ATenergy: 2}},
		excalibur: {name: "Excalibur", stats: {DRmelee: 1000, CR: 500}},
		bow: {name: "Golden Bow of Apollo", stats: {DRranged: 600, AS: 0.10, CRranged: 600}},
// Gungnir: Proc is being averaged
		gungnir: {name: "Gungnir", stats: {CR: 800, CD: 2000, BR: 250}},
		mkraan: {name: "M'kraan Crystal", stats: {SP: 200, HP: 1000, DR: 500, CR: 500}},
		trident: {name: "Neptune's Trident", stats: {DR: 500, CR: 500}},
		nornstones: {name: "Norn Stones", stats: {ATstrength: 1, ATfighting: 1, ATdurability: 1, ATspeed: 1, SK: 2}},
		axe: {name: "Savage Axe of Ares", stats: {DRphysical: 800, CR: 400, BD: 800, BR: 400}},
		shield: {name: "Shield of Perseus", stats: {DF: 2000, HP: 2000}},
		pc: {name: "The Power Cosmic", stats: {HP: 1500, DRcosmic: 1500, ATcosmic: 1}},
		eye: {name: "The Warlock's Eye", stats: {DRmental: 1000, SP: 50, CRmental: 500}},
		nullifier: {name: "Ultimate Nullifier", stats: {BD: 8000}}
};

var objMedallion = {
// Batroc: Missing proc logic
		batroc: {name: "Batroc Medallion", stats: {HP: 1462, DRmovement: 294, TN: 144, DRmelee: 589, SK: 2}},
		blackcat: {name: "Black Cat Medallion", stats: {CR: 319, dodge: 391, MS: 0.11, DRunaware: 588, SK: 2}},
		blob: {name: "Blob Medallion", stats: {TN: 187, DRattacking: 761, HP: 1525, SK: 2}},
		bovine: {name: "Bovine Sector Medallion", stats: {HP: 2630, SK: 2}},
		bullseye: {name: "Bullseye Medallion", stats: {CD: 1065, CR: 318, SK: 2}},
		doom: {name: "Doctor Doom Medallion", stats: {DR: 382, SP: 43, HP: 1025, SK: 2}},
		ock: {name: "Doctor Octopus Medallion", stats: {radius: 0.2, CRarea: 354, DR: 264, SK: 2}},
// Doop: Missing logic for DR proc when hit
		doop: {name: "Doop Medallion", stats: {HP: 2928, RIF: 0.05, SK: 2}},
		electro: {name: "Electro Medallion", stats: {DRenergy: 440, DRdot: 440, SK: 2}},
		elektra: {name: "Elektra Medallion", stats: {DRmovement: 412, dodge: 269, MS: 0.05, LOHmovement: 880, SOHmovement: 24.9, SK: 2}},
		gorgon: {name: "Gorgon Medallion", stats: {DRpetrify: 676, DF: 291, SK: 2}},
		goblin: {name: "Green Goblin Medallion", stats: {HP: 1314, MS: 0.059, DRphysical: 588, DRenergy: 588, SK: 2}},
		reaper: {name: "Grim Reaper Medallion", stats: {SOD: 16.6, LOD: 440, BD: 1071, DRphysical: 527, BR: 319, SK: 2}},
// Hulk: DRmelee should be general DR proc on melee, missing logic for DR proc when hit
		hulk: {name: "Hulk Medallion", stats: {TN: 285, SP: 43, HP: 1289, DRmelee: 351, SK: 2}},
		juggernaut: {name: "Juggernaut Medallion", stats: {HP: 2345, ATdurability: 1, DF: 465, TN: 187, SK: 2}},
		kingpin: {name: "Kingpin Medallion", stats: {DRmelee: 529, HP: 1317, CF: 15, SK: 2}},
		kirigi: {name: "Kirigi Medallion", stats: {HP: 1020, DRmelee: 529, AS: 0.05, dodge: 196, SK: 2}},
// Kraven: DR should be DRvuln
		kraven: {name: "Kraven Medallion", stats: {DR: 587, AS: 0.05, HP: 1026, SK: 2}},
// Kurse: BR should be BRmelee
		kurse: {name: "Kurse Medallion", stats: {BR: 221, CRmelee: 220, DRmelee: 529, SK: 2}},
		deathstrike: {name: "Lady Deathstrike Medallion", stats: {CR: 314, MS: 0.049, HP: 1875, SK: 2}},
		laser: {name: "Living Laser Medallion", stats: {SP: 123, SOD: 16.6, SK: 2}},
		lizard: {name: "Lizard Medallion", stats: {CR: 368, BR: 367, HP: 1025, SK: 2}},
		loki: {name: "Loki Medallion", stats: {DRunaware: 381, dodge: 196, SK: 2}},
		modok: {name: "M.O.D.O.K. Medallion", stats: {DR: 381, DRattacking: 381, DRtaunted: 529, SK: 2}},
		hydra: {name: "Madame Hydra Medallion", stats: {DR: 593, SOD: 4, SK: 2}},
		magneto: {name: "Magneto Medallion", stats: {deflect: 0.053, DRphysical: 264, discount: 0.22, SK: 2}},
// Malekith: missing low-health proc (30s CD)
		malekith: {name: "Malekith Medallion", stats: {DR: 529, SK: 2}},
		ape: {name: "Man-Ape Medallion", stats: {BR: 270, CR: 316, DBsummon: 0.2, DUsummon: 0.2, HPsummon: 0.2, SK: 2}},
		mandarin: {name: "Mandarin Medallion", stats: {SK: 2}},
		sentinel: {name: "Mega-Sentinel Medallion", stats: {DRranged: 381, DF: 437, HP: 1463, SK: 2}},
		mindless: {name: "Mindless Titan Medallion", stats: {HP: 1411, DRranged: 293, CR: 245, BR: 233, SK: 2}},
		moleman: {name: "Mole Man Medallion", stats: {DRenergy: 182, XP: 0.1, ATintelligence: 2, SK: 2}},
		hyde: {name: "Mr. Hyde Medallion", stats: {HP: 2047, DR: 441, SK: 2}},
		sinister: {name: "Mr. Sinister Medallion", stats: {DBsummon: 0.3, HPsummon: 0.3, SK: 2}},
// Pyro: BR should be BRenergy
		pyro: {name: "Pyro Medallion", stats: {CRenergy: 270, DRenergy: 264, BR: 268, SK: 2}},
		skull: {name: "Red Skull Medallion", stats: {ATdurability: 2, ATstrength: 2, ATfighting: 2, BD: 1235, SK: 2}},
		rhino: {name: "Rhino Medallion", stats: {CRmovement: 785, DRknockdown: 664, HP: 1307, SK: 2}},
		sabretooth: {name: "Sabretooth Medallion", stats: {HP: 1317, DRbleed: 587, SK: 2}},
		sauron: {name: "Sauron Medallion", stats: {DR: 264, DRenergy: 380, DRmental: 380, CR: 220, SK: 2}},
		shocker: {name: "Shocker Medallion", stats: {DR: 262, DRphysical: 264, DRknockdown: 264, SK: 2}},
// Superior Spider-Clone: DRmelee, DRranged, and DR missing logic for melee/range proc requirement
		spiderclone: {name: "Superior Spider-Clone Medallion", stats: {HP: 1466, dodge: 193, AS: 0.05, DRmelee: 247, DRranged: 247, DR: 320, SK: 2}},
		tasky: {name: "Taskmaster Medallion", stats: {AS: 0.04, TN: 43, CD: 244, CR: 73, DRranged: 176, DRmelee: 176, dodge: 90, SP: 18, HP: 437, MS: 0.049, deflect: 0.11, BD: 246, BR: 73, SK: 2}},
		hood: {name: "The Hood Medallion", stats: {MS: 0.11, DRphysical: 588, DRmental: 588, SK: 2}},
		tombstone: {name: "Tombstone Medallion", stats: {CRmelee: 220, DRmelee: 529, HP: 1314, SK: 2}},
// Venom: missing logic for low-health proc
		venom: {name: "Venom Medallion", stats: {HP: 1892, SK: 2}},
		wizard: {name: "Wizard Medallion", stats: {DRmental: 529, DRranged: 529, SK: 2}}
};

var objRelics = {
		alt: {name: "A.R.M.O.R. Alternate Reality Relic", stats: {HP: 1000, DBsummon: 0.253}},
		asgard: {name: "Relic of Asgard", stats: {HP: 1000, DRmelee: 411}},
		atlantis: {name: "Relic of Atlantis", stats: {HP: 1000, CD: 1107}},
		attilan: {name: "Relic of Attilan", stats: {HP: 1000, DRarea: 316}},
		chandilar: {name: "Relic of Chandilar", stats: {HP: 2000}},
// Chthon missing thorns
		chthon: {name: "Relic of Chthon", stats: {HP: 1000}},
		basic: {name: "Relic of Kakaranathara", stats: {HP: 1000, DRbasic: 474}},
		lemuria: {name: "Relic of Lemuria", stats: {HP: 1000, LOH: 222}},
		skrullos: {name: "Relic of Skrullos", stats: {HP: 1000, TN: 411}},
		subterranea: {name: "Relic of Subterranea", stats: {HP: 1000, DF: 1581}},
		gibborim: {name: "Relic of the Gibborim", stats: {HP: 1000, SP: 252}},
		snakeroot: {name: "Relic of the Snakeroot Clan", stats: {HP: 1000, MS: 0.316}},
		wakanda: {name: "Relic of Wakanda", stats: {HP: 1000, DRdot: 348}},
		xandar: {name: "Relic of Xandar", stats: {HP: 1000, DRranged: 348}}
};

var objBlessings = {
		balder: {name: "Blessing of Balder", stats: {dodgeproj: 0.12}},
		fandral: {name: "Blessing of Fandral", stats: {CR: 400}},
		frigga: {name: "Blessing of Frigga", stats: {SP: 200}},
		heimdall: {name: "Blessing of Heimdall", stats: {TN: 608}},
		hela: {name: "Blessing of Hela", stats: {BC: 0.2}},
		hogun: {name: "Blessing of Hogun", stats: {DBmelee: 0.12}},
		loki: {name: "Blessing of Loki", stats: {DBunaware: 0.12}},
		odin: {name: "Blessing of Odin", stats: {DBboss: 0.2}},
		sif: {name: "Blessing of Sif", stats: {AS: 0.08}},
// Volstagg: 3% scaling defense rating needs logic (same as Luke Cage synergy)
		volstagg: {name: "Blessing of Volstagg", stats: {HP: 210}}
};

var objCostumeAffixes = {
		as1: {name: "Attack Speed", grade: 1, stats: {AS: 0.028}},
		as2: {name: "Attack Speed", grade: 2, stats: {AS: 0.056}},
		as3: {name: "Attack Speed", grade: 3, stats: {AS: 0.086}},
		as4: {name: "Attack Speed", grade: 4, stats: {AS: 0.12}},
		cd1: {name: "Critical Damage Rating", grade: 1, stats: {CD: 382}},
		cd2: {name: "Critical Damage Rating", grade: 2, stats: {CD: 765}},
		cd3: {name: "Critical Damage Rating", grade: 3, stats: {CD: 1177}},
		cd4: {name: "Critical Damage Rating", grade: 4, stats: {CD: 1648}},
		cr1: {name: "Critical Hit Rating", grade: 1, stats: {CR: 106}},
		cr2: {name: "Critical Hit Rating", grade: 2, stats: {CR: 212}},
		cr3: {name: "Critical Hit Rating", grade: 3, stats: {CR: 329}},
		cr4: {name: "Critical Hit Rating", grade: 4, stats: {CR: 457}},
		dr1: {name: "Damage Rating", grade: 1, stats: {DR: 127}},
		dr2: {name: "Damage Rating", grade: 2, stats: {DR: 254}},
		dr3: {name: "Damage Rating", grade: 3, stats: {DR: 391}},
		dr4: {name: "Damage Rating", grade: 4, stats: {DR: 548}},
		hp1: {name: "Health", grade: 1, stats: {HP: 127}},
		hp2: {name: "Health", grade: 2, stats: {HP: 254}},
		hp3: {name: "Health", grade: 3, stats: {HP: 391}},
		hp4: {name: "Health", grade: 4, stats: {HP: 548}}
};

var objAttributes = {
		dur: {name: "Durability", stats: {ATdurability: 1}},
		str: {name: "Strength", stats: {ATstrength: 1}},
		fig: {name: "Fighting", stats: {ATfighting: 1}},
		spd: {name: "Speed", stats: {ATspeed: 1}},
		nrg: {name: "Energy", stats: {ATenergy: 1}},
		int: {name: "Intelligence", stats: {ATintelligence: 1}}
};

var objSynergies = {
		bp: {name: "Black Panther", stats: {MS: 0.03, DBmelee: 0.02}},
		widow: {name: "Black Widow", stats: {DBunaware: 0.04}},
		cable: {name: "Cable", stats: {CC: 0.02}},
		cap: {name: "Captain America", stats: {deflect: 0.04}},
		colossus: {name: "Colossus", stats: {HP: 210, DBphysical: 0.02}},
		cyke: {name: "Cyclops", stats: {DBenergy: 0.02, XP: 0.1}},
		dd: {name: "Daredevil", stats: {DBnormal: 0.03, DBmelee: 0.02}},
		dp: {name: "Deadpool", stats: {RIF: 0.1, SIF: 0.1}},
		strange: {name: "Doctor Strange", stats: {DBmental: 0.04}},
		emma: {name: "Emma Frost", stats: {DBarea: 0.02, proc: 0.02}},
		gambit: {name: "Gambit", stats: {CF: 5, RIF: 0.1}},
		gr: {name: "Ghost Rider", stats: {CCmental: 0.04}},
		hawkeye: {name: "Hawkeye", stats: {MS: 0.02, CM: 0.04}},
		hulk: {name: "Hulk", stats: {HP: 420}},
		torch: {name: "Human Torch", stats: {DBarea: 0.05}},
		iceman: {name: "Iceman", stats: {SP: 15, DBslow: 0.05}},
		iw: {name: "Invisible Woman", stats: {DBenergy: 0.02, deflect: 0.02}},
		im: {name: "Iron Man", stats: {DBranged: 0.02, DBenergy: 0.02}},
		jg: {name: "Jean Grey", stats: {DBmental: 0.03, DBenergy: 0.03}},
		juggernaut: {name: "Juggernaut", stats: {DBmovement: 0.06}},
		loki: {name: "Loki", stats: {DBslow: 0.05, discount: 0.05}},
// Luke Cage should also have 2% Def, it's a multiplier to total Def
		cage: {name: "Luke Cage", stats: {DBphysical: 0.02}},
		magneto: {name: "Magneto", stats: {DBarea: 0.04, pickup: 0.1}},
		mk: {name: "Moon Knight", stats: {CCphysical: 0.04}},
		reed: {name: "Mr. Fantastic", stats: {crafting: 0.05, CM: 0.04}},
		mm: {name: "Ms. Marvel", stats: {DBenergy: 0.04}},
		nc: {name: "Nightcrawler", stats: {DBmelee: 0.04}},
		nova: {name: "Nova", stats: {MS: 0.03, dodge: 0.02}},
		psylocke: {name: "Psylocke", stats: {DBmental: 0.03, DBphysical: 0.03}},
		pun: {name: "Punisher", stats: {LOD: 84, SOD: 4}},
		rr: {name: "Rocket Raccoon", stats: {DBsummon: 0.05, HPsummon: 0.05}},
		rogue: {name: "Rogue", stats: {LOH: 21, SOH: 1}},
		sw: {name: "Scarlet Witch", stats: {DBdot: 0.04}},
		ss: {name: "Silver Surfer", stats: {MS: 0.03, DBenergy: 0.02}},
		sm: {name: "Spider-Man", stats: {dodge: 0.04}},
		sg: {name: "Squirrel Girl", stats: {DBboss: 0.04}},
		sl: {name: "Star-Lord", stats: {CCenergy: 0.04}},
		storm: {name: "Storm", stats: {SP: 30}},
		tasky: {name: "Taskmaster", stats: {dodge: 0.01, deflect: 0.01, DBmelee: 0.01, CM: 0.01}},
		thing: {name: "Thing", stats: {DBattacking: 0.04}},
		thor: {name: "Thor", stats: {DBphysical: 0.03, DBenergy: 0.03}},
		venom: {name: "Venom", stats: {HP: 210, DBhalf: 0.05}},
		ws: {name: "Winter Soldier", stats: {DBranged: 0.03, DBmelee: 0.03}},
		wolvie: {name: "Wolverine", stats: {BC: 0.02, BM: 0.05}},
		x23: {name: "X-23", stats: {DBbleed: 0.04}}
};

var objOmegaPoints = function () {
	var omegaObject = {};
	var grow = function (node, rank) {
		return {
			name: node.name,
			rank: rank,
			stats: {},
			cost: function () {
				var costInitial = (node.cost.initial) ? node.cost.initial : 0;
				var costBase = node.cost.base;
				var costIncrement = node.cost.increment;
				if (node.cost.interval) {
					var incrementSum = 0;
					for (i = this.rank; i > node.cost.interval; i--) {
						var multiplier = Math.floor((i - 1) / node.cost.interval);
						incrementSum += costIncrement * multiplier;
					};
				} else {
					var incrementSum = this.rank * costIncrement * (this.rank - 1) / 2;
				};
				var totalCost = costInitial + costBase * this.rank + incrementSum;
				if (node.prereq) {
					var prereqCost = 0;
					for (var i = 0; i < node.prereq.length; i++) {
						var thisPrereq = node.prereq[i];
						if (omegaSeeds[thisPrereq].equipped == true) {
							prereqCost = 0;
							break;
						} else {
							var thisCost = omegaObject[thisPrereq + "_1"].cost();
							var prereqCost = (prereqCost == 0) ? thisCost : Math.min(prereqCost, thisCost);
						};
					};
					totalCost += prereqCost;
				};
				return Math.floor(totalCost);
			}
		};
	};
	for (seed in omegaSeeds) {
		var omegaNode = omegaSeeds[seed];
		for (var i = 1; i <= omegaNode.ranks; i++) {
			omegaObject[seed + "_" + i] = grow(omegaNode, i);
			for (stat in omegaNode.stats) {
				omegaObject[seed + "_" + i].stats[stat] = omegaNode.stats[stat] * omegaObject[seed + "_" + i].rank;
			};
		};
	};
	return omegaObject;
};

var omegaSeeds = {
	AAarcaneattunement: {
		name: "Arcane Attunement",
		ranks: 40,
		cost: {base: 3, increment: 1, interval: 10},
		stats: {SP: 1}
	},
	AAdoomsmysticarmor: {
		name: "Doom's Mystic Armor",
		ranks: 20,
		cost: {base: 16, increment: 1},
		stats: {CRenergy: 6, DRenergy: 6, BRenergy: 6},
		prereq: ["AAarcaneattunement"]
	},
	AAironfist: {
		name: "Iron Fist",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DBmental_if_physical: 0.01},
		prereq: ["AAarcaneattunement"]
	},
	AAmjolnir: {
		name: "Mjolnir",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DBenergy_if_physical: 0.01},
		prereq: ["AAarcaneattunement"]
	},
	AAprinceoforphans: {
		name: "Prince of Orphans",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DBphysical_if_mental: 0.01},
		prereq: ["AAironfist"]
	},
	AAstormbreaker: {
		name: "Stormbreaker",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DBphysical_if_energy: 0.01},
		prereq: ["AAmjolnir"]
	},
	AAzarathos: {
		name: "Zarathos",
		ranks: 20,
		cost: {base: 16, increment: 1},
		stats: {CRmental: 6, DRmental: 6, BRmental: 6},
		prereq: ["AAarcaneattunement"]
	},
	HAadamantiumlacedskin: {
		name: "Adamantium-Laced Skin",
		ranks: 20,
		cost: {base: 8, increment: 1},
		stats: {DFphysical: 30}
	},
	HAcyberneticclaws: {
		name: "Cybernetic Claws",
		ranks: 10,
		cost: {base: 20, increment: 2},
		stats: {CM: 0.02, DB: -0.01},
		prereq: ["HAelixirofimmortality"]
	},
	HAelixirofimmortality: {
		name: "Elixir of Immortality",
		ranks: 10,
		cost: {initial: 82, base: 18, increment: 2},
		stats: {HP: 70},
		prereq: ["HAadamantiumlacedskin"]
	},
	HAdeathlokprogram: {
		name: "Deathlok Program",
		ranks: 30,
		cost: {base: 12, increment: 1},
		stats: {DRphysical: 12}
	},
	HAextechopcyberneticbodyupgrades: {
		name: "ExTechOp Cybernetic Body Upgrades",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DRphysical: 24},
		prereq: ["HAdeathlokprogram"]
	},
// Goblin Formula missing proc logic, proc stats (too inconsistent)
	HAgoblinformula: {
		name: "Goblin Formula",
		ranks: 5,
		cost: {base: 300, increment: 25},
		stats: {ATfighting: 1},
		prereq: ["HAextechopcyberneticbodyupgrades"]
	},
	HAreaverprogram: {
		name: "Reaver Program",
		ranks: 10,
		cost: {base: 40, increment: 5},
		stats: {DBphysical: 0.01},
		prereq: ["HAdeathlokprogram"]
	},
	HAsupersoldierserum: {
		name: "Super Soldier Serum",
		ranks: 5,
		cost: {base: 200, increment: 10},
		stats: {ATstrength: 1},
		prereq: ["HAreaverprogram"]
	},
	MAamphogenesis: {
		name: "Amphogenesis",
		ranks: 10,
		cost: {base: 200, increment: 25},
		stats: {DBbasic: 0.01, ATintelligence: 1, DBsummon: 0.01},
		prereq: ["MAterrigencrystals"]
	},
	MAantigenesis: {
		name: "Antigenesis",
		ranks: 10,
		cost: {base: 250, increment: 5},
		stats: {DFmental: 6, deflect: 0.001, ATenergy: 1},
		prereq: ["MAterrigencrystals"]
	},
	MAexogenesis: {
		name: "Exogenesis",
		ranks: 10,
		cost: {base: 50, increment: 2},
		stats: {DBenergy: 0.1},
		prereq: ["MAterrigencrystals"]
	},
	MApymsgrowthparticles: {
		name: "Pym's Growth Particles",
		ranks: 20,
		cost: {initial: 125, base: 175, increment: 25},
		stats: {HP: 60, ATstrength: 1}
	},
// Pym's Hybrid Particles missing proc logic
	MApymshybridparticles: {
		name: "Pym's Hybrid Particles",
		ranks: 20,
		cost: {base: 60, increment: 2},
		stats: {DBmelee: 0.01, DF: 60}
	},
	MApymsshrinkingparticles: {
		name: "Pym's Shrinking Particles",
		ranks: 20,
		cost: {initial: 125, base: 175, increment: 25},
		stats: {ATspeed: 1, dodge: 6}
	},
// Terrigen Crystals missing proc logic
	MAterrigencrystals: {
		name: "Terrigen Crystals",
		ranks: 10,
		cost: {initial: 20, base: 20, increment: 0},
		stats: {ATrandom: 1}
	},
	MAterrigenesis: {
		name: "Terrigenesis",
		ranks: 10,
		cost: {base: 500, increment: 50},
		stats: {ATspeed: 1, ATstrength: 1, ATdurability: 1},
		prereq: ["MAterrigencrystals"]
	},
// Xerogenesis missing proc logic
	MAxerogenesis: {
		name: "Xerogenesis",
		ranks: 10,
		cost: {base: 60, increment: 5},
		stats: {BR: 30, SP: -2, BD: 60, DB: 0.02},
		prereq: ["MAterrigencrystals"]
	},
	MUangel: {
		name: "Angel",
		ranks: 5,
		cost: {base: 80, increment: 5},
		stats: {proc: 0.01}
	},
	MUapocalypse: {
		name: "Apocalypse",
		ranks: 1,
		cost: {base: 4000, increment: 0},
		stats: {ATspeed: 5, ATenergy: 5, ATstrength: 5, ATfighting: 5, ATintelligence: 5, ATdurability: 5},
		prereq: ["MUsabretooth"]
	},
	MUchamber: {
		name: "Chamber",
		ranks: 10,
		cost: {base: 30, increment: 5},
		stats: {DBmental: 0.01},
		prereq: ["MUangel", "MUpsylocke"]
	},
	MUfrenzy: {
		name: "Frenzy",
		ranks: 10,
		cost: {base: 20, increment: 2},
		stats: {CD_if_melee: 60}
	},
	MUpsylocke: {
		name: "Psylocke",
		ranks: 10,
		cost: {base: 35, increment: 5},
		stats: {DBmental_if_movement: 0.01, DBphysical_if_movement: 0.01}
	},
	MUsabretooth: {
		name: "Sabretooth",
		ranks: 5,
		cost: {base: 150, increment: 25},
		stats: {BR: 120, BD: 180}
	},
	MUwarpath: {
		name: "Warpath",
		ranks: 10,
		cost: {base: 180, increment: 10},
		stats: {ATfighting: 1},
		prereq: ["MUangel"]
	},
// Extremis Durability might need logic to handle percentile DF increases (see Luke Cage)
	NTextremisdurability: {
		name: "Extremis Durability",
		ranks: 40,
		cost: {base: 50, increment: 10},
		stats: {DFphysical: 0.02, DFenergy: 0.02},
		prereq: ["NTextremisstrength"]
	},
	NTextremiselectricity: {
		name: "Extremis Electricity",
		ranks: 40,
		cost: {base: 2, increment: 1},
		stats: {proc: 60.4},
		prereq: ["NTextremishealing"]
	},
	NTextremisfire: {
		name: "Extremis Fire",
		ranks: 40,
		cost: {base: 10, increment: 1},
		stats: {proc: 701.9},
		prereq: ["NTextremisreflexes"]
	},
	NTextremishealing: {
		name: "Extremis Healing",
		ranks: 20,
		cost: {base: 5, increment: 1},
		stats: {regen: 60},
		prereq: ["NTmicrosurgeryexperimentalrobotics"]
	},
// Extremis Reflexes missing attacked proc logic
	NTextremisreflexes: {
		name: "Extremis Reflexes",
		ranks: 25,
		cost: {base: 50, increment: 10},
		stats: {dodge: 60, AS: 0.01},
		prereq: ["NTextremiselectricity"]
	},
	NTextremisspeed: {
		name: "Extremis Speed",
		ranks: 25,
		cost: {base: 70, increment: 10},
		stats: {MS: 0.01, AS: 0.01},
		prereq: ["NTextremisfire"]
	},
	NTextremisstamina: {
		name: "Extremis Stamina",
		ranks: 25,
		cost: {base: 50, increment: 25},
		stats: {discountmelee: 0.01},
		prereq: ["NTextremisspeed"]
	},
	NTextremisstrength: {
		name: "Extremis Strength",
		ranks: 25,
		cost: {base: 40, increment: 5},
		stats: {DBmelee: 0.01},
		prereq: ["NTextremisstamina"]
	},
	NTmark30extremisarmor: {
		name: "Mark 30 Extremis Armor",
		ranks: 25,
		cost: {initial: 225, base: 375, increment: 25},
		stats: {SP: 10, ATdurability: 1, ATenergy: 1, ATstrength: 1},
		prereq: ["NTextremisdurability"]
	},
	NTmicrosurgeryexperimentalrobotics: {
		name: "Microsurgery Experimental Robotics",
		ranks: 25,
		cost: {base: 5, increment: 1},
		stats: {XOD: 5}
	},
	NTspintech: {
		name: "S.P.I.N. Tech",
		ranks: 10,
		cost: {base: 38, increment: 2},
		stats: {DRboss: 60}
	},
	NEamadeuscho: {
		name: "Amadeus Cho",
		ranks: 5,
		cost: {base: 50, increment: 25},
		stats: {BC: -0.05, ATintelligence: 1, CC: 0.01},
		prereq: ["NEtacticalneuralimplant"]
	},
	NEassassinprogramming: {
		name: "Assassin Programming",
		ranks: 5,
		cost: {base: 20, increment: 2},
		stats: {proc: 3088},
		prereq: ["NEcochlearimplant"]
	},
	NEcerebro: {
		name: "Cerebro",
		ranks: 20,
		cost: {base: 20, increment: 2},
		stats: {DF: -120, DRmental: 60},
		prereq: ["NEtacticalneuralimplant"]
	},
	NEcochlearimplant: {
		name: "Cochlear Implant",
		ranks: 20,
		cost: {base: 15, increment: 1},
		stats: {deflect: 0.001, dodge: 6}
	},
	NEguiltsuppressionresearch: {
		name: "Guilt Suppression Research",
		ranks: 10,
		cost: {base: 40, increment: 5},
		stats: {BR: 60, SP: -1, SOD: 1},
		prereq: ["NEcochlearimplant"]
	},
	NEneuralrecovery: {
		name: "Neural Recovery",
		ranks: 50,
		cost: {base: 6, increment: 1},
		stats: {SOM: 1}
	},
	NEneurobiotics: {
		name: "Neurobiotics",
		ranks: 10,
		cost: {base: 25, increment: 1},
		stats: {DRphysical: 24, DRmental: 24}
	},
	NEtacticalneuralimplant: {
		name: "Tactical Neural Implant",
		ranks: 10,
		cost: {base: 40, increment: 5},
		stats: {CD: 30, CRmelee: 30},
		prereq: ["NEneuralrecovery"]
	},
// Combat Rorschach Training should be DBvuln
	NEcombatrorschachtraining: {
		name: "Combat Rorschach Training",
		ranks: 10,
		cost: {initial: 12, base: 38, increment: 2},
		stats: {DB: 0.01},
		prereq: ["NEassassinprogramming", "NEguiltsuppressionresearch"]
	},
	PSclairsentience: {
		name: "Clairsentience",
		ranks: 20,
		cost: {base: 1, increment: 1, interval: 5},
		stats: {XOD: 1}
	},
	PSfocusedstrengthofgrom: {
		name: "Focused Strength of Grom",
		ranks: 1,
		cost: {base: 1200, increment: 0},
		stats: {MS: -0.07, ATstrength: 7, SP: -70},
		prereq: ["PStelepathicimmunity", "PSmindovermatter"]
	},
	PSmastertelepath: {
		name: "Master Telepath",
		ranks: 10,
		cost: {base: 40, increment: 5},
		stats: {DBmental: 0.01},
		prereq: ["PSmeltface"]
	},
	PSmeltface: {
		name: "Melt Face",
		ranks: 40,
		cost: {base: 6, increment: 1},
		stats: {BD: 60},
		prereq: ["PSclairsentience"]
	},
	PSmentaldiscipline: {
		name: "Mental Discipline",
		ranks: 5,
		cost: {base: 100, increment: 50},
		stats: {discount: 0.01},
		prereq: ["PSmisdirection"]
	},
	PSmergeandpossess: {
		name: "Merge and Possess",
		ranks: 20,
		cost: {base: 25, increment: 5},
		stats: {DBsummon: 0.01, HPsummon: 0.01}
	},
	PSmindovermatter: {
		name: "Mind Over Matter",
		ranks: 10,
		cost: {base: 300, increment: 25},
		stats: {ATenergy: 1, ATstrength: -1, ATintelligence: 1, ATdurability: -1},
		prereq: ["PSmergeandpossess", "PStelepathicimmunity"]
	},
	PSmisdirection: {
		name: "Misdirection",
		ranks: 5,
		cost: {base: 125, increment: 25},
		stats: {deflect: 0.01},
		prereq: ["PSpsionicshotgun"]
	},
	PSomegamachine: {
		name: "Omega Machine",
		ranks: 10,
		cost: {base: 40, increment: 5},
		stats: {DBenergy: 0.01, DBmental: 0.01},
		prereq: ["PStelekineticresearch"]
	},
	PSonslaught: {
		name: "Onslaught",
		ranks: 5,
		cost: {base: 1000, increment: 1000},
		stats: {DBnormal: 0.1, CRmental: 100, DRmental: 99.8, BRmental: 100, HP: 700},
		prereq: ["PSomegamachine", "PSmentaldiscipline"]
	},
	PSovermindspower: {
		name: "Overmind's Power",
		ranks: 1,
		cost: {base: 1200, increment: 0},
		stats: {ATintelligence: 6},
		prereq: ["PSthestepfordcuckoos", "PSsupremeintelligence"]
	},
	PSphoenixforce: {
		name: "Phoenix Force",
		ranks: 1,
		cost: {base: 2500, increment: 0},
		stats: {ATenergy: 10},
		prereq: ["PSomegamachine", "PSonslaught"]
	},
	PSprecognition: {
		name: "Precognition",
		ranks: 20,
		cost: {base: 3, increment: 1, interval: 10},
		stats: {XOD: 1, dodge: 6}
	},
	PSpreview: {
		name: "Preview",
		ranks: 10,
		cost: {initial: 181, base: 19, increment: 1},
		stats: {proc: -1},
		prereq: ["PSpsioniccharge"]
	},
	PSpsioniccharge: {
		name: "Psionic Charge",
		ranks: 10,
		cost: {base: 40, increment: 2},
		stats: {DRranged: 0.01},
		prereq: ["PSpsionicexoskeleton"]
	},
	PSpsionicexoskeleton: {
		name: "Psionic Exoskeleton",
		ranks: 20,
		cost: {base: 10, increment: 1},
		stats: {DF: 30},
		prereq: ["PSpsychoportation"]
	},
	PSpsionicoverload: {
		name: "Psionic Overload",
		ranks: 5,
		cost: {base: 100, increment: 25},
		stats: {DB: 0.05},
		prereq: ["PSpsycheblasts"]
	},
	PSpsionicshotgun: {
		name: "Psionic Shotgun",
		ranks: 10,
		cost: {initial: 32, base: 18, increment: 2},
		stats: {proc: 6000},
		prereq: ["PSpsychoportation"]
	},
	PSpsionicvampire: {
		name: "Psionic Vampire",
		ranks: 5,
		cost: {base: 50, increment: 2},
		stats: {proc: 60},
		prereq: ["PSmastertelepath"]
	},
	PSpsycheblasts: {
		name: "Psyche Blasts",
		ranks: 10,
		cost: {base: 200, increment: 20},
		stats: {proc: 0.01},
		prereq: ["PSpreview"]
	},
	PSpsychometry: {
		name: "Psychometry",
		ranks: 10,
		cost: {base: 50, increment: 5},
		stats: {SIF: 0.01},
		prereq: ["PSprecognition"]
	},
	PSpsychoportation: {
		name: "Psychoportation",
		ranks: 10,
		cost: {base: 30, increment: 10},
		stats: {discountmovement: 0.01},
		prereq: ["PSprecognition"]
	},
	PSshadowkingspossession: {
		name: "Shadow King's Possession",
		ranks: 20,
		cost: {base: 50, increment: 2},
		stats: {BR: 24, DBsummon: 0.01, CR: 24}
	},
	PSsupremeintelligence: {
		name: "Supreme Intelligence",
		ranks: 10,
		cost: {base: 200, increment: 25},
		stats: {MS: -0.01, ATintelligence: 1},
		prereq: ["PSshadowkingspossession", "PSthestepfordcuckoos"]
	},
	PStelekineticresearch: {
		name: "Telekinetic Research",
		ranks: 20,
		cost: {base: 20, increment: 2},
		stats: {DRmental: 12, CD: 12},
		prereq: ["PSpsionicvampire"]
	},
	PStelepathicimmunity: {
		name: "Telepathic Immunity",
		ranks: 20,
		cost: {base: 2, increment: 2},
		stats: {DFmental: 60},
		prereq: ["PSshadowkingspossession"]
	},
	PSthestepfordcuckoos: {
		name: "The Stepford Cuckoos",
		ranks: 10,
		cost: {base: 50, increment: 5},
		stats: {DBsummon: 0.01, CRsummon: 0.01, BRsummon: 0.01},
		prereq: ["PSmergeandpossess"]
	},
	ROharpy: {
		name: "Harpy",
		ranks: 5,
		cost: {base: 20, increment: 2},
		stats: {CR_if_melee: 12, BR_if_melee: 12}
	},
	ROlyra: {
		name: "Lyra",
		ranks: 5,
		cost: {base: 40, increment: 10},
		stats: {CR_if_melee: 30, CD_if_melee: 30},
		prereq: ["ROharpy"]
	},
	SWassaultrifles: {
		name: "Assault Rifles",
		ranks: 20,
		cost: {base: 40, increment: 5},
		stats: {DBranged: 0.01}
	},
	SWfocusedplasmacannon: {
		name: "Focused Plasma Cannon",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DRphysical_if_ranged: 36, DRenergy_if_ranged: 36}
	},
	SWnightnightpistol: {
		name: "Night Night Pistol",
		ranks: 20,
		cost: {base: 60, increment: 5},
		stats: {DBranged: 0.01, proc: 1},
		prereq: ["SWfocusedplasmacannon"]
	},
	SWsilencers: {
		name: "Silencers",
		ranks: 20,
		cost: {base: 30, increment: 2},
		stats: {DBunaware: 0.01},
		prereq: ["SWassaultrifles"]
	},
};

var masterOptions = {
		Legendary: objLegendary,
		Medallion: objMedallion,
		Relics: objRelics,
		Blessings: objBlessings,
		Synergies: objSynergies,
		Omega_Points: objOmegaPoints(),
		Costume_Affixes: objCostumeAffixes,
		Attributes: objAttributes
};