import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PaymendRefund = () => {
	return (
		<div>
			<Navbar />
			<div className='m-14 h-[90vh]'>
				<div className='flex justify-center font-semibold text-3xl lg:text-4xl text-white transition-all duration-500'>
					<h1>Payments & Refunds</h1>
				</div>
			</div>
			<Footer />
		</div>

	)
}

export default PaymendRefund