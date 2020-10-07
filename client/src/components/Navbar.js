import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';
const Navbar = () => {
	return (
		<div className='container-fluid'>
			{/* <section className='container'> */}
			<nav class='navbar navbar-expand-lg navbar-light  container-fluid'>
				<a class='navbar-brand' href='#'>
					Vasiti.com
				</a>
				<button
					class='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div className='collapse navbar-collapse'> </div>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item active'>
							<a class='nav-link' href='#'>
								About Us <span class='sr-only'>(current)</span>
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Stories
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Contact
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='/story'>
								Login
							</a>
						</li>
						<Link to='#' role='button' className='btn loginBtn'>
							<i className='fas fa-shopping-cart 5x text-white'></i>
							<span className='site-font text-white'> Login</span>{' '}
							{/* <span className='badge badge-light'>{cartItem.length}</span> */}
						</Link>
					</ul>
				</div>
			</nav>
			{/* </section> */}
		</div>
	);
};

export default Navbar;
