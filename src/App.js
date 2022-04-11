import './App.css';
import { useState, useEffect } from 'react'
import Cart from './components/Cart';
import ProductsList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  const handleClick = (productId) => {
    products.find(product => {
      if(product.id === productId && !currentSale.some(item => item.id === productId)) {
        return setCurrentSale([...currentSale, product])
      } else {
        return null
      }
    })
  }

  const showProduct = (event, search) => {
    event.preventDefault()
    const newList = products.filter(product => {
      if(product.name.toLowerCase() === search.toLowerCase() ||
         product.category.toLowerCase() === search.toLowerCase()){
        return product
      } else {
        return null
      }
    })
    setFilteredProducts(newList)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='burguer'>Burguer <span className='kenzie'>Kenzie</span></h1>
        <form className='search-products'>
          <input placeholder='Pesquise aqui' value={search} onChange={(event) => setSearch(event.target.value)}/>
          <button onClick={(event) => showProduct(event, search)}>Pesquisar</button>
        </form>
      </header>
      <main>
        <ProductsList products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
        <Cart currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </main>
    </div>
  );
}

export default App;