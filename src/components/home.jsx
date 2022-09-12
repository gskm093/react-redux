function Home(props) {
  return (
    <>
    <div className="container my-5">
      {props.initialState.products.map((d)=>{
        return  <div className="row border py-5 m-2">
        <div className="col-md-6">
          <div className="row">

              <img srcSet={d.imgD.join(',')}
              sizes='(max-width:500px) 500px,(max-width:800px) 800px, 1000px'
              src={d.imgD[0]} className="img-fluid" alt="abc"></img>
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
              <h3>{d.prodName}</h3>
              <h5>{d.price}</h5>
            </div>
          <div className="row mx-2">
          <button
          className="btn btn-primary"
              onClick={() =>
                props.addToCartHandler({
                 prodName:d.prodName,
                 price:d.price
                })
              }
            >
              Add to cart
            </button>
            <button className="my-2 btn btn-danger" onClick={()=>props.removeFromCartHandler({
              prodName:d.prodName
            })}>Remove From Cart</button>
          </div>
        </div>
      </div>
      })}
     
    </div>
    </>
  );
}

export default Home;
