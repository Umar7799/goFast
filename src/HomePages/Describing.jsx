import React from 'react'
import SteeringWheel from '../pictures/steering-wheel.png'

const Describing = () => {
	return (
		<div>
			<div class="block text-center md:flex justify-between px-16 md:-mx-2  bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2]">
				<div className='py-12 font-semibold'>
					<h1 className='text-2xl'>Save money by driving on your way</h1>
					<p className='pt-4 pr-8'>Register as a driver and save on travel costs by picking up passengers. It will only take a few minutes for your first ride to be published. Hitting the road?</p>
					<div className='flex justify-center md:block'>
						<button className='mt-4 text-lg border-2 border-black rounded-xl py-3 px-5'>Post a ride</button>
					</div>
				</div>
				<div className='p-8 flex justify-center'>
					<img className='lg:w-[350px] max-w-[300px]' src={SteeringWheel} alt="" />
				</div>
			</div>
		</div>

	)
}

export default Describing