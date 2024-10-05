import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(x => x);

	return (
		<Breadcrumb aria-label="Default breadcrumb example">
			<Breadcrumb.Item href="/" icon={HiHome}>
				Home
			</Breadcrumb.Item>
			{pathnames.map((value, index) => {
				const to = `/${pathnames.slice(0, index + 1).join('/')}`;
				return (
					<Breadcrumb.Item key={to} href={to}>
						{value.charAt(0).toUpperCase() + value.slice(1)}
					</Breadcrumb.Item>
				);
			})}
		</Breadcrumb>
	);
};

export default Breadcrumbs;
