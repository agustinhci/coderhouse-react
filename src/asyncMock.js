const products = [
    {
        id: '1', 
        name: 'Nike Court Legacy Canvas', 
        price: '29999', 
        stock: 10, 
        category: 'Hombre', 
        description: 'El Nike Court Legacy Canvas, que rinde tributo a su historia en la cultura del tenis, reinventa un clásico con su diseño moderno y digno de la calle.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/451635/CW6539_601_A_PREM.jpg?v=638149273177430000'
    },
    {
        id: '2', 
        name: 'Nike Air Max SC', 
        price: '39999', 
        stock: 16, 
        category: 'Hombre', 
        description: 'Con sus líneas simples, el look de atletismo tradicional y, por supuesto, la amortiguación Air visible, el Nike Air Max SC es el toque final perfecto para cualquier atuendo.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/490251/CW4555_006_A_PREM.jpg?v=638150955997230000'
    },
    {
        id: '3', 
        name: 'Jordan Air 200E', 
        price: '69999', 
        stock: 8, 
        category: 'Hombre', 
        description: 'Diseñado para recorrer las calles con la comodidad y actitud en mente, el Jordan Air 200E combina la última tecnología con materiales duraderos, a la vez que se mantiene fiel al ADN Jordan.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/157475/BQ4422_400_A_PREM-hei-3144-wid-3144-fmt.jpg?v=638086306186430000'
    },
    {
        id: '4',
        name: 'Nike Flex Experience Run 11 Next Nature',
        price: '29999',
        stock: 5,
        category: 'Mujer',
        description: 'Es cómodo y tiene un estilo zen, como las carreras ideales. Creamos un diseño ligero, impecable y excepcional con el Nike Flex Experience Run 11 Next Nature.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/489695/DD9283_001_A_PREM.jpg?v=638150948567130000'
    },
    {
        id: '5', 
        name: 'Nike Downshifter 12', 
        price: '32999', 
        stock: 43, 
        category: 'Mujer', 
        description: 'Da los primeros pasos en tu experiencia con el running con el Nike Downshifter 12. Ofrece un ajuste firme y una pisada estable con una sensación ligera que te permite pasar fácilmente del entrenamiento al resto del día.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/407133/DD9294_500_A_PREM.jpg?v=638143123093070000'
    },
    {
        id: '6', 
        name: 'Nike Waffle Debut', 
        price: '33999', 
        stock: 5, 
        category: 'Mujer', 
        description: 'El estilo de running retro se moderniza con el Nike Waffle Debut. La gamuza y el nylon que conmemoran una era se combinan con una entresuela modernizada con forma de cuña para brindar un look fresco pero clásico.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/318573/DX2940_100_A_PREM.jpg?v=638128499676900000'
    },
    {
        id: '7', 
        name: 'Nike Jr. Mercurial Superfly 8 Academy MG', 
        price: '35499', 
        stock: 20, 
        category: 'Niños', 
        description: 'El Nike Jr. Mercurial Superfly 8 Academy MG te permite tomar el control total del juego. La textura de agarre en toda la parte superior te ayuda a driblear y hacer pases y tiros con precisión. El forro ligero se estira con el pie para brindar un ajuste personalizado.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/586155/DJ2854_054_A_PREM.jpg?v=638167467318670000'
    },
    {
        id: '8', 
        name: 'Nike Court Borough Low 2', 
        price: '27999', 
        stock: 8, 
        category: 'Niños', 
        description: 'El calzado Nike Court Borough Low 2 combina comodidad y estilo. El ajuste estructurado que ofrece soporte presenta un diseño retro de básquetbol para que te puedas ver como una estrella fuera de la cancha.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/327470/BQ5448_014_A_PREM.jpg?v=638134640552400000'
    },
    {
        id: '9', 
        name: 'Nike Jr. Phantom GT2 Academy TF', 
        price: '39999', 
        stock: 3, 
        category: 'Niños', 
        description: 'Basándose en el Phantom GT, el Nike Jr. Phantom GT2 TF tiene un diseño y patrones actualizados que están diseñados para ayudarlo a colocar sus tomas con precisión milimétrica. Las agujetas descentradas dejan libre la zona de impacto para regatear, pasar y marcar con precisión.',
        img: 'https://nikearprod.vtexassets.com/arquivos/ids/586141/DC0817_007_A_PREM.jpg?v=638167464291330000'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId ))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory ))
        }, 500)
    })
}