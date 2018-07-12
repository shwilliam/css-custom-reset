function getMeyerReset({
  boxModel, fonts, verticalAlign, html5, lineHeight, lists, quotes, tables,
}) {
  let css = '/* Based on Eric Meyer\'s CSS reset (v2) */';
  if (boxModel || fonts || verticalAlign) {
    css += `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {`;
    if (boxModel) {
      css += `
  margin: 0;
  padding: 0;
  border: 0;`;
    }
    if (fonts) {
      css += `
  font-size: 100%;
  font: inherit;`;
    }
    if (verticalAlign) {
      css += `
  vertical-align: baseline;`;
    }
    css += '\n}';
  }
  if (html5) {
    css += `
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}`;
  }
  if (lineHeight) {
    css += `
body {
  line-height: 1;
}`;
  }
  if (lists) {
    css += `
ol, ul {
  list-style: none;
}`;
  }
  if (quotes) {
    css += `
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}`;
  }
  if (tables) {
    css += `
table {
  border-collapse: collapse;
  border-spacing: 0;
}`;
  }
  return css;
}

function getMiniReset({
  boxModel, fonts, lists, embeddedElements, tables,
}) {
  let css = '/* Based on MiniReset.css */';
  if (boxModel) {
    css += `
html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,
fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6
{margin:0;padding:0}
html
{box-sizing:border-box}
*,*:before,*:after
{box-sizing:inherit}
button,input,select,textarea
{margin:0}
iframe
{border:0}`;
  }
  if (fonts) {
    css += `
h1,h2,h3,h4,h5,h6
{font-size:100%;font-weight:normal}`;
  }
  if (lists) {
    css += `
ul
{list-style:none}`;
  }
  if (embeddedElements) {
    css += `
img,embed,iframe,object,audio,video
{height:auto;max-width:100%}`;
  }
  if (tables) {
    css += `
table
{border-collapse:collapse;border-spacing:0}
td,th
{padding:0;text-align:left}`;
  }
  return css;
}

function getNormalize({
  document, sections, groupingContent, textSemantics,
  embeddedContent, forms, interactiveElements, misc,
}) {
  let css = '/* Based on Normalize.css */';
  if (document) {
    css += `
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}`;
  }
  if (sections) {
    css += `
body {
  margin: 0;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}`;
  }
  if (groupingContent) {
    css += `
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
  font-size: 1em;
}`;
  }
  if (textSemantics) {
    css += `
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}`;
  }
  if (embeddedContent) {
    css += `
img {
  border-style: none;
}`;
  }
  if (forms) {
    css += `
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}`;
  }
  if (interactiveElements) {
    css += `
details {
  display: block;
}
summary {
  display: list-item;
}`;
  }
  if (misc) {
    css += `
template {
  display: none;
}
[hidden] {
  display: none;
}`;
  }
  return css;
}

module.exports = { getMeyerReset, getMiniReset, getNormalize };
