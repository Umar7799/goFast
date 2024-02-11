import React from 'react'
import MoneyPng from '../pictures/save-money.png'
import Trustworthy from '../pictures/validity.png'
import InTime from '../pictures/clock.png'

// 
const HomePageCards = () => {
	return (
		<div class="m-16">
			<div class="block md:flex justify-between md:-mx-2">
				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-lg shadow relative">
						<div class="p-4 group">
							<img className='w-14 group-hover:w-16 transition-all duration-300' src={MoneyPng} alt="Save money" />
							<h1 className="block pt-4 font-semibold mb-2 text-lg md:text-xl">Options of rides at different prices</h1>
							<h1 className='font-semibold font-sans block text-sm md:text-md'>Wherever you're going, by bus or car, find your perfect ride by browsing our wide selection of routes and destinations and travel at the cheapest price.</h1>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-lg shadow relative">
						<div class="p-4 group">
							<img className='w-14 group-hover:w-16 transition-all duration-300' src={Trustworthy} alt="Save money" />
							<h1 className="block pt-4 font-semibold mb-2 text-lg md:text-xl">Trustworthy riders and passengers</h1>
							<h1 className="font-semibold font-sans block text-sm md:text-md">We take the time to get to know our users and bus operators. We check reviews, profiles and IDs. So you know who you're traveling with and you can book a ride on our secure platform with confidence.</h1>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] rounded-lg shadow relative">
						<div class="p-4 group">
							<img className='w-14 group-hover:w-16 transition-all duration-300' src={InTime} alt="Save money" />
							<h1 className="block pt-4 font-semibold mb-2 text-lg md:text-xl">Book a ride simply and easily</h1>
							<h1 className="font-semibold font-sans block text-sm md:text-md">Booking a ride has never been so easy! With our easy-to-use app backed by great technology, you can book a ride near you in minutes.</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePageCards