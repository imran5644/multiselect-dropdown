# Multiselectdropdown

<h2>Description</h2>
<p>
A React component which provides multi select functionality with features like selection checkbox, Change the button text, color, background and disable button, single select dropdown and grouping features.
</p>

![screenshot](/screenshot/Screenshot1.png)
![screenshot](/screenshot/Screenshot2.png)
<h2>Getting Started</h2>
<h2>Features </h2>
<ul>
<li>Dropdown with grouping & multiple selection option</li>
<li>Bind to custom data source</li>
<li>Select/De-select all items</li>
<li>Select/de-select a single items</li>
<li>Group select/unselect</li>
<li>You can Change the button text color</li>
<li>You can Change the button background color</li>
<li>You can Change the Checkbox background color on select</li>
<li>You can Add Texts in the buttons</li>
<li>You can Disable both the buttons</li>
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

  <span class="pl-v">const </span><span class="pl-c1">backgroundColor</span> <span>=</span><span>"red";</span> 
  <span class="pl-v">const </span><span class="pl-c1">label</span> <span>=</span><span>"Select";</span> 
  <span class="pl-v">const </span><span class="pl-c1">label2</span> <span>=</span><span>"Unselect";</span> 
  <span class="pl-v">const </span><span class="pl-c1">color</span> <span>=</span><span>"green";</span> 
  <span class="pl-v">const </span><span class="pl-c1">disable</span> <span>=</span><span>true;</span> 
       
   <span class="pl-v">const</span><span class="pl-c1"> handleSelect</span><span> = </span><span class="pl-s1">(groupIndex, options)</span><span> =></span><span> {</span>
       <span class="pl-s1">console.log(`Select clicked for Group ${groupIndex + 1}`);</span>
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
        <span class="pl-c1">onSelect</span><span class="pl-c1">={handleSelect} </span>
        <span class="pl-c1">onClear</span><span class="pl-c1">={handleClear} </span>
        <span class="pl-c1">onSingleClear</span><span class="pl-c1">={handleOptionclear}</span>
        <span class="pl-c1">backgroundColor</span><span class="pl-c1">={backgroundColor} </span>
        <span class="pl-c1">label</span><span class="pl-c1">={label} </span>
        <span class="pl-c1">label2</span><span class="pl-c1">={label2} </span>
        <span class="pl-c1">color</span><span class="pl-c1">={color} </span>
        <span class="pl-c1">checkboxcolor</span><span class="pl-c1">={checkboxcolor}</span>
        <span class="pl-c1">disable</span><span class="pl-c1">={disable}</span>
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
<td align="left"><code>onSelect</code></td>
<td align="left"><code>function</code></td>
<td align="left"><code>func</code></td>
<td align="left">Callback function will invoked on onSelect event. Params are groupIndex and options.</td>
</tr>
<tr>
<td align="left"><code>onClear</code></td>
<td align="left"><code>function</code></td>
<td align="left"><code>func</code></td>
<td align="left">Callback function will invoked on clear event. Params are groupIndex and options</td>
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
<td align="left"><code>options(in callback Functions)</code></td>
<td align="left"><code>{}</code></td>
<td align="left"><code>object</code></td>
<td align="left">It will give you the entire object with selected or unselected values of dropdown.</td>
</tr>
<tr>
<td align="left"><code>displayValue</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>value</code></td>
<td align="left">Property name and selected should be in the object to display in the dropdown. Refer <code>Basic Usage</code> section</td>
</tr>
<tr>
<td align="left"><code>backgroundColor</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">backgroundColor will set the new background color of both buttons(All, clear). if you want to change the background color then pass the color in props and if you don't want to change the background color then don't use the backgroundColor field  as props in component</td>
</tr>
<tr>
<td align="left"><code>label</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">label will set the new text of button(All). if you want to change the text then pass the text in props and if you don't want to change the text then don't use the label field as props in component</td>
</tr>
<tr>
<td align="left"><code>label2</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">label2 will set the new text of button(Clear). if you want to change the text then pass the text in props and if you don't want to change the text then don't use the label2 field as props in component</td>
</tr>
</tr>
<tr>
<td align="left"><code>textLimit</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">label and label2 have text limit of length less than 9 as it will not fit in the button if it exceeds.</td>
</tr>
<tr>
<td align="left"><code>color</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">color will set the new color of text of both buttons(All, clear). if you want to change the text color pass the color in props and if you don't want to change the color then don't use the color field as props in component</td>
</tr>
<tr>
<td align="left"><code>checkboxcolor</code></td>
<td align="left"><code>string</code></td>
<td align="left"><code>''</code></td>
<td align="left">checkboxcolor will set the checkbox background color. if you want to change the checkbox background color pass the color in props and if you don't want to change the text color then don't use the checkboxcolor field as props in component</td>
</tr>
<tr>
<td align="left"><code>disable</code></td>
<td align="left"><code>bool</code></td>
<td align="left"><code>''</code></td>
<td align="left">disable will disable both the buttons(All, Clear) if you want to disable just pass the bool value as true in props and if you don't want to disable the button then don't use the disable field as props in component </td>
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
