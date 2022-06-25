import React from 'react'
import App from '../../App'
import { ContainerHeader } from './Header.styled'

export default class Header extends React.Component {
	render() {
		return (
			<ContainerHeader>
				<a href="App.js"><h1>Space Store</h1></a>
				<input placeholder='Pesquisar por nome'></input>
				<button type="button"> <img src="https://st3.depositphotos.com/1507819/32085/v/450/depositphotos_320853210-stock-illustration-magnifier-vector-icon-on-black.jpg" height ="30" width="30" /></button>
				<div>
				<a href="App.js"><p>Sign in</p></a>	
				</div>
			</ContainerHeader>
		)
	}
}
