import url from "./url"


export const indexLoader = async () => {
    const response = await fetch(url + '/tweet',{
    credentials: "include",
})
    const tweets = await response.json()
    return tweets
}

export const showLoader = async ({params}) => {
    const id = params.id

    const response = await fetch(url + `/tweet/${id}`, {
        credentials: "include"
    })

    const tweet = await response.json()

    return tweet
}