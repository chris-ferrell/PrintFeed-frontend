import { useLoaderData, Form, Link, Outlet } from "react-router-dom"


export default function Show() {
    const tweet = useLoaderData()

    return <section>
        <h3>{tweet.content}</h3>
        <Link to={ `/dashboard/${tweet._id}/update` }>
            <button>Update</button>
        </Link>
        <Outlet/>
        <Form action={ `/dashboard/${tweet._id}/delete` } method="post">
            <button>Delete</button>
        </Form>
    </section>

}