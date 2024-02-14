
console.log("ready");
var aan = 0;
var aanB = 0;
var aanNum = 0;
var aanNumB = 0;
var aamB = 0;
var aamC = 0;
var aamD = 0;
const AtomicSymbol = [ // An array of Atomic elements. Use = AtomicSymbol[<element>]. name: Name of element (str); shortform: Element intials (str); aanConst: Atomic number (int) ; group: Group on periodic table (int) ; period: Period on periodic table (int) 
    {
        name: "N/A",
        shortform: "N/A",
        aanConst: 0, 
        group: -1,
        period: -1,
        avgMass: -1,
    },
    {
        name: "Hydrogen",
        shortform: "H",
        aanConst: 1, //Atomic number. Used aanConst so that it wouldn't get confused with var aan
        group: 1,
        period: 1,
        avgMass: 1.0078,
    },
    {
        name: "Helium",
        shortform: "He",
        aanConst: 2, 
        group: 18,
        period: 1,
        avgMass: 4.0026,
    },
    {
        name: "Lithium",
        shortform: "Li",
        aanConst: 3, 
        group: 1,
        period: 2,
        avgMass: 6.9410,
    },
    {
        name: "Beryllium",
        shortform: "Be",
        aanConst: 4, 
        group: 2,
        period: 2,
        avgMass: 4.0026,
    },
    {
        name: "Boron",
        shortform: "B",
        aanConst: 5, 
        group: 13,
        period: 2,
        avgMass: 10.811,
    },
    {
        name: "Carbon",
        shortform: "C",
        aanConst: 6, 
        group: 14,
        period: 2,
        avgMass: 12.011,
    },
    {
        name: "Nitrogen",
        shortform: "N",
        aanConst: 7, 
        group: 15,
        period: 2,
        avgMass: 14.007,
    },
    {
        name: "Oxygen",
        shortform: "O",
        aanConst: 8, 
        group: 16,
        period: 2,
        avgMass: 15.999,
    },
    {
        name: "Fluorine",
        shortform: "F",
        aanConst: 9, 
        group: 17,
        period: 2,
        avgMass: 18.998,
    },
    {
        name: "Neon",
        shortform: "Ne",
        aanConst: 10, 
        group: 18,
        period: 2,
        avgMass: 20.180,
    },    {
        name: "Sodium",
        shortform: "Na",
        aanConst: 11, 
        group: 1,
        period: 3,
        avgMass: 22.990,
    },
    {
        name: "Magnesium",
        shortform: "Mg",
        aanConst: 12, 
        group: 2,
        period: 3,
        avgMass: 24.305,
    },
    {
        name: "Aluminium", // I pronounce it the British way *sunglasses emoji*
        shortform: "Al",
        aanConst: 13, 
        group: 13,
        period: 3,
        avgMass: 26.982,
    },
    {
        name: "Silicon",
        shortform: "Si",
        aanConst: 14, 
        group: 14,
        period: 3,
        avgMass: 28.085,
    },
    {
        name: "Phosphorus",
        shortform: "P",
        aanConst: 15, 
        group: 15,
        period: 3,
        avgMass: 30.974,
    },
    {
        name: "Sulphur",
        shortform: "S",
        aanConst: 16, 
        group: 16,
        period: 3,
        avgMass: 32.065,
    },    {
        name: "Chlorine",
        shortform: "Cl",
        aanConst: 17, 
        group: 17,
        period: 3,
        avgMass: 35.453,
    },
    {
        name: "Argon",
        shortform: "Ar",
        aanConst: 18, 
        group: 18,
        period: 3,
        avgMass: 39.948,
    },
    {
        name: "Potassium",
        shortform: "K",
        aanConst: 19, 
        group: 1,
        period: 4,
        avgMass: 39.098,
    },
    {
        name: "Calcium",
        shortform: "Ca",
        aanConst: 20, 
        group: 2,
        period: 4,
        avgMass: 40.078,
    },
    {
        name: "Scandium",
        shortform: "Sc",
        aanConst: 21, 
        group: 3,
        period: 4,
        avgMass: 44.956,
    },
    {
        name: "Titanium",
        shortform: "Ti",
        aanConst: 22, 
        group: 4,
        period: 4,
        avgMass: 47.867,
    },
    {
        name: "Vanadium",
        shortform: "V",
        aanConst: 23, 
        group: 5,
        period: 4,
        avgMass: 50.942,
    },
    {
        name: "Chromium",
        shortform: "Cr",
        aanConst: 24, 
        group: 6,
        period: 4,
        avgMass: 51.996,
    },
    {
        name: "Manganese",
        shortform: "Mn",
        aanConst: 25, 
        group: 7,
        period: 4,
        avgMass: 54.938,
    },    
    {
        name: "Iron",
        shortform: "Fe",
        aanConst: 26, 
        group: 8,
        period: 4,
        avgMass: 55.845,
    },
    {
        name: "Cobalt",
        shortform: "Co",
        aanConst: 27, 
        group: 9,
        period: 4,
        avgMass: 58.933,
    },
    {
        name: "Nickel",
        shortform: "Ni",
        aanConst: 28, 
        group: 10,
        period: 4,
        avgMass: 58.693,
    },
    {
        name: "Copper",
        shortform: "Cu",
        aanConst: 29, 
        group: 11,
        period: 4,
        avgMass: 63.546,
    },
    {
        name: "Zinc",
        shortform: "Zn",
        aanConst: 30, 
        group: 12,
        period: 4,
        avgMass: 65.38,
    },
    {
        name: "Gallium",
        shortform: "Ga",
        aanConst: 31, 
        group: 13,
        period: 4,
        avgMass: 69.723,
    },
    {
        name: "Germanium",
        shortform: "Ge",
        aanConst: 32, 
        group: 14,
        period: 4,
        avgMass: 72.63,
    },
    {
        name: "Arsenic",
        shortform: "As",
        aanConst: 33, 
        group: 15,
        period: 4,
        avgMass: 74.922,
    },
    {
        name: "Selenium",
        shortform: "Se",
        aanConst: 34, 
        group: 16,
        period: 4,
        avgMass: 78.971,
    },
    {
        name: "Bromine",
        shortform: "Br",
        aanConst: 35, 
        group: 17,
        period: 4,
        avgMass: 79.904,
    },
    {
        name: "Krypton",
        shortform: "Kr",
        aanConst: 36, 
        group: 18,
        period: 4,
        avgMass: 83.798,
    },
    {
        name: "Rubidium",
        shortform: "Rb",
        aanConst: 37, 
        group: 1,
        period: 5,
        avgMass: 85.468,
    },
    {
        name: "Strontium",
        shortform: "Sr",
        aanConst: 38, 
        group: 2,
        period: 5,
        avgMass: 87.62,
    },
    {
        name: "Yttrium",
        shortform: "Y",
        aanConst: 39, 
        group: 3,
        period: 5,
        avgMass: 88.906,
    },
    {
        name: "Zirconium",
        shortform: "Zn",
        aanConst: 40, 
        group: 4,
        period: 5,
        avgMass: 91.224,
    },
    {
        name: "Niobium",
        shortform: "Nb",
        aanConst: 41, 
        group: 5,
        period: 5,
        avgMass: 92.906,
    },
    {
        name: "Molybdenum",
        shortform: "Mo",
        aanConst: 42, 
        group: 6,
        period: 5,
        avgMass: 95.95,
    },
    {
        name: "Technetium",
        shortform: "Tc",
        aanConst: 43, 
        group: 7,
        period: 5,
        avgMass: 98,
    },
    {
        name: "Ruthenium",
        shortform: "Ru",
        aanConst: 44, 
        group: 8,
        period: 5,
        avgMass: 101.07,
    },
    {
        name: "Rhodium",
        shortform: "Zn",
        aanConst: 45, 
        group: 9,
        period: 5,
        avgMass: 102.91,
    },
    {
        name: "Palladium",
        shortform: "Pd",
        aanConst: 46, 
        group: 10,
        period: 5,
        avgMass: 106.42,
    },
    {
        name: "Silver",
        shortform: "Ag",
        aanConst: 47, 
        group: 11,
        period: 5,
        avgMass: 107.87,
    },
    {
        name: "Cadmium",
        shortform: "Cd",
        aanConst: 48, 
        group: 12,
        period: 5,
        avgMass: 112.41,
    },
    {
        name: "Indium",
        shortform: "In",
        aanConst: 49, 
        group: 13,
        period: 5,
        avgMass: 114.82,
    },
    {
        name: "Tin",
        shortform: "Sn",
        aanConst: 50, 
        group: 14,
        period: 5,
        avgMass: 118.71,
    },
    {
        name: "Antimony",
        shortform: "Sb",
        aanConst: 51, 
        group: 15,
        period: 5,
        avgMass: 121.76,
    },
    {
        name: "Tellurium",
        shortform: "Te",
        aanConst: 52, 
        group: 16,
        period: 5,
        avgMass: 127.6,
    },
    {
        name: "Iodine",
        shortform: "I",
        aanConst: 53, 
        group: 17,
        period: 5,
        avgMass: 126.9,
    },
    {
        name: "Xenon",
        shortform: "Xe",
        aanConst: 54, 
        group: 18,
        period: 5,
        avgMass: 131.29,
    },
    {
        name: "Caesium",
        shortform: "Cs",
        aanConst: 55, 
        group: 1,
        period: 6,
        avgMass: 132.91,
    },
    {
        name: "Barium",
        shortform: "Ba",
        aanConst: 56, 
        group: 2,
        period: 6,
        avgMass: 137.33,
    },
    {
        name: "Lanthanum",
        shortform: "La",
        aanConst: 57, 
        group: "N/A",
        period: 6,
        avgMass: 138.905,
    },
    {
        name: "Cerium",
        shortform: "Ce",
        aanConst: 58, 
        group: "N/A",
        period: 6,
        avgMass: 140.116,
    },
    {
        name: "Praseodymium",
        shortform: "Pr",
        aanConst: 59, 
        group: "N/A",
        period: 6,
        avgMass: 140.907,
    },
    {
        name: "Neodymium",
        shortform: "Nd",
        aanConst: 60, 
        group: "N/A",
        period: 6,
        avgMass: 144.242,
    },
    {
        name: "Promethium",
        shortform: "Pm",
        aanConst: 61, 
        group: "N/A",
        period: 6,
        avgMass: 145,
    },
    {
        name: "Samarium",
        shortform: "Sm",
        aanConst: 62, 
        group: "N/A",
        period: 6,
        avgMass: 150.36,
    },
    {
        name: "Europium",
        shortform: "Eu",
        aanConst: 63, 
        group: "N/A",
        period: 6,
        avgMass: 151.964,
    },
    {
        name: "Gadolinium",
        shortform: "Gd",
        aanConst: 64, 
        group: "N/A",
        period: 6,
        avgMass: 157.25,
    },
    {
        name: "Terbium",
        shortform: "Tb",
        aanConst: 65, 
        group: "N/A",
        period: 6,
        avgMass: 158.925,
    },
    {
        name: "Dysprosium",
        shortform: "Dy",
        aanConst: 66, 
        group: "N/A",
        period: 6,
        avgMass: 162.5,
    },
    {
        name: "Holmium",
        shortform: "Ho",
        aanConst: 67, 
        group: "N/A",
        period: 6,
        avgMass: 164.93,
    },
    {
        name: "Erbium",
        shortform: "Er",
        aanConst: 68, 
        group: "N/A",
        period: 6,
        avgMass: 167.259,
    },
    {
        name: "Thulium",
        shortform: "Tm",
        aanConst: 69, 
        group: "N/A",
        period: 6,
        avgMass: 168.934,
    },    {
        name: "Ytterbium",
        shortform: "Yb",
        aanConst: 70, 
        group: "N/A",
        period: 6,
        avgMass: 173.045,
    },
    {
        name: "Lutetium",
        shortform: "Lu",
        aanConst: 71, 
        group: 3,
        period: 6,
        avgMass: 174.966,
    },
    {
        name: "Hafnium",
        shortform: "Hf",
        aanConst: 72, 
        group: 4,
        period: 6,
        avgMass: 178.49,
    },
    {
        name: "Tantalum",
        shortform: "Ta",
        aanConst: 73, 
        group: 5,
        period: 6,
        avgMass: 180.948,
    },
    {
        name: "Tungsten",
        shortform: "W",
        aanConst: 74, 
        group: 6,
        period: 6,
        avgMass: 183.84,
    },
    {
        name: "Rhenium",
        shortform: "Re",
        aanConst: 75, 
        group: 7,
        period: 6,
        avgMass: 186.207,
    },
    {
        name: "Osmium",
        shortform: "Os",
        aanConst: 76, 
        group: 8,
        period: 6,
        avgMass: 190.23,
    },
    {
        name: "Iridium",
        shortform: "Ir",
        aanConst: 77, 
        group: 9,
        period: 6,
        avgMass: 192.217,
    },
    {
        name: "Platinum",
        shortform: "Pt",
        aanConst: 78, 
        group: 10,
        period: 6,
        avgMass: 195.084,
    },
    {
        name: "Gold",
        shortform: "Au",
        aanConst: 79, 
        group: 11,
        period: 6,
        avgMass: 196.967,
    },
    {
        name: "Mercury",
        shortform: "Hg",
        aanConst: 80, 
        group: 12,
        period: 6,
        avgMass: 200.592,
    },
    {
        name: "Thallium",
        shortform: "Tl",
        aanConst: 81, 
        group: 13,
        period: 6,
        avgMass: 204.38,
    },
    {
        name: "Lead",
        shortform: "Pb",
        aanConst: 82, 
        group: 14,
        period: 6,
        avgMass: 207.2,
    },    
    {
        name: "Bismuth",
        shortform: "Bi",
        aanConst: 83, 
        group: 15,
        period: 6,
        avgMass: 208.980,
    },
    {
        name: "Polonium",
        shortform: "Po",
        aanConst: 84, 
        group: 16,
        period: 6,
        avgMass: 209,
    },
    {
        name: "Astatine",
        shortform: "At",
        aanConst: 85, 
        group: 17,
        period: 6,
        avgMass: 210,
    },
    {
        name: "Radon",
        shortform: "Rn",
        aanConst: 86, 
        group: 18,
        period: 6,
        avgMass: 222,
    },
    {
        name: "Francium",
        shortform: "Fr",
        aanConst: 87, 
        group: 1,
        period: 7,
        avgMass: 223,
    },
    {
        name: "Radium",
        shortform: "Ra",
        aanConst: 88, 
        group: 2,
        period: 7,
        avgMass: 226,
    },
    {
        name: "Actinium",
        shortform: "Ac",
        aanConst: 89, 
        group: "N/A",
        period: 7,
        avgMass: 227,
    },
    {
        name: "Thorium",
        shortform: "Th",
        aanConst: 90, 
        group: "N/A",
        period: 7,
        avgMass: 232.038,
    },
    {
        name: "Protactinium",
        shortform: "Pa",
        aanConst: 91, 
        group: "N/A",
        period: 7,
        avgMass: 231.036,
    },
    {
        name: "Uranium",
        shortform: "U",
        aanConst: 92, 
        group: "N/A",
        period: 7,
        avgMass: 238.029,
    },
    {
        name: "Neptunium",
        shortform: "Np",
        aanConst: 93, 
        group: "N/A",
        period: 7,
        avgMass: 237,
    },
    {
        name: "Plutonium",
        shortform: "Pu",
        aanConst: 94, 
        group: "N/A",
        period: 7,
        avgMass: 244,
    },
    {
        name: "Americium",
        shortform: "Am",
        aanConst: 95, 
        group: "N/A",
        period: 7,
        avgMass: 243,
    },
    {
        name: "Curium",
        shortform: "Cm",
        aanConst: 96, 
        group: "N/A",
        period: 7,
        avgMass: 247,
    },
    {
        name: "Berkelium",
        shortform: "Bk",
        aanConst: 97, 
        group: "N/A",
        period: 7,
        avgMass: 247,
    },
    {
        name: "Californium",
        shortform: "Cf",
        aanConst: 98, 
        group: "N/A",
        period: 7,
        avgMass: 251,
    },    {
        name: "Einsteinium",
        shortform: "Es",
        aanConst: 99, 
        group: "N/A",
        period: 7,
        avgMass: 252,
    },
    {
        name: "Fermium",
        shortform: "Fm",
        aanConst: 100, 
        group: "N/A",
        period: 7,
        avgMass: 257,
    },
    {
        name: "Mendelevium",
        shortform: "Md",
        aanConst: 101, 
        group: "N/A",
        period: 7,
        avgMass: 258,
    },
    {
        name: "Nobelium",
        shortform: "No",
        aanConst: 102, 
        group: "N/A",
        period: 7,
        avgMass: 259,
    },
    {
        name: "Lawrencium",
        shortform: "Lr",
        aanConst: 103, 
        group: 3,
        period: 7,
        avgMass: 266,
    },
    {
        name: "Rutherfordium",
        shortform: "Rf",
        aanConst: 104, 
        group: 4,
        period: 7,
        avgMass: 267,
    },
    {
        name: "Dubnium",
        shortform: "Db",
        aanConst: 105, 
        group: 5,
        period: 7,
        avgMass: 268,
    },
    {
        name: "Seaborgium",
        shortform: "Sg",
        aanConst: 106, 
        group: 6,
        period: 7,
        avgMass: 269,
    },
    {
        name: "Bohrium",
        shortform: "Bh",
        aanConst: 107, 
        group: 7,
        period: 7,
        avgMass: 270,
    },
    {
        name: "Hassium",
        shortform: "Hs",
        aanConst: 108, 
        group: 8,
        period: 7,
        avgMass: 277,
    },
    {
        name: "Meitnerium",
        shortform: "Mt",
        aanConst: 109, 
        group: 9,
        period: 7,
        avgMass: 278,
    },
    {
        name: "Darmstadtium",
        shortform: "Ds",
        aanConst: 110, 
        group: 10,
        period: 7,
        avgMass: 281,
    },
    {
        name: "Roentgenium",
        shortform: "Rg",
        aanConst: 111, 
        group: 11,
        period: 7,
        avgMass: 282,
    },
    {
        name: "Copernicium",
        shortform: "Cn",
        aanConst: 112, 
        group: 12,
        period: 7,
        avgMass: 285,
    },
    {
        name: "Nihonium",
        shortform: "Nh",
        aanConst: 113, 
        group: 13,
        period: 7,
        avgMass: 286,
    },
    {
        name: "Flerovium",
        shortform: "Fl",
        aanConst: 114, 
        group: 14,
        period: 7,
        avgMass: 289,
    },
    {
        name: "Moscovium",
        shortform: "Mc",
        aanConst: 115, 
        group: 15,
        period: 7,
        avgMass: 290,
    },
    {
        name: "Livermorium",
        shortform: "Lc",
        aanConst: 116, 
        group: 16,
        period: 7,
        avgMass: 293,
    },
    {
        name: "Tennessine",
        shortform: "Ts",
        aanConst: 117, 
        group: 17,
        period: 7,
        avgMass: 294,
    },
    {
        name: "Oganesson",
        shortform: "Og",
        aanConst: 118, 
        group: 18,
        period: 7,
        avgMass: 294,
    },
];

// Initaize inputs
document.getElementById("AlphaAtomicMassIN").addEventListener("input", function() {
    AlphaAtomicMass(this.value);
});
document.getElementById("AlphaAtomicNumberIN").addEventListener("input", function() {
    AlphaAtomicNumber(this.value);
});
document.getElementById("Alpha-AtomicSymbolIN").addEventListener("input", function() {
    AlphaAtomicSymbol(this.value);
});
document.getElementById("AlphaShortFormOUT").addEventListener("input", function() {
    AlphaAtomicSymbolRev(this.value);
});
document.getElementById("AlphaAtomicNumberOUT").addEventListener("input", function() {
    AlphaAtomicNumberRev(this.value);
});
document.getElementById("AlphaAtomicMassOUT").addEventListener("input", function() {
    AlphaAtomicMassRev(this.value);
});
document.getElementById("BetaPosAtomicNumberIN").addEventListener("input", function() {
    BetaPosAtomicNumber(this.value);
});
document.getElementById("BetaPosAtomicSymbolIN").addEventListener("input", function() {
    BetaPosAtomicNumber(this.value);
});
document.getElementById("BetaPosAtomicMassIN").addEventListener("input", function() {
    BetaPosAtomicMass(this.value);
});
document.getElementById("BetaPosAtomicNumberOUT").addEventListener("input", function() {
    BetaPosAtomicSymbolRev(this.value);
});
document.getElementById("BetaPosAtomicMassOUT").addEventListener("input", function() {
    BetaPosAtomicMassRev(this.value);
});
document.getElementById("AtomSearchAtomicMassIN").addEventListener("input", function() {
    AtomSearchAtomicMass(this.value);
});
document.getElementById("AtomicSearchGroupNameIN").addEventListener("input", function() {
    var value = this.value;
    var value2 = document.getElementById("AtomicSearchGroupPeriodIN").value;
    AtomicSearchGroupName(value, value2);
});

document.getElementById("AtomicSearchGroupPeriodIN").addEventListener("input", function() {
    var value = document.getElementById("AtomicSearchGroupNameIN").value;
    var value2 = this.value;
    AtomicSearchGroupName(value, value2);
});

// Buttons & element controller
window.onload = (event) => {
    BetaPositive.style.display = 'none';
    Alpha.style.display = 'none';
    AtomSearch.style.display = 'block'
    BetaNegative.style.display = 'none';
    ElectronCapture.style.display = 'none';
};

document.getElementById('AtomSearchbtn').addEventListener('click', function() {
    // Button variable 
    var AtomSearchbtn = document.getElementById('AtomSearchbtn');

    // Variables for elements
    var BetaPositive = document.getElementById('BetaPositive');
    var Alpha = document.getElementById('Alpha');
    var BetaNegative = document.getElementById('BetaNegative');
    var ElectronCapture = document.getElementById('ElectronCapture');
    var AtomSearch = document.getElementById('AtomSearch');
    
    // Hides/show approprate elements
    BetaPositive.style.display = 'none';
    Alpha.style.display = 'none';
    BetaNegative.style.display = 'none';
    ElectronCapture.style.display = 'none';
    AtomSearch.style.display = 'block'
});

document.getElementById('Alphabtn').addEventListener('click', function() {
    // Button variable 
    var Alphabtn = document.getElementById('Alphabtn');

    // Variables for elements
    var BetaPositive = document.getElementById('BetaPositive');
    var Alpha = document.getElementById('Alpha');
    var BetaNegative = document.getElementById('BetaNegative');
    var ElectronCapture = document.getElementById('ElectronCapture');
    var AtomSearch = document.getElementById('AtomSearch');
    
    // Hides/show approprate elements
    BetaPositive.style.display = 'none';
    Alpha.style.display = 'block';
    BetaNegative.style.display = 'none';
    ElectronCapture.style.display = 'none';
    AtomSearch.style.display = 'none'
},

document.getElementById('BetaPositivebtn').addEventListener('click', function() {
    // Button variable 
    var BetaPositivebtn = document.getElementById('BetaPositivebtn');

    // Variables for elements
    var BetaPositive = document.getElementById('BetaPositive');
    var Alpha = document.getElementById('Alpha');
    var BetaNegative = document.getElementById('BetaNegative');
    var ElectronCapture = document.getElementById('ElectronCapture');
    var AtomSearch = document.getElementById('AtomSearch');
    
    // Hides/show approprate elements
    BetaPositive.style.display = 'block';
    Alpha.style.display = 'none';
    BetaNegative.style.display = 'none';
    ElectronCapture.style.display = 'none';
    AtomSearch.style.display = 'none'
}));

document.getElementById('BetaNegativebtn').addEventListener('click', function() {
    // Button variable 
    var BetaNegativebtn = document.getElementById('BetaNegativebtn');

    // Variables for elements
    var BetaPositive = document.getElementById('BetaPositive');
    var Alpha = document.getElementById('Alpha');
    var BetaNegative = document.getElementById('BetaNegative');
    var ElectronCapture = document.getElementById('ElectronCapture');
    var AtomSearch = document.getElementById('AtomSearch');
    
    // Hides/show approprate elements
    BetaPositive.style.display = 'none';
    Alpha.style.display = 'none';
    BetaNegative.style.display = 'block';
    ElectronCapture.style.display = 'none';
    AtomSearch.style.display = 'none'
});

document.getElementById('ElectronCapturebtn').addEventListener('click', function() {
    // Button variable 
    var ElectronCapturebtn = document.getElementById('ElectronCapturebtn');

    // Variables for elements
    var BetaPositive = document.getElementById('BetaPositive');
    var Alpha = document.getElementById('Alpha');
    var BetaNegative = document.getElementById('BetaNegative');
    var ElectronCapture = document.getElementById('ElectronCapture');
    var AtomSearch = document.getElementById('AtomSearch');
    
    // Hides/show approprate elements
    BetaPositive.style.display = 'none';
    Alpha.style.display = 'none';
    BetaNegative.style.display = 'none';
    ElectronCapture.style.display = 'block';
    AtomSearch.style.display = 'none'
});

document.getElementById('resetbtn').addEventListener('click', function() {
    AtomSearchReset();
});

// Calculations
function atomicSearch(AtomicSymbol, value, searchVal, value2) {
    // Function to search through const AtomicSymbol. Use = aanFinder(AtomicSymbol, value, searchVal). AtomicSymbol = an array (const); value = the atomic element to search (str or int); searchVal = what to search (str); value2 = secondary value (int or str) . In older versions this function was "aanFinder"
    if (searchVal === "shortform") { //Search using Atomic letters
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); // Make first letter uppercase, others lowercase. Follows naming method in const AtomicSymbol
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].shortform === value) {
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
    } 
    if (searchVal === "aanConst") { // Search using Atomic number
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].aanConst === parseInt(value)) { // Converts str value to int
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
    }  
    if (searchVal === "atomSearch") { // Search using Atomic number
        if (parseInt(value) === 0){ // Converts elements with group 0 to 18. AtomicSymbol uses 18 instead of 0.
            value = 18
        }
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].group === parseInt(value)  && AtomicSymbol[i].period === parseInt(value2)) { // Variable "value" represents group assignment, variable "value2" represents period.
                return i; // Return the index of the found element
            } else if (AtomicSymbol[i].group === value && AtomicSymbol[i].period === parseInt(value2)) { // Special coniditon if "N/A" is inputted. Does not convert value into int. 
                return i; // Return the index of the found element
            } 
        }
        return -1; // Return -1 if no matching element is found
    }  
    if (searchVal === "name") { // Search using Atomic number
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); // Make first letter uppercase, others lowercase. Follows naming method in const AtomicSymbol
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].name === value) { // Converts str value to int
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
    }  
}


function blockSearch(group, period) {
    var block
    if (group > 1 && group < 2 || group == 0 && period == 1){
        block = "s, "
    }
}
function groupSearch(group) {
     // Function to assign group names given the group namer. Use = groupSearch(group). group = the group number (int).
     // To reference, call result[0] for groupName, and result[1] for IUPACname, assuming that var result = groupSearch(group)
    var groupName, IUPACname
    if (group === 18) {
        groupName = "0 or 18, noble gases"
        IUPACname = "helium or neon group"
        return [groupName, IUPACname];
    }
    else if (group === 1) {
        groupName = "1, H and alkali metals"
        IUPACname = "lith­ium group"
        return [groupName, IUPACname];
    }
    else if (group === 2) {
        groupName = "1, alkaline earth metals"
        IUPACname = "beryl­lium group"
        return [groupName, IUPACname];
    }
    else if (group === 3) {
        groupName = "3"
        IUPACname = "scan­dium group"
        return [groupName, IUPACname];
    }
    else if (group === 4) {
        groupName = "4"
        IUPACname = "titan­ium group"
        return [groupName, IUPACname];
    }
    else if (group === 5) {
        groupName = "5"
        IUPACname = "vana­dium group"
        return [groupName, IUPACname];
    }
    else if (group === 6) {
        groupName = "6"
        IUPACname = "chro­mium group"
        return [groupName, IUPACname];
    }
    else if (group === 7) {
        groupName = "7"
        IUPACname = "man­ga­nese group"
        return [groupName, IUPACname];
    }
    else if (group === 8) {
        groupName = "8"
        IUPACname = "iron group"
        return [groupName, IUPACname];
    }
    else if (group === 9) {
        groupName = "9"
        IUPACname = "co­balt group"
        return [groupName, IUPACname];
    }
    else if (group === 10) {
        groupName = "10"
        IUPACname = "nickel group"
        return [groupName, IUPACname];
    }
    else if (group === 11) {
        groupName = "11"
        IUPACname = "copper group"
        return [groupName, IUPACname];
    }
    else if (group === 12) {
        groupName = "12"
        IUPACname = "zinc group"
        return [groupName, IUPACname];
    }
    else if (group === 13) {
        groupName = "13, triels"
        IUPACname = "boron group"
        return [groupName, IUPACname];
    }
    else if (group === 14) {
        groupName = "14, tetrels"
        IUPACname = "car­bon group"
        return [groupName, IUPACname];
    }

    else if (group === 15) {
        groupName = "15, pnicto­gens"
        IUPACname = "nitro­gen group"
        return [groupName, IUPACname];
    }
    else if (group === 16) {
        groupName = "16, chal­co­gens"
        IUPACname = "oxy­gen group"
        return [groupName, IUPACname];
    }
    else if (group === 17) {
        groupName = "17, halo­gens"
        IUPACname = "fluor­ine group"
        return [groupName, IUPACname];
    }


}
// Alpha decay series of functions


function AlphaAtomicSymbol(value){
    // Function to calculate Alpha decay, given the input Atomic symbol of an element. Input = Alpha-AtomicSymbolIN (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-2] // Search AtomicSymbol for an item subtracted by 2 (i.e. the effects of Alpha decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("AlphaAtomicNumberIN").value = originalValuePosition.aanConst;
        document.getElementById("AtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("AtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("AlphaShortFormOUT").value = resultant.shortform;
        document.getElementById("AlphaAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("AtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("AtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("AtomicPeriodNum").innerHTML = resultant.period;
        
    }
}

function AlphaAtomicSymbolRev(value){
    // Function to calculate reverse Alpha decay, given the output Atomic symbol of an element. Input = AlphaShortFormOUT (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+2] // Search AtomicSymbol for an item added by 2 (i.e. the reverse effects of Alpha decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("AlphaAtomicNumberOUT").value = originalValuePosition.aanConst;
        document.getElementById("AtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("AtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("Alpha-AtomicSymbolIN").value = resultant.shortform;
        document.getElementById("AlphaAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("AtomicNameParent").innerHTML = resultant.name;
        document.getElementById("AtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("AtomicPeriodNumParent").innerHTML = resultant.period;
        
    }
}

function AlphaAtomicNumber(value){
    // Function to calculate Alpha decay, given the input Atomic number of an element. Input = AlphaAtomicNumberIN (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-2] // Search AtomicSymbol for an item subtracted by 2 (i.e. the effects of Alpha decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("Alpha-AtomicSymbolIN").value = originalValuePosition.shortform;
        document.getElementById("AtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("AtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("AlphaShortFormOUT").value = resultant.shortform;
        document.getElementById("AlphaAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("AtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("AtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("AtomicPeriodNum").innerHTML = resultant.period;
        
    }
}

function AlphaAtomicNumberRev(value){
    // Function to calculate Alpha decay, given the input Atomic number of an element. Input = AlphaAtomicNumberOUT (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+2] // Search AtomicSymbol for an item subtracted by 2 (i.e. the effects of Alpha decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("AlphaShortFormOUT").value = originalValuePosition.shortform;
        document.getElementById("AtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("AtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("Alpha-AtomicSymbolIN").value = resultant.shortform;
        document.getElementById("AlphaAtomicNumberIN").value = resultant.aanConst;
        console.log(resultant.aanConst)
        document.getElementById("AtomicNameParent").innerHTML = resultant.name;
        document.getElementById("AtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("AtomicPeriodNumParent").innerHTML = resultant.period;
    }
}

function AlphaAtomicMass(value){
    // Function to calculate mass after Alpha decay, given the input Atomic mass of an element. Input = AlphaAtomicMassIN (int)
    document.getElementById("AtomicMassNumParent").innerHTML = value;

    document.getElementById("AlphaAtomicMassOUT").value = value - 4;
    document.getElementById("AtomicMassNumDaughter").innerHTML = value - 4;
}

function AlphaAtomicMassRev (value){
    // Function to calculate inverse mass Alpha decay, given the ouput Atomic number of an element. Input = AlphaAtomicMassOUT (int)
    document.getElementById("AtomicMassNumDaughter").innerHTML = value;

    document.getElementById("AlphaAtomicMassIN").value = parseInt(value) + 4;
    document.getElementById("AtomicMassNumParent").innerHTML = parseInt(value) + 4;
}


// Atom search

function AtomSearchAtomicMass (value){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN 
    document.getElementById("AtomSearchAtomicMassOUT").innerHTML = value;
}

function AtomSearchReset(){
    // Function to reset values in AtomSearch. Input = none
    document.getElementById("AtomSearchAtomicMassIN").value = null;
    document.getElementById("AtomSearchAtomicNumberIN").value = null;
    document.getElementById("AtomSearchAtomicSymbolIN").value = null;
    document.getElementById("AtomSearchAtomicNameIN").value = null;
    document.getElementById("AtomicSearchGroupNameIN").value = null;
    document.getElementById("AtomicSearchGroupPeriodIN").value = null;

    document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = null;
    document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = null;
    document.getElementById("AtomSearchAtomicNameOUT").innerHTML = null;
    document.getElementById("AtomicSearchGroupNameOUT").innerHTML = null;
    document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = null;
    document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = null;
    document.getElementById("AtomSearchAtomicMassOUT").innerHTML = null;

}

function AtomicSearchGroupName (value, value2){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN 
    var position = atomicSearch(AtomicSymbol, value, "atomSearch", value2); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var groupName = groupSearch(originalValuePosition.group) // Find names for the groups

        // Output; a more concise version compared to the previous version
        document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = originalValuePosition.shortform;
        document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = originalValuePosition.aanConst;
        document.getElementById("AtomSearchAtomicNameOUT").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicSearchGroupNameOUT").innerHTML = groupName[0];
        document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = groupName[1];
        document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = originalValuePosition.period;
    }
}

// Beta positive

function BetaPosAtomicNumber (value){
    // Function to calculate Beta Postive decay, given the input Atomic number of an element. Input = BetaPosAtomicNumberIN (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaPosAtomicSymbolIN").value = originalValuePosition.shortform;
        document.getElementById("BetaPosAtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("BetaPosAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("BetaPosAtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaPosShortFormOUT").value = resultant.shortform;
        document.getElementById("BetaPosAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("BetaPosAtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("BetaPosAtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("BetaPosAtomicPeriodNum").innerHTML = resultant.period;
        
    }

}

function BetaPosAtomicSymbol(value){
    // Function to calculate Beta positive decay, given the input Atomic symbol of an element. Input = BetaPosAtomicSymbolIN (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position12] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaPosAtomicNumberIN").innerHTML = originalValuePosition.aanConst;
        document.getElementById("BetaPosAtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("BetaPosAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("BetaPosAtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaPosShortFormOUT").value = resultant.shortform;
        document.getElementById("BetaPosAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("BetaPosAtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("BetaPosAtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("BetaPosAtomicPeriodNum").innerHTML = resultant.period;
        
    }
}

function BetaPosAtomicSymbolRev(value){
    // Function to calculate inverse beta positive decay, given the ouptut Atomic number of an element. Input = BetaPosAtomicNumberOUT (int)
    var position = atomicSearch(AtomicSymbol, value, "atomSearch"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+1] // Search AtomicSymbol for an item added by 1 (i.e. the inv. effects of Beta Positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaPosShortFormOUT").value = originalValuePosition.shortform;
        document.getElementById("BetaPosAtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("BetaPosAtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("BetaPosAtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaPosAtomicSymbolIN").value = resultant.shortform;
        document.getElementById("BetaPosAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("BetaPosAtomicNameParent").innerHTML = resultant.name;
        document.getElementById("BetaPosAtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("BetaPosAtomicPeriodNumParent").innerHTML = resultant.period;
    }

}
function BetaPosAtomicMass(value){
    // Function to calculate mass after beta positive decay, given the input Atomic mass of an element. Input = BetaPosAtomicMassIN (int)
    document.getElementById("BetaPosAtomicMassNumParent").innerHTML = value;

    document.getElementById("BetaPosAtomicMassOUT").value = value;
    document.getElementById("BetaPosAtomicMassNumDaughter").innerHTML = value;
}
function BetaPosAtomicMassRev(value){
    // Function to calculate inverse mass after beta positive decay, given the output Atomic mass of an element. Input = BetaPosAtomicMassIN (int)
    document.getElementById("BetaPosAtomicMassNumDaughter").innerHTML = value;

    document.getElementById("BetaPosAtomicMassIN").value = value;
    document.getElementById("BetaPosAtomicMassNumParent").innerHTML = value;
}

// Misc. links

document.getElementById('GitHub').addEventListener('click', function() {
    chrome.tabs.update({ url: 'https://github.com/twotoque/physicscalculator/' });
});

document.getElementById('Derek').addEventListener('click', function() {
    chrome.tabs.update({ url: 'https://www.linkedin.com/in/dereksong/' });
});

document.getElementById('Commit').addEventListener('click', function() {
    chrome.tabs.update({ url: 'https://github.com/twotoque/physicscalculator/commits' });
});







// OLD CALCULATIONS - TO BE REWRITTEN



function BetaNegAtomicMass(value){
    var BPaam, BPaamB, BPaamC;
    BPaamB = +value - 1 + 1;
    let BetaNegAtomicMassNumParent =  BPaamB;
    document.getElementById("BetaNegAtomicMassNumParent").innerHTML = BetaNegAtomicMassNumParent; 
    document.getElementById ("BetaNegAtomicMassNumParent").value = BPaamB;
    let BetaNegAtomicMassNumDaughter =  BPaamB;
    document.getElementById("BetaNegAtomicMassNumDaughter").innerHTML = BetaNegAtomicMassNumDaughter; 
    document.getElementById ("BetaNegAtomicMassOUT").value = BPaamB;
    console.log("AAMOUTD");
}
function ElectronAtomicMass(value){
    var BPaam, EaamB, BPaamC;
    EaamB = +value - 1 + 1;
    let ElectronAtomicMassNumParent =  EaamB;
    document.getElementById("ElectronAtomicMassNumParent").innerHTML = ElectronAtomicMassNumParent; 
    document.getElementById ("ElectronAtomicMassNumParent").value = EaamB;
    let ElectronAtomicMassNumDaughter =  EaamB;
    document.getElementById("ElectronAtomicMassNumDaughter").innerHTML = ElectronAtomicMassNumDaughter; 
    document.getElementById ("ElectronAtomicMassOUT").value = EaamB;
    console.log("AAMOUTD");
}



function BetaNegAtomicMassRev(value){
    var BPaam;
    BPaam =  +value + 1 - 1;
    let BetaNegAtomicMassIN =  BPaam;
    document.getElementById("BetaNegAtomicMassIN").innerHTML = BetaNegAtomicMassIN; 
}



function BetaNegAtomicNumber(value){
    var BPaanB, BPaan;
    BPaanB = +value + 1 - 1;
    document.getElementById ("BetaNegAtomicSymbolIN").value = BPaanB;
    function aanFinderB (AtomicSymbol) {
        return AtomicSymbol.aanConst === BPaanB;
    }
    document.getElementById ("BetaNegAtomicSymbolIN").value = AtomicSymbol.find(aanFinderB).shortform; 
    let AtomicNameParent = AtomicSymbol.find(aanFinderB).name
    document.getElementById("BetaNegAtomicNameParent").innerHTML = AtomicNameParent; 
    let AtomicGroupNumParent = AtomicSymbol.find(aanFinderB).group
    document.getElementById("BetaNegAtomicGroupNumParent").innerHTML = AtomicGroupNumParent; 
    let AtomicPeriodNumParent = AtomicSymbol.find(aanFinderB).period
    document.getElementById("BetaNegAtomicPeriodNumParent").innerHTML = AtomicPeriodNumParent;  
    aan =  +value + 1;
    console.log(aan);
    document.getElementById ("BetaNegAtomicNumberOUT").value = aan;
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.aanConst === aan;
    } // Compare var aan to aanConst in const AtomicSymbol and select the one that matches 
    console.log(AlphaAtomicNumber);
    document.getElementById ("BetaNegShortFormOUT").value = AtomicSymbol.find(aanFinder).shortform; // Find element shortform at AtomicSymbol that was selected in function aanFinder, and print in id AlphaShortFormOUT
    let BetaNegAtomicNameDaughter = AtomicSymbol.find(aanFinder).name
    document.getElementById("BetaNegAtomicNameDaughter").innerHTML = BetaNegAtomicNameDaughter; 
    let BetaNegAtomicGroupNum = AtomicSymbol.find(aanFinder).group
    document.getElementById("BetaNegAtomicGroupNum").innerHTML = BetaNegAtomicGroupNum; 
    let BetaNegAtomicPeriodNum = AtomicSymbol.find(aanFinder).period
    document.getElementById("BetaNegAtomicPeriodNum").innerHTML = BetaNegAtomicPeriodNum; 
    console.log("AANOUTRD");
}

function ElectronAtomicNumber(value){
    var EaanB, BPaan;
    EaanB = +value + 1 - 1;
    document.getElementById ("ElectronAtomicSymbolIN").value = EaanB;
    function aanFinderB (AtomicSymbol) {
        return AtomicSymbol.aanConst === EaanB;
    }
    document.getElementById ("ElectronAtomicSymbolIN").value = AtomicSymbol.find(aanFinderB).shortform; 
    let ElectronAtomicNameParent = AtomicSymbol.find(aanFinderB).name
    document.getElementById("ElectronAtomicNameParent").innerHTML = ElectronAtomicNameParent; 
    let ElectronAtomicGroupNumParent = AtomicSymbol.find(aanFinderB).group
    document.getElementById("ElectronAtomicGroupNumParent").innerHTML = ElectronAtomicGroupNumParent; 
    let ElectronAtomicPeriodNumParent = AtomicSymbol.find(aanFinderB).period
    document.getElementById("ElectronAtomicPeriodNumParent").innerHTML = ElectronAtomicPeriodNumParent;  
    aan =  +value - 1;
    console.log(aan);
    document.getElementById ("ElectronAtomicNumberOUT").value = aan;
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.aanConst === aan;
    } // Compare var aan to aanConst in const AtomicSymbol and select the one that matches 
    console.log(AlphaAtomicNumber);
    document.getElementById ("ElectronShortFormOUT").value = AtomicSymbol.find(aanFinder).shortform; // Find element shortform at AtomicSymbol that was selected in function aanFinder, and print in id AlphaShortFormOUT
    let ElectronAtomicNameDaughter = AtomicSymbol.find(aanFinder).name
    document.getElementById("ElectronAtomicNameDaughter").innerHTML = ElectronAtomicNameDaughter; 
    let ElectronAtomicGroupNum = AtomicSymbol.find(aanFinder).group
    document.getElementById("ElectronAtomicGroupNum").innerHTML = ElectronAtomicGroupNum; 
    let ElectronAtomicPeriodNum = AtomicSymbol.find(aanFinder).period
    document.getElementById("ElectronAtomicPeriodNum").innerHTML = ElectronAtomicPeriodNum; 
    console.log("AANOUTRD");
}

function AlphaAtomicNumberRev(value){
    var aanB, aan;
    aanB = +value + 1 - 1;
    console.log(aanB);
    document.getElementById ("AlphaAtomicNumberOUT").value = aanB;
    function aanFinderB (AtomicSymbol) {
        return AtomicSymbol.aanConst === aanB;
    }
    document.getElementById ("AlphaShortFormOUT").value = AtomicSymbol.find(aanFinderB).shortform; 
    let AtomicNameDaughter = AtomicSymbol.find(aanFinderB).name
    document.getElementById("AtomicNameDaughter").innerHTML = AtomicNameDaughter; 
    let AtomicGroupNum = AtomicSymbol.find(aanFinderB).group
    document.getElementById("AtomicGroupNum").innerHTML = AtomicGroupNum; 
    let AtomicPeriodNum = AtomicSymbol.find(aanFinderB).period
    document.getElementById("AtomicPeriodNum").innerHTML = AtomicPeriodNum;  
    aan =  +aanB + 2;
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.aanConst === aan;
    } // Compare var aan to aanConst in const AtomicSymbol and select the one that matches 
    console.log(AlphaAtomicNumber);
    document.getElementById ("Alpha-AtomicSymbolIN").value = AtomicSymbol.find(aanFinder).shortform; // Find element shortform at AtomicSymbol that was selected in function aanFinder, and print in id AlphaShortFormOUT
    let AtomicNameParent = AtomicSymbol.find(aanFinder).name
    document.getElementById("AtomicNameParent").innerHTML = AtomicNameParent; 
    let AtomicGroupNumParent = AtomicSymbol.find(aanFinder).group
    document.getElementById("AtomicGroupNumParent").innerHTML = AtomicGroupNumParent; 
    let AtomicPeriodNumParent = AtomicSymbol.find(aanFinder).period
    document.getElementById("AtomicPeriodNumParent").innerHTML = AtomicPeriodNumParent; 
    let AlphaAtomicNumberIN = AtomicSymbol.find(aanFinder).aanConst
    document.getElementById("AlphaAtomicNumberIN").innerHTML = AlphaAtomicNumberIN; 
    console.log("AANOUTRD");
}


function BetaPosAtomicMassRev(value){
    var BPPaam;
    BPPaam =  +value + 1 - 1;
    let BetaPosAtomicMassIN =  BPPaam;
    document.getElementById("BetaPosAtomicMassIN").innerHTML = BetaPosAtomicMassIN; 
}