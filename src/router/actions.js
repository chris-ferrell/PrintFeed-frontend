import url from "./url"
import {redirect} from "react-router-dom"
import headers from "./headers"

export const signupAction = async ({request}) => {
    const formData = await request.formData()

    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/signup" , {
        method: "post",
        headers,
        body: JSON.stringify(user)
    })


    if (response.status === 400) {
        alert("failed signup")
        return redirect("/signup")
    }

    return redirect('/login')

}

export const loginAction = async ({request}) => {
    const formData = await request.formData()
    
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + "/auth/login" , {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(user)
    })


    if (response.status === 400) {
        alert("failed login")
        return redirect("/login")
    }

    return redirect('/dashboard')
}


export const logoutAction = async () => {
    

    const response = await fetch(url + "/auth/logout" , {
        method: "post",
        
    })


    if (response.status === 400) {
        alert("failed logout")
        return redirect("/dashboard")
    }

    return redirect('/')
}

export const createAction = async ({request}) => {
    console.log("create action")
    const formData = await request.formData()
    
    const tweet = {
        content: formData.get("content"),
        // message: formData.get("message")
    }

    const response = await fetch(url + "/tweet" , {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(tweet)
    })


    if (response.status === 400) {
        alert("failed to post tweet")
        return redirect("/dashboard")
    }

    return redirect('/dashboard')
}

export const updateAction = async ({request, params}) => {
    const id = params.id 
    const formData = await request.formData()
    
    const tweet = {
        content: formData.get("content"),
        // message: formData.get("message")
    }

    const response = await fetch(url + `/tweet/${id}` , {
        method: "put",
        headers,
        credentials: "include",
        body: JSON.stringify(tweet)
    })


    if (response.status === 400) {
        alert("failed update")
        return redirect("/dashboard")
    }

    return redirect('/dashboard')
}

export const deleteAction = async ({params}) => {
    const id = params.id 

    
  
    const response = await fetch(url + `/tweet/${id}` , {
        method: "delete",
        credentials: "include",
    })


    if (response.status === 400) {
        alert("failed update")
        return redirect("/dashboard")
    }

    return redirect('/dashboard')
}