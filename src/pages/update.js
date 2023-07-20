import { Form, useLoaderData } from "react-router-dom";

export default function Update() {
  const tweet = useLoaderData()
    return (
    <Form action={`/dashboard/${tweet._id}/update`} method="post"> 
        <input type="text" name="content" placeholder="what's on your mind?" defaultValue={tweet.content}/>
        
        <button>UpdatePost</button>
    </Form>
  );
}