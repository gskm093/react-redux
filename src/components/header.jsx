function Header(props) {
  console.log("Header",props);
    return (
      <div className="container-fluid bg-success sticky-top">
      <div className="d-flex justify-content-between">
      <ul className="list-inline text-white py-4 justify-content-start">
        <li className="list-inline-item mx-3">Home</li>
        <li className="list-inline-item  mx-3">Contact Us</li>
        <li className="list-inline-item mx-3">About</li>
        <li className="list-inline-item mx-3">Help</li>
      </ul>
      <h4 className="text-white py-4">
          cart-{props.initialState.cartData.length>0?props.initialState.cartData.length: 0}
      </h4>
      </div>
    </div>

    );
  }
  
  export default Header;
  