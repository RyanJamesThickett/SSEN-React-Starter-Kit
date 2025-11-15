import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// FIND YOUR TOKEN TO PUT HERE ON THIS SITE: https://nerda.ssen.co.uk/nerda
// (You DO need to log in! and it's the short term key)
const headers = {
	"Authorization": "Bearer <TOKEN>"
}

// https://vite.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: 'https://nerda-prod-apis-v2.azurewebsites.net/api/ApiNerdaStatic?substation=74f42299-9f8e-4cb4-922c-0e3273bff4c7',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
				headers,
			}
		}
	},
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
})
