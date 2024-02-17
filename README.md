<h2 align="center"> Atomic Search & Decay Calculator</h2>
<p align="center"><i>Formerly Radioactive Decay Calculator</i></p>

<h2>Description</h2>
<p>Searches periodic table for elements and calculates alpha, beta positive, beta negative, and electron capture decays.</p>

<h2>What it uses</h2>

* Javascript for logic and calculations
* HTML for front end
* CSS for styles
* Bootstrap, for more consistent and faster styling 
* JSON for Chrome extension identification

Moreover, additional tools used were:

* Figma - to sketch up user interface prototypes
* Adobe Illustrator - for vector graphics
* Adobe After Effects - for marketing videos

<h2>What each file does</h2>

* <code>index.html</code> is the front end; where the user interacts with the project
* <code>styles.css</code> contains style instructions for the index file
* <code>background.js</code> contains most of the functions used for the project. It is used to find the variables inputted, do calculations, and prints output
* <code>atomicData.js</code> contains an array, <code>const AtomicSymbol</code>, which houses every element
* <code>manifest.json</code> contains the manifest which is used by Google Chrome to identify the extension as well as permissions needed to use

<h2>How it works</h2>

<h3>Identification and calling functions</h3>
In <code>index.html</code>, each element contains an id, which the function callers use to know which function to call. For example, 

<code>input type="text" id="BetaPosShortFormOUT" class="form-control1" aria-label="Isotope number" aria-describedby="basic-addon2"</code>

...is an input with the id "BetaPosShortFormOUT". This is read in <code>background.js</code> with 

<pre>document.getElementById("BetaPosShortFormOUT").addEventListener("input", function() {
    BetaPosAtomicSymbolRev(this.value);
});</pre>

Basically, if <code>BetaPosShortFormOUT</code> has an input, trigger the function <code>BetaPosAtomicSymbolRev</code>. As that function has one parameter, <code>value</code>, assign the value in id <code>BetaPosShortFormOUT</code> as <i>that</i> value.

For functions with multiple parameters, then it'll work a bit differently. For example, recall function <code>AtomicSearchGroupName</code>, which searches for an element in AtomicSymbol given the unknown atomic group and period. 

This is the code given to call the function if <code>AtomicSearchGroupNameIN</code> is given and assign its variables:

<pre>document.getElementById("AtomicSearchGroupNameIN").addEventListener("input", function() {
    var value = this.value;
    var value2 = document.getElementById("AtomicSearchGroupPeriodIN").value;
    AtomicSearchGroupName(value, value2);
});</pre>

If <code>AtomicSearchGroupNameIN</code> is called, then it will assign that value as <code>value</code>. It will also assign another value, <code>value2</code>, with the value of <code>AtomicSearchGroupPeriodIN</code>, the input of the period. It then calls the function with the 2 values using <code>AtomicSearchGroupName(value, value2)</code>

<h3>Functions that assign input and prints the output</h3>
These functions occur after an ID is given <i>(i.e. the code on top)</i>. For example <code>AtomicSearchAtomName</code> triggers if an input, a string with the id <code>AtomSearchAtomicNameIN</code> is inputted.

<pre>function AtomicSearchAtomName (value){
    // Function to print the name of an Atom. Input = AtomSearchAtomicNameIN (str)  
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
}</pre>

The function identifies the unknown atomic element by passing calling <code>atomicSearch</code> (explained below), with the value, and notes that the value is the name of the atomic value. 

If the position is valid (which if it passes <code>if (position !== -1) {</code>, where -1 is an invalid or missing element), then it will assign that position as the variable <code>originalValuePosition</code>. It will find the group by calling <code>groupSearch</code> with the group parameter of <code>originalValuePosition.group</code>, as well as find the block by calling the <code>blockName</code> function.

Other functions may also have a <code>resultant</code> variable, which calculates the outcome element given a decay. For example, in the function <code>BetaPosAtomicNumber</code>, resultant is: <code>var resultant = AtomicSymbol[position-1]</code>. It finds the n-th element in AtomicSymbol, where n is the position of the original element subtracted by one (i.e. the effects of a beta-positive decay).

The values are then outputted by calling the ID of all of the appropriate elements and assigning it as

* the appropriate value in either <code>originalValuePosition</code> or <code>resultant</code>
* the n-th element in an array (e.g. <code>blockName[0]</code>)) if the output of the function is an array. Refer to specific function documentation for which array to use

<h4>.innerHTML vs .value</h4>
Recall that some of the IDs call for the <code>.innerHTML</code> and others call for the <code>.value</code>. In general,

* <code>.innerHTML</code> is used for any HTML element whose output is in a <code>span</code> element
* <code>.values</code> is used for any HTML element whose output is in a <code>input</code> element. Generally used in elements like atomic number, short form, or mass. 

<h3>Function atomicSearch</h3>
<p>atomicSearch is an important function as it searches through array <code>atomicSymbol</code> and finds the requested element. Parameters are: </p>

* <code>AtomicSymbol</code>, which is the array that houses all of the elements (const)
* <code>value</code>, which is the value to search for (str or int)
* <code>searchVal</code>, which defines what to search for. Only use <code>aanConst</code>, <code>atomSearch</code>, <code>name</code>, <code>mass</code> (str)
* <code>value2</code>, another value to search for. Only used if searchVal = <code>atomSearch</code> (str or int)

For any string inputs, there is usually a snippet of code after the if structure which looks like <code>value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();</code>. This turns the first letter of the string into uppercase, and all of the others to lowercase, which is the style used in the array <code>AtomicSymbol</code>. (e.g. <code>hEliuM</code> turns to <code>Helium</code>). 

Then, a for loop is used. 
<pre>   for (var i = 0; i < AtomicSymbol.length; i++) { // Search for item matching value at "i". If "i" == value, get its index, else add 1 to i.
            if (AtomicSymbol[i].shortform === value) {
                return i; // Return the index of the found element
            }
        }
        return -1; // Return -1 if no matching element is found
</pre>

The for loop defines a value <code>i</code> and sets it as zero. This tells it to start at position zero, and go up to the length of <code>AtomicSymbol</code>. If the shortform of AtomicSymbol at position <code>i</code> holds true, then return the value of <code>i</code>. Else, add 1 to <code>i</code> and continue.

If <code>i < AtomicSymbol.length</code> is reached, then return -1. The other functions will interpret a value of -1 as a missing or invalid element.

For <code>searchVal</code> === <code>atomSearch</code>, where 2 values are given, a slightly different if structure is used. 

<pre>if (AtomicSymbol[i].group === parseInt(value)  && AtomicSymbol[i].period === parseInt(value2)) { // Variable "value" represents group assignment, variable "value2" represents period.
        return i; // Return the index of the found element
    } else if (AtomicSymbol[i].group === value && AtomicSymbol[i].period === parseInt(value2)) { // Special coniditon if "N/A" is inputted. Does not convert value into int. 
        return i; // Return the index of the found element
    } </pre>

If AtomicSymbol's group at position i equals <code>value</code>, <b>and</b> the AtomicSymbol's period at position i equals to <code>value2</code> is also true, return i. Additionally, if <code>value</code> is a string (only happens if "N/A is inputted), it omits the <code>parseInt(value)</code> <i>only</i> for <code>value</code>, which converts the str to int.

<h3>Functions blockName and groupName</h3>

Both functions are similar as they compare one/multiple values, and return a set of variables in an array. 

* blockName takes in <code>group</code> and <code>period</code> and assigns the appropriate block and azimuthal quantum number. Reference <code>result[0]</code> for block, and <code>result[1]</code> for azNum, assuming that <code>var result = blockSearch(group, period)</code>
* groupName takes in <code>group</code> and assigns appropriate group and IUPAC name. To reference, call <code>result[0]</code> for groupName, and <code>result[1]</code> for IUPACname, assuming that <code>var result = groupSearch(group)</code>
