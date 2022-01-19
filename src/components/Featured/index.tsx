import { useState } from "react"
import Image from "next/image"

import styles from "../../styles/Featured.module.css"

export function Featured() {
	const [index, setIndex] = useState(0)

	const images = [
		"/images/featured.png",
		"/images/featured1.png",
		"/images/featured2.png",
		"/images/featured3.png"
	]

	function handleArrow(direction: string) {
		if (direction === "l") {
			setIndex(index !== 0 ? index - 1 : images.length - 1)
		} else if (direction === "r") {
			setIndex(index !== images.length - 1 ? index + 1 : 0)
		}
	}

	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow("l")}
			>
				<Image
					src="/images/arrowl.png"
					alt=""
					layout="fill"
					objectFit="contain"
				/>
			</div>

			<div
				className={styles.wrapper}
				style={{
					width: `${100 * images.length}vw`,
					transform: `translateX(${-100 * index}vw)`
				}}
			>
				{images.map((image, index) => (
					<div className={styles.imgContainer} key={index}>
						<Image src={image} alt="" layout="fill" objectFit="contain" />
					</div>
				))}
			</div>

			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow("r")}
			>
				<Image
					src="/images/arrowr.png"
					alt=""
					layout="fill"
					objectFit="contain"
				/>
			</div>
		</div>
	)
}
