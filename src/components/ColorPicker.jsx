import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
	const snap = useSnapshot(state)

	return (
		<div className="absolute left-full ml-3">
			<SketchPicker
				color={snap.color}
				disableAlpha
				onChange={(color) => (state.color = color.hex)}
				/*presetColors={[
					'#EFBD48',
					'#F2F2F2',
					'#000000',
					'#FF0000',
					'#00FF00',
					'#0000FF',
					'#00FFFF',
					'#FF00FF',
				]}*/
			/>
		</div>
	)
}

export default ColorPicker
