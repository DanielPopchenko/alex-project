import React from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

{
	/* <img
src='https://www.peterdoranlawn.com/wp-content/uploads/2019/02/Window-Cleaners.jpg'
alt='Man cleaning a window'
/>
</li>
<li>
<img
src='https://assets-global.website-files.com/5ebd88a550ae9a78d541a625/64df7b1efe14867120827653_window-cleaners.jpg'
alt='Man cleaning a window'
/>
</li>
<li>
<img
src='https://eadn-wc01-8440685.nxedge.io/wp-content/uploads/2023/06/Untitled-design-97.jpg'
alt='Man cleaning a window'
/>
</li>
<li>
<img src='https://gandswindowcleaning.com/wp-content/uploads/2024/06/man-cleaning-window-1.webp' alt='Window cleaner' />
</li> */
}

const App = () => {
	return (
		<div className='max-w-screen h-auto bg-gray-30 text-gray-20 font-primary'>
			<Header />

			<Content />

			<Footer />
		</div>
	);
};

export default App;
