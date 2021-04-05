import { useRouter } from 'next/router';

const SingleNews = () => {
    const route = useRouter()

    console.log('d', route.query.singleNews)

    return (
        <div>
            single news
        </div>
    );
};

export default SingleNews;