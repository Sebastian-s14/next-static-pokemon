const toggleFavorites = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (favorites.includes(id)) {
        favorites = favorites.filter((pokeId) => pokeId !== id)
    } else {
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existsInFavorites = (id: number): boolean => {
    if (typeof window === 'undefined') return false
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    return favorites.includes(id)
}

const pokemons = (): number[] => JSON.parse(localStorage.getItem('favorites') || '[]')

// eslint-disable-next-line import/no-anonymous-default-export
export default { existsInFavorites, toggleFavorites, pokemons }
