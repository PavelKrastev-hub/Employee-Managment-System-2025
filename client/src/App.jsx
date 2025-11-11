import Footer from "./components/Footer.jsx"
import Header from "./components/Headers.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Search.jsx"
import UserList from "./components/UserList.jsx"

function App() {
	return (
		<div>
			<Header />

			<main className="main">
				<section className="card users-container">
					<Search />

					<UserList />

					<Pagination />
				</section>

				{/* User details component */}
				{/* Create/Edit Form component */}
				{/* Delete user component */}

			</main>

			<Footer />
		</div>
	)
}

export default App
