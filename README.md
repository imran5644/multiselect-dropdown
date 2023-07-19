# Multiselectdropdown

<h2>Demo </h2>

![screenShot](https://raw.github.com/imran5644/multiselect-dropdown/main/screenshot/Screenshot.png)

<h2>Getting Started</h2>
<h2>Features </h2>
<ul>
<li>Dropdown with multiple selction option</li>
<li>Bind to custom data source</li>
<li>Select/De-select all items</li>
<li>Select/de-select a single items</li>
</ul>

<h3>Installation</h3>
<p>The easiest way to use react-select is to install it from npm and build it into your app with Webpack.</p>
<pre><code>npm i react-multiselectdropdown-package </code></pre>
<p>Then use it in your app</p>


<h2>Usage</h2>

<pre><code>
<div>
<span>import </span><span>{ MultiSelectDropdown } </span><span>from </span> <span>'react-multiselectdropdown-package'</span>;</span>

<span>function</span> <span>App</span><span>(</span><span>)</span> <span>{</span>
    
    <span>const </span><span>players</span> <span>=</span><span> { </span>
        <span>"France"</span><span>:</span><span>[</span><span>{</span><span>"name":</span><span>"Antoine Griezmann"</span><span>,</span><span>selected:</span> <span>false,</span><span>id:</span><span>454</span><span>},</span>
        <span>          {</span><span>"name":</span><span>"Paul Pogba",</span><span>selected:</span><span>false,</span><span>id:</span><span> 254</span><span>}],</span>
        <span>"Croatia"</span><span>:</span><span>[</span>{</span><span>"name":</span><span>"Luka Modrić",</span><span>selected:</span><span>false,</span><span>id:</span><span>354</span><span>},</span><br/><span>                   {</span><span>"name":</span><span>"Ivan Rakitić",</span><span>selected: </span><span>false,</span><span> id:</span><span>442</span><span>}],</span>
        <span>"Argentina":</span><span>[{</span><span>"name":<span></span>"Lionel Messi",</span><span>selected:</span><span> false,</span><span> id: </span><span>404</span><span>}, </span><span><br/>                     {<span><span>"name":<span><span>"Elena Martínez",<span><span>selected:</span><span>false,</span><span> id:</span><span>402</span><span>}]</span>
        <span>};</span>

    <span>const</span><span> handleOptionSelect</span><span> = </span><span>(groupIndex)</span><span> =></span><span> {</span>
       <span>console.log(`Select a single clicked for Group ${groupIndex + 1}`);<span>
    <span>};<span>

    <span>const</span><span> handleSelectAll</span><span> = </span><span>(groupIndex)</span><span> =></span><span> {</span>
       <span>console.log(`Select All clicked for Group ${groupIndex + 1}`);</span>
    <span>};</span>

    <span>const</span><span> handleClear</span> <span>=</span><span> (groupIndex)</span><span> =></span><span> {</span>
       <span>console.log(`Clear clicked for Group ${groupIndex + 1}`);</span>
    <span>};</span>

    <span>const </span><span>handleOptionclear</span><span> = </span><span>(groupIndex)</span><span> => </span><span>{</span>
       <span>console.log(`Unselected a member for group ${groupIndex + 1}`);<span>
   <span>};</span>

  <span>return<span><span>(<span>
    <span><</span><span>></span>
        <span><span><</span>MultiSelectDropdown </span>
        <span>players= {players}  </span>
        <span>onSingleSelect={ handleOptionSelect} </span>
        <span>onSelectAll ={handleSelectAll} </span>
        <span>onClear ={handleClear} </span>
        <span>onSingleClear = {handleOptionclear}</span>
        <span>/></span>
     <span><</span><span>/</span><span>></span>
    <span>);</span>
  <span>}</span>

<span>export default App;</span>

</p>
</div>
</code>
</pre>


<h2>Callback Methods </h2>
<ul>
<li>onSingleSelect - Return the selected item when an item is checked. Example : (onSelect)="handleOptionSelect(groupIndex)"</li>
<li>onSelectAll - Return the all items. Example : (onSelectAll)="onSelectAll(groupIndex)".</li>
<li>onClear - Return the unselected item when an item is unchecked. Example : (handleOptionclear)="handleOptionclear(groupIndex)"</li>
<li>onSingleClear - Return the unselected item when an item is unchecked : (onFilterChange)="handleOptionclear(groupIndex)"
</li>
</ul>

<h4>Demo</h4>

<h3>Run locally</h3>
<ul>
  <li>Clone the repository or downlod the .zip,.tar files. </li>
  <li>Run npm install</li>
  <li>Run npm start</li>
  <li>Navigate to http://localhost:4000/</li>
</ul>
  <h3>Library Build / NPM Package</h3>
  <pre><code>Run npm build:lib to build the library and generate an NPM package. The build artifacts will be stored in the dist-lib/ folder.</code>
</pre>

<h2>Development </h2>
<p>This project was generated with React CLI version ^18.2.0.</p>

<h2>License  </h2>
<p>MIT License.</p>

<h2>Keywords </h2>
<p>React, react-dom,multiselect dropdown</p>





