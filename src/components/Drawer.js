const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 justify-between d-flex">Cart
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" onClick={props.onClose} /></h2>


        <div className="items">
          <div className="cartItem d-flex align-center mb-20">

            <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Jordan air Jordan 11</p>
              <b>100 usd</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">

            <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }} className="cartItemImg"></div>

            <div className="mr-20 flex">
              <p className="mb-5">Jordan air Jordan 11</p>
              <b>100 usd</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div> </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <spand>Total</spand>
              <div></div>
              <b> 210 usd</b>
            </li>
            <li>
              <spand>Tax 5%</spand>
              <div></div>
              <b>11 usd</b>
            </li>
          </ul>
          <button className="greenButton">Create order</button>
        </div>

      </div>
    </div>
  )
}

export default Drawer;