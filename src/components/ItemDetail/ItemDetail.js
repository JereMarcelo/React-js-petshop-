const ItemDetail = ({ id, nombre, price, category, img, stock, description }) => {
    return (
        <div>
            <img src={img} alt={nombre} style={{ width: 100 }}/>
            <h2>{nombre}</h2>
            <p>price: ${price}</p>
            <p>description: {description}</p>
        </div>
    )
}

export default ItemDetail