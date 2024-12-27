import { Route, Routes } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import ShowAllCoins from '../components/Coin/ShowAllCoins/ShowAllCoins';
import CoinDetailsPage from './CoinDetailsPage';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../components/Login/Login';
import AddNewCoin from '../components/Admin/AddNewCoins/AddNewCoin';
import AdminHome from '../components/Admin/AdminHome/AdminHome';
import EditCoins from '../components/Admin/EditCoins/EditCoins';

const HomePage = () => {
	return (
		<Routes>
			<Route path="/" element={<SearchBar />} />
			<Route path="/coins/list/:id" element={<ShowAllCoins />} />
			<Route path="/details/:id" element={<CoinDetailsPage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/addnewcoin" element={<AddNewCoin />} />
			<Route path="/editcoin/:id" element={<EditCoins />} />
			<Route
				path="/admin-home-page"
				element={
					<ProtectedRoute>
						<AdminHome />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
};

export default HomePage;
