import './App.css'
import { useQuery } from '@tanstack/react-query'
import logo from './assets/hp-logo-white.png'


function App() {
	const query = useQuery({
		queryKey: ["test"],
		queryFn: async () => {
			const response = await fetch("api/ApiNerdaStatic", { method: "GET" })
			const json = await response.json()
			return json
		}
	})

	return (
		<div>
			<img
				src={logo}
				alt="Hack Pompey"
				style={{
					width: 200,
					height: "auto",
					display: "block",
					margin: "0 auto 24px auto"
				}}
			/>
			<h1>SSEN</h1>
			{query.isLoading && <div>Loading...</div>}
			{query.isError && <div>Error: {query.error.message}</div>}
			<div>{query.data ? JSON.stringify(query.data) : null}</div>
		</div>
	)
}

export default App
