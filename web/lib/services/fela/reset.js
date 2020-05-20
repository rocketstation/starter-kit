/* eslint-disable max-lines */
export default `
/* Forked from Reboot.css, licensed MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE) */

::-webkit-file-upload-button {
  cursor:pointer;
}

::-webkit-scrollbar {
  display: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

*:focus { outline: 0 }

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-size-adjust: 100%;
  font-family: sans-serif;
  height: 100%;
  line-height: 1.15;
}

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
  display: block;
}

body {
  font-family: ${LIB.fonts.major};
  font-size: ${LIB.sizes.m}rem;
  font-weight: ${LIB.weights.regular};
  height: 100%;
  line-height: ${LIB.sizes.lineL};
  margin: 0;
  text-align: left;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: ${LIB.spaces.m}rem;
  weight: ${LIB.weights.bold};
}

h1 {
  font-size: ${LIB.sizes.majorLX};
}

h2 {
  font-size: ${LIB.sizes.majorL};
}

h3 {
  font-size: ${LIB.sizes.major};
}

h4 {
  font-size: ${LIB.sizes.majorS};
}

h5 {
  font-size: ${LIB.sizes.majorSX};
}

h6 {
  font-size: ${LIB.sizes.l};
}

p {
  margin-top: 0;
  margin-bottom: ${LIB.spaces.m}rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: ${LIB.spaces.m}rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: ${LIB.spaces.m}rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: ${LIB.weights.bold};
}

dd {
  margin-bottom: ${LIB.spaces.m}rem;
  margin-left: 0;
}

blockquote {
  border-left: 1px solid ${LIB.colors.important.default};
  padding-left: ${LIB.spaces.s}rem;
  margin: 0 0 ${LIB.spaces.m}rem;
}

b,
strong {
  font-weight: ${LIB.weights.bold};
}

small {
  font-size: 75%;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.33em;
}

sup {
  top: -.33em;
}

a {
  color: ${LIB.colors.important.default};
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  text-decoration: underline;
}

a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

pre,
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: ${LIB.spaces.m}rem;
  overflow: auto;
}

figure {
  margin: 0 0 ${LIB.spaces.m}rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  color: currentColor;
  padding-top: ${LIB.spaces.s}rem;
  padding-bottom: ${LIB.spaces.s}rem;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
}

label {
  display: inline-block;
  margin-bottom: ${LIB.spaces.s}rem;
}

button {
  border-radius: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

select {
  word-wrap: normal;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: $(LIB.spaces.m)rem;
  font-size: ${LIB.sizes.l}rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

#app {
  height: 100%;
}`
