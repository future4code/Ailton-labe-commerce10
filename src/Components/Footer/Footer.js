import React from 'react'
import { ContainerFooter, ImagemFooter } from './Footer.styled'

export default class Footer extends React.Component {
	render() {
		return (
			<ContainerFooter>
				<h3>Acompanhe-nos em nossas redes sociais</h3>
				<ImagemFooter src='https://www.araucaria.pr.leg.br/copy2_of_Instagram_Color_iconicons.com_71811.png' />
				<ImagemFooter src='https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png' />
				<ImagemFooter src='https://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png' />
			</ContainerFooter>
		)
	}
}
