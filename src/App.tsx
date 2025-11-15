import './App.css'
import { useQuery } from '@tanstack/react-query'

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
			<h1>SSEN</h1>
			{query.isLoading && <div>Loading...</div>}
			{query.isError && <div>Error: {query.error.message}</div>}
			<div>{query.data ? JSON.stringify(query.data) : null}</div>
		</div>
	)
}

export default App
