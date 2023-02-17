import React, { useEffect, useReducer} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
//import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function HomeScreen() {
  const [{loading, error, products}, dispatch] = useReducer(reducer, {loading: true, error: '', products:[]});
  //const [products, setProducts] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      dispatch({type: 'FETCH_REQUEST'});
      try{
        const result = await axios.get('api/products'); //specify location on package.json by proxy
        dispatch({type: 'FETCH_SUCCESS', payload: result.data})
      }catch(err){
        dispatch({tye: 'FETCH_FAIL', payload: err.message})
      }      
      //setProducts(result.data); //returning an array of product with name data
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {
        loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
        products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}
