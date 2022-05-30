import Link from 'next/link'

type FirstPostProps = {
    name: string
}

export default function FirstPost(props: FirstPostProps) {
    return (
        <div className='container' >
            <div>
                <h1>First Post</h1>
                <h2>{`Hello ${props?.name}`}</h2>
                <Link href='/' >
                    <a>back to home</a>
                </Link>
            </div>
            <style jsx>{`
                .container {
                    background-color: white;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-item: center;
                    
                }
            `}</style>
        </div>
    )
}