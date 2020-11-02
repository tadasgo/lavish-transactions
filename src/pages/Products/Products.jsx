import React from 'react';
import Hero from '../../components/hero/Hero';
import Pricing from '../../components/pricing/Pricing';
import { homeObjTwo } from './Data';

function Products() {
	return (
		<>
			<Hero {...homeObjTwo} />
			<Pricing />
		</>
	);
}

export default Products;
