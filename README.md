# Multiselectdropdown

<h2>Description</h2>
<p>
A React component which provides multi select functionality with features like selection checkbox, single select dropdown and grouping features.
</p>

![screenshot](/screenshot/Screenshot1.png)

<h2>Getting Started</h2>
<h2>Features </h2>
<ul>
<li>Dropdown with grouping & multiple selection option</li>
<li>Bind to custom data source</li>
<li>Select/De-select all items</li>
<li>Select/de-select a single items</li>
<li>Group select/unselect</li>
</ul>

<h3>Installation</h3>
<p>The easiest way to use react-select is to install it from npm and build it into your app with Webpack.</p>
<pre><code>npm i multiselectpackage</code></pre>
<p>Then use it in your app</p>


<h2>Usage</h2>

<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-v">{ MultiSelectDropdown }</span> <span class="pl-k">from</span> <span class="pl-s">'multiselectpackage'</span><span class="pl-kos">;</span>


<span class="pl-v">function</span> <span class="pl-v">App</span><span>(</span><span>)</span> <span>{</span>

 <span class="pl-v">const </span><span class="pl-c1">options</span> <span>=</span><span> {</span><br/><span class="pl-s1">"France"</span><span class="pl-s1">:</span><span class="pl-s1">[</span><span class="pl-s1">{</span><span class="pl-c1">"name"</span><span class="pl-s1">: " Antoine Griezmann"</span><span class="pl-s1">,</span><span class="pl-c1">selected</span><span class="pl-s1">: false,</span><span class="pl-c1">id</span><span class="pl-s1">: 454</span><span class="pl-s1">},</span>
        <span class="pl-s1">           {</span><span class="pl-c1">"name"</span><span class="pl-s1">: "Paul Pogba",</span><span class="pl-c1">selected</span><span class="pl-s1">: false,</span><span class="pl-c1">id</span><span class="pl-s1">: 254</span><span class="pl-s1">}],</span>
        <span class="pl-s1">"Croatia"</span><span class="pl-s1">:</span><span class="pl-s1">[</span><span class="pl-s1">{</span><span class="pl-c1">"name"</span><span class="pl-s1">: "Luka Modrić",</span><span class="pl-c1">selected</span><span class="pl-s1">: false,</span><span class="pl-c1">id</span><span class="pl-s1">: 354</span><span class="pl-s1">},</span><br/><span class="pl-s1">           {</span><span class="pl-c1">"name"</span><span class="pl-s1">: "Ivan Rakitić",</span><span class="pl-c1">selected</span><span class="pl-s1">: false,</span><span class="pl-c1"> id</span><span class="pl-s1">: 442</span><span class="pl-s1">}],</span>
         <span class="pl-s1">"Argentina":</span><span class="pl-s1">[{</span><span class="pl-c1">"name"</span><span class="pl-s1">: "Lionel Messi",</span><span class="pl-c1">selected</span><span class="pl-s1">: false,</span><span class="pl-c1"> id</span><span class="pl-s1">: 404</span><span class="pl-s1">}, </span><span class="pl-s1"><br/>             {</span><span class="pl-c1">"name":</span><span class="pl-s1">"Elena Martínez",</span><span class="pl-c1">selected</span><span class="pl-s1">: false,</span><span class="pl-c1">id</span><span class="pl-s1">: 402</span><span class="pl-s1">}]</span>
         <span class="pl-s1">};</span>
       
   <span class="pl-v">const</span><span class="pl-c1"> handleOptionSelect</span><span> = </span><span class="pl-s1">(groupIndex, options)</span><span> =></span><span class="pl-s1"> {</span>
       <span class="pl-s1">console.log(`Select a single clicked for Group ${groupIndex + 1}`);<span>
       <span class="pl-s1">console.log(`${JSON.stringify(options)}`);</span>
   <span class="pl-s1">};</span>

   <span class="pl-v">const</span><span class="pl-c1"> handleSelectAll</span><span> = </span><span class="pl-s1">(groupIndex, options)</span><span> =></span><span> {</span>
       <span class="pl-s1">console.log(`Select All clicked for Group ${groupIndex + 1}`);</span>
       <span class="pl-s1">console.log(`${JSON.stringify(options)}`);</span>
   <span class="pl-s1">};</span>

   <span class="pl-v">const</span><span class="pl-c1"> handleClear</span> <span>=</span><span class="pl-s1"> (groupIndex, options)</span><span> =></span><span class="pl-s1"> {</span>
       <span class="pl-s1">console.log(`Clear clicked for Group ${groupIndex + 1}`);</span>
       <span class="pl-s1">console.log(`${JSON.stringify(options)}`);</span>
   <span class="pl-s1">};</span>

   <span class="pl-v">const </span><span class="pl-c1">handleOptionclear</span><span> = <span><span class="pl-s1">(groupIndex, options)</span><span> => </span><span class="pl-s1">{</span>
       <span class="pl-s1">console.log(`Unselected a member for group ${groupIndex + 1}`);</span>
       <span class="pl-s1">console.log(`${JSON.stringify(options)}`);</span>
   <span class="pl-s1">};</span>

  <span class="pl-v">return<span><span>(<span>
    <span><</span><span>></span>
        <span class="pl-ent"><span><</span>MultiSelectDropdown </span>
        <span class="pl-c1">options</span><span class="pl-c1">={options}  </span>
        <span class="pl-c1">onSingleSelect</span><span class="pl-c1">={ handleOptionSelect} </span>
        <span class="pl-c1">onSelectAll</span><span class="pl-c1">={handleSelectAll} </span>
        <span class="pl-c1">onClear</span><span class="pl-c1">={handleClear} </span>
        <span class="pl-c1">onSingleClear</span><span class="pl-c1">={handleOptionclear}</span>
        <span class="pl-c1">/></span>
     <span class="pl-s1"><</span><span class="pl-s1">/</span><span class="pl-s1">></span>
    <span class="pl-s1">);</span>
  <span class="pl-s1">}</span>

</pre></div>

<h2>
<a id="user-content-4-props-" class="anchor" href="#4-props-" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Props <g-emoji class="g-emoji" alias="speech_balloon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ac.png">💬</g-emoji>
</h2>
<table>
<thead>
<tr>
<th align="left">Prop</th>
<th align="left">Type</th>
<th align="left">Default</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>options</code></td>
<td align="left"><code>object</code></td>
<td align="left"><code>{}</code></td>
<td align="left">Dropdown options</td>
</tr>
<tr>
<td align="left"><code>onSelectAll</code></td>
<td align="left"><code>function</code></td>
<td align="left"><code>func</code></td>
<td align="left">Callback function will invoked on onSelectAll event. Params are groupIndex and options.</td>
</tr>
<tr>
<td align="left"><code>onClear</code></td>
<td align="left"><code>function</code></td>
<td align="left"><code>func</code></td>
<td align="left">Callback function will invoked on clear event. Params are groupIndex and options</td>
</tr>
<tr>
<td align="left"><code>onSingleSelect</code></td>
<td align="left"><code>boolean</code></td>
<td align="left"><code>false</code></td>
<td align="left">It sets <code>true</code> and behave like a normal dropdown(single select dropdown).Params are groupIndex options.</td>
</tr>
<tr>
<td align="left"><code>onSingleClear</code></td>
<td align="left"><code>boolean</code></td>
<td align="left"><code>true</code></td>
<td align="left">It sets <code>false</code> and behave like a normal dropdown(unselect single  dropdown).Params are groupIndex and options.</td>
</tr>
<tr>
<td align="left"><code>groupIndex</code></td>
<td align="left"><code>Index</code></td>
<td align="left"><code>Number</code></td>
<td align="left">It gives selected group or selected dropdown Index.</td>
</tr>
<tr>
<td align="left"><code>options(in call Functions)</code></td>
<td align="left"><code>{}</code></td>
<td align="left"><code>object</code></td>
<td align="left">It Will give you the entire object with selected or unselected values of dropdown.</td>
</tr>
<tr>
<td align="left"><code>showCheckbox</code></td>
<td align="left"><code>bool</code></td>
<td align="left"><code>false</code></td>
<td align="left">To display checkbox option in the dropdown</td>
</tr>
<tr>
<td align="left"><code>displayValue</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>value</code></td>
<td align="left">Property name in the object to display in the dropdown. Refer <code>Basic Usage</code> section</td>
</tr>
<tr>
<td align="left"><code>groupBy</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">Group the popup list items with the corresponding category by the property name in the object</td>
</tr>
</tbody>
</table>
<br/>
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
