import React from 'react'
import { ContainerFiltrosInterno, InputFiltros } from './Filtros.styled'

export default class Filtros extends React.Component {
	render() {
		return (
			<ContainerFiltrosInterno>
				<h3>Filtros</h3>
				<p>Valor minimo:</p>
				<InputFiltros></InputFiltros>
				<p>Valor máximo:</p>
				<InputFiltros></InputFiltros>
			</ContainerFiltrosInterno>
		)
	}
}
