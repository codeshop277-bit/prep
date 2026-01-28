let isRefreshing = false;
let refreshPromise: any = null;

export async function refreshToken() {
    if (isRefreshing) return refreshPromise;
    isRefreshing = true;
    refreshPromise = await fetch("/refresh", {
        method: 'POST',
        credentials: 'include'
    }).then(res => {
        if (!res.ok) throw new Error();
        //Update store with accesstoken
        return res.json();
    }).catch(() => false)
        .finally(() => {
            isRefreshing = false;
        });

    return refreshPromise
}
export const getAccessToken = () => {
    //get access token from store   
    return ""
}

export async function apiFetch(url: string, options: RequestInit = {}, retry: boolean = true) {
    const token = getAccessToken();
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers
        },
        credentials: 'include'
    })
    if (response.status === 401 && retry) {
        const refresh = refreshToken();
        return apiFetch(url, options, false);
    }
    return response;
}