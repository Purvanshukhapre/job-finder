import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './component/home/home';
import JobsCard from './component/jobscard/jobscard';
import WishList from './component/wishlist/wishlist';
import PageNotFound from './component/pagenotfound';

const App = ()=>{

  return(
    <>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/jobscard' element={<JobsCard/>}></Route>
          <Route path='/wishlist' element={<WishList/>}></Route>
          <Route path='/*' element={<PageNotFound/>}></Route>
        </Routes>
    </>
  )
}
export default App;