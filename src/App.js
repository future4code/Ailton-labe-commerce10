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
const ContainerProdutoIndividual = styled.div`
	border: 1px solid black;
`
const ImagemProdutos = styled.img`
	height: 50%;
	width: 100%;
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
						<p>Sobre nós</p>
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
						<ContainerProdutoIndividual>
							<ImagemProdutos src='https://cdnsjengenhariae.nuneshost.com/wp-content/uploads/2015/11/Saturno-V-3.jpg' />
							<p>
								<h3> Saturno V </h3>
							</p>
							<p>
								O Saturno 5 ou Saturn V, foi um foguete americano usado nas
								missões Apollo e Skylab. Foi desenvolvido por Wernher von Braun
								no Marshall Space Flight Center em Huntsville, Alabama
								juntamente com Boeing, North American Aviation, Douglas Aircraft
								Company sob coordenação da IBM
							</p>
							<p>
								<h4> Valor 0.000.000,00</h4>{' '}
							</p>
							<button>Adicionar produto</button>
						</ContainerProdutoIndividual>

						<ContainerProdutoIndividual>
							<ImagemProdutos src='' />
							<p>
								<h3> Produto </h3>
							</p>
							<p>
								Quis quis qui voluptate eiusmod dolor fugiat adipisicing non
								est.
							</p>
							<p>
								<h4> Valor 0.000.000,00</h4>{' '}
							</p>
							<button>Adicionar produto</button>
						</ContainerProdutoIndividual>

						<ContainerProdutoIndividual>
							<ImagemProdutos src='https://mundoconectado.com.br/uploads/2021/01/04/16843/xemu.jpg' />
							<p>
								<h3> Traje Espacial </h3>
							</p>
							<p>
								Um traje espacial é um sistema complexo de vestimentas,
								equipamentos e sistemas ambientais projetados para manter uma
								pessoa viva e confortável no extremo e perigoso ambiente do
								espaço exterior.
							</p>
							<p>
								<h4> Valor 0.000.000,00</h4>{' '}
							</p>
							<button>Adicionar produto</button>
						</ContainerProdutoIndividual>

						<ContainerProdutoIndividual2>
							<ImagemProdutos src='https://img.olhardigital.com.br/uploads/acervo_imagens/2019/07/20190720023219.jpg' />
							<p>
								<h3> Modulo lunar </h3>
							</p>
							<p>
								{' '}
								O Módulo Lunar Apollo foi parte da nave usada no Projeto Apollo.
								Ele possuía formato de "aranha", e servia para a descida no solo
								lunar e para o regresso a órbita da Lua para o encontro com os
								outros dois módulos que lá permaneciam em órbita (Módulo de
								Comando e Serviço Apollo).{' '}
							</p>
							<p>
								<h4> Valor 0.000.000,00</h4>{' '}
							</p>
							<button>Adicionar produto</button>
						</ContainerProdutoIndividual2>
					</ContainerProdutos>
					<InputContainerCarrinho>
						<ConteinerCarrinho>
							<img
								src='https://cdn-icons-png.flaticon.com/512/6745/6745169.png'
								width={30}
							></img>
							<h2>Carrinho:</h2>
							<p>Valor total:</p>
						</ConteinerCarrinho>
					</InputContainerCarrinho>
				</ContainerBody>
				<ContainerFooter>
					<h2>Redes sociais</h2>
					<ImagemFooter src='https://cdn-icons.flaticon.com/png/512/4494/premium/4494488.png?token=exp=1655583924~hmac=f095ea5ebcf7583d3ccace68657dfc3e' />
					<ImagemFooter src='https://cdn-icons.flaticon.com/png/512/4494/premium/4494475.png?token=exp=1655583924~hmac=704ff62b2390cd35f5fa0f38815747d4' />
					<ImagemFooter src='https://cdn-icons.flaticon.com/png/512/4494/premium/4494494.png?token=exp=1655583924~hmac=041921bf8de926a74187582244a9f530' />
				</ContainerFooter>
			</ContainerGeral>
		)
	}
}

export default App
