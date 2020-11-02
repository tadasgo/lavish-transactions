import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from '../button/Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

import './Pricing.scss';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#fff', size: 64 }}>
			<div>
				<div className="pricing__section">
					<div className="pricing__wrapper">
						<div className="pricing__heading">Pricing</div>
						<div className="pricing__container">
							<Link to="/sign-up" className="pricing__container-card">
								<div className="pricing__container-cardInfo">
									<div className="icon">
										<FaFire />
									</div>
									<h3>Starter</h3>
									<h4>$8.99</h4>
									<p>Per month</p>
									<ul className="pricing__container-features">
										<li>100 transactions</li>
										<li>2% Cash Back</li>
										<li>$10.000 Limit</li>
									</ul>
									<Button btnSize="btn-wide" btnColor="primary">
										Choose plan
									</Button>
								</div>
							</Link>
							<Link to="/sign-up" className="pricing__container-card">
								<div className="pricing__container-cardInfo">
									<div className="icon">
										<BsXDiamondFill />
									</div>
									<h3>Gold</h3>
									<h4>$29.99</h4>
									<p>Per month</p>
									<ul className="pricing__container-features">
										<li>1000 transactions</li>
										<li>3.5% Cash Back</li>
										<li>$100.000 Limit</li>
									</ul>
									<Button btnSize="btn-wide" btnColor="blue">
										Choose plan
									</Button>
								</div>
							</Link>
							<Link to="/sign-up" className="pricing__container-card">
								<div className="pricing__container-cardInfo">
									<div className="icon">
										<GiCrystalize />
									</div>
									<h3>Diamond</h3>
									<h4>$99.99</h4>
									<p>Per month</p>
									<ul className="pricing__container-features">
										<li>Unlimited transactions</li>
										<li>5% Cash Back</li>
										<li>Unlimited Spending</li>
									</ul>
									<Button btnSize="btn-wide" btnColor="primary">
										Choose plan
									</Button>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</IconContext.Provider>
	);
}

export default Pricing;
