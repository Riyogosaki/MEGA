import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';
import {Route,Routes} from 'react-router-dom';
import NavBar from './pages/NavBar';
const App = () => {
  return (
<>
<Routes>
<Route path="/" element={<HomePage></HomePage>} ></Route>
<Route path="/create" element={<CreatePage></CreatePage>}></Route>
<Route path='/both' element={<NavBar></NavBar>}></Route>
</Routes>
              
</>    

  )
}

export default App
