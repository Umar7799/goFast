import React, { createContext, useContext, useState } from 'react'

export const InfoContext = createContext()

export function GetInfo() {
	return useContext(InfoContext)
}

export function InfoProvider({ children }) {


	const [openHowMany, setOpenHowMany] = useState(false)
	const [Passenger, setPassenger] = useState(0)
	const increase = () => {
		setPassenger(Passenger + 1)
	}
	const decrease = () => {
		if (Passenger > 0) {
			setPassenger(Passenger - 1)
		}
	}



	const [startDate, setStartDate] = useState(null);
	const [showCalendar, setShowCalendar] = useState(false);


	const HowManyPassengers = () => {
		setOpenHowMany(!openHowMany)
		setShowCalendar(false);

	}


	const toggleCalendar = () => {
		setOpenHowMany(false)
		setShowCalendar(!showCalendar);
	};


	const handleOtherElementClick = () => {
		setOpenHowMany(false)
		setShowCalendar(false);
	};




	return (
		<InfoContext.Provider value={{
			openHowMany, setOpenHowMany, increase, decrease, startDate, setStartDate, Passenger, HowManyPassengers, toggleCalendar, handleOtherElementClick
		}}>
			{children}
		</InfoContext.Provider>
	)
}