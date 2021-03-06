import data from './data'
import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import productScreen from './screens/productScreen'

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  console.log('this is the data', data)
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>amazona</Link>
          </div>
          <div className='header-links'>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign In</a>
          </div>
        </header>
        <aside className='sidebar'>
          <h3>Shopping Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href='index.html'>Pants</a>
            </li>

            <li>
              <a href='index.html'>Shirts</a>
            </li>
          </ul>
        </aside>
        <main className='main'>
          <div className='content'>
            <Route path='/product/:id' component={productScreen} />

            <Route path='/' exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className='footer'>All right reserved.</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
