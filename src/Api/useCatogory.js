import { useDataApi } from "./useDataApi";


export const useCatogory = () => {

    const products = useDataApi();

    let categories = {}


    products.forEach(product => {
        const category = product.category;


        if (!categories[category]) {
            categories[category] = []
        }
        categories[category].push(products)

    })


    return categories;
};
