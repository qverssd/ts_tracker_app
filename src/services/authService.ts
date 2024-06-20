const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

interface AuthResponse {
    message: string;
    [key: string]: any;
}

export const register = async(email: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if(!response.ok) {
        throw new Error('Registration failed')
    }

    return await response.json();
};

export const login = async(email: string, password: string): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if(!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
}