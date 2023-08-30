/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'

const Shirt = () => {
	const snap = useSnapshot(state)
	const water_bottle = useGLTF('./water_bottle.glb')
	const shirt_baked = useGLTF('./shirt_baked.glb')

	const logoTexture = useTexture(snap.logoDecal)
	const fullTexture = useTexture(snap.fullDecal)

	useFrame((state, delta) =>
		easing.dampC(
			water_bottle.materials.Water_Bottle_Yellow_Part.color,
			snap.color,
			0.25,
			delta,
		),
	)

	const stateString = JSON.stringify(snap)

	return (
		<group key={stateString}>
			<mesh
				castShadow
				geometry={water_bottle.nodes.Water_Bottle_Lid.geometry}
				material={water_bottle.materials.Water_Bottle_Metal_Part}
				material-roughness={1}
				dispose={null}
				scale={0.038}
				position={[0, 8.08, 0]}
			/>
			<mesh
				castShadow
				geometry={water_bottle.nodes.Water_Bottle_Metal_Part.geometry}
				material={water_bottle.materials.Water_Bottle_Metal_Part}
				material-roughness={1}
				dispose={null}
				scale={0.038}
				position={[0, 8.08, 0]}
			/>
			<mesh
				castShadow
				geometry={water_bottle.nodes.Water_Bottle_Yellow_Part.geometry}
				material={water_bottle.materials.Water_Bottle_Yellow_Part}
				material-roughness={1}
				dispose={null}
				scale={0.038}
				position={[0, 8.08, 0]}
			>
				{snap.isFullTexture && (
					<Decal
						position={[0, 8.4, 0]}
						rotation={[0, 0, 0]}
						scale={16.9}
						map={fullTexture}
					/>
				)}
				{snap.isLogoTexture && (
					<Decal
						position={[0, 2, 0.1]}
						rotation={[0, 0, 0]}
						scale={6}
						map={logoTexture}
						anisotropy={16}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh>
			{/* <mesh
				castShadow
				geometry={shirt_baked.nodes.T_Shirt_male.geometry}
				material={shirt_baked.materials.lambert1}
				material-roughness={1}
				dispose={null}
			>
				{snap.isFullTexture && (
					<Decal
						position={[0, 0, 0]}
						rotation={[0, 0, 0]}
						scale={1}
						map={fullTexture}
					/>
				)}
				{snap.isLogoTexture && (
					<Decal
						position={[0, 0.1, 0.02]}
						rotation={[0, 0, 0]}
						scale={0.15}
						map={logoTexture}
						depthTest={false}
						depthWrite={true}
					/>
				)}
			</mesh> */}
		</group>
	)
}

export default Shirt
