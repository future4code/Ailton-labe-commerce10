import React from 'react'
import {
	ContainerProdutos,
	ContainerProdutoIndividual,
	ImagemProdutos,
} from './CardProdutos.styled'

export default class CardProdutos extends React.Component {
	render() {
		// const arrayProdutos = this.props.produto.map((dados) => {
		// 	return (
		// 		<ContainerProdutoIndividual>
		// 			<ImagemProdutos src={dados.imageUrl} />
		// 			<h2>{dados.name}</h2>
		// 			<h3>Valor: {dados.value}</h3>
		// 			<button>Adicionar produto</button>
		// 		</ContainerProdutoIndividual>
		// 	)
		// })
		return (
			<ContainerProdutos>
				<ContainerProdutoIndividual>
					<ImagemProdutos src='https://picsum.photos/id/237/200/300' />
					<h2>Produto 1</h2>
					<h3>Valor: 1000</h3>
					<button>Adicionar produto</button>
				</ContainerProdutoIndividual>
				<ContainerProdutoIndividual>
					<ImagemProdutos src='https://picsum.photos/id/237/200/300' />
					<h2>Produto 1</h2>
					<h3>Valor: 1000</h3>
					<button>Adicionar produto</button>
				</ContainerProdutoIndividual>
				<ContainerProdutoIndividual>
					<ImagemProdutos src='https://picsum.photos/id/237/200/300' />
					<h2>Produto 1</h2>
					<h3>Valor: 1000</h3>
					<button>Adicionar produto</button>
				</ContainerProdutoIndividual>
			</ContainerProdutos>
		)

		// return <ContainerProdutos>{arrayProdutos}</ContainerProdutos>
	}
}
