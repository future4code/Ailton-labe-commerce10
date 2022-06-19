import React from 'react'
import { HeaderProdudo, Ordem } from './Produtos.styled'
import CardProdutos from '../CardProdutos/CardProdutos'

export default class Produtos extends React.Component {
	render() {
		return (
			<div>
				<HeaderProdudo>
					<div>
						<p>teste</p>
					</div>
					<Ordem>
						<label></label>
						<select>
							<option>opçao 1</option>
							<option>opçao 2</option>
						</select>
					</Ordem>
					<CardProdutos />
				</HeaderProdudo>
			</div>
		)
	}
}
