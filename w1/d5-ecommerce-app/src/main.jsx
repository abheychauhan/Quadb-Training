import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from './context/Wishlist.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <WishlistProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </WishlistProvider>
    </BrowserRouter>
  </StrictMode>,
)
