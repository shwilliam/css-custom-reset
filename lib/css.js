/* meyerweb reset v2.0 | http://meyerweb.com/eric/tools/css/reset/ */
const meyer = {
  marginsAndPadding: 'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, var { margin: 0; padding: 0; border: 0; vertical-align: baseline; } article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }',
  fonts: 'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video, var { font-size: 100%; font: inherit; } body { line-height: 1; }',
  lists: 'ol, ul { list-style: none; }',
  quotes: 'blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: \'\'; content: none; }',
  tables: 'table { border-collapse: collapse; border-spacing: 0; } table, tbody, tfoot, thead, tr, th, td { font-size: 100%; font: inherit; margin: 0; padding: 0; border: 0; vertical-align: baseline; }',
};

/*! normalize.css v8.0.1 | github.com/necolas/normalize.css */
const normalize = {
  document: 'html { line-height: 1.15; -webkit-text-size-adjust: 100%; }',
  sections: 'body { margin: 0; } main { display: block; } h1 { font-size: 2em; margin: 0.67em 0; }',
  groupingContent: 'hr { box-sizing: content-box; height: 0; overflow: visible; } pre { font-family: monospace, monospace; font-size: 1em; }',
  textLevelSemantics: 'a { background-color: transparent; } abbr[title] { border-bottom: none; text-decoration: underline; text-decoration: underline dotted; } b, strong { font-weight: bolder; } code, kbd, samp { font-family: monospace, monospace; font-size: 1em; } small { font-size: 80%; } sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; } sub { bottom: -0.25em; } sup { top: -0.5em; }',
  embeddedContent: 'img { border-style: none; }',
  forms: 'button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; margin: 0; } button, input { overflow: visible; } button, select { text-transform: none; } button, [type="button"], [type="reset"], [type="submit"] { -webkit-appearance: button; } button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner { border-style: none; padding: 0; } button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring { outline: 1px dotted ButtonText; } fieldset { padding: 0.35em 0.75em 0.625em; } legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; padding: 0; white-space: normal; } progress { vertical-align: baseline; } textarea { overflow: auto; } [type="checkbox"], [type="radio"] { box-sizing: border-box; padding: 0; } [type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button { height: auto; } [type="search"] { -webkit-appearance: textfield; outline-offset: -2px; } [type="search"]::-webkit-search-decoration { -webkit-appearance: none; } ::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; }',
  interactive: 'details { display: block; } summary { display: list-item; }',
  misc: 'template { display: none; } [hidden] { display: none; }',
};

function getMeyerReset({
  marginsAndPadding, fonts, lists, quotes, tables,
}) {
  let css = '/* Based on Eric Meyer\'s CSS reset */';

  if (marginsAndPadding) {
    css += meyer.marginsAndPadding;
  }

  if (fonts) {
    css += meyer.fonts;
  }

  if (lists) {
    css += meyer.lists;
  }

  if (quotes) {
    css += meyer.quotes;
  }

  if (tables) {
    css += meyer.tables;
  }

  return css;
}

function getNormalize({
  document, sections, groupingContent, embeddedContent, forms, interactive, misc,
}) {
  let css = '/* Based on Normalize.css */';

  if (document) {
    css += normalize.document;
  }

  if (sections) {
    css += normalize.sections;
  }

  if (groupingContent) {
    css += normalize.groupingContent;
  }

  if (embeddedContent) {
    css += normalize.embeddedContent;
  }

  if (forms) {
    css += normalize.forms;
  }

  if (interactive) {
    css += normalize.interactive;
  }

  if (misc) {
    css += normalize.misc;
  }

  return css;
}

module.exports = { getMeyerReset, getNormalize };
