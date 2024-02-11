import React, { useState } from 'react'

const Some = () => {


	const [isBooleanTrue, setIsBooleanTrue] = useState(false);

	// Click event handler to set the boolean to false
	const handleOtherElementClick = () => {
		setIsBooleanTrue(false);
	};




	return (
		<div className='h-[100vh] bg-white'>
			<div>
				<button onClick={() => setIsBooleanTrue(true)}>
					Turn Boolean True
				</button>
				{isBooleanTrue ? (
					<div>
						This is the content when the boolean is true.
					</div>
				) : null}

				{/* Other elements in your component */}
				<div onClick={handleOtherElementClick}>
					Click here to turn the boolean to false
				</div>
			</div>
		</div>
	)
}

export default Some