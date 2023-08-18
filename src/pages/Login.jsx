import React from "react";
import { useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = e => {
		e.preventDefault();
		setLoading(true);

		const email = e.target.email.value;
		const password = e.target.password.value;

		axios
			.put("http://localhost:5000/auth/login", { email, password })
			.then(res => {
				setLoading(false);
				localStorage.setItem(
					"token",
					JSON.stringify(`Bearer ${res.data.token}`),
					navigate("/dashboard", { replace: true }),
				);
			})
			.catch(err => {
				setLoading(false);
				console.log(err.message);
			});
	};

	useEffect(() => {}, []);

	return (
		<div className='bg-[#2C3237] min-h-screen w-full flex items-center justify-center'>
			<div>
				<h1 className='text-2xl text-center font-bold text-slate-300'>
					Login Admin Dashboard...
				</h1>
				<br />
				<form
					onSubmit={handleLogin}
					className='text-slate-300 flex flex-col gap-5 w-[300px] md:w-[400px]'
				>
					<div className='flex items-center w-full'>
						<label htmlFor='email' className='p-4 bg-[#2a2e32]'>
							<MdAlternateEmail color='#108afc' />
						</label>
						<input
							className='p-3 bg-[#353a3f] border-none outline-none w-full'
							placeholder='Email / Username'
							type='email'
							id='email'
							name='email'
						/>
					</div>
					<div className='flex items-center w-full'>
						<label htmlFor='password' className='p-4 bg-[#2a2e32]'>
							<RiLockPasswordFill color='#108afc' />
						</label>
						<input
							className='p-3 bg-[#353a3f] border-none outline-none w-full'
							placeholder='Password'
							type='password'
							id='password'
							name='password'
						/>
					</div>

					<div className='w-full'>
						<button
							type='submit'
							disabled={loading ? true : false}
							className='p-3 bg-[#108afc] w-full font-bold'
						>
							{loading ? "Loading..." : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
