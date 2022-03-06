import type { NextPage } from 'next'
import { Button } from '@nextui-org/react'

// const Component = () => (
//     <Button onClick={() => console.log('im a simple button')}>Click me</Button>
// )

const Home: NextPage = () => {
    return (
        <div>
            <h1>Hello world</h1>
            <hr />
            {/* <Component /> */}
            <Button color={'success'} onClick={() => console.log('im a simple button')}>
                Click me
            </Button>
        </div>
    )
}

export default Home
