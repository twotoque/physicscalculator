
console.log("ready");
var aan = 0;
var aanB = 0;
var aanNum = 0;
var aanNumB = 0;
var aamB = 0;
var aamC = 0;
var aamD = 0;

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
    BetaPosAtomicSymbol(this.value);
});
document.getElementById("BetaPosAtomicMassIN").addEventListener("input", function() {
    BetaPosAtomicMass(this.value);
});
document.getElementById("BetaPosAtomicNumberOUT").addEventListener("input", function() {
    BetaPosAtomicNumberRev(this.value);
});
document.getElementById("BetaPosAtomicMassOUT").addEventListener("input", function() {
    BetaPosAtomicMassRev(this.value);
});
document.getElementById("BetaPosShortFormOUT").addEventListener("input", function() {
    BetaPosAtomicSymbolRev(this.value);
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
document.getElementById("AtomSearchAtomicNameIN").addEventListener("input", function() {
    AtomicSearchAtomName(this.value);
});

document.getElementById("AtomSearchAtomicNumberIN").addEventListener("input", function() {
    AtomicSearchAtomNumber(this.value);
});
document.getElementById("AtomSearchAtomicSymbolIN").addEventListener("input", function() {
    AtomicSearchAtomShort(this.value);
});    
document.getElementById("BetaNegAtomicNumberIN").addEventListener("input", function() {
    BetaNegAtomicNumber(this.value);
});   
document.getElementById("BetaNegAtomicSymbolIN").addEventListener("input", function() {
    BetaNegAtomicSymbol(this.value);
}); 
document.getElementById("BetaNegShortFormOUT").addEventListener("input", function() {
    BetaNegAtomicSymbolRev(this.value);
}); 
document.getElementById("BetaNegAtomicNumberOUT").addEventListener("input", function() {
    BetaNegAtomicNumberRev(this.value);
}); 
document.getElementById("BetaNegAtomicMassIN").addEventListener("input", function() {
    BetaNegAtomicMass(this.value);
});
document.getElementById("BetaNegAtomicMassOUT").addEventListener("input", function() {
    BetaNegAtomicMassRev(this.value);
}); 
document.getElementById("ElectronAtomicNumberIN").addEventListener("input", function() {
    ElectronAtomicNumber(this.value);
}); 
document.getElementById("ElectronAtomicNumberOUT").addEventListener("input", function() {
    ElectronAtomicNumberRev(this.value);
}); 
document.getElementById("ElectronAtomicSymbolIN").addEventListener("input", function() {
    ElectronAtomicSymbol(this.value);
}); 
document.getElementById("ElectronShortFormOUT").addEventListener("input", function() {
    ElectronAtomicSymbolRev(this.value);
}); 
document.getElementById("ElectronAtomicMassIN").addEventListener("input", function() {
    ElectronAtomicMass(this.value);
}); 
document.getElementById("ElectronAtomicMassOUT").addEventListener("input", function() {
    ElectronAtomicMassRev(this.value);
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

document.getElementById('copybtn').addEventListener('click', function() {
    AtomSearchCopy();
}); 

document.getElementById('copybtnAlpha').addEventListener('click', function() {
    var value = "alpha"
    DecayCopy(value);
});

document.getElementById('copybtnBetaPos').addEventListener('click', function() {
    var value = "betapos"
    DecayCopy(value);
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
    else if (searchVal === "aanConst") { // Search using Atomic number
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].aanConst === parseInt(value)) { // Converts str value to int
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
    }  
    else if (searchVal === "atomSearch") { // Search using Atomic number
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
    else if (searchVal === "name") { // Search using Atomic number
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(); // Make first letter uppercase, others lowercase. Follows naming method in const AtomicSymbol
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].name === value) { // Converts str value to int
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
    }  
    else if (searchVal === "mass") { // Search using Atomic mass
        for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].avgMass === parseInt(value)) { // Converts str value to int
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
    }  
}


function blockSearch(group, period) {
    // Function to assign block name and azimuthal quantum number names given the group and period. Use = blockSearch(group, period). group = the group number (int); period = the period number (int).
    // To reference, call result[0] for block, and result[1] for azNum, assuming that var result = blockSearch(group, period) 
    var block, azNum
    if (group >= 1 && group <= 2 || group == 18 && period == 1){
        block = "s (sharp)"
        azNum = 0
        return [block, azNum];
    } else if (group >= 13 && group <= 18){
        block = "p (principal)"
        azNum = 1
        return [block, azNum];
    } else if (group >= 3 && group <= 12){
        block = "d (diffuse)"
        azNum = 2
        return [block, azNum];
    } else {
        block = "f (fundamental)"
        azNum = 3
        return [block, azNum];
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
    else {
        groupName = "N/A"
        IUPACname = "N/A"
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


function DecayCopy (value){
    const textCopy = document.createElement('textarea');

    if (value == "alpha") {
        var parentName = document.getElementById("AtomicNameParent").innerHTML 
        var parentMass = document.getElementById("AtomicMassNumParent").innerHTML
    
        var daughterName = document.getElementById("AtomicNameDaughter").innerHTML
        var daughterMass = document.getElementById("AtomicMassNumDaughter").innerHTML 

        var type = " alpha decays to "
        var other = " and Helium 4" 
    } else if (value == "betapos") {
        var parentName = document.getElementById("BetaPosAtomicNameParent").innerHTML 
        var parentMass = document.getElementById("BetaPosAtomicMassNumParent").innerHTML
    
        var daughterName = document.getElementById("BetaPosAtomicNameDaughter").innerHTML
        var daughterMass = document.getElementById("BetaPosAtomicMassNumDaughter").innerHTML 

        var type = " beta positive decays to "
        var other = " and a positive charged electron" 
    }
    textCopy.value = parentName + " " + parentMass + type + daughterName + " " + daughterMass + other

    document.body.appendChild(textCopy);
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value)
    document.body.removeChild(textCopy);
}
// Atom search

function AtomSearchAtomicMass (value){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN  
    var position = atomicSearch(AtomicSymbol, value, "mass"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var groupName = groupSearch(originalValuePosition.group) // Find names for the groups
        var blockName = blockSearch(originalValuePosition.group, originalValuePosition.period) // Find names for the block

        // Output; a more concise version compared to the previous version
        document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = originalValuePosition.shortform;
        document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = originalValuePosition.aanConst;
        document.getElementById("AtomSearchAtomicNameOUT").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicSearchGroupNameOUT").innerHTML = groupName[0];
        document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = groupName[1];
        document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = originalValuePosition.period;
        document.getElementById("AtomSearchAtomicMassOUT").innerHTML = originalValuePosition.avgMass;
        document.getElementById("AtomicBlockOUT").innerHTML = blockName[0];
        document.getElementById("AtomicBlockOUTalt").innerHTML = blockName[1];
    }
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
    document.getElementById("AtomSearchAtomicNameOUT").innerHTML = "Enter an element!";
    document.getElementById("AtomicSearchGroupNameOUT").innerHTML = null;
    document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = null;
    document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = null; AtomicBlockOUT
    document.getElementById("AtomSearchAtomicMassOUT").innerHTML = null;
    document.getElementById("AtomicBlockOUT").innerHTML = null;
    document.getElementById("AtomicBlockOUTalt").innerHTML = null;

}

function AtomicSearchGroupName (value, value2){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN  
    var position = atomicSearch(AtomicSymbol, value, "atomSearch", value2); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var groupName = groupSearch(originalValuePosition.group) // Find names for the groups
        var blockName = blockSearch(originalValuePosition.group, originalValuePosition.period) // Find names for the block

        // Output; a more concise version compared to the previous version
        document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = originalValuePosition.shortform;
        document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = originalValuePosition.aanConst;
        document.getElementById("AtomSearchAtomicNameOUT").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicSearchGroupNameOUT").innerHTML = groupName[0];
        document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = groupName[1];
        document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = originalValuePosition.period;
        document.getElementById("AtomSearchAtomicMassOUT").innerHTML = originalValuePosition.avgMass;
        document.getElementById("AtomicBlockOUT").innerHTML = blockName[0];
        document.getElementById("AtomicBlockOUTalt").innerHTML = blockName[1];
    }
}

function AtomicSearchAtomName (value){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN  
    var position = atomicSearch(AtomicSymbol, value, "name"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var groupName = groupSearch(originalValuePosition.group) // Find names for the groups
        var blockName = blockSearch(originalValuePosition.group, originalValuePosition.period) // Find names for the block

        // Output; a more concise version compared to the previous version
        document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = originalValuePosition.shortform;
        document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = originalValuePosition.aanConst;
        document.getElementById("AtomSearchAtomicNameOUT").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicSearchGroupNameOUT").innerHTML = groupName[0];
        document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = groupName[1];
        document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = originalValuePosition.period;
        document.getElementById("AtomSearchAtomicMassOUT").innerHTML = originalValuePosition.avgMass;
        document.getElementById("AtomicBlockOUT").innerHTML = blockName[0];
        document.getElementById("AtomicBlockOUTalt").innerHTML = blockName[1];
    }
}

function AtomicSearchAtomNumber (value){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN  
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var groupName = groupSearch(originalValuePosition.group) // Find names for the groups
        var blockName = blockSearch(originalValuePosition.group, originalValuePosition.period) // Find names for the block

        // Output; a more concise version compared to the previous version
        document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = originalValuePosition.shortform;
        document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = originalValuePosition.aanConst;
        document.getElementById("AtomSearchAtomicNameOUT").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicSearchGroupNameOUT").innerHTML = groupName[0];
        document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = groupName[1];
        document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = originalValuePosition.period;
        document.getElementById("AtomSearchAtomicMassOUT").innerHTML = originalValuePosition.avgMass;
        document.getElementById("AtomicBlockOUT").innerHTML = blockName[0];
        document.getElementById("AtomicBlockOUTalt").innerHTML = blockName[1];
    }
} 
function AtomicSearchAtomShort (value){
    // Function to print mass of an Atom. Input = AtomSearchAtomicMassIN  
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var groupName = groupSearch(originalValuePosition.group) // Find names for the groups
        var blockName = blockSearch(originalValuePosition.group, originalValuePosition.period) // Find names for the block

        // Output; a more concise version compared to the previous version
        document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML = originalValuePosition.shortform;
        document.getElementById("AtomSearchAtomicNumberOUT").innerHTML = originalValuePosition.aanConst;
        document.getElementById("AtomSearchAtomicNameOUT").innerHTML = originalValuePosition.name;
        document.getElementById("AtomicSearchGroupNameOUT").innerHTML = groupName[0];
        document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML = groupName[1];
        document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML = originalValuePosition.period;
        document.getElementById("AtomSearchAtomicMassOUT").innerHTML = originalValuePosition.avgMass;
        document.getElementById("AtomicBlockOUT").innerHTML = blockName[0];
        document.getElementById("AtomicBlockOUTalt").innerHTML = blockName[1];
    }
}
function AtomSearchCopy (){
    var atomicSymbol = document.getElementById("AtomSearchAtomicSymbolOUT").innerHTML 
    var atomicNumber = document.getElementById("AtomSearchAtomicNumberOUT").innerHTML 
    var atomicName = document.getElementById("AtomSearchAtomicNameOUT").innerHTML 
    var atomicGroup = document.getElementById("AtomicSearchGroupNameOUT").innerHTML 
    var atomicGroupAlt = document.getElementById("AtomicSearchGroupNameOUTalt").innerHTML 
    var atomicPeriod = document.getElementById("AtomicSearchGroupPeriodOUT").innerHTML 
    var atomicMass = document.getElementById("AtomSearchAtomicMassOUT").innerHTML
    var atomicBlock = document.getElementById("AtomicBlockOUT").innerHTML 
    var atomicBlockAlt = document.getElementById("AtomicBlockOUTalt").innerHTML 

    const textCopy = document.createElement('textarea');
    textCopy.value = atomicName + "\nShort form: " + atomicSymbol + "\nAtomic number: " + atomicNumber + "\nGroup: " + atomicGroup + "\nIUPAC group name: " + atomicGroupAlt +"\nPeriod: " + atomicPeriod + "\nBlock: " + atomicBlock + "\nAzimuthal quantum number: " + atomicBlockAlt + "\nAverage mass: " + atomicMass

    document.body.appendChild(textCopy);
    textCopy.select();
    navigator.clipboard.writeText(textCopy.value)
    document.body.removeChild(textCopy);
}



// Beta positive functions 


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
        var resultant = AtomicSymbol[position-1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaPosAtomicNumberIN").value = originalValuePosition.aanConst;
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
    // Function to calculate Beta positive decay, given the input Atomic symbol of an element. Input = BetaPosAtomicSymbolIN (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaPosAtomicNumberOUT").value = originalValuePosition.aanConst;
        document.getElementById("BetaPosAtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("BetaPosAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("BetaPosAtomicGroupNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaPosAtomicSymbolIN").value = resultant.shortform;
        document.getElementById("BetaPosAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("BetaPosAtomicNameParent").innerHTML = resultant.name;
        document.getElementById("BetaPosAtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("BetaPosAtomicPeriodNumParent").innerHTML = resultant.period;
        
    }
}

function BetaPosAtomicNumberRev (value){
    // Function to calculate inverse beta positive decay, given the ouptut Atomic number of an element. Input = BetaPosAtomicNumberOUT (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
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


// Beta negative


function BetaNegAtomicNumber (value){
    // Function to calculate Beta Postive decay, given the input Atomic number of an element. Input = BetaNegAtomicNumberIN (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaNegAtomicSymbolIN").value = originalValuePosition.shortform;
        document.getElementById("BetaNegAtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("BetaNegAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("BetaNegAtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaNegShortFormOUT").value = resultant.shortform;
        document.getElementById("BetaNegAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("BetaNegAtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("BetaNegAtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("BetaNegAtomicPeriodNum").innerHTML = resultant.period;
        
    }

}

function BetaNegAtomicSymbol(value){
    // Function to calculate Beta positive decay, given the input Atomic symbol of an element. Input = BetaNegAtomicSymbolIN (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaNegAtomicNumberIN").value = originalValuePosition.aanConst;
        document.getElementById("BetaNegAtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("BetaNegAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("BetaNegAtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaNegShortFormOUT").value = resultant.shortform;
        document.getElementById("BetaNegAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("BetaNegAtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("BetaNegAtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("BetaNegAtomicPeriodNum").innerHTML = resultant.period;
        
    }
}


function BetaNegAtomicSymbolRev(value){
    // Function to calculate Beta positive decay, given the input Atomic symbol of an element. Input = BetaNegShortFormOUT (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaNegAtomicNumberOUT").value = originalValuePosition.aanConst;
        document.getElementById("BetaNegAtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("BetaNegAtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("BetaNegAtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaNegAtomicSymbolIN").value = resultant.shortform;
        document.getElementById("BetaNegAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("BetaNegAtomicNameParent").innerHTML = resultant.name;
        document.getElementById("BetaNegAtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("BetaNegAtomicPeriodNumParent").innerHTML = resultant.period;
        
    }
}

function BetaNegAtomicNumberRev (value){
    // Function to calculate inverse beta positive decay, given the ouptut Atomic number of an element. Input = BetaNegAtomicNumberOUT (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-1] // Search AtomicSymbol for an item added by 1 (i.e. the inv. effects of Beta Positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("BetaNegShortFormOUT").value = originalValuePosition.shortform;
        document.getElementById("BetaNegAtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("BetaNegAtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("BetaNegAtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("BetaNegAtomicSymbolIN").value = resultant.shortform;
        document.getElementById("BetaNegAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("BetaNegAtomicNameParent").innerHTML = resultant.name;
        document.getElementById("BetaNegAtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("BetaNegAtomicPeriodNumParent").innerHTML = resultant.period;
    }

}

function BetaNegAtomicMass(value){
    // Function to calculate mass after beta positive decay, given the input Atomic mass of an element. Input = BetaPosAtomicMassIN (int)
    document.getElementById("BetaNegAtomicMassNumParent").innerHTML = value;

    document.getElementById("BetaNegAtomicMassOUT").value = value;
    document.getElementById("BetaNegAtomicMassNumDaughter").innerHTML = value;
}

function BetaNegAtomicMassRev(value){
    // Function to calculate inverse mass after beta positive decay, given the output Atomic mass of an element. Input = BetaPosAtomicMassIN (int)
    document.getElementById("BetaNegAtomicMassNumDaughter").innerHTML = value;

    document.getElementById("BetaNegAtomicMassIN").value = value;
    document.getElementById("BetaNegAtomicMassNumParent").innerHTML = value;
}


// Electron capture


function ElectronAtomicNumber (value){
    // Function to calculate Beta Postive decay, given the input Atomic number of an element. Input = ElectronAtomicNumberIN (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("ElectronAtomicSymbolIN").value = originalValuePosition.shortform;
        document.getElementById("ElectronAtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("ElectronAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("ElectronAtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("ElectronShortFormOUT").value = resultant.shortform;
        document.getElementById("ElectronAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("ElectronAtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("ElectronAtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("ElectronAtomicPeriodNum").innerHTML = resultant.period;
        
    }

}

function ElectronAtomicSymbol(value){
    // Function to calculate Beta positive decay, given the input Atomic symbol of an element. Input = ElectronAtomicSymbolIN (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position-1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("ElectronAtomicNumberIN").value = originalValuePosition.aanConst;
        document.getElementById("ElectronAtomicNameParent").innerHTML = originalValuePosition.name;
        document.getElementById("ElectronAtomicGroupNumParent").innerHTML = originalValuePosition.group;
        document.getElementById("ElectronAtomicPeriodNumParent").innerHTML = originalValuePosition.period;
        
        document.getElementById("ElectronShortFormOUT").value = resultant.shortform;
        document.getElementById("ElectronAtomicNumberOUT").value = resultant.aanConst;
        document.getElementById("ElectronAtomicNameDaughter").innerHTML = resultant.name;
        document.getElementById("ElectronAtomicGroupNum").innerHTML = resultant.group;
        document.getElementById("ElectronAtomicPeriodNum").innerHTML = resultant.period;
        
    }
}


function ElectronAtomicSymbolRev(value){
    // Function to calculate Beta positive decay, given the input Atomic symbol of an element. Input = ElectronShortFormOUT (str)
    var position = atomicSearch(AtomicSymbol, value, "shortform"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+1] // Search AtomicSymbol for an item subtracted by 1 (i.e. the effects of beta positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("ElectronAtomicNumberOUT").value = originalValuePosition.aanConst;
        document.getElementById("ElectronAtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("ElectronAtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("ElectronAtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("ElectronAtomicSymbolIN").value = resultant.shortform;
        document.getElementById("ElectronAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("ElectronAtomicNameParent").innerHTML = resultant.name;
        document.getElementById("ElectronAtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("ElectronAtomicPeriodNumParent").innerHTML = resultant.period;
        
    }
}

function ElectronAtomicNumberRev (value){
    // Function to calculate inverse beta positive decay, given the ouptut Atomic number of an element. Input = ElectrontomicNumberOUT (int)
    var position = atomicSearch(AtomicSymbol, value, "aanConst"); // Pass both arguments to aanFinder
    if (position !== -1) {
        var originalValuePosition = AtomicSymbol[position]; // Find position of the item
        var resultant = AtomicSymbol[position+1] // Search AtomicSymbol for an item added by 1 (i.e. the inv. effects of Beta Positive decay)

        // Output; a more concise version compared to the previous version
        document.getElementById("ElectronShortFormOUT").value = originalValuePosition.shortform;
        document.getElementById("ElectronAtomicNameDaughter").innerHTML = originalValuePosition.name;
        document.getElementById("ElectronAtomicGroupNum").innerHTML = originalValuePosition.group;
        document.getElementById("ElectronAtomicPeriodNum").innerHTML = originalValuePosition.period;
        
        document.getElementById("ElectronAtomicSymbolIN").value = resultant.shortform;
        document.getElementById("ElectronAtomicNumberIN").value = resultant.aanConst;
        document.getElementById("ElectronAtomicNameParent").innerHTML = resultant.name;
        document.getElementById("ElectronAtomicGroupNumParent").innerHTML = resultant.group;
        document.getElementById("ElectronAtomicPeriodNumParent").innerHTML = resultant.period;
    }

}

function ElectronAtomicMass(value){
    // Function to calculate mass after beta positive decay, given the input Atomic mass of an element. Input = BetaPosAtomicMassIN (int)
    document.getElementById("ElectronAtomicMassNumParent").innerHTML = value;

    document.getElementById("ElectronAtomicMassOUT").value = value;
    document.getElementById("ElectronAtomicMassNumDaughter").innerHTML = value;
}

function ElectronAtomicMassRev(value){
    // Function to calculate inverse mass after beta positive decay, given the output Atomic mass of an element. Input = BetaPosAtomicMassIN (int)
    document.getElementById("ElectronAtomicMassNumDaughter").innerHTML = value;

    document.getElementById("ElectronAtomicMassIN").value = value;
    document.getElementById("ElectronAtomicMassNumParent").innerHTML = value;
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

