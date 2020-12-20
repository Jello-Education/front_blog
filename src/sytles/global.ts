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

	html{
		background: #E5E5E5;
	}

	button {
		cursor: pointer;
	}

	li{
		list-style: none;
	}

	h1, h2, h3, h4, h5, h6, p, b, a, button, span{
		font-family: "Montserrat", sans-serif;
	}

`;
