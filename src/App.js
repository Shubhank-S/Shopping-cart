import './App.css';
import axios from 'axios';
import { useEffect,useReducer } from 'react';
import Reducer from './reducers/Reducer';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {

  const[state, dispatch] = useReducer(Reducer,{
    products:[],
    cart:[],
  })

  console.log(state)

  const fetchProducts = async () =>{
      const{data}= await axios.get('https://dummyjson.com/products')

      dispatch({
        type:'ADD_PRODUCTS',
        payload: data.products,
      })
  };

  useEffect(()=>{
   fetchProducts();
  },[])
  return (
   
    <div style={{
      display: 'flex'
    }}>
     <Products  state={state} dispatch={dispatch}/>
     <Cart  state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
