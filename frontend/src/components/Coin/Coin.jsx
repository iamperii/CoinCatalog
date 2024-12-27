import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import style from './Coin.module.css';
import JustImg from '../../assets/svg/bullion.svg';
import { fetchCoins } from '../../redux/slices/fetchCoinsSlice';

const Coin = () => {
	const dispatch = useDispatch();
	const { coins, loading, error } = useSelector((state) => state.coins);
	useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	const categoryCount = Array.isArray(coins)
		? coins.reduce((acc, coin) => {
				const category = coin.category_name;
				acc[category] = (acc[category] || 0) + 1;
				return acc;
		  }, {})
		: {};

	const sortedCategories = Object.entries(categoryCount).sort(([a], [b]) =>
		a.localeCompare(b)
	);

	return (
		<div className={style.coin}>
			{error && <p className={style.error}>Error: {error}</p>}
			<div className={style.coinContainer}>
				{sortedCategories.map(([categoryName]) => (
					<div key={categoryName} className={style.coinItem}>
						<h1 className={style.coinCategory}>{categoryName}</h1>
						<Link
							to={`/coins/list/${categoryName.toLocaleLowerCase()}`}
							className={style.showAll}
						>
							Show All <MdOutlineKeyboardArrowRight />
						</Link>
						<img src={JustImg} alt="" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Coin;
