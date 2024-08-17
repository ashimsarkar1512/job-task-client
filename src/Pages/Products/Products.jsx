import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import './products.css'

const Products = () => {
            const[products,setProducts]=useState([])

            const [currentPage,setCurrentPage]=useState(0)
            const [itemsPerPage,setItemPerPage]=useState(10)
        
            const {count}=useLoaderData()
            console.log(count);
        
           
            const numberOfPages=Math.ceil(count/itemsPerPage)
        
            const pages=[...Array(numberOfPages).keys()]
        
        
            useEffect(() => {
                fetch(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
                    .then(res => res.json())
                    .then(data => setProducts(data))
            }, [currentPage]);

            const handleItemPerPage=e=>{
              const val=parseInt(e.target.value)
              console.log(val);
              setItemPerPage(val)
              setCurrentPage(0)
          }
      
          const handlePrevPage=()=>{
              if(currentPage>0){
                  setCurrentPage(currentPage-1);
              }
          }
      
          const handleNextPage=()=>{
              if(currentPage<pages.length-1){
                  setCurrentPage(currentPage+1)
              }
          }


            return (
                        <div>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-3 "> 
                                    {
                                                products.map(product=>
                                                             <div key={product._id} className="card card-compact bg-base-100 shadow-xl ">
                                                            <figure>
                                                             <img src={product.productImage} alt="" />
                                                            </figure>
                                                            <div className="card-body">
                                                              <p>{product.
brandName}</p>
                                                              <h2 className="card-title">{product.
productName}</h2>
                                                              <p>{product.
description}</p>
                                                              <div className="card-actions">
                                                                <p> price : {product.
price}</p>
<p>category : {product.

category}
</p>
                                                              </div>
                                                              <div className="card-actions">
                                                                <p> ratings : {product.

ratings}</p>
<p>createdAt : {product.


createdAt}
</p>
                                                              </div>
                                                            </div>
                                                          </div>
                                               )
                                    }
                                </div>   

                               
            <div className='pagination'>
            
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page=> <button 
                        className={currentPage===page? 'selected':undefined}
                        onClick={()=>setCurrentPage(page)}
                         key={page}>{page}</button>)
                }

                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemPerPage} name="" id="">

                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
                        </div>
            );
};

export default Products;