import React from 'react'
import Navbar from '../Navbar'
import SearchAreaMdUp from '../HomePages/SearchAreaMdUp'
import { GetInfo } from '../context/Context'
import SearchAreaMdDown from '../HomePages/SearchAreaMdDown'
import Footer from '../Footer'
import clockPic from '../pictures/clock.png'

const SearchPage = () => {

	const { handleOtherElementClick } = GetInfo()


	return (

		<div className='overflow-hidden'>
			<Navbar />
			<div onClick={handleOtherElementClick} className='flex justify-center items-center'>
				<h1 className='transition-all py-16 px-12 sm:px-0 pb-18 font-semibold text-3xl sm:text-4xl md:text-5xl text-white duration-500'>Where do you want to go?</h1>
			</div>


			{/* MD NI TEPASIDAGI SEARCH AREA */}
			<div className='mb-10'>
				<SearchAreaMdUp />
			</div>

			{/* MD NI PASIDAGI 'SEARCH AREA' */}
			<div className='mb-10'>
				<SearchAreaMdDown />
			</div>

			<div className='min-h-[90vh] px-8'>
				<div className='px-4 mt-2'>
					<div class="flex space-x-3 px-4 rounded-xl py-2 shadow-lg bg-white hover:bg-gray-400 transition-all duration-200">
						<img className='w-7' src={clockPic} alt="" />
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>
				</div>

				<div className='px-4 mt-2'>
					<div class="flex space-x-3 px-4 rounded-xl py-2 shadow-lg bg-white hover:bg-gray-400 transition-all duration-200">
						<img className='w-7' src={clockPic} alt="" />
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>
				</div>

				<div className='px-4 mt-2'>
					<div class="flex space-x-3 px-4 rounded-xl py-2 shadow-lg bg-white hover:bg-gray-400 transition-all duration-200">
						<img className='w-7' src={clockPic} alt="" />
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>
				</div>


			</div>

			<div className='bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] pt-8'>
				<Footer />
			</div>
		</div>


	)
}

export default SearchPage