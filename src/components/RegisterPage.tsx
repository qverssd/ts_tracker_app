import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleRegister = async (e:React.FormEvent) => {
        e.preventDefault();
        setError(null);


        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify({email, password})
            });

            if (!response.ok) {
                throw new Error('Registration Failed');
            }

            const data = await response.json();
            console.log('Registration successful', data);
            navigate('/login')
        } catch (err) {
            console.error(err);
            setError('Registration Failed');
        }
    };


    return (
        <div className="register-page">
           <h2>Register</h2>
           <form onSubmit={handleRegister} className="register-form">
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Register</button>
            </form> 
        </div>
    );
}; 



export default RegisterPage;