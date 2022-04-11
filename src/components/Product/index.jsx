import './styles.css'

function Product({ product, handleClick  }) {
    return (
        <div className='product-card'>
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>{Number.isInteger(product.price) ? `R$ ${product.price}.00` : `R$ ${product.price}`}</p>
                <button onClick={() => handleClick(product.id)}>Adicionar</button>
            </div>
        </div>
    )
}

export default Product;