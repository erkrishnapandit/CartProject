import React from 'react'
// import './index.css';
import './styles.css';
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default class CartItem extends React.Component {
    
    constructor(){
        super();
        this.state = {
            title: 'Phone',
            price: 999,
            qty: 1,
            img: ''
        }
    }
    increaseQuantity = ()=>{
        // console.log("increaseQuantity");
        // console.log(this, this.state);
        this.setState({
            qty: this.state.qty + 1
        })
    }
    decreaseQuantity = ()=>{
        const {qty} = this.state;

        if(qty === 0){
            return;
        }
        // console.log("decreaseQuantity")
        this.setState({
            qty: this.state.qty - 1
        })
    }
    deleteProduct = ()=> {
        console.log("deleteProduct");

    }
    
    render() {
        const {price, title, qty} = this.state;
        return (
            <div className='cart-item' style={{ background: '#cff' }}>
                <div className='left-block'><img alt='product' style={styles.image} /></div>
                <div className='right-block'>
                    <div style={{ fontSize: 25, color: '#000' }}>{title}</div>
                    <div style={{color: '#777' }}>Rs.- {price}</div>
                    <div style={{color: '#777' }}>Qty:- {qty}</div>
                    <div className='cart-item-actions'>
                    <img alt="increase" className="action-icons" src='https://cdn-icons-png.flaticon.com/512/992/992651.png' onClick={this.increaseQuantity}/>
                    <img alt="deccrease" className="action-icons" src='https://cdn-icons-png.flaticon.com/512/992/992683.png' onClick={this.decreaseQuantity}/>
                    <img alt="delete" className="action-icons" src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' onClick={this.deleteProduct}/>
                    </div>
                </div>
            </div>
        )
    }
}


