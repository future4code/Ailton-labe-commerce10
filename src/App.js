import React from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div``
const ContainerHeader = styled.header`
	display: flex;
	justify-content: space-around;
	background-color: pink;
`
const ContainerBody = styled.div`
	display: flex;
	justify-content: space-between;
`
const ContainerFiltrosInterno = styled.div`
	border: 1px solid black;
	margin-right: 0%;
	margin-left: 2%;
	margin-top: 2%;
	padding-bottom: 15%;
`
const InputFiltros = styled.input`
	margin-right: 100%;
`
const ContainerProdutos = styled.div`
	display: flex;
	gap: 20px;
	padding-top: 2%;
`
const ContainerProdutoIndividual1 = styled.div`
	border: 1px solid black;
`
const ContainerProdutoIndividual2 = styled.div`
	border: 1px solid black;
`
const InputContainerCarrinho = styled.div`
	border: 1px solid black;
	margin-right: 2%;
	margin-left: 2%;
	margin-top: 2%;
	padding-bottom: 15%;
`
const ConteinerCarrinho = styled.div`
	margin-left: 22px;
	margin-right: 30px;
`
const ContainerFooter = styled.footer`
	background-color: pink;
	text-align: center;
`
const ImagemFooter = styled.img`
	height: 40px;
	width: 40px;
`

class App extends React.Component {
	render() {
		return (
			<ContainerGeral>
				<ContainerHeader>
					<h2>Lojinha Top</h2>
					<div>
						<p>Nossa loja</p>
						<p>Sobre nois</p>
					</div>
				</ContainerHeader>
				<ContainerBody>
					<ContainerFiltrosInterno>
						<h2>Filtros</h2>
						<p>Valor minimo:</p>
						<InputFiltros></InputFiltros>
						<p>Valor máximo:</p>
						<InputFiltros></InputFiltros>
						<p>buscar por nome:</p>
						<InputFiltros></InputFiltros>
					</ContainerFiltrosInterno>
					<ContainerProdutos>
						<ContainerProdutoIndividual1>
							<img src='https://picsum.photos/id/237/200/300' />
							<p> Produto 1</p>
							<p></p>
							<button>Adicionar produto</button>
						</ContainerProdutoIndividual1>
						<ContainerProdutoIndividual2>
							<img src='https://picsum.photos/id/237/200/300' />
							<p> Produto 2</p>
							<p></p>
							<button>Adicionar produto</button>
						</ContainerProdutoIndividual2>
					</ContainerProdutos>
					<InputContainerCarrinho>
						<ConteinerCarrinho>
							<h2>Carrinho:</h2>
							<p>Valor total:</p>
						</ConteinerCarrinho>
					</InputContainerCarrinho>
				</ContainerBody>
				<ContainerFooter>
					<h2>Redes sociais</h2>
					<ImagemFooter src='https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-14/512/Instagram-icon.png' />
					<ImagemFooter src='https://icons.iconarchive.com/icons/emey87/social-button/128/facebook-icon.png' />
					<ImagemFooter src='https://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png' />
				</ContainerFooter>
			</ContainerGeral>
		)
	}
}

export default App
