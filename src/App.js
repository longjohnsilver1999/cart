import React from "react";


import Cart from "./Cart";
import Navbar from "./Navbar";
class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {
        
                price:999,
                title:'Mobile Phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                id:1
            },
            {
        
                price:888,
                title:'Watch ',
                qty:10,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
                id:2
            },
            {
        
                price:999,
                title:'Laptop',
                qty:4 ,
                img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
                id:3
            }

        ]
    }
}
handleIncreaseQuantity=(product)=>{
    //console.log('hey increase the qty of',product);

    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
    

    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty-=1;
    this.setState({
        products:products
    })
}
handleDeleteProduct=(id)=>{
    const{products}=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
}
getCartCount=()=>{
    const {products}=this.state;
       // const {products}=this.state;
        let count=0;
        products.forEach((product)=>{
            count+=product.qty;
        })
        return count;
    }
  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
        cartTotal=cartTotal +(product.qty*product.price);
    } )
    return cartTotal;
  }
  render (){
    const {products}=this.state;
  return (
    <div className="App">
     <Navbar count={this.getCartCount()}/>
     <Cart
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
     
     />
     <div style={{fontSize:40,padding:10}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}
export default App;
