import React from "react";
import { useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../toolkit/UserSlice";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const [message, setMessage] = useState("");
	const { user } = useSelector(state => state.user);
	const dispatch = useDispatch();
	const location = useLocation();

	let from = location.state?.from?.pathname || "/dashboard";

	const handleLogin = e => {
		e.preventDefault();
		setLoading(true);

		const email = e.target.email.value;
		const password = e.target.password.value;

		axios
			.put(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
				email,
				password,
			})
			.then(res => {
				setLoading(false);
				if (res.data.token) {
					localStorage.setItem("token_", JSON.stringify(res.data.token));

					setTimeout(() => {
						navigate(from, { replace: true });
					}, 2000);
				}
				if (res.data.user) {
					console.log(res.data.user, "user login");
					dispatch(addUser(res.data.user));
				}
			})
			.catch(err => {
				setLoading(false);
				if (err.response.data.message) {
					setMessage(err.response.data.message);
				}
				console.log(err.message);
			});
	};

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user, navigate]);

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
					{message && <p className='text-teal-500 text-sm'> {message}</p>}

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
