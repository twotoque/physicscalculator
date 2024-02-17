<div align="center"><img src="icon128.png"></div>
<h2 align="center"> Atomic Search & Decay Calculator</h2>
<p align="center"><i>Formerly Radioactive Decay Calculator</i></p>

<h2>Description</h2>
<p>Don't have the time to reference your periodic table while you do your mountain of questions assigned by your Physics teacher? This Google Chrome extension allows you to quickly search for elements and calculates alpha, beta+/- & electron capture decays.

This project was originally a site created for GryphHacks 2022 (University of Guelph's Hackathon). In 2024, I completely rewrote the code, clearing out most of the bugs, making it compatible with the Content Security Policy (CSP), and making it more cleaner and readable. Moreover, I added features like atom search and copy button.</p>

<h4>Contacting me</h4>
To let me know if there are any issues, feel free to use the issues tab on this GitHub repo or emailing me at dereksong28@gmail.com.

<h4>Licensing</h4>
Licensed under the MIT License, available through the <code>license.md</code> file. 

Extension created by Derek Song, 2024. 

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

<pre>input type="text" id="BetaPosShortFormOUT" class="form-control1" aria-label="Isotope number" aria-describedby="basic-addon2"</pre>

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

<h3>Const AtomicSymbol</h3>
AtomicSymbol is an array and is the only thing inside <code>atomicData.js</code>. It looks roughly like this:
<pre>const AtomicSymbol = [ // An array of Atomic elements. Use = AtomicSymbol[<element>]. name: Name of element (str); shortform: Element intials (str); aanConst: Atomic number (int) ; group: Group on periodic table (int) ; period: Period on periodic table (int) ; avgMass: the average mass of an element (float)
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
        aanConst: 1, 
        group: 1,
        period: 1,
        avgMass: 1.0078,
    }, 
    ...(etc)
</pre>

* <code>name</code> is the full name of the element. Capitalize the first letter and make sure the other letters are lowercase (<i><code>N/A</code> is the <b>only</b> special exception to this rule.</i>) The functions are programmed to automatically convert string inputs to this format. (e.g. "Hydrogen") (str)
* <code>shortform</code> is the abbreviation of the element. Capitalize the first letter and make sure the other letters are lowercase (<i><code>N/A</code> is the <b>only</b> special exception to this rule.</i>) The functions are programmed to automatically convert string inputs to this format. (e.g. "He") (str)
* <code>aanConst</code> is the atomic number of the element (int).
* <code>group</code> is the group of the element (int).
* <code>period</code> is the period of the element (int).
* <code>avgMass</code> is the average mass of the element (float).

To reference, use <code>AtomicSymbol[i].element</code>, where <code>i</code> is the position of the element in the list (technically the atomic number), and <code>.element</code> is the element you want to search for. 

<h3>Functions blockName and groupName</h3>

Both functions are similar as they compare one/multiple values, and return a set of variables in an array. 

* blockName takes in <code>group</code> and <code>period</code> and assigns the appropriate block and azimuthal quantum number. Reference <code>result[0]</code> for block, and <code>result[1]</code> for azNum, assuming that <code>var result = blockSearch(group, period)</code>
* groupName takes in <code>group</code> and assigns appropriate group and IUPAC name. To reference, call <code>result[0]</code> for groupName, and <code>result[1]</code> for IUPACname, assuming that <code>var result = groupSearch(group)</code>

<h3>Functions DecayCopy and AtomSearchCopy</h3>
This tool has a feature to easily copy decays and elements. This is done through these two functions, where

* <code>DecayCopy</code> copies alpha, beta +/-, and electron capture decays. It takes in one value which indicates the type of decay. (str)
* <code>AtomSearchCopy</code> copies atomic search. It takes no value.

The functions first call the HTML elements in the selected decay type. It creates a const named <code>textCopy</code>, which is a text area in the document. It then assembles the sentence, usually with a statement like 

<pre>textCopy.value = atomicName + "\nShort form: " + atomicSymbol + "\nAtomic number: " + atomicNumber + "\nGroup: " + atomicGroup + "\nIUPAC group name: " + atomicGroupAlt +"\nPeriod: " + atomicPeriod + "\nBlock: " + atomicBlock + "\nAzimuthal quantum number: " + atomicBlockAlt + "\nAverage mass: " + atomicMass</pre>

For <code>DecayCopy</code> an if statement is used, comparing the type of element. It then assembles the sentence according to the decay. 
    
Next, <code>textCopy</code> is appended to the node of the document (<code>document.body.appendChild(textCopy);</code>). It is then selected (<code>textCopy.select();</code>), and the clipboard is instructed to copy the value (<code>navigator.clipboard.writeText(textCopy.value)</code>). After that is done, the node is cleared (<code>document.body.removeChild(textCopy);</code>).  
<h3>Showing/hiding elements</h3>

Similar to the "identifying" functions, these functions tell the webpage what to hide or load. For example, the function below listens if <code>AtomSearchbtn</code> is clicked or not, and if so, defines each element as its own variable, then shows <code>AtomSearch</code> and hides the others.
<pre>document.getElementById('AtomSearchbtn').addEventListener('click', function() {
    // Funciton to show AtomSearch and hide other elements upon clicking AtomSearchbtn. Inputs = none
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
</pre>
In general, these HTML ids correspond to:

* <code>Alpha</code> - alpha decay element (button to show: <code>Alphabtn</code>)
* <code>AtomSearch</code> - atom search element (button to show: <code>AtomSearchbtn</code>)
* <code>BetaPositive</code> - beta positive decay element (button to show: <code>BetaPositivebtn</code>)
* <code>BetaNegative</code> - beta negative decay element (button to show: <code>BetaNegativebtn</code>)
* <code>ElectronCapture</code> - electron capture (button to show: <code>ElectronCapturebtn</code>)

To show an element, set the element's <code>.style.display</code> to equal to <code>block</code>. To hide, set as <code>none</code>.

<h4>On load</h4>
When the extension is first opened, it defaults to opening atom search and hiding the other elements.
<h3>Button links</h3>
This tool uses Bootstrap, which has default button functionality. While normally you will put an <code>href</code> into an <href>a</href> tag to link it to another page, this isn't supported in a Google Chrome extension. Hencewhy this piece of code exists

<pre>document.getElementById('GitHub').addEventListener('click', function() {
    // Link to github repo
    chrome.tabs.update({ url: 'https://github.com/twotoque/physicscalculator/' });
});</pre>

This code listens to if an HTML id named <code>GitHub</code> is clicked. If it is, then Chrome is instructed to update the tab to go to the corresponding link, in this case <code>https://github.com/twotoque/physicscalculator/</code>.
