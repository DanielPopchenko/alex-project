import React from 'react';
import { MdCleaningServices } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import Gallery from '../gallery/Gallery';

const Content = () => {
	return (
		<div className='h-full w-screen bg-hero bg-no-repeat bg-cover'>
			<div className='w-screen bg-gray-30 px-10 pt-5 flex '>
				{/* Left SIDE */}
				<div className='w-[45%] p-5'>
					<h1 className='text-6xl mb-4'>Our qualities:</h1>

					<ul className='mb-4'>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<MdCleaningServices
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Fast</h2>
						</li>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<MdCleaningServices
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Responsible</h2>
						</li>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<MdCleaningServices
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Fine quality</h2>
						</li>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<MdCleaningServices
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Fair price</h2>
						</li>
					</ul>

					<p className='text-lg'>
						Count on Alexander Window Cleaning to provide a superior window
						washing experience. We will make the glass in your home or business
						show its Quality and Shine! We will remove the dirt and grime you
						can't see with our professional pressure washing services.
					</p>

					<h1 className='text-4xl my-4'>Loacations:</h1>

					<ul className='mb-4'>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<FaLocationDot
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Sarasota</h2>
						</li>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<FaLocationDot
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Tampa</h2>
						</li>
						<li className='flex items-center mb-2'>
							<span className='mr-3'>
								<FaLocationDot
									fontSize={25}
									className='transition hover:text-primary-bg'
								/>
							</span>{' '}
							<h2 className='text-2xl'>Clearwater</h2>
						</li>
					</ul>
				</div>

				{/* Right SIDE */}
				<div className='w-[55%] p-5 text-center'>
					<h1 className='text-6xl mb-5'>Gallery:</h1>

					{/* gallery */}
					<Gallery />

					{/* <ul className='flex flex-col items-center'>
						<li className=''>
							<img
								src={image1}
								alt=''
								width={600}
								height={175}
								className='rounded-lg'
							/>
						</li>
						<li className=''>
							<img
								src={image2}
								alt=''
								width={600}
								height={175}
								className='rounded-lg'
							/>
						</li>
					</ul> */}
				</div>
			</div>
		</div>
	);
};

export default Content;
