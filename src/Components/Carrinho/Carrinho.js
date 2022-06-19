import React from 'react'
import { InputContainerCarrinho, ContainerCarrinho } from './Carrinho.styled'

export default class Carrinho extends React.Component {
	render() {
		return (
			<InputContainerCarrinho>
				<ContainerCarrinho>
					<img
						src='https://cdn-icons-png.flaticon.com/512/6745/6745169.png'
						width={30}
					></img>
					<h2>Carrinho:</h2>
					<p>Valor total:</p>
				</ContainerCarrinho>
			</InputContainerCarrinho>
		)
	}
}
