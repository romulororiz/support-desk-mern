import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSignInAlt, FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		showPassword: false,
	});

	const { email, password } = formData;

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
	};

	return (
		<>
			<section className='heading'>
				<h1>
					<FaSignInAlt /> Login
				</h1>
			</section>
			<section className='form'>
				<form onSubmit={onSubmit}>
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
						<button className='btn btn-block'>Submit</button>
					</div>
				</form>
			</section>
		</>
	);
}
export default Login;
