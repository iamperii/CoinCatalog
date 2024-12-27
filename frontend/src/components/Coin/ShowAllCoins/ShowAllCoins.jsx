import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RiAdminFill } from 'react-icons/ri';
import style from './ShowAllCoins.module.css';

const ShowAllCoins = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [listData, setListData] = useState([]);
	const [searchedData, setSearchedData] = useState(null);
	const [inputError, setInputError] = useState('');

	const fetchCoinList = async () => {
		try {
			const response = await fetch(`http://localhost:3000/coins/list/${id}`);
			const data = await response.json();


			setListData(Array.isArray(data) ? data : []);
		} catch (error) {
			console.error('Error fetching coins:', error);
			setListData([]);
		}
	};

	useEffect(() => {
		fetchCoinList();
	}, [id]);

	const handleSearch = async (e) => {
		e.preventDefault();
		const query = e.target.elements[0].value;

		if (!query) {
			setInputError('Please enter a search term');
			return;
		}

		setInputError('');
		try {
			const response = await fetch(
				`http://localhost:3000/search?query=${query}`
			);
			if (!response.ok) {
				throw new Error(`Error ${response.status}: ${response.statusText}`);
			}
			const data = await response.json();
			console.log('Searched coins:', data);
			setSearchedData(data);
		} catch (error) {
			console.error('Error searching coins:', error);
		}
	};

	const handleAdminClick = () => {
		navigate('/login');
	};

	return (
		<div>
			<div className={style.header}>
				<h1>Homepage</h1>
				<RiAdminFill
					className={style.admin}
					size={30}
					onClick={handleAdminClick}
				/>
				<form onSubmit={handleSearch} className={style.form}>
					<label htmlFor="searchInput">Input Field</label>
					<div className={style.searchInput}>
						<input
							type="text"
							className={style.input}
							id="searchInput"
							onChange={() => setInputError('')}
						/>
						<button type="submit" className={style.searchForm}>
							Search
						</button>
					</div>
					{inputError && <p className={style.inputError}>{inputError}</p>}
				</form>
			</div>
			<div className={style.category}>
				{searchedData
					? searchedData.map((coin) => (
							<div key={coin.id} className={style.coin}>
								<img
									src={coin.observe_img}
									alt={coin.coin_name}
									className={style.imgSmall}
								/>
								<div className={style.text}>
									<Link to={`/details/${coin.id}`}>{coin.coin_name}</Link>
									<p>{coin.description}</p>
								</div>
							</div>
					  ))
					: (listData || []).map((coin) => (
							<div key={coin.id} className={style.coin}>
								<img
									src={coin.observe_img}
									alt={coin.coin_name}
									className={style.imgSmall}
								/>
								<div className={style.text}>
									<Link to={`/details/${coin.id}`}>{coin.coin_name}</Link>
									<p>{coin.description}</p>
								</div>
							</div>
					  ))}
			</div>
		</div>
	);
};

export default ShowAllCoins;
