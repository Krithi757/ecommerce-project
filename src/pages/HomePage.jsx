import './header.css'
import './HomePage.css'

export function HomePage () {
    return(
        <>
            <div className="header">
                <div className="left-section">
                    <a href="/" className="header-link">
                    <img className="logo"
                        src="images/logo-white.png" />
                    <img className="mobile-logo"
                        src="images/mobile-logo-white.png" />
                    </a>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                    <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <a className="orders-link header-link" href="/orders">

                    <span className="orders-text">Orders</span>
                    </a>

                    <a className="cart-link header-link" href="/checkout">
                    <img className="cart-icon" src="images/icons/cart-icon.png" />
                    <div className="cart-quantity">3</div>
                    <div className="cart-text">Cart</div>
                    </a>
                </div>
            </div>

            <div classNameName="home-page">
                <div classNameName="products-grid">
                <div classNameName="product-container">
                    <div classNameName="product-image-container">
                    <img classNameName="product-image"
                        src="images/products/athletic-cotton-socks-6-pairs.jpg" />
                    </div>

                    <div classNameName="product-name limit-text-to-2-lines">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                    </div>

                    <div classNameName="product-rating-container">
                    <img classNameName="product-rating-stars"
                        src="images/ratings/rating-45.png" />
                    <div classNameName="product-rating-count link-primary">
                        87
                    </div>
                    </div>

                    <div classNameName="product-price">
                    $10.90
                    </div>

                    <div classNameName="product-quantity-container">
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    </div>

                    <div classNameName="product-spacer"></div>

                    <div classNameName="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                    </div>

                    <button classNameName="add-to-cart-button button-primary">
                    Add to Cart
                    </button>
                </div>

                <div classNameName="product-container">
                    <div classNameName="product-image-container">
                    <img classNameName="product-image"
                        src="images/products/intermediate-composite-basketball.jpg" />
                    </div>

                    <div classNameName="product-name limit-text-to-2-lines">
                    Intermediate Size Basketball
                    </div>

                    <div classNameName="product-rating-container">
                    <img classNameName="product-rating-stars"
                        src="images/ratings/rating-40.png" />
                    <div classNameName="product-rating-count link-primary">
                        127
                    </div>
                    </div>

                    <div classNameName="product-price">
                    $20.95
                    </div>

                    <div classNameName="product-quantity-container">
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    </div>

                    <div classNameName="product-spacer"></div>

                    <div classNameName="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                    </div>

                    <button classNameName="add-to-cart-button button-primary">
                    Add to Cart
                    </button>
                </div>

                <div classNameName="product-container">
                    <div classNameName="product-image-container">
                    <img classNameName="product-image"
                        src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
                    </div>

                    <div classNameName="product-name limit-text-to-2-lines">
                    Adults Plain Cotton T-Shirt - 2 Pack
                    </div>

                    <div classNameName="product-rating-container">
                    <img classNameName="product-rating-stars"
                        src="images/ratings/rating-45.png" />
                    <div classNameName="product-rating-count link-primary">
                        56
                    </div>
                    </div>

                    <div classNameName="product-price">
                    $7.99
                    </div>

                    <div classNameName="product-quantity-container">
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    </div>

                    <div classNameName="product-spacer"></div>

                    <div classNameName="added-to-cart">
                    <img src="images/icons/checkmark.png" />
                    Added
                    </div>

                    <button classNameName="add-to-cart-button button-primary">
                    Add to Cart
                    </button>
                </div>
                </div>
            </div>
        </>

    );
}