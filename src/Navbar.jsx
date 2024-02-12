import React, { useState } from 'react'
import './App.css';
import { Squash as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';

import SearchARide from './pictures/search.png'
import AddARide from './pictures/addCar.png'
import Profile from './pictures/profile.png'
import Logo from './pictures/parking.png'
import SigningUpUser from './pictures/signUpUser.png'
import LogInUser from './pictures/loginUser.png'
import Bus from './pictures/bus.png'
import Car from './pictures/car.png'
import getInArrowImage from './pictures/next.png'
import ridesImage from './pictures/checklist.png'
import newsImage from './pictures/newspaper-folded.png'
import bankImage from './pictures/bank.png'
import logOutImage from './pictures/turn-off.png'


const Navbar = () => {


	const [menuOpen, setMenuOpen] = useState(false)
	const [loggedOutMenu, setLoggedOutMenu] = useState(false)
	const [loggedInMenu, setLoggedInMenu] = useState(false)
	const [logOut, setLogOut] = useState(false)



	function handleLoggedInMenu() {
		setMenuOpen(false)
		setLoggedInMenu(!loggedInMenu)
	}

	function handleMenuOpen() {
		setLoggedInMenu(false)
		setLoggedOutMenu(false)
	}

	function handleLogOut() {
		setLogOut(true)
		document.body.style.overflow = 'hidden';
	}
	function handelLogOutCancel() {
		setLogOut(false)
		document.body.style.overflow = 'auto';
	}
	function handleResize() {
		setLoggedOutMenu(false)
		setMenuOpen(false)
		setLoggedInMenu(false)
	}
	window.onresize = handleResize;

	return (
		<div className='sticky bg-gradient-to-l from-[#39393A] to-[#555557] h-20 flex justify-between border-b border-black shodow-xl items-center rounded-b-md z-20'>

			{/* NAVBAR */}
			<div className='flex justify-between md:w-auto w-full space-x-8 text-white text-lg font-semibold'>
				<div className='flex justify-center items-center space-x-6'>
					<Link to='/'>
						<div className='flex pl-8'>
							<h1 className='pt-2'>goFast</h1>
							<img src={Logo} className='w-12 navIcon' />
						</div>
					</Link>
					<div className='flex items-center space-x-6'>
						<h1 className='hidden sm:block pl-0 pt-2 cursor-pointer underline'>Cars</h1>
						<h1 className='hidden sm:block pt-2 cursor-pointer underline'>Buses</h1>
					</div>
				</div>
				<div onClick={handleMenuOpen} className='md:hidden pr-4 cursor-pointer'>
					<Hamburger toggled={menuOpen} toggle={setMenuOpen} size={28} color="#ffffff" easing="ease-in" />
				</div>
			</div>

			<div className='hidden md:flex space-x-8 pr-8'>
				<Link className='flex items-center' to='/searchPage'>
					<img className='w-9 navIcon cursor-pointer' src={SearchARide} />
					<h1 className='text-white font-semibold pt-2 pl-2'>Search</h1>
				</Link>
				<Link className='flex items-center' to='/addRidePage'>
					<img className='w-9 navIcon cursor-pointer' src={AddARide} />
					<h1 className='text-white font-semibold pt-2 pl-2'>Post a ride</h1>
				</Link>
				<img onClick={handleLoggedInMenu} className='w-9 navIcon cursor-pointer' src={Profile} />
			</div>


			{/* RIGHT MENU OPEN */}
			<div className={menuOpen ? 'absolute bg-[#555557] bg-opacity-80 backdrop-blur-sm drop-shadow-lg w-[70vw] sm:w-[60vw] h-[92vh] top-20 right-0 p-3 duration-500 mr-0 rounded-r' : 'mr-[-100rem] absolute w-[55vw] h-[92vh] top-14 right-0 p-3 duration-500'}>
				<div className='font-semibold text-lg'>
					<Link to='/searchPage'>
						<div className='p-3 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
							<div className='flex space-x-4 items-center'>
								<img src={SearchARide} className='w-9 md:w-10' alt="" />
								<h1 className='font-semibold'>Search a ride</h1>
							</div>
							<img className='w-6' src={getInArrowImage} alt="" />
						</div>
					</Link>

					<Link to='/addRidePage'>
						<div className='p-3 mt-2 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
							<div className='flex space-x-4 items-center'>
								<img src={AddARide} className='w-9 md:w-10' alt="" />
								<h1 className='font-semibold'>Add a ride</h1>
							</div>
							<img className='w-6' src={getInArrowImage} alt="" />
						</div>
					</Link>

					<Link to='/yourRides'>
						<div className='p-3 mt-2 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
							<div className='flex space-x-4 items-center'>
								<img src={ridesImage} className='w-9 md:w-10' alt="" />
								<h1 className='font-semibold'>Your rides</h1>
							</div>
							<img className='w-6' src={getInArrowImage} alt="" />
						</div>
					</Link>

					<Link to='/newsPage'>
						<div className='p-3 mt-2 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
							<div className='flex space-x-4 items-center'>
								<img src={newsImage} className='w-9 md:w-10' alt="" />
								<h1 className='font-semibold'>News</h1>
							</div>
							<img className='w-6' src={getInArrowImage} alt="" />
						</div>
					</Link>

					<Link to='/profile'>
						<div className='p-3 mt-2 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
							<div className='flex space-x-4 items-center'>
								<img src={LogInUser} className='w-9 md:w-10' alt="" />
								<h1 className='font-semibold'>Profile</h1>
							</div>
							<img className='w-6' src={getInArrowImage} alt="" />
						</div>
					</Link>

					<Link to='/paymentRefund'>
						<div className='p-3 mt-2 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
							<div className='flex space-x-4 items-center'>
								<img src={bankImage} className='w-9 md:w-10' alt="" />
								<h1 className='font-semibold'>Payments & Refunds</h1>
							</div>
							<img className='w-6' src={getInArrowImage} alt="" />
						</div>
					</Link>

					<div onClick={handleLogOut} className='p-3 mt-2 flex justify-between items-center bg-[#E9D2F4] hover:bg-[#d1c9c9] border border-black rounded-md'>
						<div className='flex space-x-4 items-center'>
							<img src={logOutImage} className='w-9 md:w-10' alt="" />
							<h1 className='font-semibold'>Log out</h1>
						</div>
						<img className='w-6' src={getInArrowImage} alt="" />
					</div>
				</div>

				<div className='sm:hidden font-semibold mt-4'>
					<h1 className='text-xl text-white font-semibold'>Choose a way to travel:</h1>
					<div className='p-3 flex justify-between bg-[#E9D2F4] hover:bg-[#d1c9c9] text-lg border border-black rounded-md mt-2'>
						<h1>Cars</h1>
						<img src={Car} className='w-9' alt="" />
					</div>
					<div className='p-3 flex justify-between bg-[#E9D2F4] hover:bg-[#d1c9c9] text-lg border border-black rounded-md mt-2'>
						<h1>Buses</h1>
						<img src={Bus} className='w-9' alt="" />
					</div>
				</div>
			</div>

			{/* LOG OUT ---CONFIRM OR CANCEL--- */}
			<div className={logOut ? 'absolute z-50 top-0 h-screen w-full backdrop-blur-sm bg-white/30 flex items-center justify-center overflow-y-hidden' : 'hidden'}>
				<div className='p-4 font-semibold items-center bg-[#E9D2F4] border border-gray-500 rounded-md shadow-xl'>
					<h1 className='mt-2'>Do you really want Log out?</h1>
					<div className='flex justify-center space-x-4 items-center mt-6 mb-2'>
						<button className="border border-[#555557] bg-red-500 text-white hover:border-red-600 py-1 px-2 rounded">Log out</button>
						<button onClick={handelLogOutCancel} className="border border-[#555557] hover:border-blue-600 py-1 px-2 rounded">Cancel</button>
					</div>
				</div>
			</div>

			{/* LOGGED OUT MENU */}
			{/* <div className={loggedOutMenu ? 'absolute bg-white w-[24vw] top-20 right-0 p-3 duration-[0.7s] ml-0 rounded-l' : ' absolute mr-[-50rem] bg-white top-20 right-0 duration-[0.7s]'}>
				<div className='p-3 flex justify-between border border-black rounded-md'>
					<h1>Log in</h1>
					<img src={LogInUser} className='w-9' alt="" />
				</div>
				<div className='p-3 flex justify-between border border-black rounded-md mt-2 '>
					<h1>Sign in</h1>
					<img src={SigningUpUser} className='w-9' alt="" />
				</div>
			</div> */}

			{/* LOGGED IN MENU */}
			<div className={loggedInMenu ? 'absolute bg-white w-[40vw] md:w-[30vw] top-20 right-0 p-3 duration-[0.7s] ml-0 rounded-l' : ' absolute mr-[-50rem] bg-white top-20 right-0 duration-[0.7s]'}>
				<Link to='/yourRides'>
					<div className='p-3 mt-2 flex justify-between items-center border border-black rounded-md'>
						<div className='flex space-x-4 items-center'>
							<img src={ridesImage} className='w-9 md:w-10' alt="" />
							<h1 className='font-semibold'>Your rides</h1>
						</div>
						<img className='w-6 h-fit' src={getInArrowImage} alt="" />
					</div>
				</Link>
				<Link to='/newsPage'>
					<div className='p-3 mt-2 flex justify-between items-center border border-black rounded-md'>
						<div className='flex space-x-4 items-center'>
							<img src={newsImage} className='w-9 md:w-10' alt="" />
							<h1 className='font-semibold'>News</h1>
						</div>
						<img className='w-6 h-fit' src={getInArrowImage} alt="" />
					</div>
				</Link>

				<Link to='/profile'>
					<div className='p-3 mt-2 flex justify-between items-center border border-black rounded-md'>
						<div className='flex space-x-4 items-center'>
							<img src={LogInUser} className='w-9 md:w-10' alt="" />
							<h1 className='font-semibold'>Profile</h1>
						</div>
						<img className='w-6 h-fit' src={getInArrowImage} alt="" />

					</div>
				</Link>

				<Link to='/paymentRefund'>
					<div className='p-3 mt-2 flex justify-between items-center border border-black rounded-md'>
						<div className='flex space-x-4 items-center'>
							<img src={bankImage} className='w-9 md:w-10' alt="" />
							<h1 className='font-semibold'>Payments & Refunds</h1>
						</div>
						<img className='w-6 h-fit' src={getInArrowImage} alt="" />
					</div>
				</Link>

				<div onClick={handleLogOut} className='p-3 my-2 flex justify-between items-center border border-black rounded-md cursor-pointer'>
					<div className='flex space-x-4 items-center'>
						<img src={logOutImage} className='w-9 md:w-10' alt="" />
						<h1 className='font-semibold'>Log out</h1>
					</div>
					<img className='w-6 h-fit' src={getInArrowImage} alt="" />
				</div>
			</div>

		</div>
	)
}

export default Navbar