import React from 'react'
import {
	ContainerProdutos,
	ContainerProdutoIndividual,
	ImagemProdutos,
} from './CardProdutos.styled'

export default class CardProdutos extends React.Component {
	render() {
		const arrayProdutos = this.props.produto.map((dados) => {
			return (
				<ContainerProdutoIndividual key={dados.id}>
					<ImagemProdutos src={dados.imageUrl} />
					<h2>{dados.name}</h2>
					<h3>Valor: {dados.value}</h3>
					<button
						onClick={() => {
							this.props.addCarrinho(dados.id)
						}}
					>
						Adicionar produto
					</button>
				</ContainerProdutoIndividual>
			)
		})

		return <ContainerProdutos>{arrayProdutos}</ContainerProdutos>
	}
}
