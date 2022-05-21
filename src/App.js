import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInModal from './components/modals/SignInModal'
import SignUpModal from './components/modals/SignUpModal'
import SignInOffCanvas from './components/offcanvas/SignInOffCanvas'
import SignUpOffCanvas from './components/offcanvas/SignUpOffCanvas'
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
        <SignInOffCanvas />
        <SignUpOffCanvas />
      </BrowserRouter>
    </>
  )
}

export default App
