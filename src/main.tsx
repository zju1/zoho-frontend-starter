import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './i18n'
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(
  <App />
)
