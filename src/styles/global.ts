import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	#root {
		margin: 0 auto;
    width: 100%;
	}
	button {
		cursor: pointer;
	}

	body{
		background: #f5f5f5;
		font-family: "Montserrat"
	}

	h1, h2, h3, h4, span, b {
		font-family: "Montserrat"
	}

	ul{
		list-style: none;
	}

`;