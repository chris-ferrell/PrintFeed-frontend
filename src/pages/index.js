import { useLoaderData } from "react-router-dom";
export default function Index(){
    const tweets = useLoaderData()
    console.log(tweets)

    return <div>
        {tweets.map((tweet) => <div>
            <h4>{tweet.content}</h4> 
            </div>)}
    </div>

}
