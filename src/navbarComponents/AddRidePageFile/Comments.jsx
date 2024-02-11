import React, { useState } from 'react'
import Image from '../../pictures/clock.png'
import LeftIcon from '../../pictures/left.png'
import RightIcon from '../../pictures/right.png'

import '../../App.css'

const Comments = () => {

	const contentData = [
		{ header: 'Header 1', commentText: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit odio totam distinctio quisquam sapiente alias eaque animi harum aliquam?' },
		{ header: 'Header 2', commentText: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit odio totam distinctio quisquam sapiente alias eaque animi harum aliquam?' },
		{ header: 'Header 3', commentText: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit odio totam distinctio quisquam sapiente alias eaque animi harum aliquam?' },
		{ header: 'Header 4', commentText: '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit odio totam distinctio quisquam sapiente alias eaque animi harum aliquam?' },
		{ header: 'Header 5', commentText: '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit odio totam distinctio quisquam sapiente alias eaque animi harum aliquam?' },
		{ header: 'Header 6', commentText: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum impedit odio totam distinctio quisquam sapiente alias eaque animi harum aliquam?' },
	];



	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? contentData.length - 1 : prevIndex - 1
		);
	};

	// Map content to classNames
	const classNamesMap = {
		'Header 1': 'p-4 bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-3xl shadow-lg m-4 h-auto max-w-[500px] transition-all duration-400',
		'Header 2': 'p-4 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] rounded-3xl shadow-lg m-5 h-auto max-w-[500px] transition-all duration-400',
		'Header 3': 'p-4 bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-3xl shadow-lg m-4 h-auto max-w-[500px] transition-all duration-400',
		'Header 4': 'p-4 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] rounded-3xl shadow-lg m-5 h-auto max-w-[500px] transition-all duration-400',
		'Header 5': 'p-4 bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-3xl shadow-lg m-4 h-auto max-w-[500px] transition-all duration-400',
		'Header 6': 'p-4 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] rounded-3xl shadow-lg m-5 h-auto max-w-[500px] transition-all duration-400',
	};

	const commentBox = classNamesMap[contentData[currentIndex].header] || '';




	return (
		<div className='block md:flex justify-evenly p-4 mt-14 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2]'>

			{/* PROFILE PICTURES */}
			<div className='relative sm:px-8 m-4 space-y-3'>
				<div className='flex space-x-4 justify-center'>
					<img className='w-24 bg-white rounded-full' src={Image} alt="" />
					<img className='w-24 bg-white rounded-full' src={Image} alt="" />
					<img className='w-24 bg-white rounded-full' src={Image} alt="" />
				</div>
				<div className='flex space-x-4 justify-center'>
					<img className='w-24 bg-white rounded-full' src={Image} alt="" />
					<img className='w-24 bg-white rounded-full' src={Image} alt="" />
					<img className='w-24 bg-white rounded-full' src={Image} alt="" />
				</div>
			</div>

			{/* COMMENTS */}
			<div className='py-4 sm:px-4 flex justify-center items-center'>
				<img onClick={handlePrev} src={LeftIcon} className='w-12 bg-white commentBtn rounded-2xl p-1' alt="" />

				<div className={`${commentBox}`}>
					<p className='text-lg font-semibold'>{contentData[currentIndex].commentText}</p>
					<h2 className='pt-4 underline'>{contentData[currentIndex].header}</h2>
				</div>

				<img onClick={handleNext} src={RightIcon} className='w-12 bg-white commentBtn rounded-2xl p-1 shadow-2xl' alt="" />
			</div>


		</div>
	)
}

export default Comments
