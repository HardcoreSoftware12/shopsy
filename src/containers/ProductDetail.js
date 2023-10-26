import React ,{useEffect}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,removeSelectedProduct } from "../redux/actions/productActions";

const ProductDetail = ()=>{
    const product  = useSelector((state)=>state.product)
    const {title,id,price,category,image,description} = product
    const {productId} = useParams()
    console.log(product);
    const dispatch = useDispatch();

    const fetchProductDetail = async () =>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log(err);
        })
        dispatch(selectedProduct(response.data))
        
    }
    useEffect(()=>{
        if(productId && productId!==""){
            fetchProductDetail()

        }
        return ()=>{
            dispatch(removeSelectedProduct())
        }
        
    },[])
    const style = {
        height:"500px"
    }
    
    return(
        <>
         <div className="ui grid container" style={style}>
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="ui placeholder segment" style={{marginTop:"100px"}}>
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle alligned row " >
                            <div className="column lp" >
                                <img className="ui fluid image"  src={image} alt="" style={style}/>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">{price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to cart</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}

         </div>
        
            
             
        
        </>

       
        // <div>
        //     <h1>
        //         hello
        //     </h1>
        // </div>
        
    )

}

export default ProductDetail