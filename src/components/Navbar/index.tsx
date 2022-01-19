import Image from "next/image"
import Link from "next/link"

import styles from "../../styles/Navbar.module.css"

export function NavBar() {
	return (
		<nav className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<Image
						height="32"
						width="32"
						src="/images/telephone.png"
						alt="telephone icon"
					/>
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>ORDER NOW!</div>
					<div className={styles.text}>012 345 678</div>
				</div>
			</div>

			<div className={styles.item}>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<Link href="/">Homepage</Link>
					</li>
					<li className={styles.listItem}>Products</li>
					<li className={styles.listItem}>Menu</li>
					<Image
						height="69px"
						width="160px"
						src="/images/logo.png"
						alt='Logo "Lama"'
					/>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>

			<div className={styles.item}>
				<div className={styles.cart}>
					<Link href="/cart" passHref>
						<Image
							height="40px"
							width="40px"
							src="/images/cart.png"
							alt="Shopping cart icon"
						/>
					</Link>
					<div className={styles.counter}>2</div>
				</div>
			</div>
		</nav>
	)
}
