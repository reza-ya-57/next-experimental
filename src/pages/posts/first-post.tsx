import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'



export default function FirstPost() {
<<<<<<< HEAD

    
    console.log('Hello from first post')
=======
    const dispatch = useDispatch()
>>>>>>> 4b594d17aa606d105b4bb2c6c377876f1ea118d6
    return (
        <div className='container' >
            <div>
                <h1>First Post</h1>
                <h2>Hello</h2>
                <Link href='/' >
                    <a>back to home</a>
                </Link>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
    } 
    catch {

    }

}