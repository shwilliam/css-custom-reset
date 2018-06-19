const getMeyerReset = function({boxModel, fonts, verticalAlign, html5, lineHeight, lists, quotes, tables}) {
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
    if (boxModel) {css += `
  margin: 0;
  padding: 0;
  border: 0;`};
    if (fonts) {css += `
  font-size: 100%;
  font: inherit;`};
    if (verticalAlign) {css += `
  vertical-align: baseline;`};
    css += '\n}';
  };
  if (html5) {css += `
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}`};
  if (lineHeight) {css += `
body {
  line-height: 1;
}`};
  if (lists) {css += `
ol, ul {
  list-style: none;
}`};
  if (quotes) {css += `
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}`};
if (tables) {css += `
table {
  border-collapse: collapse;
  border-spacing: 0;
}`};
  return css;
};

const getMiniReset = function({boxModel, fonts, lists, embeddedElements, tables}) {
  let css = '/* Based on MiniReset.css */';
  if (boxModel) {css += `
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
{border:0}`};
  if (fonts) {css += `
h1,h2,h3,h4,h5,h6
{font-size:100%;font-weight:normal}`};
  if (lists) {css += `
ul
{list-style:none}`};
  if (embeddedElements) {css += `
img,embed,iframe,object,audio,video
{height:auto;max-width:100%}`};
  if (tables) {css += `
table
{border-collapse:collapse;border-spacing:0}
td,th
{padding:0;text-align:left}`};
  return css;
};

module.exports = {getMeyerReset, getMiniReset};
