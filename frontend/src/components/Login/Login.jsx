import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { useState } from 'react';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');
		console.log('Sending credentials:', { username, password });

		try {
			const response = await fetch('http://localhost:5000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ username, password }),
			});

			if (!response.ok) {
				throw new Error('Invalid username or password');
			}

			const data = await response.json();
			localStorage.setItem('token', data.token);
			navigate('/admin-home-page');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className={style.formContainer}>
			<h1 className={style.title}>Admin Panel</h1>
			<form onSubmit={handleLogin} className={style.form}>
				<label htmlFor="" className={style.loginLabel}>
					Login
				</label>
				<input
					type="text"
					name="login"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<label htmlFor="" className={style.loginLabel}>
					Password
				</label>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				{error && <p className={style.error}>{error}</p>}
				<button type="submit" className={style.signIn}>
					Sign in
				</button>
			</form>
		</div>
	);
};

export default Login;
