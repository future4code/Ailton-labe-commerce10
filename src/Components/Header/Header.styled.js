import styled from 'styled-components'

export const ContainerHeader = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #04000b;
	color: #551a82;
	align-items: center;

h1 {
	margin-left: 50px;
	font-family: Brush Script MT;
	font-size: 30px;
}
a {
	color: #551a82;
}
a:link {
    text-decoration: none;
}

a:hover {
	color: white;
	font-size:46.5px;	
	transition: all ease 0.3s;
	text-shadow: 0 0 1em #551a82;
}

p {
	margin-right: 30px;
	font-weight: bold;
	font-size: 20px;
}

input {
	width: 510px;
	height: 25px;
	margin-left: 200px;
	
}

button {
	background-color: #04000b;
	margin-right: 290px;
}

button :active {
	-moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}
`

