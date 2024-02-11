import React from 'react'
import SignUpIcon from '../../pictures/loginUser.png'
import postRide from '../../pictures/addCar.png'
import acceptRequest from '../../pictures/agreement.png'
import '../../App.css'

const PostRideVideo = () => {
	return (
		<div className='block md:flex justify-evenly items-center p-4 mb-8 mt-14'>
			<div className='flex justify-center'>
				<div className='border-2 border-black w-[350px] h-[350px] rounded-lg'></div>
			</div>

			<div className='space-y-8 mt-8 md:mt-0 md:ml-4 px-2 md:px-0 text-white'>

				<div className='flex items-center md:max-w-[500px]'>
					<img className='w-10 h-fit navIcon' src={SignUpIcon} alt="" />
					<div className='pl-2'>
						<h1 className='font-semibold text-lg pb-1'>Create a goFast account</h1>
						<p className='text-sm'>Add a profile picture, write a few words about yourself, and type in your phone number to increase the level of trust between users.</p>
					</div>
				</div>

				<div className='flex items-center md:max-w-[500px]'>
					<img className='w-10 h-fit navIcon' src={postRide} alt="" />
					<div className='pl-2'>
						<h1 className='font-semibold text-lg pb-1'>Post a ride</h1>
						<p className='text-sm'>Indicate your departure and arrival locations, your ride dates, and check the suggested price to increase your chances of getting your first passengers and ratings.</p>
					</div>
				</div>

				<div className='flex items-center md:max-w-[500px]'>
					<img className='w-10 h-fit navIcon' src={acceptRequest} alt="" />
					<div className='pl-2'>
						<h1 className='font-semibold text-lg pb-1'>Accept booking requests</h1>
						<p className='text-sm'>View riders' profiles and accept their rideshare requests. This is a simple way to start saving on travel costs!</p>
					</div>
				</div>

			</div>
		</div>
	)
}

export default PostRideVideo