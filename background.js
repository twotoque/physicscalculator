
console.log("ready");
var aan = 0;
var aanB = 0;
var aanNum = 0;
const AtomicSymbol = [ 
    {
        name: "N/A",
        shortform: "N/A",
        aanConst: 0, 
        group: 0,
        period: 0,
    },
    {
        name: "Hydrogen",
        shortform: "H",
        aanConst: 1, //Atomic number. Used aanConst so that it wouldn't get confused with var aan
        group: 1,
        period: 1,
    },
    {
        name: "Helium",
        shortform: "He",
        aanConst: 2, 
        group: 18,
        period: 1,
    },
    {
        name: "Lithium",
        shortform: "Li",
        aanConst: 3, 
        group: 1,
        period: 2,
    },
    {
        name: "Beryllium",
        shortform: "Be",
        aanConst: 4, 
        group: 2,
        period: 2,
    },
    {
        name: "Boron",
        shortform: "B",
        aanConst: 5, 
        group: 13,
        period: 2,
    },
    {
        name: "Carbon",
        shortform: "C",
        aanConst: 6, 
        group: 14,
        period: 2,
    },
    {
        name: "Nitrogen",
        shortform: "N",
        aanConst: 7, 
        group: 15,
        period: 2,
    },
    {
        name: "Oxygen",
        shortform: "O",
        aanConst: 8, 
        group: 16,
        period: 2,
    },
    {
        name: "Fluorine",
        shortform: "F",
        aanConst: 9, 
        group: 17,
        period: 2,
    },
    {
        name: "Neon",
        shortform: "Ne",
        aanConst: 10, 
        group: 18,
        period: 2,
    },
    {
        name: "Sodium",
        shortform: "Na",
        aanConst: 11, 
        group: 1,
        period: 3,
    },
    {
        name: "Magnesium",
        shortform: "Mg",
        aanConst: 12, 
        group: 2,
        period: 3,
    },
    {
        name: "Aluminium", //I pronounce it the British way :sunglasses: 
        shortform: "Al",
        aanConst: 13, 
        group: 13,
        period: 3,
    },
    {
        name: "Sili­con",
        shortform: "Si",
        aanConst: 14, 
        group: 14,
        period: 3,
    },
    {
        name: "Phosphorus",
        shortform: "P",
        aanConst: 15, 
        group: 15,
        period: 3,
    },
    {
        name: "Sulphur",
        shortform: "S",
        aanConst: 16, 
        group: 16,
        period: 3,
    },
    {
        name: "Chlorine",
        shortform: "Cl",
        aanConst: 17, 
        group: 17,
        period: 3,
    },
    {
        name: "Argon",
        shortform: "Ar",
        aanConst: 18, 
        group: 18,
        period: 3,
    },
    {
        name: "Potassium",
        shortform: "K",
        aanConst: 19, 
        group: 1,
        period: 4,
    },
    {
        name: "Calcium",
        shortform: "Ca",
        aanConst: 20, 
        group: 2,
        period: 4,
    },
    {
        name: "Scandium",
        shortform: "Sc",
        aanConst: 21, 
        group: 3,
        period: 4,
    },
    {
        name: "Titanium",
        shortform: "Ti",
        aanConst: 22, 
        group: 4,
        period: 4,
    },
    {
        name: "Vanadium",
        shortform: "V",
        aanConst: 23, 
        group: 5,
        period: 4,
    },
    {
        name: "Chromium",
        shortform: "Cr",
        aanConst: 24, 
        group: 6,
        period: 4,
    },
    {
        name: "Manganese",
        shortform: "Mn",
        aanConst: 25, 
        group: 7,
        period: 4,
    },
    {
        name: "Iron",
        shortform: "Fe",
        aanConst: 26, 
        group: 8,
        period: 4,
    },
    {
        name: "Cobalt",
        shortform: "Co",
        aanConst: 27, 
        group: 9,
        period: 4,
    },
    {
        name: "Nickel",
        shortform: "Ni",
        aanConst: 28, 
        group: 10,
        period: 4,
    },
    {
        name: "Copper",
        shortform: "Cu",
        aanConst: 29, 
        group: 11,
        period: 4,
    },
    {
        name: "Zinc",
        shortform: "Zn",
        aanConst: 30, 
        group: 12,
        period: 4,
    },
    {
        name: "Gallium",
        shortform: "Ga",
        aanConst: 31, 
        group: 13,
        period: 4,
    },
    {
        name: "Germanium",
        shortform: "Ge",
        aanConst: 32, 
        group: 14,
        period: 4,
    },
    {
        name: "Arsenic",
        shortform: "As",
        aanConst: 33, 
        group: 15,
        period: 4,
    },
    {
        name: "Selenium",
        shortform: "Se",
        aanConst: 34, 
        group: 16,
        period: 4,
    },
    {
        name: "Bromine",
        shortform: "Br",
        aanConst: 35, 
        group: 17,
        period: 4,
    },
    {
        name: "Krypton",
        shortform: "Kr",
        aanConst: 36, 
        group: 18,
        period: 4,
    },
    {
        name: "Rubidium,",
        shortform: "Rb",
        aanConst: 37, 
        group: 1,
        period: 5,
    },
    {
        name: "Strontium",
        shortform: "Sr",
        aanConst: 38, 
        group: 2,
        period: 5,
    },
    {
        name: "Yttrium",
        shortform: "Y",
        aanConst: 39, 
        group: 3,
        period: 5,
    },
    {
        name: "Zirconium",
        shortform: "Zn",
        aanConst: 40, 
        group: 4,
        period: 5,
    },
    {
        name: "Niobium",
        shortform: "Nb",
        aanConst: 41, 
        group: 5,
        period: 5,
    },
    {
        name: "Molybdenum",
        shortform: "Mo",
        aanConst: 42, 
        group: 6,
        period: 5,
    },
    {
        name: "Technetium",
        shortform: "Tc",
        aanConst: 43, 
        group: 7,
        period: 5,
    },
    {
        name: "Ruthenium",
        shortform: "Ru",
        aanConst: 44, 
        group: 8,
        period: 5,
    },
    {
        name: "Rhodium",
        shortform: "Zn",
        aanConst: 45, 
        group: 9,
        period: 5,
    },
    {
        name: "Palladium",
        shortform: "Pd",
        aanConst: 46, 
        group: 10,
        period: 5,
    },
    {
        name: "Sliver",
        shortform: "Ag",
        aanConst: 47, 
        group: 11,
        period: 5,
    },
    {
        name: "Cadmium",
        shortform: "Cd",
        aanConst: 48, 
        group: 12,
        period: 5,
    },
    {
        name: "Indium",
        shortform: "In",
        aanConst: 49, 
        group: 13,
        period: 5,
    },
    {
        name: "Tin",
        shortform: "Sn",
        aanConst: 50, 
        group: 14,
        period: 5,
    },
    {
        name: "Antimony",
        shortform: "Sb",
        aanConst: 51, 
        group: 15,
        period: 5,
    },
    {
        name: "Tellurium",
        shortform: "Te",
        aanConst: 52, 
        group: 16,
        period: 5,
    },
    {
        name: "Iodine",
        shortform: "I",
        aanConst: 53, 
        group: 16,
        period: 5,
    },
    {
        name: "Xenon",
        shortform: "Xe",
        aanConst: 54, 
        group: 18,
        period: 5,
    },
    {
        name: "Caesium",
        shortform: "Cs",
        aanConst: 55, 
        group: 1,
        period: 6,
    },
    {
        name: "Barium",
        shortform: "Ba",
        aanConst: 56, 
        group: 2,
        period: 6,
    },
    {
        name: "Lanthanum",
        shortform: "La",
        aanConst: 57, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Cerium",
        shortform: "Ce",
        aanConst: 58, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Praseodymium",
        shortform: "Pr",
        aanConst: 59, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Neodymium",
        shortform: "Nd",
        aanConst: 60, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Promethium",
        shortform: "Pm",
        aanConst: 61, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Samarium",
        shortform: "Sm",
        aanConst: 62, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Europium",
        shortform: "Eu",
        aanConst: 63, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Gadolinium",
        shortform: "Gd",
        aanConst: 64, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Terbium",
        shortform: "Tb",
        aanConst: 65, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Dysprosium",
        shortform: "Dy",
        aanConst: 66, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Holmium",
        shortform: "Ho",
        aanConst: 67, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Erbium",
        shortform: "Ho",
        aanConst: 68, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Thulium",
        shortform: "Tm",
        aanConst: 69, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Ytterbium",
        shortform: "Yb",
        aanConst: 70, 
        group: "N/A",
        period: 6,
    },
    {
        name: "Lutetium",
        shortform: "Lu",
        aanConst: 71, 
        group: 3,
        period: 6,
    },
    {
        name: "Hafnium",
        shortform: "Hf",
        aanConst: 72, 
        group: 4,
        period: 6,
    },
    {
        name: "Tantalum",
        shortform: "Ta",
        aanConst: 73, 
        group: 5,
        period: 6,
    },
    {
        name: "Tungsten",
        shortform: "W",
        aanConst: 74, 
        group: 6,
        period: 6,
    },
    {
        name: "Rhenium",
        shortform: "Re",
        aanConst: 75, 
        group: 7,
        period: 6,
    },
    {
        name: "Osmium",
        shortform: "Os",
        aanConst: 76, 
        group: 8,
        period: 6,
    },
    {
        name: "Iridium",
        shortform: "Ir",
        aanConst: 77, 
        group: 9,
        period: 6,
    },
    {
        name: "Platinum",
        shortform: "Pt",
        aanConst: 78, 
        group: 10,
        period: 6,
    },
    {
        name: "Gold",
        shortform: "Au",
        aanConst: 79, 
        group: 11,
        period: 6,
    },
    {
        name: "Mercury",
        shortform: "Hg",
        aanConst: 80, 
        group: 12,
        period: 6,
    },
    {
        name: "Thallium",
        shortform: "Tl",
        aanConst: 81, 
        group: 13,
        period: 6,
    },
    {
        name: "Lead",
        shortform: "Pb",
        aanConst: 82, 
        group: 14,
        period: 6,
    },
    {
        name: "Bismuth",
        shortform: "Bi",
        aanConst: 83, 
        group: 15,
        period: 6,
    },
    {
        name: "Polonium",
        shortform: "Po",
        aanConst: 84, 
        group: 16,
        period: 6,
    },
    {
        name: "Astatine",
        shortform: "At",
        aanConst: 85, 
        group: 17,
        period: 6,
    },
    {
        name: "Radon",
        shortform: "Rn",
        aanConst: 86, 
        group: 18,
        period: 6,
    },
    {
        name: "Francium",
        shortform: "Fr",
        aanConst: 87, 
        group: 1,
        period: 7,
    },
    {
        name: "Radium",
        shortform: "Ra",
        aanConst: 88, 
        group: 2,
        period: 7,
    },
    {
        name: "Actinium",
        shortform: "Ac",
        aanConst: 89, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Thorium",
        shortform: "Th",
        aanConst: 90, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Protactinium",
        shortform: "Pa",
        aanConst: 91, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Uranium",
        shortform: "U",
        aanConst: 92, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Neptunium",
        shortform: "Np",
        aanConst: 93, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Plutonium",
        shortform: "Pu",
        aanConst: 94, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Americium",
        shortform: "Am",
        aanConst: 95, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Curium",
        shortform: "Cm",
        aanConst: 96, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Berkelium",
        shortform: "Bk",
        aanConst: 97, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Californium",
        shortform: "Cf",
        aanConst: 98, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Einsteinium",
        shortform: "Es",
        aanConst: 99, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Fermium",
        shortform: "Fm",
        aanConst: 100, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Mendelevium",
        shortform: "Md",
        aanConst: 101, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Nobelium",
        shortform: "No",
        aanConst: 102, 
        group: "N/A",
        period: 7,
    },
    {
        name: "Lawrencium",
        shortform: "Lr",
        aanConst: 103, 
        group: 3,
        period: 7,
    },
    {
        name: "Rutherfordium",
        shortform: "Rf",
        aanConst: 104, 
        group: 4,
        period: 7,
    },
    {
        name: "Dubnium",
        shortform: "Db",
        aanConst: 105, 
        group: 5,
        period: 7,
    },
    {
        name: "Seaborgium",
        shortform: "Sg",
        aanConst: 106, 
        group: 6,
        period: 7,
    },
    {
        name: "Bohrium",
        shortform: "Bh",
        aanConst: 107, 
        group: 7,
        period: 7,
    },
    {
        name: "Hassium",
        shortform: "Hs",
        aanConst: 108, 
        group: 8,
        period: 7,
    },
    {
        name: "Meitnerium",
        shortform: "Mt",
        aanConst: 109, 
        group: 9,
        period: 7,
    },
    {
        name: "Darmstadtium",
        shortform: "Ds",
        aanConst: 110, 
        group: 10,
        period: 7,
    },
    {
        name: "Roentgenium",
        shortform: "Rg",
        aanConst: 111, 
        group: 11,
        period: 7,
    },
    {
        name: "Copernicium",
        shortform: "Cn",
        aanConst: 112, 
        group: 12,
        period: 7,
    },
    {
        name: "Nihonium",
        shortform: "Nh",
        aanConst: 113, 
        group: 13,
        period: 7,
    },
    {
        name: "Flerovium",
        shortform: "Fl",
        aanConst: 114, 
        group: 14,
        period: 7,
    },
    {
        name: "Moscovium",
        shortform: "Mc",
        aanConst: 115, 
        group: 15,
        period: 7,
    },
    {
        name: "Livermorium",
        shortform: "Lc",
        aanConst: 116, 
        group: 16,
        period: 7,
    },
    {
        name: "Tennessine",
        shortform: "Ts",
        aanConst: 117, 
        group: 17,
        period: 7,
    },
    {
        name: "Oganesson",
        shortform: "Og",
        aanConst: 118, 
        group: 18,
        period: 7,
    },
    {
        name: "N/A",
        shortform: "N/A",
        aanConst: 119, 
        group: 0,
        period: 0,
    }
];
console.log("loaded");
function AlphaAtomicMass(value){
    console.log("AAMOUTR");
    var aam;
    aam =  value - 4;
    console.log("AAMOUTC");
    document.getElementById ("AlphaAtomicMassOUT").value = aam;
    console.log("AAMOUTD");
}

function AlphaAtomicMassRev(value){
    var aam;
    console.log("AAMOUTRR");
    aam =  +value + 4;
    console.log("AAMOUTRC");
    document.getElementById ("AlphaAtomicMassIN").value = aam;
    console.log("AAMOUTRD");
}

function AlphaAtomicNumber(value){
    var aanB, aan;
    aanB = +value + 1 - 1;
    console.log(aanB);
    document.getElementById ("Alpha-AtomicSymbolIN").value = aanB;
    function aanFinderB (AtomicSymbol) {
        return AtomicSymbol.aanConst === aanB;
    }
    document.getElementById ("Alpha-AtomicSymbolIN").value = AtomicSymbol.find(aanFinderB).shortform; 
    let AtomicNameParent = AtomicSymbol.find(aanFinderB).name
    document.getElementById("AtomicNameParent").innerHTML = AtomicNameParent; 
    let AtomicGroupNumParent = AtomicSymbol.find(aanFinderB).group
    document.getElementById("AtomicGroupNumParent").innerHTML = AtomicGroupNumParent; 
    let AtomicPeriodNumParent = AtomicSymbol.find(aanFinderB).period
    document.getElementById("AtomicPeriodNumParent").innerHTML = AtomicPeriodNumParent;  
    aan =  value - 2;
    console.log(aan);
    document.getElementById ("AlphaAtomicNumberOUT").value = aan;
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.aanConst === aan;
    } // Compare var aan to aanConst in const AtomicSymbol and select the one that matches 
    console.log(AlphaAtomicNumber);
    document.getElementById ("AlphaShortFormOUT").value = AtomicSymbol.find(aanFinder).shortform; // Find element shortform at AtomicSymbol that was selected in function aanFinder, and print in id AlphaShortFormOUT
    let AtomicNameDaughter = AtomicSymbol.find(aanFinder).name
    document.getElementById("AtomicNameDaughter").innerHTML = AtomicNameDaughter; 
    let AtomicGroupNum = AtomicSymbol.find(aanFinder).group
    document.getElementById("AtomicGroupNum").innerHTML = AtomicGroupNum; 
    let AtomicPeriodNum = AtomicSymbol.find(aanFinder).period
    document.getElementById("AtomicPeriodNum").innerHTML = AtomicPeriodNum; 
    console.log("AANOUTRD");
}

function AlphaAtomicSymbol(value){
    console.log("test");
    var annNum, aan;
    var beforeAan;
    debugger;
    console.log (document.getElementById ("AlphaShortFormOUT").value + " is asfout");
    document.getElementById ("AlphaShortFormOUT").value = beforeAan;
    console.log("beforeAan " + beforeAan);
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.shortform === beforeAan;
    } 
    console.log("beforeAan " + beforeAan);
    let aanNum = AtomicSymbol.find(aanFinder).aanConst;
    aanNum =  aanNum - 2;
    debugger;
    function aanFinder (AtomicSymbol2) {
        return AtomicSymbol.aanConst === annNum;
    } 
    document.getElementById ("AlphaShortFormOUT").value = AtomicSymbol.find(aanFinder).shortform; // Find element shortform at AtomicSymbol that was selected in function aanFinder, and print in id AlphaShortFormOUT
    let AtomicNameDaughter = AtomicSymbol.find(aanFinder).name
    document.getElementById("AtomicNameDaughter").innerHTML = AtomicNameDaughter; 
    let AtomicGroupNum = AtomicSymbol.find(aanFinder).group
    document.getElementById("AtomicGroupNum").innerHTML = AtomicGroupNum; 
    let AtomicPeriodNum = AtomicSymbol.find(aanFinder).period
    document.getElementById("AtomicPeriodNum").innerHTML = AtomicPeriodNum; 
}
function aanFinder (AtomicSymbol) {
    return AtomicSymbol.aanConst === aan;
}

console.log("aan" + aan);
console.log(AtomicSymbol.find(aanFinder).shortform);