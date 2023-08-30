import { proxy } from 'valtio'

const state = proxy({
	intro: true,
	color: '#EFBD48',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './uvg.png',
	fullDecal: './uvg.png',
})

export default state
