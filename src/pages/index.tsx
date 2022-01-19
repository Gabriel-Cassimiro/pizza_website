import type { NextPage } from "next"

import styles from "../styles/Home.module.css"
import { Featured } from "../components/Featured"
import { PizzaList } from "../components/PizzaList"

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Featured />
			<PizzaList />
		</div>
	)
}

export default Home
