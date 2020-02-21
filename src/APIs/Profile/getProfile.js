
const URL = "https://linkedinmockupserver.azurewebsites.net/profiles" 
const headers = new Headers({
    "Content-Type": "application/json",
    "Authorization": "Bearer" + "token"
});

const GETProfile = async () => {
    try {
        let response = await fetch(URL, {
            method: "GET",
            headers
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error);
    }
}

export default GETProfile;