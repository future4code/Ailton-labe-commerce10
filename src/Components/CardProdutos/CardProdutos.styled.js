import styled from 'styled-components'

export const ContainerProdutos = styled.div`
	display: grid;
	grid-template-columns: 35vh 35vh 35vh;
	grid-template-rows: repeat(6, 10fr);
	justify-items: center;
	/* gap: 50px; */
	padding-top: 2%;
	column-gap: 15px;
	row-gap: 20px;
	color: #04000b;
	
button:hover {
	/* color: white; */
	font-size:14px;	
	transition: all ease 0.3s;
	/* border: white; */
	box-shadow: 0 0 1em #551a82;
}

`
export const ContainerProdutoIndividual = styled.div`
	/* border: 1px solid gray; */
	height: 50vh;
	width: 15vw;
	text-align: center;
	font-size: 2vh;

	
`
export const ImagemProdutos = styled.img`
	height: 35%;
	width: 100%;
`
