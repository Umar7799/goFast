import React from 'react'
import Navbar from '../../Navbar'
import { GetInfo } from '../../context/Context'
import Footer from '../../Footer'
import howMany from '../../pictures/howMany.png'
import shareRideImage from '../../pictures/share-ride.png'
import Cards from '../../navbarComponents/AddRidePageFile/Cards'
import Comments from '../../navbarComponents/AddRidePageFile/Comments'
import PostRideVideo from '../../navbarComponents/AddRidePageFile/PostRideVideo'
import ToHelpCards from '../../navbarComponents/AddRidePageFile/ToHelpCards'
import DriverInformation from '../../navbarComponents/AddRidePageFile/DriverInformation'

const AddRidePage = () => {


	const { openHowMany, setOpenHowMany, increase, decrease, Passenger, handleOtherElementClick } = GetInfo()



	return (
		<div className='overflow-hidden'>
			<Navbar />
			<div onClick={handleOtherElementClick} className='flex justify-center items-center'>
				<h1 className='transition-all py-16 px-12 sm:px-0 font-semibold text-2xl sm:text-3xl md:text-4xl text-white duration-500'>Save on travel costs by taking passengers.</h1>
			</div>

			<div className='sm:flex justify-around'>

				<div className='rounded-xl h-fit shadow-xl mx-8 sm:mx-4'>
					<input className='p-3 outline-0 border border-b-0  border-gray-300 w-full bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] font-semibold text-lg rounded-t-xl block placeholder:font-semibold placeholder:font-sans placeholder:text-gray-200' type="text" placeholder='City of departure' />
					<input className='p-3 outline-0 border border-b-0  border-gray-300 w-full bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] font-semibold text-lg block placeholder:font-semibold placeholder:font-sans placeholder:text-gray-200' type="text" placeholder='Destination city' />
					<div className='flex w-full space-x-4 p-3 pr-8 bg-white bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] relative border  border-b-0 border-gray-300'>
						<img onClick={() => setOpenHowMany(!openHowMany)} className='cursor-pointer w-7' src={howMany} alt="" />
						<h1 onClick={() => setOpenHowMany(!openHowMany)} className='cursor-pointer font-semibold underline text-lg'>{Passenger}</h1>
						<h1 onClick={() => setOpenHowMany(!openHowMany)} className='cursor-pointer  font-semibold text-lg'>Passengers</h1>
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

					<div className='bg-white w-full p-4 flex pl-12 sm:pl-4 border border-t-gray-300 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2]'>
						<h1 className='font-semibold text-xl'>Save up to 100$ on your first ride with easyGo</h1>
					</div>

					<button onClick={handleOtherElementClick} className='w-full rounded-b-xl border border-gray-300 text-xl font-semibold bg-[#4ba6c7] text-white p-3 outline-0 transition-all'>Post a ride</button>
				</div>

				<div className='h-fit p-2  rounded-xl shadow-xl flex justify-center m-8  sm:m-0 sm:mr-4 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2]'>
					<img className='h-auto w-[20rem] md:w-[18rem] sm:w-[16rem] transition-all duration-300 rounded-xl p-4' src={shareRideImage} alt="" />
				</div>
			</div>

			<Cards />
			<Comments />
			<PostRideVideo />
			<ToHelpCards />
			<DriverInformation />

			<div className='flex justify-center my-14'>
				<button className='shadow-lg rounded-2xl border border-gray-300 text-md md:text-lg lg:text-xl font-semibold bg-[#4ba6c7] text-white p-3'>Post a ride</button>
			</div>

			<div className='bg-gradient-to-r from-[#E9D2F4] to-[#9f98a2] pt-4'>
				<Footer />
			</div>
		</div>
	)
}

export default AddRidePage