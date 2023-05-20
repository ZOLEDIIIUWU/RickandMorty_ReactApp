import './App.css'
import axios from "axios"
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/nav.jsx'
import About from './components/about/about.jsx'
import Detail from './components/detail/detail.jsx'
import Form from './components/form/form.jsx'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Favorites from './components/favorites/favorites'

function App () {
  const navigate = useNavigate()
  const location = useLocation()

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  
  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const QUERY=  `?email=${email}&password=${password}`
      const { data } = await axios(URL + QUERY)
        const { access } = data;
        setAccess(data);
        access && navigate('/home');
    
    } 
    catch (error) {
        return { error: error.message};
    }
  }
  
  useEffect(() => {
    !access && navigate('/')
  }, [access])

  async function onSearch(id) {
    try {
        const url = 'http://localhost:3001/rickandmorty/character/' + id
        const { data } = await axios(url)
        const char = characters?.find(e => e.id === Number(data.id))
  
        if (char) {
          alert("Already in the list") 
        } 
        else if(data.id !== undefined) {
          setCharacters(characters => [...characters, data]);
        }
        else {
          alert('Character not found');
        }
    } 
    catch (error) {
      return { error: error.message};
    } 
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== id)
    )
  }

  return (
    <div className='App'>
        {location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>}
        
        <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
        
    </div>
  )
}

export default App
