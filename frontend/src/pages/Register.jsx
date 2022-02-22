import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
		showPassword: false,
	});

	const { name, email, password, password2 } = formData;

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Toggle password visibility
	const onClick = () => {
		setFormData({ ...formData, showPassword: !formData.showPassword });

		const passInput = document.getElementById('password');

		const type =
			passInput.getAttribute('type') === 'password' ? 'text' : 'password';

		passInput.setAttribute('type', type);
	};

	// Form submission
	const onSubmit = e => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords do not match');
		}
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account</p>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							type='text'
							id='name'
							name='name'
							className='form-control'
							value={name}
							onChange={onChange}
							placeholder='Enter your name'
						/>
					</div>
					<div className='form-group'>
						<input
							type='email'
							id='email'
							name='email'
							className='form-control'
							value={email}
							onChange={onChange}
							placeholder='Enter your email'
						/>
					</div>
					<div className='form-group'>
						<input
							type='password'
							id='password'
							name='password'
							className='form-control'
							value={password}
							onChange={onChange}
							placeholder='Enter your password'
							required
						/>
						<i style={{ cursor: 'pointer' }} onClick={() => onClick()}>
							{formData.showPassword ? <FaEye /> : <FaEyeSlash />}
						</i>
					</div>
					<div className='form-group'>
						<input
							type='password'
							id='password2'
							name='password2'
							className='form-control'
							value={password2}
							onChange={onChange}
							placeholder='Confirm your password'
							required
						/>
					</div>
					<div className='form-group'>
						<button className='btn btn-block'>Submit</button>
					</div>
				</form>
			</section>
		</>
	);
}
export default Register;
