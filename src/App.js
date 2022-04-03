import './App.css';
import ShoppingCart from './ShoppingCart.js';
import ProductList from './ProductList.js';

//Data supposed to be retrieved from a api.
const apiCallData = 
{ "robots":[
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - cleaning robot",
    "price":2000,
    "inStock":58
  },
  {
    "id":"6ebbc150-9b80-44b3-9dce-dd4770fc2704",
    "name":"Tommy - This is a very long cleaning robot whose name",
    "price":2000,
    "inStock":58
  },
  {
    "id":"715c7312-a6ac-497d-be5a-752d1d2df3a0",
    "name":"Roberta - cat feeding robot",
    "price":1800,
    "inStock":32
  }]
}

//Convert to json array
const jsonArrayProducts = apiCallData.robots;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          save to Reload.
        </p>
      </header>
      <div className="center">
        <div className="">
          <ProductList products={jsonArrayProducts}></ProductList>
        </div>
      </div>
    </div>
  );
}

export default App;
