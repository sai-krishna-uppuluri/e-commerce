import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <div className="website-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-logout"
        />
      </div>
      <div className="header-option-container">
        <h1 className="header-text"> Home </h1>
        <h1 className="header-text">Products</h1>
        <h1 className="header-text">Cart </h1>
        <button type="button" className="button-logout">
          Logout
        </button>
      </div>
      <div className="header-option-sm-devices-container">
        <button type="button" className="option-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="option-logo"
          />
        </button>
        <button type="button" className="option-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="option-logo"
          />
        </button>
        <button type="button" className="option-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="option-logo"
          />
        </button>
      </div>
    </div>
  </nav>
)

export default Header
