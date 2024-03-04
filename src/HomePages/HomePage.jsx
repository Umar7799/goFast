import React from 'react'
import '../App.css'
import SearchAreaMdUp from './SearchAreaMdUp';
import { GetInfo } from '../context/Context'
import SearchAreaMdDown from './SearchAreaMdDown';
import HomePageCards from './HomePageCards';
import Describing from './Describing';
import MostRides from './MostRides';
import Navbar from '../Navbar';
import Footer from '../Footer';

const HomePage = () => {

	const { handleOtherElementClick } = GetInfo()

	return (
		<div>
			<Navbar />
			<div onClick={handleOtherElementClick} className='flex justify-center items-center'>
				<h1 className='transition-all py-16 px-12 sm:px-0 pb-18 font-semibold text-3xl sm:text-4xl md:text-5xl text-white duration-500'>Where do you want to go?</h1>
			</div>
			{/* MD NI TEPASIDAGI SEARCH AREA */}
			<SearchAreaMdUp />
			{/* MD NI PASIDAGI 'SEARCH AREA' */}
			<SearchAreaMdDown />

			<HomePageCards />
			<Describing />
			<MostRides />
			<div className='bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] pt-8'>
				<Footer />
			</div>
		</div>

	)
}

export default HomePage