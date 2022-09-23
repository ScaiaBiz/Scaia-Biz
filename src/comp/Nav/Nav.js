import React from 'react';

import classes from './Nav.module.css';

function Nav() {
	const language = 'IT';
	const navElements = [
		{
			id: 0,
			IT: 'News',
			EN: 'News',
			route: '',
		},
		{
			id: 10,
			IT: 'Prodotti',
			EN: 'Products',
			route: '',
		},
		{
			id: 20,
			IT: 'Contatti',
			EN: 'Contacts',
			route: '',
		},
		{
			id: 30,
			IT: 'Chi sono',
			EN: 'About me',
			route: '',
		},
	];

	const getMenuItems = () => {
		let items = navElements.map(el => {
			return <div class={classes.element}>{el[language]}</div>;
		});
		return items;
	};

	return (
		<nav className={classes.content}>
			<div class={classes.home}>Scaia.Biz</div>
			<div class={classes.nav}>{getMenuItems()}</div>
		</nav>
	);
}

export default Nav;
