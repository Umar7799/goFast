import React from 'react'
import Navbar from '../Navbar'
import PlanningImage from '../pictures/planning.png'
import getInArrowImage from '../pictures/next.png'
import '../App.css'
import Footer from '../Footer'

const YourRides = () => {
	return (
		<div>
			<Navbar />
			<div className='h-[90vh] my-8 space-y-10 px-12 text-white'>
				<div className='flex justify-center items-center'>
					<img className='navIcon w-48 h-fit' src={PlanningImage} alt="" />
				</div>

				<div className='flex justify-center items-center text-2xl md:text-3xl font-semibold transition-all duration-500'>
					<h1>Plans for future trips will appear here.</h1>
				</div>

				<div className='flex justify-center items-center text-lg sm:text-xl md:font-semibold transition-all duration-500'>
					<h1>Find the perfect rides to thousands of cities or post your own to share the cost of your trip.</h1>
				</div>

				<div className='flex justify-center'>
					<div className='flex justify-between px-1 w-full sm:w-[500px] border-b border-gradient-to-l from-[#E9D2F4] to-[#9f98a2] items-center text-white mt-12 mx-12 font-semibold'>
						<h1>Archived rides</h1>
						<img className='navIcon w-6 h-fit' src={getInArrowImage} alt="" />
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default YourRides