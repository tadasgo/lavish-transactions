import React from 'react';
import Hero from '../../components/hero/Hero';
import Pricing from '../../components/pricing/Pricing';
import { homeObjFour } from './Data';

function SignUp() {
	return (
		<>
			<Hero {...homeObjFour} />
			<Pricing />
		</>
	);
}

export default SignUp;
