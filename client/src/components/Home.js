import React from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';

import './style.css';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Menubar />

			<section className='banner1 d-flex flex-row'>
				<div className='child1'>
					<h1> Amazing </h1>
					<h1> Experiences from Our </h1>
					<h1> Wonderful Cutomers </h1>
					<p>
						{' '}
						Here is what Customers are saying about us, you can share your
						stories with us.{' '}
					</p>
				</div>

				<div>
					<img src='/images/Capture.png' alt='img' />
				</div>
			</section>

			<section className='container=fluid banner2'>
				<section className='container d-flex flex-row'>
					<div className='child1'>
						<img src='/images/joy.png' className='tolu' alt='img' />
					</div>

					<div className='ml-5 child2'>
						<h4 className='text-white my-3'> Tolu and Joy's Experience </h4>

						<div className='text-white'> CUSTOMER </div>

						<p className='text-white my-5'>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
						</p>

						<h5 className='text-white'> SHARE YOUR OWN STORY </h5>
					</div>
				</section>
			</section>

			<section className='container-fluid banner3'>
				<div className='d-flex flex-row container'>
					<p className=' text-justify'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<p className='ml-5 text-justify'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
					<p className='ml-5 text-justify'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
