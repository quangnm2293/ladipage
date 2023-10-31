import { useState } from 'react';
import { userSchema } from '../helpers';
import '../App.css';

const FormOrder = () => {
	const [user, setUser] = useState({ errors: [] });

	const handleChangeInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const handleBlurInput = async e => {
		try {
			await userSchema.validate(user, { strict: true });
			setUser({ ...user, errors: user.errors.filter(val => val !== e.target.name) });
		} catch (error) {
			if (user.errors.filter(val => val === e.target.name).length === 0) {
				setUser({ ...user, errors: [e.target.name, ...user.errors] });
			}
		}
	};
	const handleSubmit = e => {
		e.preventDefault();
		console.log(user);
	};
	return (
		<>
			<div className="title">Order on Cash on Delivery</div>
			<form action="" className="form-container">
				<div className="form-group">
					<div className="label">
						First Name <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('firstName') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						Last Name <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('lastName') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						Phone <span>*</span>
					</div>
					<div
						className={
							user.errors.includes('phone')
								? 'error input-container-tel'
								: 'input-container-tel'
						}
					>
						<span className="prefix">+91</span>
						<input
							type="tel"
							placeholder="Phone"
							name="phone"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						Flat, House no., Building, Company, Apartment <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="Flat, House no., Building, Company, Apartment "
							name="flat"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('flat') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						Area, Street, Sector, Village <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="Area, Street, Sector, Village"
							name="area"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('area') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						Landmark <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="Ghar ke aaju baju koi famous jagah"
							name="landmark"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('landmark') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						City <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="City"
							name="city"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('city') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						Pin Code <span>*</span>
					</div>
					<div className="input-container">
						<input
							type="text"
							placeholder="Pin Code"
							name="pinCode"
							onChange={handleChangeInput}
							onBlur={handleBlurInput}
							className={user.errors.includes('pinCode') ? 'error' : ''}
							required
						/>
					</div>
				</div>

				<div className="form-group">
					<div className="label">
						State <span>*</span>
					</div>
					<div className="input-container">
						<select
							placeholder="Select your State"
							required="required"
							name="select90"
							id="es-select90"
							className="es-select"
							data-gtm-form-interact-field-id="3"
							defaultValue={'Andhra Pradesh'}
						>
							<option disabled="disabled">Select your State</option>
							<option>Andhra Pradesh</option>
							<option>Andaman and Nicobar Islands</option>
							<option>Arunachal Pradesh</option>
							<option>Assam</option>
							<option>Bihar</option>
							<option>Chandigarh</option>
							<option>Chhattisgarh</option>
							<option>Daman &amp; Diu</option>
							<option>Delhi</option>
							<option>Goa</option>
							<option>Gujarat</option>
							<option>Haryana</option>
							<option>Himachal Pradesh</option>
							<option>Jammu and Kashmir</option>
							<option>Jharkhand</option>
							<option>Karnataka</option>
							<option>Kerala</option>
							<option>Ladakh</option>
							<option>Lakshadweep</option>
							<option>Madhya Pradesh</option>
							<option>Maharashtra</option>
							<option>Manipur</option>
							<option>Meghalaya</option>
							<option>Mizoram</option>
							<option>Nagaland</option>
							<option>Odisha</option>
							<option>Puducherry</option>
							<option>Punjab</option>
							<option>Rajasthan</option>
							<option>Sikkim</option>
							<option>Tamil Nadu</option>
							<option>Telangana</option>
							<option>Tripura</option>
							<option>Uttar Pradesh</option>
							<option>Uttarakhand</option>
							<option>West Bengal</option>
						</select>
					</div>
				</div>

				<div className="form-group">
					<button onClick={handleSubmit} type="submit">
						BUY IT NOW
					</button>
				</div>
			</form>
		</>
	);
};

export default FormOrder;
