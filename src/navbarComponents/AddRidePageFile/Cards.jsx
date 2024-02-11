import React from 'react'
import saveMoney from '../../pictures/save-money.png'
import validity from '../../pictures/validity.png'
import steeringWheel from '../../pictures/steering-wheel.png'

const Cards = () => {
	return (
		<div className='mx-8 mt-14'>
			<h1 className='text-white text-2xl sm:text-3xl md:text-4xl transition-all duration-300 font-semibold pt-4 pb-6'>The best shared rides – only with goFast</h1>
			<div class="block md:flex justify-between md:-mx-2">
				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-lg shadow relative">
						<div class="p-4 group">
							<img className='w-14 group-hover:w-16 transition-all duration-300' src={saveMoney} alt="Save money" />
							<h1 className="block pt-4 font-semibold mb-2 text-lg md:text-xl">Save on travel costs</h1>
							<h1 className='font-semibold font-sans block text-sm md:text-md'>Register and see how much you can save every time you travel as a driver taking passengers with goFast.</h1>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-lg shadow relative">
						<div class="p-4 group">
							<img className='w-14 group-hover:w-16 transition-all duration-300' src={validity} alt="Save money" />
							<h1 className="block pt-4 font-semibold mb-2 text-lg md:text-xl">Join a trusted community</h1>
							<h1 className="font-semibold font-sans block text-sm md:text-md">We know our users – both drivers and passengers. We verify opinions, profiles and contact details so that everyone knows who they are traveling with.</h1>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-lg shadow relative">
						<div class="p-4 group">
							<img className='w-14 group-hover:w-16 transition-all duration-300' src={steeringWheel} alt="Save money" />
							<h1 className="block pt-4 font-semibold mb-2 text-lg md:text-xl">We make shared rides easy</h1>
							<h1 className="font-semibold font-sans block text-sm md:text-md">Our technology makes it easy to use goFast, so you can easily find, talk to and meet passengers along the route.</h1>
						</div>
					</div>
				</div>
			</div>





		</div>
	)
}

export default Cards