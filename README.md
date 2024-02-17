<h2 align="center"> Atomic Search & Decay Calculator</h2>
<p align="center"><i>Formerly Radioactive Decay Calculator</i></p>

<h2>Description</h2>
<p>Searches periodic table for elements and calculates alpha, beta positive, beta negative, and electron capture decays.</p>

<h2>What it uses</h2>

* Javascript for logic and calculations
* HTML for front end
* CSS for styles
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

<h3>Identification and calling function</h3>
In <code>index.html</code>, each element contains an id, which the function callers use to know which function to call. For example, 

<code>input type="text" id="BetaPosShortFormOUT" class="form-control1" aria-label="Isotope number" aria-describedby="basic-addon2"</code>

...is an input with the id "BetaPosShortFormOUT". This is read in <code>background.js</code> with 

<code>document.getElementById("BetaPosShortFormOUT").addEventListener("input", function() {
    BetaPosAtomicSymbolRev(this.value);
});</code>

Basically, if <code>BetaPosShortFormOUT</code> has an input, trigger the function <code>BetaPosAtomicSymbolRev</code>. As that function has one parameter, <code>value</code>, assign the value in id <code>BetaPosShortFormOUT</code> as <i>that</i> value.

For functions with multiple parameters, then it'll work a bit differently. For example, recall function <code>AtomicSearchGroupName</code>, which searches for an element in AtomicSymbol given the unknown atomic group and period. 

This is the code given to call the function if <code>AtomicSearchGroupNameIN</code> is given and assign its variables:

<code>document.getElementById("AtomicSearchGroupNameIN").addEventListener("input", function() {
    var value = this.value;
    var value2 = document.getElementById("AtomicSearchGroupPeriodIN").value;
    AtomicSearchGroupName(value, value2);
});</code>

If <code>AtomicSearchGroupNameIN</code> is called, then it will assign that value as <code>value</code>. It will also assign another value, <code>value2</code>, with the value of <code>AtomicSearchGroupPeriodIN</code>, the input of the period. It then calls the function with the 2 values using <code>AtomicSearchGroupName(value, value2)</code>
