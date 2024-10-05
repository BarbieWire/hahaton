import React from 'react';
import HomeGrid from '../components/explore/HomeGrid';
import Recommended from '../components/explore/Recommended';
import NavBar from '../components/navigation/NavBar';

const Home = () => {
	return (
		<>
		    <NavBar />
			<HomeGrid />
			<Recommended />
		</>
	);
};

export default Home;