import { Form, From } from "react-router-dom";

export default function Login(){
    return (
    <Form action="/login" method="post"> 
        <input type="text" name="username" placeholder="username"/>
        <input type="password" name="password" placeholder="password"/>
        <button>Loginr</button>
    </Form>
    );
  }