import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = ()=>{
    const products = useSelector((state)=>state.allProducts.products)
    const renderList = products.map((product)=>{
        const{title,id,price,image,category}= product

       
        
        return (
            <div className="four wide column ranjit" key={id} style={{marginTop:"100px"}}>
                <Link to={`/products/${id}`}>
               
            <div className="ui link card">
                <div className="card">
                    <div className="image" > 
                        <img src={image} alt={title} style={{backgroundColor:"grey", height:"300px",
            width:"250px",alignContent:"center"}}/>
                    </div>
                    <div className="content" style={{textAlign:"center"}}>
                            <div className="header" >{title}</div>
                            <div className="meta price">$ {price}</div>
                            
                            <div className="meta">{category}</div>
                    </div>
                    </div>
                </div>
                </Link>

            </div>
        )
    })
    return(
        <>
        {renderList}

        </>
    )
    // console.log(products);
    // const {title,id} = products[0]
    
   

}

export default ProductComponent