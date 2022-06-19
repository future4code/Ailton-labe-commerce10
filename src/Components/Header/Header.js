import React from 'react'
import { ContainerHeader } from './Header.styled'

export default class Header extends React.Component {
	render() {
		return (
			<ContainerHeader>
				<h2>Lojinha Top</h2>
				<div>
					<p>Nossa loja</p>
					<p>Sobre nós</p>
				</div>
			</ContainerHeader>
		)
	}
}
