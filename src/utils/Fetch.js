
export const BASE_URL = "https://api.github.com";

export const Fetch = async (url) => {
    let result = {
        success: false,
        data: null,
        errorMessage: null,
    }
    try {
        const resp = await fetch(url)
        if (resp.ok) {
            result.success = true,
            result.data = await resp.json()
        } else {
            result.success = false
            result.errorMessage = "Error response from server !"
        }

    } catch (err) {
        result.success = false
        result.errorMessage = "Something went wrong !"
        console.log(err);
    }
    return result
}

