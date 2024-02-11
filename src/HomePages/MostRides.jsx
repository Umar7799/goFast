import React from 'react'

const MostRides = () => {
	return (
		<div class="p-16 pb-20">
			<h1 className='pb-4 font-extrabold md:text-3xl text-2xl text-white transition-all duration-300'>Where do you want to go?</h1>
			<div class="block md:flex justify-between md:-mx-2">

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0 ">
					<div class="bg-[#E9D2F4] hover:bg-gray-200 cursor-pointer rounded-lg shadow relative">
						<div class="p-4 flex space-x-3 items-center justify-center">
							<h1 className="pt-4 font-semibold mb-2 text-lg md:text-base lg:text-lg">Andijan</h1>
							<h1 className='font-bold text-xl pt-1'>→</h1>
							<h1 className="pt-4 font-semibold mb-2 text-lg md:text-base lg:text-lg">Tashkent</h1>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-[#E9D2F4] hover:bg-gray-200 cursor-pointer rounded-lg shadow relative">
						<div class="p-4 flex space-x-3 items-center justify-center">
							<h1 className=" pt-4 font-semibold mb-2 text-lg md:text-base lg:text-lg">Buxoro</h1>
							<h1 className='font-bold text-xl pt-1'>→</h1>
							<h1 className=" pt-4 font-semibold mb-2 text-lg md:text-base lg:text-lg">Samarkand</h1>
						</div>
					</div>
				</div>

				<div class="w-full lg:w-1/3 md:mx-2 mb-4 md:mb-0">
					<div class="bg-[#E9D2F4] hover:bg-gray-200 cursor-pointer rounded-lg shadow relative">
						<div class="p-4 flex space-x-3 items-center justify-center">
							<h1 className="pt-4 font-semibold mb-2 text-lg md:text-base lg:text-lg">Farg'ona</h1>
							<h1 className='font-bold text-xl pt-1'>→</h1>
							<h1 className="pt-4 font-semibold mb-2 text-lg md:text-base lg:text-lg">Qarshi</h1>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default MostRides