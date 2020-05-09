import React from 'react';
import styles from './Header.module.css';

export const Header = () =>{
	return(
		<div className={styles.head}>
		    <div className={styles.headerobjectswrapper}>
		        <header className={styles.header}>Sharma Times</header>
		    </div>

		    <div className={styles.subhead}> SHARMACITY, India - Thursday August 30, 1978 - Seven Pages </div>
		</div>
	);
}

export default Header