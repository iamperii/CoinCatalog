import React, { useState } from 'react';
import style from './AddNewCoin.module.css';
import { useNavigate } from 'react-router-dom';

const AddNewCoin = () => {
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		coin_name: '',
		issuing_country: '',
		composition: '',
		quality: '',
		denomination: '',
		year: '',
		weight: '',
		description: '',
		long_description: '',
		observe_img: '',
		reverse_img: '',
		price: '',
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const updatedFormData = {
			...formData,
			coin_category_id: 'default_category_id',
			coin_type_id: 'default_type_id',
		};

		if (
			Object.values(updatedFormData).includes('') ||
			Object.values(updatedFormData).includes(null)
		) {
			setError('All fields are required.');
			return;
		}

		console.log(updatedFormData);

		try {
			const response = await fetch('http://localhost:3000/coins', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedFormData),
			});

			const result = await response.json();

			if (response.ok) {
				alert(`Coin added successfully! ID: ${result.coinId}`);
				navigate(-1);
			} else {
				setError(error);
			}
		} catch (err) {
			setError(err);
		}
	};

	return (
		<>
			<h1 className={style.admin}>Admin Panel</h1>
			<form onSubmit={handleSubmit} className={style.coinForm}>
				<div className={style.leftForm}>
					<label>Coin name</label>
					<input type="text" name="coin_name" onChange={handleInputChange} />
					<label>Face value</label>
					<input type="text" name="composition" onChange={handleInputChange} />
					<label>Year of Issue</label>
					<input type="number" name="year" onChange={handleInputChange} />
					<label>Price</label>
					<input type="number" name="price" onChange={handleInputChange} />
					<label>Country</label>
					<input
						type="text"
						name="issuing_country"
						onChange={handleInputChange}
					/>

					<label>Metal</label>
					<input type="text" name="denomination" onChange={handleInputChange} />
				</div>

				<div className={style.middleForm}>
					<label>Short description</label>
					<textarea name="description" onChange={handleInputChange} />

					<label>Long description</label>
					<textarea name="long_description" onChange={handleInputChange} />

					<label>Quality of the coin</label>
					<input type="text" name="quality" onChange={handleInputChange} />

					<label>Weight</label>
					<input type="text" name="weight" onChange={handleInputChange} />
				</div>

				<div className={style.rightForm}>
					<label>Link to observe image</label>
					<input type="text" name="observe_img" onChange={handleInputChange} />

					<label>Link to reverse image</label>
					<input type="text" name="reverse_img" onChange={handleInputChange} />
					{error && <p className={style.error}>{error}</p>}

					<div className={style.buttons}>
						<button type="submit" className={style.save}>
							Save
						</button>
						<button type="reset" className={style.cancel} onClick={()=>navigate(-1)}>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AddNewCoin;
