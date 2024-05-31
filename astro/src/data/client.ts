const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    const authToken = import.meta.env.PUBLIC_STRAPI_API_TOKEN;
    const baseURL = import.meta.env.PUBLIC_STRAPI_URL;

    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
        ...(options.headers || {}),
    };

    const config: RequestInit = {
        ...options,
        headers,
    };

    const response = await fetch(`${baseURL}${endpoint}`, config);

    if (!response.ok) {
        const error = await response.json();
        console.log(`${baseURL}${endpoint}:`, error);
        return null;
    }

    return response.json();
};

export default fetchWithAuth;