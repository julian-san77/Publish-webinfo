// Animals Data Module
// Data extracted from "Perbandingan Umur dan Berat Makhluk Hidup" research document

const animalsData = [
  // MAMMALS - SMALL
  {
    id: 1,
    name: "Celurut Etrusca",
    scientificName: "Suncus etruscus",
    category: "mamalia",
    mass: 0.0018, // kg (1.8 gram)
    lifespan: 1.5, // years
    heartRate: 1000, // bpm
    metabolism: "sangat tinggi",
    funFact:
      "Mamalia terkecil di dunia, harus makan 200-300% berat badannya setiap hari!",
    imageEmoji: "🐭",
  },
  {
    id: 2,
    name: "Tikus Laboratorium",
    scientificName: "Mus musculus",
    category: "mamalia",
    mass: 0.025, // kg (25 gram)
    lifespan: 2.5, // years
    heartRate: 500, // bpm
    metabolism: "tinggi",
    funFact: "Metabolisme sangat cepat, model standar penelitian penuaan",
    imageEmoji: "🐀",
  },
  {
    id: 3,
    name: "Tikus Tanah Telanjang",
    scientificName: "Heterocephalus glaber",
    category: "mamalia",
    mass: 0.032, // kg (32 gram)
    lifespan: 30, // years (OUTLIER!)
    heartRate: 200, // bpm estimate
    metabolism: "rendah untuk ukurannya",
    funFact:
      "Hidup 10x lebih lama dari tikus biasa! Kebal kanker berkat Asam Hialuronat berat molekul tinggi (HMW-HA)",
    imageEmoji: "🐭",
    isOutlier: true,
  },

  // MAMMALS - MEDIUM
  {
    id: 4,
    name: "Chihuahua",
    scientificName: "Canis lupus familiaris",
    category: "mamalia",
    mass: 2.5, // kg
    lifespan: 15, // years
    heartRate: 100, // bpm
    metabolism: "sedang-tinggi",
    funFact: "Anjing ras kecil hidup lebih lama karena kadar IGF-1 yang rendah",
    imageEmoji: "🐕",
  },
  {
    id: 5,
    name: "Great Dane",
    scientificName: "Canis lupus familiaris",
    category: "mamalia",
    mass: 70, // kg
    lifespan: 8, // years
    heartRate: 70, // bpm
    metabolism: "sedang",
    funFact:
      "Paradoks anjing: Lebih besar = lebih pendek umurnya. Kadar IGF-1 tinggi mempercepat penuaan",
    imageEmoji: "🐕",
    isAnomaly: true,
  },
  {
    id: 6,
    name: "Manusia",
    scientificName: "Homo sapiens",
    category: "mamalia",
    mass: 70, // kg (average)
    lifespan: 80, // years (modern average)
    heartRate: 65, // bpm
    metabolism: "sedang",
    funFact:
      "Outlier metabolik! Hidup 2.5 miliar detak (2.5x standar mamalia 1 miliar)",
    imageEmoji: "👨",
    isOutlier: true,
  },

  // MAMMALS - LARGE
  {
    id: 7,
    name: "Gajah Afrika",
    scientificName: "Loxodonta africana",
    category: "mamalia",
    mass: 6000, // kg
    lifespan: 65, // years
    heartRate: 30, // bpm
    metabolism: "rendah",
    funFact:
      "Memiliki 40 alel gen TP53 (20 pasang) untuk melawan kanker! Solusi Paradoks Peto",
    imageEmoji: "🐘",
  },
  {
    id: 8,
    name: "Paus Biru",
    scientificName: "Balaenoptera musculus",
    category: "mamalia",
    mass: 150000, // kg
    lifespan: 90, // years
    heartRate: 8, // bpm
    metabolism: "sangat rendah",
    funFact:
      "Hewan terbesar yang pernah ada! Makan 16 ton krill/hari (hanya 10-12% berat badannya)",
    imageEmoji: "🐋",
  },
  {
    id: 9,
    name: "Paus Bowhead",
    scientificName: "Balaena mysticetus",
    category: "mamalia",
    mass: 100000, // kg
    lifespan: 200, // years
    heartRate: 10, // bpm estimate
    metabolism: "sangat rendah",
    funFact:
      "Paus paling panjang umur! Mutasi unik pada gen ERCC1 & PCNA meningkatkan perbaikan DNA",
    imageEmoji: "🐋",
  },

  // MAMMALS - FLYING
  {
    id: 10,
    name: "Kelelawar Myotis",
    scientificName: "Myotis lucifugus",
    category: "mamalia",
    mass: 0.008, // kg (8 gram)
    lifespan: 40, // years (OUTLIER!)
    heartRate: 400, // bpm resting
    metabolism: "tinggi saat terbang",
    funFact:
      "Terbang = metabolisme ekstrem, memaksa evolusi sistem perbaikan DNA super efisien!",
    imageEmoji: "🦇",
    isOutlier: true,
  },

  // BIRDS
  {
    id: 11,
    name: "Kakatua",
    scientificName: "Cacatua spp.",
    category: "burung",
    mass: 0.9, // kg
    lifespan: 85, // years
    heartRate: 150, // bpm
    metabolism: "tinggi",
    funFact:
      "Penyangga kognitif: otak besar = umur panjang. Kecerdasan = strategi anti-penuaan!",
    imageEmoji: "🦜",
  },
  {
    id: 12,
    name: "Burung Kolibri",
    scientificName: "Trochilidae",
    category: "burung",
    mass: 0.003, // kg (3 gram)
    lifespan: 5, // years
    heartRate: 1200, // bpm saat aktif!
    metabolism: "ekstrem tinggi",
    funFact:
      "Jantung tercepat! Harus makan terus-menerus atau mati kelaparan dalam jam",
    imageEmoji: "🐦",
  },

  // REPTILES
  {
    id: 13,
    name: "Kura-kura Galápagos",
    scientificName: "Chelonoidis nigra",
    category: "reptil",
    mass: 250, // kg
    lifespan: 150, // years
    heartRate: 10, // bpm (reptil, bervariasi dengan suhu)
    metabolism: "sangat rendah (ectotherm)",
    funFact:
      "Negligible senescence: tidak menua! Risiko kematian tidak meningkat seiring usia",
    imageEmoji: "🐢",
    negligibleSenescence: true,
  },
  {
    id: 14,
    name: "Tuatara",
    scientificName: "Sphenodon punctatus",
    category: "reptil",
    mass: 1, // kg
    lifespan: 120, // years
    heartRate: 10, // bpm estimate
    metabolism: "sangat rendah",
    funFact:
      "Fosil hidup dari era dinosaurus, masih bereproduksi di usia 100+ tahun",
    imageEmoji: "🦎",
    negligibleSenescence: true,
  },

  // FISH & MARINE
  {
    id: 15,
    name: "Hiu Greenland",
    scientificName: "Somniosus microcephalus",
    category: "ikan",
    mass: 1000, // kg
    lifespan: 400, // years (estimate 272-512)
    heartRate: 5, // bpm estimate (sangat lambat)
    metabolism: "ekstrem rendah",
    funFact:
      "Hewan vertebrata terpanjang umur! Baru puber di usia 150 tahun, mungkin hidup sejak 1500-an!",
    imageEmoji: "🦈",
    negligibleSenescence: true,
  },
  {
    id: 16,
    name: "Ikan Koi",
    scientificName: "Cyprinus rubrofuscus",
    category: "ikan",
    mass: 10, // kg (bisa lebih)
    lifespan: 200, // years (record: Hanako 226 tahun)
    heartRate: 60, // bpm estimate
    metabolism: "rendah",
    funFact:
      "Koi tertua (Hanako) hidup 226 tahun! Pertumbuhan tak terbatas (indeterminate growth)",
    imageEmoji: "🐟",
  },
  {
    id: 17,
    name: "Lobster Amerika",
    scientificName: "Homarus americanus",
    category: "krustasea",
    mass: 20, // kg (bisa sangat besar)
    lifespan: 100, // years+ (theoretical no limit)
    heartRate: 50, // bpm estimate
    metabolism: "sedang",
    funFact:
      "Mitos keabadian: telomerase aktif = sel tidak menua, tapi mati kelelahan saat molting",
    imageEmoji: "🦞",
    negligibleSenescence: true,
  },

  // INVERTEBRATES
  {
    id: 18,
    name: "Ubur-ubur Abadi",
    scientificName: "Turritopsis dohrnii",
    category: "cnidaria",
    mass: 0.00001, // kg (sangat kecil)
    lifespan: null, // potentially immortal
    heartRate: null, // no heart
    metabolism: "rendah",
    funFact:
      "Satu-satunya hewan biologis abadi! Bisa kembali jadi polip (bayi) saat stres atau tua",
    imageEmoji: "🪼",
    negligibleSenescence: true,
    isImmortal: true,
  },
  {
    id: 19,
    name: "Kerang Quahog",
    scientificName: "Arctica islandica",
    category: "moluska",
    mass: 0.1, // kg
    lifespan: 500, // years (record: Ming 507 tahun)
    heartRate: null, // no heart in traditional sense
    metabolism: "ekstrem rendah",
    funFact:
      "Kerang tertua (Ming) hidup 507 tahun, lahir saat Dinasti Ming China!",
    imageEmoji: "🦪",
    negligibleSenescence: true,
  },

  // PLANTS (bonus)
  {
    id: 20,
    name: "Pohon Bristlecone Pine",
    scientificName: "Pinus longaeva",
    category: "tumbuhan",
    mass: 5000, // kg estimate
    lifespan: 5000, // years (record: Methuselah 4,853 tahun)
    heartRate: null,
    metabolism: "sangat rendah",
    funFact:
      "Organisme tertua di Bumi! Pohon tertua lahir sebelum piramida Mesir dibangun",
    imageEmoji: "🌲",
    negligibleSenescence: true,
  },
];

// Helper Functions
function calculateLifetimeHeartbeats(animal) {
  if (!animal.heartRate || !animal.lifespan) return null;
  const minutesPerYear = 60 * 24 * 365.25;
  return Math.round(animal.heartRate * minutesPerYear * animal.lifespan);
}

function getMetabolicRate(mass) {
  // Kleiber's Law: BMR ∝ M^(3/4)
  // Normalized constant for mammals
  const B0 = 70; // kcal/day for 70kg mammal
  return B0 * Math.pow(mass / 70, 0.75);
}

function getAnimalsByCategory(category) {
  if (category === "all") return animalsData;
  return animalsData.filter((a) => a.category === category);
}

function searchAnimals(searchTerm) {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return animalsData;

  return animalsData.filter(
    (animal) =>
      animal.name.toLowerCase().includes(term) ||
      animal.scientificName.toLowerCase().includes(term) ||
      animal.funFact.toLowerCase().includes(term)
  );
}

function getOutliers() {
  return animalsData.filter(
    (a) => a.isOutlier || a.negligibleSenescence || a.isImmortal
  );
}

// Add calculated heartbeats to all animals
animalsData.forEach((animal) => {
  animal.totalHeartbeats = calculateLifetimeHeartbeats(animal);
});

// Export for use in HTML
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    animalsData,
    calculateLifetimeHeartbeats,
    getMetabolicRate,
    getAnimalsByCategory,
    searchAnimals,
    getOutliers,
  };
}
