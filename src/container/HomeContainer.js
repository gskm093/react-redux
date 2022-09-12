import {connect} from 'react-redux'
import Home from '../components/home';
import {addToCart,removeFromCart} from '../services/action/action';

const mapStateToProps = state =>({
initialState:state.cartItems
})
const mapDispatchToProps = dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data)),
    removeFromCartHandler:data=>dispatch(removeFromCart(data))
})


//5.Connect component to the store
export default connect(mapStateToProps,mapDispatchToProps)(Home);

// export default Home;

