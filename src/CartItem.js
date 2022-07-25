import React from 'react';

class CartItem extends React.Component{
//we dont need the state
   
        //this.increaseQuantity=this.increaseQuantity.bind(this);
     
    // increaseQuantity=()=>{
    //     console.log(this.state);
    // //    this.setState({
    // //     qty:this.state.qty+1  //prevstate not required, title change eg.
    // //    });
    //  this.setState((prevState)=>{ //prevstate reqd.
    //    return{
    //     qty:prevState.qty+1
    //    }
    //  })
    // }

    // decreaseQuantity=()=>{
    //     const {qty}=this.state;
    //     if(qty===0){
    //         return;
    //     }
    //     this.setState((prevState)=>{
    //         return{
    //             qty:prevState.qty-1
    //         }
    //     })
    // }
    render(){
        console.log("this.props",this.props);
        const {price,title,qty}=this.props.product;
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=this.props;
        return(
     <div className='cart-item'>
        <div className=''>
            <img style={styles.image}/>
        </div>

        <div className='right-block'>
             <div style={{fontSize:25}}>{title}</div>
             <div style={{color:'#777'}}>Rs {price}</div>
             <div style={{color:'#777'}}>Qty:{qty}</div>
             <div className='cart-item-actions'>
                 
                 <img
                  alt='increase' src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                  className='action-icons'
                  onClick={()=>{
                    onIncreaseQuantity(product)
                  }}
                 ></img>

                 <img 
                 alt='decrease' 
                 src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                 className='action-icons'
                 onClick={()=>{
                    onDecreaseQuantity(product)
                  }} />

                 <img 
                 alt='delete' 
                 src='https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1658751527~hmac=92e0e4f06f86a878467c65b4d3eac8ae' 
                 className='action-icons'
                 onClick={()=>{
                    onDeleteProduct(product.id)
                 }}
                 ></img>
             </div>
        </div>
     </div>

        );
    }
}

const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;