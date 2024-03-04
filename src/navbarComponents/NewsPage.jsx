import React from 'react'
import Navbar from '../Navbar'
import getInArrowImage from '../pictures/next.png'
import ProfilePic from '../pictures/profile.png'
import Footer from '../Footer'


const NewsPage = () => {
	return (
		<div>
			<Navbar />

			<div className='m-14 h-[90vh]'>
				<div className='pt-14 flex justify-center font-semibold text-3xl lg:text-4xl text-white transition-all duration-500'>
					<h1>Inbox</h1>
				</div>

				<div className='mt-10'>
					{/* NEWS BOXES */}
					<div className='my-3 p-2 space-x-10 flex justify-between items-center text-gray-300 font-semibold rounded-md border border-gradient-to-l from-[#E9D2F4] to-[#9f98a2] cursor-pointer'>
						<div>
							<h1 className='text-lg underline'>goFast</h1>
							<p>What about you? Where are you going during the holidays?</p>
						</div>

						<div className='flex items-center space-x-2'>
							<img className='navIcon w-9 h-fit' src={ProfilePic} alt="" />
							<img className='navIcon w-6 h-fit' src={getInArrowImage} alt="" />
						</div>
					</div>

					<div className='my-3 p-2 space-x-10 flex justify-between items-center text-gray-300 font-semibold rounded-md border border-gradient-to-l from-[#E9D2F4] to-[#9f98a2] cursor-pointer'>
						<div>
							<h1 className='text-lg underline'>goFast</h1>
							<p>What about you? Where are you going during the holidays?</p>
						</div>

						<div className='flex items-center space-x-2'>
							<img className='navIcon w-9 h-fit' src={ProfilePic} alt="" />
							<img className='navIcon w-6 h-fit' src={getInArrowImage} alt="" />
						</div>
					</div>

					<div className='my-3 p-2 space-x-10 flex justify-between items-center text-gray-300 font-semibold rounded-md border border-gradient-to-l from-[#E9D2F4] to-[#9f98a2] cursor-pointer'>
						<div>
							<h1 className='text-lg underline'>goFast</h1>
							<p>What about you? Where are you going during the holidays?</p>
						</div>

						<div className='flex items-center space-x-2'>
							<img className='navIcon w-9 h-fit' src={ProfilePic} alt="" />
							<img className='navIcon w-6 h-fit' src={getInArrowImage} alt="" />
						</div>
					</div>

				</div>
			</div>

			<Footer />
		</div>
	)
}

export default NewsPage