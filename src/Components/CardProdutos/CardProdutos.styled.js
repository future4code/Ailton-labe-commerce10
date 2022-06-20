import styled from 'styled-components'

export const ContainerProdutos = styled.div`
	display: grid;
	grid-template-columns: 40vh 40vh 40vh;
	grid-template-rows: repeat(6, 1fr);
	justify-items: center;
	gap: 30px;
	padding-top: 2%;
	column-gap: 1px;
	row-gap: 3px;

h3 :hover {
	color: purple;
}
`
export const ContainerProdutoIndividual = styled.div`
	/* border: 1px solid black; */
	height: 50vh;
	width: 15vw;
	text-align: center;
	font-size: 2vh;
	
`
export const ImagemProdutos = styled.img`
	height: 35%;
	width: 100%;
`
