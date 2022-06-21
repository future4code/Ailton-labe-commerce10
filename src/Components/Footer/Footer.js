import React from 'react'
import { ContainerFooter, ImagemFooter } from './Footer.styled'

export default class Footer extends React.Component {
	render() {
		return (
			<ContainerFooter>
				<h3>Acompanhe-nos em nossas redes sociais</h3>
				
				<a href="https://www.instagram.com/" target="_blank">
					<ImagemFooter src='https://i.pinimg.com/originals/0e/9f/49/0e9f49e37d03cec78a980bd6816118a7.jpg'/></a>
				<a href="https://www.facebook.com/" target="_blank">
					<ImagemFooter src='https://cdn.allthings.how/wp-content/uploads/2020/09/allthings.how-how-to-create-an-aesthetic-iphone-home-screen-with-custom-app-icons-and-photo-widgets-facebook-aesthetic-neon-2.png?width=700' /></a>
				<a href="https://web.whatsapp.com/" target="_blank">
					<ImagemFooter src='https://cdn.allthings.how/wp-content/uploads/2020/09/allthings.how-how-to-create-an-aesthetic-iphone-home-screen-with-custom-app-icons-and-photo-widgets-whatsapp-neon-aesthetic-2.png?width=100' /></a>
			</ContainerFooter>
		)
	}
}
