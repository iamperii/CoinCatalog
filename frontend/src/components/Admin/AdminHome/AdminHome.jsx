import { useEffect, useState } from 'react';
import style from './AdminHome.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../../../redux/slices/fetchCoinsSlice';
import { searchCoins } from '../../../redux/slices/searchSlice';

const AdminHome = () => {
	const { coins } = useSelector((state) => state.coins);
	const [inputError, setInputError] = useState('');
	const [currentPage, setCurrentPage] = useState(0);
	const pageCount = 2;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCoins());
	}, [dispatch]);

	const paginatedCoins = coins.slice(
		currentPage * pageCount,
		currentPage * pageCount + pageCount
	);

	const nextPage = () => {
		if ((currentPage + 1) * pageCount < coins.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/coins/${id}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				dispatch(fetchCoins(coins.filter((coin) => coin.id !== id)));
				console.log('Coin deleted successfully.');
			} else {
				const data = await response.json();
				console.error('Failed to delete coin:', data.error);
			}
		} catch (error) {
			console.error('Error deleting coin:', error);
		}
	};

	return (
		<>
			<div className={style.header}>
				<h1>Admin Panel</h1>
				<form action="search" className={style.form}>
					<label htmlFor="">Input Field</label>
					<div className={style.searchInput}>
						<input type="text" className={style.input} />
						<button type="submit" className={style.searchForm}>
							Search
						</button>
					</div>
				</form>
			</div>

			<div className={style.coins}>
				<FaChevronLeft
					onClick={prevPage}
					disabled={currentPage === 0}
					className={style.paginationIcon}
				/>
				<div className={style.pagination}>
					{paginatedCoins.length > 0 ? (
						paginatedCoins.map((coin, index) => (
							<div key={index} className={style.coinCard}>
								<img src={coin.observe_img} alt="" className={style.immage} />
								<div className={style.aboutCoin}>
									<h2>{coin.coin_name}</h2>
									<p>{coin.description}</p>
								</div>
								<div className={style.buttons}>
									<Link to={`/editcoin/${coin.id}`}>
										<button>EDIT</button>
									</Link>
									<button onClick={() => handleDelete(coin.id)}>DELETE</button>
								</div>
							</div>
						))
					) : (
						<p>No coins available</p>
					)}
				</div>

				<FaChevronRight
					onClick={nextPage}
					disabled={(currentPage + 1) * pageCount >= coins.length}
					className={style.paginationIcon}
				/>
			</div>
			<div className={style.upload}>
				<div className={style.plus}>+</div>
				<Link to="/addnewcoin">Add new Icon</Link>
			</div>
		</>
	);
};

export default AdminHome;
