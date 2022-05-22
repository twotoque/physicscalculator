var aan = 0;
var aanNum = 0;
const AtomicSymbol = [
    {
        name: "N/A",
        shortform: "N/A",
        aanConst: 0, //Atomic number. Used aanConst so that it wouldn't get confused with var aan
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
        name: "Colbalt",
        shortform: "Co",
        aanConst: 27, 
        group: 9,
        period: 4,
    },
    {
        name: "Vanadium",
        shortform: "V",
        aanConst: 23, 
        group: 6,
        period: 4,
    },
    {
        name: "Vanadium",
        shortform: "V",
        aanConst: 23, 
        group: 6,
        period: 4,
    },
    {
        name: "Vanadium",
        shortform: "V",
        aanConst: 23, 
        group: 6,
        period: 4,
    },
];

function AlphaAtomicMass(value){
    var aam;
    aam =  value - 4;
    document.getElementById ("AlphaAtomicMassOUT").value = aam;
}

function AlphaAtomicMassRev(value){
    var aam;
    aam =  +value + 4;
    document.getElementById ("AlphaAtomicMassIN").value = aam;
}

function AlphaAtomicNumber(value){
    var aan;
    aan =  value - 2;
    // console.log(aan);
    document.getElementById ("AlphaAtomicNumberOUT").value = aan;
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.aanConst === aan;
    } // Compare var aan to aanConst in const AtomicSymbol and select the one that matches 
    document.getElementById ("AlphaShortFormOUT").value = AtomicSymbol.find(aanFinder).shortform; // Find element shortform at AtomicSymbol that was selected in function aanFinder, and print in id AlphaShortFormOUT
    let AtomicNameDaughter = AtomicSymbol.find(aanFinder).name
    document.getElementById("AtomicNameDaughter").innerHTML = AtomicNameDaughter; 
    let AtomicGroupNum = AtomicSymbol.find(aanFinder).group
    document.getElementById("AtomicGroupNum").innerHTML = AtomicGroupNum; 
    let AtomicPeriodNum = AtomicSymbol.find(aanFinder).period
    document.getElementById("AtomicPeriodNum").innerHTML = AtomicPeriodNum; 
}

function AlphaAtomicSymbol(value){
    // console.log("test");
    var annNum, aan;
    var beforeAan;
    // console.log (document.getElementById ("AlphaShortFormOUT").value + " is asfout");
    document.getElementById ("AlphaShortFormOUT").value = beforeAan;
    // console.log("beforeAan " + beforeAan);
    function aanFinder (AtomicSymbol) {
        return AtomicSymbol.shortform === beforeAan;
    } 
    // console.log("beforeAan " + beforeAan);
    let aanNum = AtomicSymbol.find(aanFinder).aanConst;
    aanNum =  aanNum - 2;
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

// console.log("aan" + aan);
// console.log(AtomicSymbol.find(aanFinder).shortform);