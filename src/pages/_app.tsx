import type { AppProps } from "next/app"

import { NextSeo } from "next-seo"
import SEO from "../SEO/Home-SEO"
import Layout from "../components/Layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<NextSeo {...SEO} />
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
