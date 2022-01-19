import Image from "next/image"
import styles from "../../styles/Footer.module.css"

export function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.item}>
				<Image src="/images/bg.png" objectFit="fill" layout="fill" alt="" />
			</div>

			<div className={styles.item}>
				<div className={styles.card}>
					<h2 className={styles.motto}>WELL BAKED SLICE OF PIZZA</h2>
				</div>

				<div className={styles.card}>
					<h1 className={styles.title}>FIND OUR RESTAURANTS</h1>

					<p className={styles.text}>
						1654 R. Don Road #304.
						<br /> New York, 85022
						<br /> (602) 867-1010
					</p>

					<p className={styles.text}>
						1654 R. Don Road #304.
						<br /> New York, 85022
						<br /> (602) 867-1010
					</p>

					<p className={styles.text}>
						1654 R. Don Road #304.
						<br /> New York, 85022
						<br /> (602) 867-1010
					</p>
				</div>

				<div className={styles.card}>
					<h1 className={styles.title}>WORKING TITLES</h1>
					<p className={styles.text}>
						MONDAT UNTIL FRIDAY
						<br /> 9:00 - 22:00
					</p>
					<p className={styles.text}>
						MONDAT UNTIL FRIDAY
						<br /> 12:00 - 24:00
					</p>
				</div>
			</div>
		</footer>
	)
}
