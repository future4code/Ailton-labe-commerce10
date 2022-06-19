import React from 'react'
import { ContainerFooter, ImagemFooter } from './Footer.styled'

export default class Footer extends React.Component {
	render() {
		return (
			<ContainerFooter>
				<h2>Redes sociais</h2>
				<ImagemFooter src='https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-14/512/Instagram-icon.png' />
				<ImagemFooter src='https://icons.iconarchive.com/icons/emey87/social-button/128/facebook-icon.png' />
				<ImagemFooter src='https://icons.iconarchive.com/icons/dtafalonso/android-l/512/WhatsApp-icon.png' />
			</ContainerFooter>
		)
	}
}
