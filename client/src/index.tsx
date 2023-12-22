import { ConfigProvider } from 'antd'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { store } from './app/store'
import './index.css'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Paths } from './paths'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <h1>employees</h1>,
	},
	{
		path: Paths.login,
		element: <Login></Login>,
	},
	{
		path: Paths.register,
		element: <Register></Register>,
	},
])

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ConfigProvider
				theme={{
					algorithm: theme.darkTheme,
				}}
			>
				<RouterProvider router={router} />
			</ConfigProvider>
		</Provider>
	</React.StrictMode>
)

reportWebVitals()
