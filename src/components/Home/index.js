import './index.css'
import Header from '../Header'

const Home = () => (
  <div className="app-bg-container">
    <Header />
    <div className="home-container">
      <div className="home-description-container">
        <h1 className="home-text-heading">Clothes That you get Noticed </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-image-smaller-devices"
        />
        <p className="home-text-description">
          Fashion is part of daily air and it does not help that it changes all
          the time Clothes has been the marker of the era and we are in a
          revolution.Your fashion was seen and heard that way you are. So,
          celebrate the seasons new and exicting fashion in your own way
        </p>
        <div>
          <button type="button" className="home-shop-button">
            Shop Now
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-image"
      />
    </div>
  </div>
)

export default Home
