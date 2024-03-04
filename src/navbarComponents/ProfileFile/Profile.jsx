import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import ProfilePic from '../../pictures/profile.png'
import GetInArrowImage from '../../pictures/next.png'
import VerifyProfileImage from '../../pictures/add.png'



const Profile = () => {
	return (
		<div>
			<div className='pb-4'>
				<Navbar />
			</div>

			<div className='m-12 sm:m-20 my-12 border border-gray-300 rounded-md py-3 flex justify-around items-center text-white font-semibold text-lg sm:text-xl md:text-2xl transition-all duration-500'>
				<div>
					<h1>Steven</h1>
					<h1 className='text-sm'>Passenger</h1>
				</div>
				<div className='flex items-center space-x-4'>
					<img className='navIcon w-14 md:w-20' src={ProfilePic} alt="" />
					{/* TEPADAGI IMG TAG DA PROFIL IMAGE BO`LISHI KERAK */}
					<img className='navIcon w-6' src={GetInArrowImage} alt="" />
				</div>
			</div>

			<div className='mx-14 my-8 sm:flex justify-around'>
				<div>
					<div className='flex justify-evenly pb-10 font-semibold text-white text-2xl md:text-3xl transition-all duration-500'>
						<h1>About me</h1>
					</div>
					<div className='underline text-white font-semibold space-y-2'>
						<h1 className='cursor-pointer'>Edite profile picture</h1>
						<h1 className='cursor-pointer'>Edit personal information</h1>
					</div>

					<div className='space-y-4 mt-10'>
						<h1 className='text-white font-semibold text-lg sm:text-xl md:text-2xl'>Verify Profile</h1>
						<div className='flex items-center space-x-4 text-white underline font-semibold cursor-pointer'>
							<img className='w-6 navIcon' src={VerifyProfileImage} alt="" />
							<h1>Verify your email</h1>
						</div>
						<div className='flex items-center space-x-4 text-white underline font-semibold cursor-pointer'>
							<img className='w-6 navIcon' src={VerifyProfileImage} alt="" />
							<h1>Verify your phone number</h1>
						</div>
					</div>

					<div className='space-y-4 mt-10'>
						<h1 className='text-white font-semibold text-lg sm:text-xl md:text-2xl'>Information About you</h1>
						<div className='flex items-center space-x-4 text-white underline font-semibold cursor-pointer'>
							<img className='w-6 navIcon' src={VerifyProfileImage} alt="" />
							<h1>Add information about yourself</h1>
						</div>
						<div className='flex items-center space-x-4 text-white underline font-semibold cursor-pointer'>
							<img className='w-6 navIcon' src={VerifyProfileImage} alt="" />
							<h1>Edit your travel preferences</h1>
						</div>
					</div>

					<div className='space-y-4 mt-10'>
						<h1 className='text-white font-semibold text-lg sm:text-xl md:text-2xl'>Vehicles</h1>
						<div className='flex items-center space-x-4 text-white underline font-semibold cursor-pointer'>
							<img className='w-6 navIcon' src={VerifyProfileImage} alt="" />
							<h1>Add a vehicle</h1>
						</div>

					</div>
				</div>

				<div className='pl-6'>
					<div className='flex justify-evenly pt-12 sm:pt-0 pb-10 font-semibold text-white text-2xl md:text-3xl transition-all duration-500'>
						<h1>Settings</h1>
					</div>
					<div className='space-y-3 items-center'>
						<div className='group flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Ratings Received</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Ratings you've left</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Notifications, emails, and SMS</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Password</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Payment method</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Available resources</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Payments & Refunds</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-white text-lg cursor-pointer underline'>
							<h1>Data protection</h1>
							<img className='navIcon w-6 h-fit' src={GetInArrowImage} alt="" />
						</div>

						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-blue-400 text-lg cursor-pointer hover:underline'>
							<h1>Log out</h1>
						</div>
						<div className='flex justify-between space-x-12 max-w-[500px] font-semibold text-blue-400 text-lg cursor-pointer hover:underline'>
							<h1>Close your account</h1>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default Profile