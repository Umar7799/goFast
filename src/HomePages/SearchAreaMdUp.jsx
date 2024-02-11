import React from 'react'
import howMany from '../pictures/howMany.png'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS styles
import { GetInfo } from '../context/Context'


const SearchAreaMdUp = () => {
	const { openHowMany, setOpenHowMany, increase, decrease, startDate, setStartDate, Passenger, HowManyPassengers, handleOtherElementClick } = GetInfo()




	return (
		<div className='hidden md:block rounded-xl mx-8 justify-center'>
			<div className='flex px-8'>
				<input onClick={handleOtherElementClick} className="w-full bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] shadow-lg p-3  border border-r-0 border-gray-300 outline-0 font-semibold lg:text-lg transition-all duration-300 rounded-l-xl placeholder:font-sans placeholder:text-gray-200" placeholder="City of departure" />
				<input onClick={handleOtherElementClick} className="w-full bg-gradient-to-l from-[#9f98a2] to-[#E9D2F4] shadow-lg p-3  border border-r-0 border-gray-300 outline-0 font-semibold lg:text-lg transition-all duration-300 placeholder:font-sans placeholder:text-gray-100" placeholder="Destination city" />

				{/* CALENDAR */}
				<div className='space-x-3 w-full bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] flex justify-center border border-r-0 border-gray-300 py-3 outline-0 transition-all shadow-lg'>
					<h1 className={startDate ? 'hidden' : 'pt-1 font-semibold pl-2'}>Today?</h1>
					<div className='min-w-[70px] mt-[3px]'>

						<DatePicker
							className='w-full bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] outline-0 underline font-semibold placeholder:text-black cursor-pointer'
							selected={startDate}
							onChange={(date) => setStartDate(date)}
							dateFormat="dd-MM-yyyy"
							calendarClassName="calendar-popup" // Add a class for custom styling
							placeholderText='DD-MM'
						/>
					</div>
				</div>

				{/* How Many */}
				<div className='flex space-x-4 bg-gradient-to-l from-[#9f98a2] to-[#E9D2F4] relative p-3 shadow-lg border border-r-0 border-gray-300'>
					<div className='flex  space-x-4'>
						<img onClick={HowManyPassengers} className='cursor-pointer max-w-[30px]' src={howMany} alt="" />
						<h1 onClick={HowManyPassengers} className='cursor-pointer pr-6 font-semibold underline text-lg'>{Passenger}</h1>
					</div>
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
				<button onClick={handleOtherElementClick} className='shadow-lg rounded-r-xl px-10  border border-gray-300 bg-[#4ba6c7] font-semibold text-lg text-white p-3 outline-0 transition-all'>Search</button>
			</div>

		</div>
	)
}

export default SearchAreaMdUp