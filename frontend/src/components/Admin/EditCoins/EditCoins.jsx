import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './EditCoins.module.css';

const EditCoins = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [coinData, setCoinData] = useState({
		coin_name: '',
		composition: '',
		denomination: '',
		description: '',
		issuing_country: '',
		long_description: '',
		observe_img: '',
		price: '',
		quality: '',
		reverse_img: '',
		weight: '',
		year: '',
	});

	useEffect(() => {
		const fetchCoin = async () => {
			try {
				const response = await fetch(`http://localhost:3000/coins/${id}`);
				const data = await response.json();

				if (response.ok) {
					setCoinData(data);
				} else {
					console.error('Failed to fetch coin data:', data.error);
				}
			} catch (error) {
				console.error('Error fetching coin data:', error);
			}
		};
		fetchCoin();
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCoinData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`http://localhost:3000/coins/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(coinData),
			});
			const data = await response.json();

			if (response.ok) {
				navigate(-1);
			} else {
				console.error('Failed to update coin:', data.error);
			}
		} catch (error) {
			console.error('Error updating coin:', error);
		}
	};

	return (
		<>
			<h1 className={style.admin}>Admin Panel</h1>
			<form className={style.coinForm} onSubmit={handleSubmit}>
				<div className={style.leftForm}>
					<label htmlFor="coin_name">Coin name</label>
					<input
						type="text"
						name="coin_name"
						value={coinData.coin_name}
						onChange={handleChange}
					/>

					<label htmlFor="denomination">Face value</label>
					<input
						type="text"
						name="denomination"
						value={coinData.denomination}
						onChange={handleChange}
					/>

					<label htmlFor="year">Year of Issue</label>
					<input
						type="text"
						name="year"
						value={coinData.year}
						onChange={handleChange}
					/>

					<label htmlFor="price">Price</label>
					<input
						type="text"
						name="price"
						value={coinData.price}
						onChange={handleChange}
					/>

					<label htmlFor="issuing_country">Country</label>
					<input
						type="text"
						name="issuing_country"
						value={coinData.issuing_country}
						onChange={handleChange}
					/>

					<label htmlFor="composition">Metal</label>
					<input
						type="text"
						name="composition"
						value={coinData.composition}
						onChange={handleChange}
					/>
				</div>

				<div className={style.middleForm}>
					<label htmlFor="description">Short description</label>
					<textarea
						name="description"
						value={coinData.description}
						onChange={handleChange}
					/>

					<label htmlFor="long_description">Long description</label>
					<textarea
						name="long_description"
						value={coinData.long_description}
						onChange={handleChange}
					/>

					<label htmlFor="quality">Quality of the coin</label>
					<input
						type="text"
						name="quality"
						value={coinData.quality}
						onChange={handleChange}
					/>

					<label htmlFor="weight">Weight</label>
					<input
						type="text"
						name="weight"
						value={coinData.weight}
						onChange={handleChange}
					/>
				</div>

				<div className={style.rightForm}>
					<label htmlFor="observe_img">Link to observe image</label>
					<input
						type="text"
						name="observe_img"
						value={coinData.observe_img}
						onChange={handleChange}
					/>

					<label htmlFor="reverse_img">Link to reverse image</label>
					<input
						type="text"
						name="reverse_img"
						value={coinData.reverse_img}
						onChange={handleChange}
					/>

					<div className={style.buttons}>
						<button type="submit" className={style.save}>
							Save
						</button>
						<button type="reset" className={style.cancel}>
							Cancel
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default EditCoins;
