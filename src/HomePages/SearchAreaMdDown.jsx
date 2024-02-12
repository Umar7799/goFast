import React from 'react'
import howMany from '../pictures/howMany.png'
import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS styles
import { GetInfo } from '../context/Context'

import '../App.css'



const SearchAreaMdDown = () => {
	const { openHowMany, setOpenHowMany, increase, decrease, startDate, setStartDate, Passenger, handleOtherElementClick } = GetInfo()

	return (
		<div className='md:hidden rounded-xl mx-8'>
			<input className='p-3 outline-0 border border-b-0 border-gray-300 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] font-semibold text-lg rounded-t-xl rounded-b-none w-full block placeholder:font-semibold placeholder:font-sans placeholder:text-gray-200' type="text" placeholder='City of departure' />
			<input className='p-3 outline-0 border border-b-0 border-gray-300 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] font-semibold text-lg w-full block placeholder:font-semibold placeholder:font-sans placeholder:text-gray-200' type="text" placeholder='Destination city' />
			<div className='flex '>


				{/* CALENDAR */}
				<div className='w-full bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] border border-r-0 border-b-0 border-gray-300 flex items-center'>
					{/* <h1 className={startDate ? 'hidden' : 'pl-4 font-semibold'}>Today?</h1> */}
					<DatePicker
						className='outline-0 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] rounded w-32 pl-4 py-3 underline font-semibold placeholder:text-black cursor-pointer'
						selected={startDate}
						onChange={(date) => setStartDate(date)}
						dateFormat="dd-MM-yyyy"
						calendarClassName="calendar-popup" // Add a class for custom styling
						placeholderText='Today?'
					/>
				</div>

				<div className='flex bg-gradient-to-l from-[#E9D2F4] to-[#E9D2F4] space-x-4 p-3 pr-8 bg-white relative border border-b-0 border-gray-300'>
					<img onClick={() => setOpenHowMany(!openHowMany)} className='cursor-pointer w-7' src={howMany} alt="" />
					<h1 onClick={() => setOpenHowMany(!openHowMany)} className='cursor-pointer font-semibold underline text-lg'>{Passenger}</h1>
					<div className={openHowMany ? 'absolute bg-white top-14 right-0 rounded-lg duration-700' : 'hidden duration-700'}>
						<div className='flex p-4 justify-between space-x-8 font-semibold'>
							<h1>Passengers</h1>

							<div className='flex space-x-3 pr-8'>
								<button onClick={decrease} className='border-2 border-black px-2 rounded-[50%]'>-</button>
								<h1 className='text-xl underline'>{Passenger}</h1>
								<button onClick={increase} className='border-2 border-black px-2 rounded-[50%]'>+</button>
							</div>
							<button onClick={() => setOpenHowMany(false)} className='absolute top-1 right-2 border-2 border-black rounded-[50%] px-2'>x</button>
						</div>
					</div>
				</div>
			</div>
			<button onClick={handleOtherElementClick} className='shadow-lg rounded-b-xl w-full border border-gray-300 text-xl font-semibold bg-[#4ba6c7] text-white p-3 outline-0 transition-all'>Search</button>

		</div>
	)
}

export default SearchAreaMdDown