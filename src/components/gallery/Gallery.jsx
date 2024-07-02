import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import image1 from '../../images/image-1.avif';
import image2 from '../../images/image-2.webp';
import image3 from '../../images/image-3.jpg';

const Gallery = () => {
	return (
		<div>
			<CCarousel controls transition='crossfade' className='m-auto rounded-md'>
				<CCarouselItem>
					<CImage
						className='d-block w-100 h-[350px] rounded-md'
						src={image3}
						alt='slide 1'
					/>
				</CCarouselItem>
				<CCarouselItem>
					<CImage
						className='d-block w-100 h-[350px] rounded-md'
						src={image2}
						alt='slide 2'
					/>
				</CCarouselItem>
				<CCarouselItem>
					<CImage
						className='d-block w-100 h-[350px] rounded-md'
						src={image1}
						alt='slide 2'
					/>
				</CCarouselItem>
			</CCarousel>
		</div>
	);
};

export default Gallery;
