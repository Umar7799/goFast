import React from 'react'

const DriverInformation = () => {
	return (
		<div className='m-8 mt-14'>
			<h1 className='text-white font-semibold text-2xl sm:text-3xl md:text-4xl'>Driver information in the Help Center</h1>
			<div className='py-4 space-y-6 md:space-y-4'>

				<div className='md:flex md:space-x-6 space-y-6 md:space-y-0'>
					<div className='max-h-[130px] text-clip overflow-hidden bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] p-3 rounded-lg'>
						<h1 className='text-white text-lg font-semibold py-2 underline'>How do I determine the price for a ride ?</h1>
						<p className='text-sm'>We will provide you with suggestions on how much you will receive from your passengers. This allows you to set a price for your ride and make it easier to fill empty seats in your car. Of course, you</p>
					</div>
					<div className='max-h-[130px] text-clip overflow-hidden bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] p-3 rounded-lg'>
						<h1 className='text-white text-lg font-semibold py-2 underline'>How do I accept ride booking requests?</h1>
						<p className='text-sm'>If you post a ride listing with a manual confirmation, interested riders may ask you to book online. In this case, you must approve or deny the passenger's request by responding to the alert sent by</p>
					</div>
				</div>

				<div className='md:flex md:space-x-6 space-y-6 md:space-y-0'>
					<div className='max-h-[130px] text-clip overflow-hidden bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] p-3 rounded-lg'>
						<h1 className='text-white text-lg font-semibold py-2 underline'>What should I do if my ride has an error?</h1>
						<p className='text-sm'>If you notice an error, you should immediately correct your ride offer. If you can't edit it because passengers have already booked, contact them to clarify the situation. If you don't like the changes,</p>
					</div>
					<div className='max-h-[130px] text-clip overflow-hidden bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] p-3 rounded-lg'>
						<h1 className='text-white text-lg font-semibold py-2 underline'>How do I cancel a shared ride as a driver?</h1>
						<p className='text-sm'>If you'd like to make changes to your ride listing and haven't received any requests yet, go to the Offered Rides section of your account. Then, click "Edit" and make changes to your ride listing,</p>
					</div>
				</div>

			</div>

			<div className='flex justify-center my-8'>
				<button className='shadow-xl bg-gradient-to-l from-[#E9D2F4] to-[#9f98a2] rounded-3xl p-3 font-semibold text-md md:text-lg lg:text-xl'>Get to the Help Center</button>
			</div>

		</div>
	)
}

export default DriverInformation