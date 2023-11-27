import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = ()=>{
    const products = useSelector((state)=>state.allProducts.product)
    console.log(products);
    const dispatch = useDispatch()

    const fetchProducts = async()=>{

        const response = await axios.get('https://fakestoreapi.com/products')
       .catch((err)=>{
            console.log("Error"+err);
        })
        dispatch(setProducts(response.data))
        // await console.log(products);
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    
    
    return(
        <div className="ui stackable mobile equal width grid container ranjit">
            
           
            <ProductComponent/>
        </div>
        
    )

}

export default ProductListing