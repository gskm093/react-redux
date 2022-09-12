import {connect} from 'react-redux'
import Header from '../components/header';


const mapStateToProps = state =>({
    initialState:state.cartItems
    })
// const mapDispatchToProps = dispatch=>({
  
// })

export default connect(mapStateToProps)(Header);

// export default Home;
