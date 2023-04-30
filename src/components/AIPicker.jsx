import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
	return (
		<div className="aipicker-container">
			<textarea
				placeholder="Pregutale a una IA..."
				rows={5}
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				className="aipicker-textarea"
			/>
			<div className="flex flex-wrap gap-3">
				{generatingImg ? (
					<CustomButton
						type="outlined"
						title="Generando..."
						customStyles="text-xs"
					/>
				) : (
					<>
						<CustomButton
							type="outlined"
							title="AI Logo"
							handleClick={() => handleSubmit('logo')}
							customStyles="text-xs"
						/>
						<CustomButton
							type="outlined"
							title="AI Full"
							handleClick={() => handleSubmit('full')}
							customStyles="text-xs"
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default AIPicker
