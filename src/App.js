import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInModal from './components/modals/SignInModal'
import SignUpModal from './components/modals/SignUpModal'
import Home from './pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <SignInModal />
        <SignUpModal />
      </BrowserRouter>
    </>
  )
}

export default App
