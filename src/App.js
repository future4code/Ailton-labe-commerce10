import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Filtros from './Components/Filtros/Filtros'
import Carrinho from './Components/Carrinho/Carrinho'
import Produtos from './Components/Produtos/Produtos'
import styled from 'styled-components'

// const ContainerGeral = styled.div``
// const ContainerHeader = styled.header`
// 	display: flex;
// 	justify-content: space-around;
// 	background-color: pink;
// `
// const ContainerBody = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// `
// const ContainerFiltrosInterno = styled.div`
// 	border: 1px solid black;
// 	margin-right: 0%;
// 	margin-left: 2%;
// 	margin-top: 2%;
// 	padding-bottom: 15%;
// `
// const InputFiltros = styled.input`
// 	margin-right: 100%;
// `
// const ContainerProdutos = styled.div`
// 	display: flex;
// 	gap: 20px;
// 	padding-top: 2%;
// `
// const ContainerProdutoIndividual = styled.div`
// 	border: 1px solid black;
// 	height: 65vh;
// 	width: 14vw;
// 	text-align: center;
// `
// const ImagemProdutos = styled.img`
// 	height: 35%;
// 	width: 100%;
// `
// const InputContainerCarrinho = styled.div`
// 	border: 1px solid black;
// 	margin-right: 2%;
// 	margin-left: 2%;
// 	margin-top: 2%;
// 	padding-bottom: 15%;
// `
// const ConteinerCarrinho = styled.div`
// 	margin-left: 22px;
// 	margin-right: 30px;
// `
// const ContainerFooter = styled.footer`
// 	background-color: pink;
// 	text-align: center;
// `
// const ImagemFooter = styled.img`
// 	height: 40px;
// 	width: 40px;
// `
const Main = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	height: 100%;
	min-height: 100vh;
`
class App extends React.Component {
	state = {
		listaProdutos: [
			{
				id: 1,
				name: 'Foguete da Missão Apollo 11',
				value: 10000.0,
				imageUrl: 'https://picsum.photos/200/200',
			},
			{
				id: 2,
				name: 'Foguete da Missão Apollo 13',
				value: 10000.0,
				imageUrl: 'https://picsum.photos/200/200',
			},
			{
				id: 3,
				name: 'Foguete da Missão Apollo 13',
				value: 10000.0,
				imageUrl: 'https://picsum.photos/200/200',
			},
		],
	}
	render() {
		// addCarrinho = () => {}

		return (
			<div>
				<Header />
				<Main>
					<Filtros />
					<Produtos produto={this.state.listaProdutos} />
					<Carrinho />
				</Main>
				<Footer />
			</div>
		)
	}
}

export default App
