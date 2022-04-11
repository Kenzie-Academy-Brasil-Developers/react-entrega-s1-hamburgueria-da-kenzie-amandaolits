import Product from '../Product'


function ProductsList({ products, handleClick, filteredProducts }) {
    return (
        <section>
            {
                
                filteredProducts.length === 0 ?
                products.map(product => {
                    return <Product key={product.id} product={product} handleClick={handleClick}/>
                }) : 
                
                filteredProducts.map(product => {
                    return <Product key={product.id * 2} product={product} handleClick={handleClick}/>
                })
            }
        </section>
    )
}
export default ProductsList;