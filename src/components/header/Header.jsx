import React, { useEffect, useState } from 'react';
import { GiFamilyHouse } from 'react-icons/gi';
import { FaPhone } from 'react-icons/fa';

const Header = () => {
	// const [isOnTopOfPage, setIsOnTopOfPage] = useState(true);

	// const navbarBackground = isOnTopOfPage ? '' : 'bg-gray-30 drop-shadow';

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.screenY === 0) {
	// 			setIsOnTopOfPage(true);
	// 		}
	// 		if (window.screenY !== 0) {
	// 			setIsOnTopOfPage(false);
	// 		}
	// 	};

	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => window.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<header
			// className={`${navbarBackground} flex items-center justify-between fixed top-0 z-50 w-full py-6`}
			className={`flex items-center bg-primary-bg justify-center w-full py-3 px-4`}
		>
			<div className='flex items-center'>
				<GiFamilyHouse fontSize={36} />
				<h1 className='text-3xl font-medium ml-2'>House&Windows Cleaning</h1>
			</div>
		</header>
	);
};

export default Header;
