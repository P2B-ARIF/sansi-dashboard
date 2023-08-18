import { Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { Textarea } from "@chakra-ui/react";

const Profile = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='m-10'>
			<div className='rounded-lg border border-blue-500 overflow-hidden'>
				<div className='relative w-full h-[220px]'>
					<img
						src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
						alt=''
						className='w-full h-full object-cover object-center'
					/>
					<h3 className='flex items-center gap-3 bg-slate-100 rounded-md px-3 py-2 shadow-md absolute bottom-2 right-5'>
						<AiFillCamera />
						Edit cover photo
					</h3>
				</div>
				<div className='flex justify-around relative bottom-10 left-0'>
					<div className='flex gap-5'>
						<div className='relative border-4 border-slate-200 rounded-full'>
							<img
								src='https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
								alt=''
								className='w-[150px] h-[150px] rounded-full overflow-hidden relative z-10'
							/>
							<AiFillCamera className='absolute bottom-1 right-1 z-20 text-4xl bg-slate-300 rounded-full p-2' />
						</div>
						<div className='flex flex-col justify-end pb-5'>
							<h3 className='text-3xl font-bold'>Mohammad Arif</h3>
							<p className='text-slate-600'>@mohammadariff</p>
						</div>
					</div>
					<div className='flex items-end pb-5'>
						<Button onClick={() => setOpen(!open)} colorScheme='blue' px={"6"}>
							Edit Profile
						</Button>
					</div>
				</div>
			</div>
			{open ? (
				<form className='rounded-lg overflow-hidden p-5 mt-5 '>
					<div>
						<label htmlFor='textArea'></label>
						<Textarea name='bio' id='textArea' cols='30' rows='5'>
							Your Bio
						</Textarea>
					</div>
					<div className='gap-10 grid grid-cols-2 my-4'>
						<div>
							<label htmlFor='f_name'>First Name</label>
							<Input
								variant='filled'
								type='text'
								id='f_name'
								placeholder='Your First Name'
							/>
						</div>
						<div>
							<label htmlFor='l_name'>Last Name</label>
							<Input
								variant='filled'
								type='text'
								id='l_name'
								placeholder='Your Last Name'
							/>
						</div>
					</div>
					<div className='gap-5 grid grid-cols-2 my-4'>
						<div>
							<label htmlFor='email'>Email</label>
							<Input
								variant='filled'
								id='email'
								placeholder='Your Email Here'
							/>
						</div>
						<div>
							<label htmlFor='phone'>Phone</label>
							<Input
								variant='filled'
								id='phone'
								placeholder='Your Phone Here'
							/>
						</div>
					</div>
					<div className='flex justify-end'>
						<Button type='submit' colorScheme='green' px={"6"}>
							Saves Profile
						</Button>
					</div>
				</form>
			) : (
				<div className='p-5 mt-5'>
					<h3 className='font-bold tracking-wider text-slate-700'>Bio</h3>
					<h5>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem optio
						magnam quas minus incidunt! Nemo eum blanditiis quidem
						necessitatibus. Commodi molestiae nulla quas eveniet vitae earum
						consequuntur sed sunt tempora!
					</h5>
					<br />
					<h3 className='font-bold tracking-wider text-slate-700'>
						Your Full Name
					</h3>
					<h5>Mohammad Arif</h5>
					<br />
					<h3 className='font-bold tracking-wider text-slate-700'>Email</h3>
					<h5>email@gmail.com</h5>

					<br />
					<h3 className='font-bold tracking-wider text-slate-700'>Phone</h3>
					<h5>+880185454545</h5>
				</div>
			)}
		</div>
	);
};

export default Profile;
