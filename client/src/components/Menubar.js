import React from 'react';
import { Link } from 'react-router-dom';

const Menubar = () => {
	return (
		<div>
			<div className='container-fluid nav-wrapper my-5 p-0'>
				<ul className='nav justify-content-center border-top border-bottom sm-nav m-0 p-0'>
					<li className='nav-item'>
						<Link to='/everyday/' className='nav-link text-dark  sm-link'>
							{' '}
							MARKET PLACE
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/business/' className='nav-link text-dark  sm-link'>
							{' '}
							WHOLESALE CENTER
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/culture/' className='nav-link text-dark  sm-link'>
							{' '}
							SELLER CENTER
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/' className='nav-link text-dark  sm-link'>
							{' '}
							SERVICES{' '}
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/' className='nav-link text-dark  sm-link'>
							{' '}
							INTERNSHIPS{' '}
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/leisure/' className='nav-link text-dark  sm-link'>
							{' '}
							EVENTS{' '}
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menubar;
