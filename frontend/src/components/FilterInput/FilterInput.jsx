import { useState, useEffect } from 'react';
import style from './FilterInput.module.css';

const FilterInput = () => {
	const [options, setOptions] = useState({
		denominations: [],
		countries: [],
		qualities: [],
	});

	const [formData, setFormData] = useState({
		country: '',
		denomination: '',
		quality: '',
		priceFrom: '',
		priceTo: '',
		yearFrom: '',
		yearTo: '',
	});

	const [filteredCoins, setFilteredCoins] = useState([]);

	useEffect(() => {
		const fetchOptions = async () => {
			try {
				const response = await fetch('http://localhost:3000/coins/options');
				if (response.ok) {
					const data = await response.json();
					console.log('Fetched options:', data);
					setOptions({
						denominations: data.denominations || [],
						countries: data.countries || [],
						qualities: data.qualities || [],
					});
				} else {
					console.error('Failed to fetch options.');
				}
			} catch (error) {
				console.error('Error fetching options:', error);
			}
		};

		fetchOptions();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const queryParams = new URLSearchParams(formData).toString();

		try {
			const response = await fetch(
				`http://localhost:3000/filter?${queryParams}`
			);
			if (response.ok) {
				const result = await response.json();
				console.log('Filtered data:', result);
				setFilteredCoins(result);
			} else {
				console.error('Filter request failed.');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className={style.filterInput}>
			<form onSubmit={handleSubmit} className={style.filterform}>
				<div className={style.form1}>
					<label htmlFor="country">Country</label>
					<select
						name="country"
						className={style.select}
						value={formData.country}
						onChange={handleChange}
					>
						<option value="">Select Country</option>
						{options.countries.length > 0 ? (
							options.countries.map((country) => (
								<option key={country.value} value={country.value}>
									{country.label}
								</option>
							))
						) : (
							<option value="">Loading...</option>
						)}
					</select>

					<label htmlFor="denomination">Denomination</label>
					<select
						name="denomination"
						className={style.select}
						value={formData.denomination}
						onChange={handleChange}
					>
						<option value="">Select Denomination</option>
						{options.denominations.length > 0 ? (
							options.denominations.map((denom) => (
								<option key={denom.value} value={denom.value}>
									{denom.label}
								</option>
							))
						) : (
							<option value="">Loading...</option>
						)}
					</select>

					<label htmlFor="quality">Quality</label>
					<select
						name="quality"
						className={style.select}
						value={formData.quality}
						onChange={handleChange}
					>
						<option value="">Select Quality</option>
						{options.qualities.length > 0 ? (
							options.qualities.map((quality) => (
								<option key={quality.value} value={quality.value}>
									{quality.label}
								</option>
							))
						) : (
							<option value="">Loading...</option>
						)}
					</select>
				</div>

				<div className={style.form2}>
					<label htmlFor="priceFrom" className={style.priceLabel}>
						Price
					</label>
					<div className={style.price}>
						<label htmlFor="priceFrom">From</label>
						<input
							type="number"
							name="priceFrom"
							className={style.input}
							value={formData.priceFrom}
							onChange={handleChange}
						/>
						<label htmlFor="priceTo">To</label>
						<input
							type="number"
							name="priceTo"
							className={style.input}
							value={formData.priceTo}
							onChange={handleChange}
						/>
					</div>

					<label htmlFor="yearFrom" className={style.priceLabel}>
						Year of Issue
					</label>
					<div className={style.price}>
						<label htmlFor="yearFrom">From</label>
						<input
							type="number"
							name="yearFrom"
							className={style.input}
							value={formData.yearFrom}
							onChange={handleChange}
						/>
						<label htmlFor="yearTo">To</label>
						<input
							type="number"
							name="yearTo"
							className={style.input}
							value={formData.yearTo}
							onChange={handleChange}
						/>
					</div>

					<button type="submit" className={style.searchFilter}>
						Apply Filter
					</button>
				</div>
			</form>

			<div className={style.coinsContainer}>
				{filteredCoins.length > 0
					? filteredCoins.map((coin, index) => (
							<div key={index} className={style.coinCard}>
								<img
									src={coin.observe_img}
									alt={coin.coin_name}
									className={style.coinImage}
								/>
								<h3>{coin.coin_name}</h3>
								<p>{coin.description.slice(0, 100)}...</p>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default FilterInput;
