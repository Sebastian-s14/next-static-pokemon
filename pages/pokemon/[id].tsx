import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces'

interface PokemonPageProps {
    pokemon: Pokemon
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
    // console.log(pokemon.name)

    return (
        <Layout title={pokemon.name}>
            <h1>{pokemon.name}</h1>
        </Layout>
    )
}

export default PokemonPage

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`)

    return {
        paths: pokemons151.map((id) => ({
            params: { id },
        })),
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params as { id: string }

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

    return {
        props: {
            pokemon: data,
        },
    }
}
