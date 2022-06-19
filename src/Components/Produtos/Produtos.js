import React from 'react'
import { HeaderProdudo, Ordem } from './Produtos.styled'
import CardProdutos from '../CardProdutos/CardProdutos'

export default class Produtos extends React.Component {
	render() {
		return (
			<div>
				<HeaderProdudo>
					<Ordem>
						<p>Quantidade de produtos: {this.props.produto.length}</p>
						<select>
							<option>opçao 1</option>
							<option>opçao 2</option>
						</select>
					</Ordem>
					<CardProdutos
						produto={this.props.produto}
						addCarrinho={this.props.addCarrinho}
					/>
				</HeaderProdudo>
			</div>
		)
	}
}
