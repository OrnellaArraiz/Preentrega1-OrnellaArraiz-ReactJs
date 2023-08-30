const products = [
    /* Relojes */
    { id: "1", name: "Reloj Dorado", price: 325, category: "watches", image: "/img/dorado.png" },
    { id: "2", name: "Reloj Plateado", price: 350, category: "watches", image: "/img/plateado.png" },
    { id: "3", name: "Reloj Negro", price: 380, category: "watches", image: "/img/negro.png" },
    { id: "4", name: "Reloj Marrón", price: 370, category: "watches", image: "/img/marron.png" },
    { id: "5", name: "Reloj Rosado", price: 400, category: "watches", image: "/img/rosado.png" },
    { id: "6", name: "Reloj Verde", price: 300, category: "watches", image: "/img/verde.png" },
    /* Smartwatches */
    { id: "7", name: "Smartwatch Dorado", price: 400, category: "smartwatches", image: "/img/swdorado.png" },
    { id: "8", name: "Smartwatch Plateado", price: 450, category: "smartwatches", image: "/img/swplateado.png" },
    { id: "9", name: "Smartwatch Negro", price: 470, category: "smartwatches", image: "/img/swnegro.png" },
    { id: "10", name: "Smartwatch Marrón", price: 400, category: "smartwatches", image: "/img/swmarron.png" },
    { id: "11", name: "Smartwatch Rosado", price: 475, category: "smartwatches", image: "/img/swrosado.png" },
    { id: "12", name: "Smartwatch Verde", price: 410, category: "smartwatches", image: "/img/swverde.png" },
    /* Accesorios */
    { id: "13", name: "Porta reloj", price: 130, category: "accessories", image: "/img/portareloj.png"},
    { id: "14", name: "Mallas", price: 100, category: "accessories", image: "/img/mallas.png" },
    { id: "15", name: "Cargador", price: 85, category: "accessories", image: "/img/cargador.png" },
];

/* Por producto */
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);
            if (product) {
                resolve(product);
            } else {
                reject("Producto no encontrado");
            }
        }, 2000);
    });
};

/* Por categoría */
export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsFiltered = category
            ? products.filter((product) => product.category === category)
            : products;
            resolve(productsFiltered);
        }, 1000);
    });
};
