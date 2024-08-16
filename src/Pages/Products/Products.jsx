import { useEffect, useState } from "react";


const Products = () => {
            const[products,setProducts]=useState([])
            useEffect(()=>{
                        fetch('http://localhost:5000/products')
                        .then(res=>res.json())
                        .then(data => setProducts(data))

            },[])
            return (
                        <div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 "> 
                                    {
                                                products.map(product=>
                                                             <div key={product._id} className="card card-compact bg-base-100 shadow-xl ">
                                                            <figure>
                                                              <img
                                                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                                                alt="Shoes" />
                                                            </figure>
                                                            <div className="card-body">
                                                              <h2 className="card-title">Shoes!</h2>
                                                              <p>If a dog chews shoes whose shoes does he choose?</p>
                                                              <div className="card-actions justify-end">
                                                                <button className="btn btn-primary">Buy Now</button>
                                                              </div>
                                                            </div>
                                                          </div>
                                               )
                                    }
                                </div>            
                        </div>
            );
};

export default Products;