import React from 'react'
import { InputContainerCarrinho, ContainerCarrinho } from './Carrinho.styled'

export default class Carrinho extends React.Component {
	render() {
		let soma = 0
		for (const valor of this.props.listaCarrinho) {
			soma = soma + valor.value
		}
		const arrayCarrinho = this.props.listaCarrinho.map((dados, indice) => {
			return (
				<ContainerCarrinho>
					<img src={dados.imageUrl} />
					<h2>{dados.name}</h2>
					<h3>{dados.value}</h3>
					<button
						onClick={() => {
							this.props.removerProduto(indice)
						}}
					>
						Remover Item
					</button>
				</ContainerCarrinho>
			)
		})
		return (
			<InputContainerCarrinho>
				<h3>Carrinho:</h3>
				<h3>Valor total: {soma}</h3>
				{arrayCarrinho}
			</InputContainerCarrinho>
		)
	}
}
