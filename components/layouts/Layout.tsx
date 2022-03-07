import Head from 'next/head'

import { Navbar } from '../ui'

interface LayoutProps {
    title?: string
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: React.FC<LayoutProps> = ({ title = 'Pokemon app', children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Sebastián Sánchez" />
                <meta
                    name="description"
                    content={`Informació sobre el pokemon: ${title}`}
                />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta
                    property="og:description"
                    content={`Esta es la página sobre ${title}`}
                />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />
            <main
                style={{
                    padding: '0px 20px',
                }}>
                {children}
            </main>
        </>
    )
}
