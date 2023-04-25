import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from '../config/motion'
import { CustomButton } from '../components'

import state from '../store'

const Home = () => {
	const snap = useSnapshot(state)

	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.section className="home" {...slideAnimation('left')}>
					<motion.header {...slideAnimation('down')}>
						<img
							src="./threejs.png"
							alt="logo"
							className="w-8 h-8 object-contain"
						/>
					</motion.header>
					<motion.div
						className="home-content"
						{...headContainerAnimation}
					>
						<motion.div {...headTextAnimation}>
							<h1 className="head-text">
								HAGA
								<br className="xl:hidden block" />
								MOSLO
							</h1>
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className="flex flex-col gap-5"
						>
							<p className="max-w-md font-normal text-gray-600 text-base">
								Crea tu propio diseño de camiseta con el logo de
								tu equipo favorito con esta 3d app.{' '}
								<strong>Deja volar tu imaginación</strong> y
								crea tu propio estilo.
							</p>
							<CustomButton
								type="filled"
								title="¡Personalizar!"
								handleClick={() => (state.intro = false)}
								customStyles="w-fit px-4 py-2.5 font-bold text-sm"
							/>
						</motion.div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	)
}

export default Home
