import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    
--color-white-hover:0 0% 100%;
--cl-bg-screen:  hsl(0, 0%, 8%);
--cl-bg-toggle-keypad: hsl(0, 0%, 8%);

///Theme 1

///Backgrounds

&, &.theme-1{
  --cl-bg-main: #262626;


///Keys

--cl-keys-bg-key:hsl(0, 0%, 15%);
--cl-keys-bg-key-hover: hsl(0, 0%, 10%);
--cl-keys-bg-key-active: hsl(0, 0%, 8%);

--cl-keys-operator: hsl(0, 0%, 11%);
--cl-keys-operator-hover: hsl(0, 0%, 8%);
--cl-keys-operator-clicked:hsl(0, 0%, 6%);

--cl-keys-key-toggle:hsl(321, 96%, 45%);
--cl-keys-key-toggle-hover: hsl(321, 96%, 40%);
--cl-keys-key-toggle-active: hsl(321, 96%, 35%);

--cl-keys-all-bg: 	hsl(0, 0%, 20%);
--cl-keys-all-bg-hover: hsl(0, 0%, 17%);
--cl-keys-all-bg-active: hsl(0, 0%, 13%);
/* --cl-keys-all-bg-clicked:  hsl(224, 10%, 55%); */

///Text

--cl-text-nums: hsl(0, 0%, 100%);
--cl-text-operator: hsl(0, 0%, 100%);
--cl-text-action: hsl(0, 0%, 100%);
--cl-text-equal: hsl(0, 0%, 100%);
--cl-text-header:hsl(0, 0%, 100%);
--cl-text-screen:hsl(0, 0%, 100%);
}


///Theme 2

 ///Backgrounds

&.theme-2{
  --cl-bg-main:#734362;


///Keys

--cl-keys-bg-key:hsl(315, 53%, 23%);
--cl-keys-bg-key-hover: hsl(315, 53%, 20%);
--cl-keys-bg-key-active: hsl(315, 53%, 15%);

--cl-keys-operator:hsl(309, 16%, 55%);
--cl-keys-operator-hover: hsl(309, 16%, 48%);
--cl-keys-operator-clicked:hsl(309, 16%, 43%);

--cl-keys-key-toggle: hsl(153, 9%, 52%);
--cl-keys-key-toggle-hover:hsl(153, 9%, 48%);
--cl-keys-key-toggle-active: hsl(153, 9%, 43%);

--cl-keys-all-bg: hsl(271, 29%, 75%);
--cl-keys-all-bg-hover: hsl(271, 29%, 69%);
--cl-keys-all-bg-active: hsl(271, 29%, 60%);

///Text

--cl-text-nums: hsl(60, 10%, 19%);
--cl-text-operator: hsl(0, 0%, 100%);
--cl-text-action: hsl(0, 0%, 100%);
--cl-text-equal: hsl(0, 0%, 100%);
--cl-text-header:hsl(0, 0%, 100%);
--cl-text-screen:hsl(0, 0%, 100%);
}


///Theme 3

///Backgrounds

&.theme-3{
  --cl-bg-main: #FBF2ED;


///Keys

--cl-keys-bg-key:hsl(39, 89%, 55%);
--cl-keys-bg-key-hover:hsl(39, 89%, 48%);
--cl-keys-bg-key-active:hsl(39, 89%, 40%);

--cl-keys-operator:hsl(216, 82%, 85%);
--cl-keys-operator-hover: hsl(216, 82%, 78%);
--cl-keys-operator-clicked:hsl(216, 82%, 70%);

--cl-keys-key-toggle:hsl(216, 82%, 53%);
--cl-keys-key-toggle-hover:hsl(216, 82%, 46%);
--cl-keys-key-toggle-active:hsl(216, 82%, 39%);

--cl-keys-all-bg: hsl(21, 64%, 96%);
--cl-keys-all-bg-hover: hsl(21, 64%, 90%);
--cl-keys-all-bg-active:hsl(21, 64%, 80%);

///Text

--cl-text-nums: hsl(39, 89%, 45%);
--cl-text-operator: hsl(0, 0%, 1%);
--cl-text-equal: hsl(0, 0%, 100%);
--cl-text-action: hsl(0, 0%, 100%);
--cl-text-header:hsl(0, 0%, 1%);
--cl-text-screen:hsl(0, 0%, 100%);
}



--color-neutral-white: hsl(0, 0%, 100%);
--color-neutral-off-white: hsl(0, 0%, 94%);
--color-neutral-light-gray: hsl(0, 0%, 86%);
--color-neutral-smokey-gray: hsl(0, 1%, 44%);
--color-neutral-off-black: hsl(0, 0%, 8%); 

 
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  
}

/* Prevent font size inflation */
html {
  /* -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none; */
   font-size: 62.5%;
}
/* 
/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, h5, h6, p,
figure, blockquote, dl, dd {
  /* margin-block-end: 0; */
}

/* Set core body defaults */
body {
  min-height: 100vh;
  /* line-height: 1.5; */
  font-family: 'Rajdhani', sans-serif;
  font-size: 3.2rem;

}
/* Remove list styles on ul, ol elements */
ul,
ol{
  list-style: none;
}



/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4, h5, h6
button, input, label {
  /* line-height: 1.1; */
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4, h5, h6, p {
  /* text-wrap: balance; - not yet supporeted on some browsers */
overflow-wrap: break-word;
 hyphens: auto;
}


/* Make images easier to work with */
img,
picture {
  max-width: 100%;

}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font: inherit;
  color: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: gray;
  color: black;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid lightgray;
  outline-offset: -1px;
}

// remove the default arrows (spinner controls) from number inputs 
/* For Chrome, Safari, and newer versions of Edge */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* For Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

:-webkit-any(article, aside, nav, section) h1 {
   
    margin-block-start: 0;
    margin-block-end: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; 
  border: 0;
} 

`;
export default GlobalStyles;
