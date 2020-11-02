import React from 'react';
import Hero from '../../components/hero/Hero';
import Pricing from '../../components/pricing/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

function Home() {
	return (
		<>
			<Hero {...homeObjOne} />
			<Hero {...homeObjThree} />
			<Hero {...homeObjTwo} />
			<Pricing />
			<Hero {...homeObjFour} />
		</>
	);
}

export default Home;
