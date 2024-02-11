import React from 'react'
import './App.css'
import TwitterIcon from './pictures/twitter.png'
import FacebookIcon from './pictures/facebook.png'
import InstagramIcon from './pictures/instagram.png'
import YoutubeIcon from './pictures/youtube.png'



const Footer = () => {
	return (

		<div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 mx-8 pb-4 border-t border-gray-400 rounded">

			<div className="relative flex justify-center">
				<div class="pt-4">
					<h1 className="block pt-4 font-semibold mb-5 text-lg md:text-base lg:text-xl">Information</h1>
					<h1 className="md:text-base underline font-semibold mb-1">How does it work?</h1>
					<h1 className="md:text-base underline font-semibold mb-1">About us</h1>
					<h1 className="md:text-base underline font-semibold mb-1">Help Center</h1>
					<h1 className="md:text-base underline font-semibold mb-1">Press</h1>
					<h1 className="md:text-base underline font-semibold mb-1">Work at goFast</h1>
					<h1 className="md:text-base underline font-semibold mb-1">Contact</h1>
				</div>
			</div>
			<div className="relative flex justify-center">
				<div class="pt-4 pl-14 sm:pl-0">
					<h1 className="block pt-4 font-semibold mb-5 text-lg md:text-base lg:text-xl">All lists</h1>
					<h1 className="md:text-base underline font-semibold mb-2">All carpooling routes</h1>
					<h1 className="md:text-base underline font-semibold mb-2">All carpooling destinations</h1>
					<h1 className="md:text-base underline font-semibold mb-2">All bus routes</h1>
					<h1 className="md:text-base underline font-semibold mb-2">All bus destination</h1>
				</div>
			</div>





			<div className="relative flex justify-center">
				<div class="pt-4 pl-12 sm:pl-0">
					<h1 className="block pt-4 font-semibold mb-5 text-lg lg:text-xl">Most carpooling routes</h1>
					<div class="flex space-x-3 mt-3">
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>
					<div class="flex space-x-3 mt-3">
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>
					<div class="flex space-x-3 mt-3">
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>
					<div class="flex space-x-3 mt-3">
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Andijan</h1>
						<h1 className='font-bold text-xl'>→</h1>
						<h1 className="pt-1 font-semibold text-lg md:text-base lg:text-lg">Tashkent</h1>
					</div>


				</div>
			</div>


			<div className="relative flex justify-center">
				<div className="pt-4">
					<h1 className="block pt-4 font-bold text-xl lg:text-2xl mb-5">goFast</h1>
					<h1 className="md:text-base underline font-semibold mb-1">Work at goFast</h1>
					<h1 className="md:text-base underline font-semibold mb-5">Contact</h1>

					{/* LANGUAGE */}
					<div className='w-full '>
						<div className='flex'>
							<select className='language-select border border-black shadow-xl rounded-lg px-4 py-1 font-semibold focus:py-2 focus:px-5 transition-all duration-300 outline-none'>
								<option value="1">English</option>
								<option value="2">Uzbek</option>
								<option value="3">Russian</option>
							</select>
						</div>
					</div>

					{/* SOCIAL MEDIA ICONS */}
					<div className='flex space-x-4 mt-6'>
						<img className='w-[25px]' src={InstagramIcon} alt="" />
						<img className='w-[25px]' src={FacebookIcon} alt="" />
						<img className='w-[25px]' src={YoutubeIcon} alt="" />
						<img className='w-[25px]' src={TwitterIcon} alt="" />
					</div>
					<h1 className='italic text-xs pt-2'>Gofast 2023^^</h1>

				</div>
			</div>





		</div>

	)
}

export default Footer