import Link from 'next/link'
import axios from 'axios'
import { useDispatch } from 'react-redux'



export default function FirstPost() {
    const dispatch = useDispatch()
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