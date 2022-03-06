import { Card, Grid } from '@nextui-org/react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { Layout } from '../../components/layouts'
import { FavoritePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritosPage: NextPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons)
    }, [])

    return (
        <Layout title="Pokemons - Favoritos">
            {favoritePokemons.length === 0 ? (
                <NoFavorites />
            ) : (
                <FavoritePokemons pokemons={favoritePokemons} />
            )}
        </Layout>
    )
}

export default FavoritosPage