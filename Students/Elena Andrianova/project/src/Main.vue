<template>
  <div>
    <div class="header container">
      <a href="#" class="logo">Bran<span>d</span></a>

      <form method="get" class="search">
        <button class="search__browse" name="browse" id="">Browse <i class="fas fa-caret-down"></i></button>
        <input type="text" name="search" placeholder="Search for item...">
        <button><i class="fas fa-search"></i></button>
      </form>

      <div class="headerCart" >
        <button id="basket-toggler" class="header__cart"><img src="https://github.com/Alaya95/static/blob/master/img/JS1_shop/cart.png?raw=true" alt="cart" class="header__cart"  @click="showBasket = !showBasket"></button>

        <basket v-show="showBasket" ref="basket" />


      </div>

      <button name="accountBar" class="header__account-bar">My Account <i class="fas fa-caret-down"></i></button>

    </div>
    <div class="headerLine"></div>
    <div class="topNav container">
      <a href="#">Home</a>
      <a href="#">Man</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Accoseriese</a>
      <a href="#">Featured</a>
      <a href="#">Hot Deals</a>
    </div>
    <div class="topBanner">
      <div class="banner-content container">
        <div class="rectangle"></div>
        <div class="textBanner">
          <h1>The Brand</h1>
          <h2>Of luxerious <span>fashion</span></h2>
        </div>
      </div>
    </div>
    <div class="category container">

      <div class="category__banner">
        <div class="banner-text">
          <h2>Hot deal</h2>
          <h3>For men</h3>
        </div>
      </div>

      <div class="category__banner">
        <div class="banner-text">
          <h2>Luxirous & trendy</h2>
          <h3>Accesories</h3>
        </div>
      </div>

      <div class="category__banner">
        <div class="banner-text">
          <h2>30% ofter</h2>
          <h3>Women</h3>
        </div>
      </div>

      <div class="category__banner">
        <div class="banner-text">
          <h2>New arrivals</h2>
          <h3>For kids</h3>
        </div>
      </div>

    </div>
    <div class="product container">
      <div class="product-top-text">
        <h3>Featured Items</h3>
        <p>Shop for items based on what we featured in this week</p>
      </div>

      <catalog />



      <button name="browseAllProduct" class="product__all">Browse All Product&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
    </div>
    <div class="feature container">
      <div class="feature__sale">
        <div class="feature__sale-text">
          <p>30% <span>offer</span></p>
          <p>for women</p>
        </div>
      </div>
      <div class="feature__box">

        <div class="feature__box-cont">
          <img src="./assets/imgs/delivery.png" alt="delivery">
          <div class="feature__box-text">
            <p>Free Delivery</p>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>

        <div class="feature__box-cont">
          <img src="./assets/imgs/sales.png" alt="sale">
          <div class="feature__box-text">
            <p>Sales & discounts</p>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>

        <div class="feature__box-cont">
          <img src="./assets/imgs/assurance.png" alt="accurance">
          <div class="feature__box-text">
            <p>Quality assurance</p>
            <p>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
          </div>
        </div>

      </div>
    </div>
    <div class="subscribeBG">
      <div class="subscribe container">
        <div class="subscribe__block">
          <img src="./assets/imgs/Layer_40.png" alt="photo">
          <div class="subscribe__block-text">
            <p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
            <p>Bin Burhan <br><span>Dhaka, Bd</span></p>
          </div>
        </div>
        <div class="line"></div>
        <div class="subscribe__blockFeedback">
          <div class="subscribe__blockFeedback-text">
            <h3>Subscribe</h3>
            <p>For our new letter and promotion</p>
          </div>
          <form action="subscribe-form"  class="subscribeForm">
            <input type="email" name="mail" placeholder="Enter Your Email">
            <button>Subscribe</button>
          </form>

        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer__top container">
        <div class="footer_blockText">
          <div class="logo">Bran<span>d</span></div>

          <p> Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships. </p>

          <p>Efficiently plagiarize 24/365 action items and focused infomediaries.Distinctively seize superior initiatives for wireless technologies. Dynamically optimize. </p>
        </div>

        <div class="footer_blockLink">
          <p>Company</p>
          <a href="#" class="footer__link">Home</a>
          <a href="#" class="footer__link">Shop</a>
          <a href="#" class="footer__link">About</a>
          <a href="#" class="footer__link">How It Works</a>
          <a href="#" class="footer__link">Contact</a>
        </div>

        <div class="footer_blockLink">
          <p>Information</p>
          <a href="#" class="footer__link">Tearms & Condition</a>
          <a href="#" class="footer__link">Privacy Policy</a>
          <a href="#" class="footer__link">How to Buy</a>
          <a href="#" class="footer__link">How to Sell</a>
          <a href="#" class="footer__link">Promotion</a>
        </div>
        <div class="footer_blockLink">
          <p>Shop Category</p>
          <a href="#" class="footer__link">Men</a>
          <a href="#" class="footer__link">Women</a>
          <a href="#" class="footer__link">Child</a>
          <a href="#" class="footer__link">Apparel</a>
          <a href="#" class="footer__link">Brows All</a>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footerBG container">
          <p>&copy; 2017  Brand  All Rights Reserved.</p>
          <div class="footerBG-link">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-link"><i class="fab fa-pinterest-p"></i></a>
            <a href="#" class="social-link"><i class="fab fa-google-plus-g"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Catalog from "./components/Catalog.vue";
import Basket from "./components/Basket.vue";

export default {
  components: { Catalog, Basket },

  data(){
    return {
      showBasket: false, //скрытие и показ корзины)
    }
  },

  methods: {
    _get(url) {
      return fetch(url).then(d => d.json())
    },
  },
}
</script>

<style>

</style>