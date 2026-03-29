import {build, defineConfig} from 'vite'
import {resolve} from 'path';
import { addToCart } from './src/addToCart';


export default defineConfig({
    build : {
        rollupOptions:{
            input:{
                main : resolve(__dirname , "index.html") , 
                about : resolve(__dirname , "src/about.html") , 
                contact : resolve(__dirname , "src/contact.html") , 
                products : resolve(__dirname , "src/products.html") , 
                addToCart : resolve(__dirname , "src/addToCart.html") , 
            },
        },
    },
});