import type { NextPage, GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react'

import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface HomePageProps {
    pokemons: SmallPokemon[]
}

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
    return (
        <Layout title="Listado de pokemons">
            <Grid.Container gap={2} justify="flex-start">
                {pokemons.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id} />
                ))}
            </Grid.Container>
        </Layout>
    )
}

export default HomePage

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=50')
    const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            index + 1
        }.svg`,
    }))

    return {
        props: {
            pokemons,
        },
    }
}
