import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import style from './CoinDetails.module.css';

const CoinDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [coinDetails, setCoinDetails] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchCoinDetails = async () => {
			try {
				const response = await fetch(`http://localhost:3000/details/${id}`);
				if (!response.ok) {
					throw new Error('Failed to fetch coin details.');
				}
				const data = await response.json();
				setCoinDetails(data);
			} catch (err) {
				setError(err.message);
			}
		};

		fetchCoinDetails();
	}, [id]);

	if (error) {
		return <div className={style.error}>{error}</div>;
	}

	if (!coinDetails) {
		return <div className={style.loading}>Loading...</div>;
	}

	return (
		<div className={style.detailsContainer}>
			<div className={style.details}>
				<div className={style.leftSection}>
					<img src={coinDetails.observe_img} alt="Coin Image" />
					<img src={coinDetails.reverse_img} alt="Coin Image" />
				</div>

				<div className={style.rightSection}>
					<h1>{coinDetails.coin_name}</h1>
					<p className={style.longDesc}>{coinDetails.description}</p>
					<p className={style.longDesc}>{coinDetails.long_description}</p>

					<table border="1">
						<tbody>
							<tr>
								<td>Issuing Country</td>
								<td>{coinDetails.issuing_country}</td>
							</tr>
							<tr>
								<td>Composition</td>
								<td>{coinDetails.composition}</td>
							</tr>
							<tr>
								<td>Quality</td>
								<td>{coinDetails.quality}</td>
							</tr>
							<tr>
								<td>Denomination</td>
								<td>{coinDetails.denomination}</td>
							</tr>
							<tr>
								<td>Year</td>
								<td>{coinDetails.year}</td>
							</tr>
							<tr>
								<td>Weight</td>
								<td>{coinDetails.weight}</td>
							</tr>
							<tr>
								<td>Price</td>
								<td>{coinDetails.price}</td>
							</tr>
						</tbody>
					</table>

					<Link onClick={() => navigate(-1)}>Back to List</Link>
				</div>
			</div>
		</div>
	);
};

export default CoinDetails;
