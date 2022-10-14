import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import ItemCount from './components/ItemCount'
import Counter from './components/ItemCount/ItemCount';

function App() {
   const [page, setPage] = useState({ path: 'list', param: ''})
   const [show, setShow] = useState(true)

   const handleOnAdd = () => {console.log('se hizo click en agregar al carrito')
  }
   


  return (
    <div className="App">
       
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<ItemListContainer />}/>  
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/contact' element={<h1>CONTACT</h1>} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />}/> 
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
           <Counter onAdd={handleOnAdd}/>
            
        </BrowserRouter>
    </div>
  );
}

export default App;