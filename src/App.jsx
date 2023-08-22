import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import ArtistPage from './pages/ArtistPage/ArtistPage';
import NFTPage from './pages/NFTPage/NFTPage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import RankingsPage from './pages/RankingsPage/RankingsPage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/create-account" element={<CreateAccountPage />} />
				<Route path="/artist/:artistId" element={<ArtistPage />} />
				<Route path="/nft/:nftId" element={<NFTPage />} />
				<Route path="/marketplace" element={<MarketplacePage />} />
				<Route path="/rankings" element={<RankingsPage />} />
			</Routes>
		</>
	);
}

export default App;
