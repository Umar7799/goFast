import React from 'react'
import chatImage from '../../pictures/bubble-chat.png'
import assistanceImage from '../../pictures/social-care.png'
import securedImage from '../../pictures/verified.png'


const ToHelpCards = () => {
	return (
		<div className='p-8 mt-14 bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2]'>
			<h1 className='text-white font-semibold text-2xl sm:text-3xl md:text-4xl'>We are here to help you every step of the way</h1>
			<div className='md:grid grid-cols-3 pt-4 md:space-x-4 space-y-6 md:space-y-0'>

				<div className=''>
					<img className='w-12 h-fit' src={chatImage} alt="" />
					<h1 className='text-white text-lg font-semibold pt-2 pb-1'>Round-the-clock support</h1>
					<p className='text-sm'>Our team will be happy to answer any questions you may have via email or social media.</p>
				</div>

				<div className=''>
					<img className='w-12 h-fit' src={assistanceImage} alt="" />
					<h1 className='text-white text-lg font-semibold pt-2 pb-1'>goFast at your service</h1>
					<p className='text-sm'>We want to get the most out of BlaBlaCar. That's why we regularly offer tips and reminders to increase your chances of receiving booking requests from passengers.</p>
				</div>

				<div className=''>
					<img className='w-12 h-fit' src={securedImage} alt="" />
					<h1 className='text-white text-lg font-semibold pt-2 pb-1'>100% data security</h1>
					<p className='text-sm'>Our team makes sure that your data is protected, which is always 100% confidential with monitoring tools, secure navigation, and encryption.</p>
				</div>

			</div>
		</div>
	)
}

export default ToHelpCards