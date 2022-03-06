import Head from 'next/head'

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
            {/* Navbar */}
            <main>{children}</main>
        </>
    )
}
