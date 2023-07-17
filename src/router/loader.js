import url from "./url"

export const indexLoader = async () => {
    const response = await fetch(url + '/tweet',{
    credentials: "include",
})
    const tweets = await response.json()
    return tweets
}