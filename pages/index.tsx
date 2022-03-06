import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'

import { Layout } from '../components/layouts'

const Home: NextPage = () => {
    return (
        <Layout title="Listado de pokemons" pokemon="Charmander">
            <h1>Hello world</h1>
            <hr />
            <Button color={'success'} onClick={() => console.log('im a simple button')}>
                Click me
            </Button>
        </Layout>
    )
}

export default Home
