import { useLoaderData, Link } from "react-router-dom";
export default function Index(){
    const tweets = useLoaderData()
    console.log(tweets)

    return <div>
        {tweets.map((tweet) => <div>
           <Link to={`/dashboard/${tweet._id}`}> <h4>{tweet.content}</h4> </Link>
            </div>)}
    </div>

}
