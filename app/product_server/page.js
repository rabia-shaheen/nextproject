import Btn_function from "./client_side";
import custome from './custome.module.css'
import mystyle from '@/mystyle/mystyle.module.css'

async function product()
{
    let data= await fetch ("https://dummyjson.com/products");
    data=await data.json();
    return data.products

}

export default async function ProductList() {
    let products=await product();
  return (
    <div>
        <br/>
        <br/>   
        <br/>
        <br/>
        <btn/>
       
        <h1 className={mystyle.main}>Product List</h1>
        {
              products.map((item)=>(
                <div>
              <h3 className={custome.main}> Name :{item.title}, Price: {item.price}</h3>
             <Btn_function price={item.price}/>
              </div>
              ))        
        }  
   
    </div>
  );
}