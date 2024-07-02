import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer
			// className={`${navbarBackground} flex items-center justify-between fixed top-0 z-50 w-full py-6`}
			className={`flex items-center justify-center bg-primary-bg w-full py-3 px-4`}
		>
			{/* <GiFamilyHouse fontSize={36} /> */}
			<p className='flex items-center  mr-10 text-lg'>
				<span className='mr-2'>
					<MdEmail fontSize={20} className='transition hover:text-gray-600' />
				</span>
				alexander.cleaning@gmail.com
			</p>
			<p className='flex items-center mr-10 text-lg'>
				<span className='mr-2'>
					<FaPhone fontSize={20} className='transition hover:text-gray-600' />
				</span>
				+9417845466
			</p>
			<p className='flex items-center mr-10 text-lg'>
				<span className='mr-2'>
					<FaLocationDot
						fontSize={20}
						className='transition hover:text-gray-600'
					/>
				</span>{' '}
				Sarasota
			</p>
		</footer>
	);
};

export default Footer;
