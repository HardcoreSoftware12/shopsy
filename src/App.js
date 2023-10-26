import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';


function App() {
  return (
    <div className='App'>
      <Router>
      <Header/>
        <Routes>
            <Route path='/' exact Component={ProductListing}/>
            <Route path='/products/:productId' exact Component={ProductDetail}/>
            {/* <Route path='/' exact Component={ProductComponent}/> */}
            <Route>404 not found</Route>

        </Routes>
       
      </Router>
      

    </div>
   
  )
}

export default App;
