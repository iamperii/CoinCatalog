import { useState } from 'react';
import style from './SearchBar.module.css';
import { FaCaretDown } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';
import Coin from '../Coin/Coin';
import FilterInput from '../FilterInput/FilterInput';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RiAdminFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { searchCoins } from '../../redux/slices/searchSlice';

const SearchBar = () => {
	const navigate = useNavigate();
	const id = useParams();
	const [down, setDown] = useState(true);
	const [inputError, setInputError] = useState('');
	const { coins } = useSelector((state) => state.search);
	const dispatch = useDispatch();

	const changeDirection = (e) => {
		e.preventDefault();
		setDown(!down);
	};

	const search = (e) => {
		e.preventDefault();
		const query = e.target.elements[0].value;

		if (!query) {
			setInputError('Please enter a search term');
			return;
		}
		dispatch(searchCoins(query));
	};

	return (
		<>
			<div className={style.header}>
				<h1>Homepage</h1>
				<RiAdminFill
					className={style.admin}
					size={30}
					onClick={() => navigate('/login')}
				/>
				<form action="search" onSubmit={search} className={style.form}>
					<label htmlFor="">Input Field</label>
					<div className={style.searchInput}>
						<input type="text" className={style.input} />
						<button type="submit" className={style.searchForm}>
							Search
						</button>
					</div>
					<div>
						<p className={style.inputError}>{inputError}</p>
					</div>
					{Object.keys(coins).length === 0 && (
						<Link className={style.advancedFilter} onClick={changeDirection}>
							Advanced filter
							{down ? <FaCaretDown /> : <FaAngleUp />}
						</Link>
					)}
				</form>
			</div>

			<div className={style.resultData}>
				{coins.map((coin) => (
					<div className={style.searchedData} key={coin.id}>
						<img src={coin.observe_img} alt="" />
						<div className={style.aboutSection}>
							<h2>{coin.coin_name}</h2>
							<p>{coin.description}</p>
						</div>
					</div>
				))}
			</div>
			{down &&
				Object.keys(id).length === 0 &&
				Object.keys(coins).length === 0 && <Coin />}
			{!down && <FilterInput />}
		</>
	);
};

export default SearchBar;
