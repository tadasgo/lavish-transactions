import React from 'react';
import Hero from '../../components/hero/Hero';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

function Home() {
	return (
		<>
			<Hero {...homeObjOne} />
			<Hero {...homeObjThree} />
			<Hero {...homeObjTwo} />
			<Hero {...homeObjFour} />
		</>
	);
}

export default Home;
