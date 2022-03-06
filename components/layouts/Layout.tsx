import Head from 'next/head'

import { Navbar } from '../ui'

interface LayoutProps {
    title?: string
    pokemon?: string
}

export const Layout: React.FC<LayoutProps> = ({
    title = 'Pokemon app',
    pokemon = 'XXXXX',
    children,
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Sebastián Sánchez" />
                <meta
                    name="description"
                    content={`Informació sobre el pokemon: ${pokemon}`}
                />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
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
