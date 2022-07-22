import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        console.log(this.state);
    //    this.setState({
    //     qty:this.state.qty+1  //prevstate not required, title change eg.
    //    });
     this.setState((prevState)=>{ //prevstate reqd.
       return{
        qty:prevState.qty+1
       }
     })
    }
    render(){
        const {price,title,qty}=this.state;
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
                  onClick={this.increaseQuantity}></img>

                 <img 
                 alt='decrease' 
                 src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                 className='action-icons'></img>

                 <img 
                 alt='delete' 
                 src='https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1658464411~hmac=a80c2d5deb7ce30264caa6c58f286d1c' 
                 className='action-icons'></img>
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