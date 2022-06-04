import Link from 'next/link'



export default function FirstPost() {
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