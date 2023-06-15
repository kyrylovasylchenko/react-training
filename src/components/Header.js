const Header = (props) => {
    return(
        <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Best shose shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img className="cu-p" src="/img/cart.svg" onClick={props.onClickCart}/> <span>120 $</span></li>
          <li><img src="/img/user.svg" /></li>
        </ul>
      </header>
    )
}

export default Header;