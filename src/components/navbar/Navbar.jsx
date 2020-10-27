import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../button/Button';

import './Navbar.scss';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setButton(false);

	const showButton = () => (window.innerWidth <= 960 ? setButton(false) : setButton(true));
	window.addEventListener('resize', showButton);

	return (
		<>
			<div className="navbar">
				<div className="navbar-container container">
					<Link to="/" className="navbar-logo">
						<MdFingerprint className="navbar-icon" />
						LAVISH
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-link">
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/products" className="nav-link">
								Products
							</Link>
						</li>
						<li className="nav-btn">
							{button ? (
								<Link to="/sign-up" className="btn-link">
									<Button btnStyle="btn--outline">Sign Up</Button>
								</Link>
							) : (
								<Link to="/sign-up" className="btn-link">
									<Button btnStyle="btn--outline" btnSize="btn--mobile">
										Sign Up
									</Button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;