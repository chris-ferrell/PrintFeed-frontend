import { Form } from "react-router-dom";

export default function Create() {
    return (
    <Form action="/dashboard/create" method="post"> 
        <input type="text" name="content" placeholder="what's on your mind?"/>
        
        <button>Post</button>
    </Form>
  );
}