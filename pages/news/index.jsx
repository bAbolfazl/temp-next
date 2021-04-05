import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const News = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(res => res.json())
            .then(res => setState(res))
        // return () => {
        //     cleanup
        // }
    }, [])

    const router = useRouter()

    function handleClick() {
        router.reload()
    }


    return (<div>
        <div>news list</div>
        <Link href="/news/123">link</Link>
        <div onClick={handleClick}></div>

        {
            state?.map(item => <div>{item.name}</div>)
        }
    </div>
    )
}

export default News