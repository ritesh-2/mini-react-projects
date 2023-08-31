import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import { LocaStorageProvider } from './context/LocalStorage'

function App() {
  return (
    <>
      <BrowserRouter>
        <LocaStorageProvider>
          <Router />
        </LocaStorageProvider>
      </BrowserRouter>
    </>
  )
}

export default App
