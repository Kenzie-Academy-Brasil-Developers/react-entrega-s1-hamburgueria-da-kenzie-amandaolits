import './styles.css'

function Cart({ currentSale, setCurrentSale }) {
    const totalMoney = currentSale.reduce((valorAnterior, valorAtual) => {
        return valorAtual.price + valorAnterior
    }, 0)

    const removeProductCart = (productIndex) => {
        const newList = currentSale.filter((product, index) => {
            if(productIndex !== index){
                return product
            } else {
                return null
            }
        })
        setCurrentSale(newList)
    }
    return (
        <aside>
            <div className='cabeçalho-cart'>
                <h2>Carrinho de compras</h2>
            </div>
            <div className={currentSale.length === 0 ? 'carrinho-compras-vazio' : 'carrinho-compras'}>
                {
                    currentSale.length === 0 ? (
                        <>
                        <p>Sua sacola está vazia</p>
                        <span>Adicione itens</span>
                        </>
                    ) : 
                    currentSale.map((product, index) => {
                        return (
                            
                                <div className='carrinho-product'key={index * 3}>
                                    <figure>
                                        <img src={product.img} alt={product.name} />
                                    </figure>
                                    <div>
                                        <h3>{product.name}</h3>
                                        <span>{product.category}</span>
                                    </div>
                                    
                                    <button onClick={() => removeProductCart(index)}>Remover</button>
                                    
                                </div>
                        )
                    })
                }
            </div>
            {
                currentSale.length !== 0 && (
                    <div className='preço-total'>
                        <p className='total'>Total:</p>
                        <p className='preço'>{totalMoney.toFixed(2)}</p>
                        <button onClick={() => {
                            setCurrentSale([])
                        }}>Remover todos</button>
                    </div>
                )
            }
        </aside>
    )
}

export default Cart;