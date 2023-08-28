const products = [
    /* Relojes / Watches */
    { id: "1", name: "Reloj Dorado", price: 325, category: "watches" },
    { id: "2", name: "Reloj Plateado", price: 350, category: "watches" },
    { id: "3", name: "Reloj Negro", price: 380, category: "watches" },
    /* Smartwatches */
    { id: "4", name: "Smartwatch Dorado", price: 400, category: "smartwatches" },
    { id: "5", name: "Smartwatch Plateado", price: 450, category: "smartwatches" },
    { id: "6", name: "Smartwatch Negro", price: 470, category: "smartwatches" },
    /* Accesorios / Accessories */
    { id: "7", name: "Caja porta reloj", price: 130, category: "accessories" },
    { id: "8", name: "Mallas", price: 100, category: "accessories" },
    { id: "9", name: "Cable de carga", price: 85, category: "accessories" },
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
        }, 1000);
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
