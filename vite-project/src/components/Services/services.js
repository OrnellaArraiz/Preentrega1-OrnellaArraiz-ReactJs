const products = [
    /* Relojes / Watches */
    { id: "1", name: "Reloj Dorado", price: 325, category: "watches", imagePath: "/public/img/dorado.png" },
    { id: "2", name: "Reloj Plateado", price: 350, category: "watches" },
    { id: "3", name: "Reloj Negro", price: 380, category: "watches" },
    { id: "4", name: "Reloj Marrón", price: 370, category: "watches" },
    { id: "5", name: "Reloj Rosado", price: 400, category: "watches" },
    { id: "6", name: "Reloj Verde", price: 300, category: "watches" },
    /* Smartwatches */
    { id: "7", name: "Smartwatch Dorado", price: 400, category: "smartwatches" },
    { id: "8", name: "Smartwatch Plateado", price: 450, category: "smartwatches" },
    { id: "9", name: "Smartwatch Negro", price: 470, category: "smartwatches" },
    { id: "10", name: "Smartwatch Marrón", price: 400, category: "smartwatches" },
    { id: "11", name: "Smartwatch Rosado", price: 475, category: "smartwatches" },
    { id: "12", name: "Smartwatch Verde", price: 410, category: "smartwatches" },
    /* Accesorios / Accessories */
    { id: "13", name: "Porta reloj", price: 130, category: "accessories" },
    { id: "14", name: "Mallas", price: 100, category: "accessories" },
    { id: "15", name: "Cable de carga", price: 85, category: "accessories" },
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
