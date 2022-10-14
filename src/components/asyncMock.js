const products =  [
    { 
        id: '1', 
        name: 'Alimento Proplan', 
        price: 10000, 
        category: 'alimento balanceado', 
        img:'https://www.purina-latam.com/sites/g/files/auxxlc391/files/purina-pro-plan-flagship-perros-puppy-razas-medianas.png', 
        // img: '/images/nombredeimagen.jpg',
        stock: 25, 
        description:'Alimento para perros de 22kg'
    },
    { 
        id: '2', 
        name: 'Alimento VitalCan', 
        price: 8350, 
        category: 'alimento balanceado', 
        img:'https://www.vitalcan.com/wp-content/uploads/2021/05/Envases-premium-perro-adulto-peque-@2x.png', 
        stock: 16, 
        description:'Alimento Balanceado 15kg'
    },
    { 
        id: '3', 
        name: 'Alimento Royal Canin', 
        price: 12000, 
        category: 'alimento medicado', 
        img:'https://http2.mlstatic.com/D_NQ_NP_683982-MLA46350435470_062021-O.jpg', 
        stock: 10, 
        description:'Alimento Balanceado medicado 15kg'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}