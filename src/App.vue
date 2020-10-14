<template>
  <div id="app">
    <header>
      <div class="header__up">
        <div class="header__up__logo">
          <router-link to="/">
            <div class="header__up__logo--white"></div>
            <div class="header__up__logo--gray"></div>
          </router-link>
        </div>
        <nav class="header__up__nav">
          <div class="header__up__nav__link"><router-link to="/profile">profile</router-link></div>
          <div class="header__up__nav__link"><router-link to="/career">career</router-link></div>
          <div class="header__up__nav__link"><router-link to="/accounts">accounts</router-link></div>
          <div class="header__up__nav__link"><router-link to="/commentary">commentary</router-link></div>
          <div class="header__up__nav__link"><router-link to="/demo">demo</router-link></div>
        </nav>
      </div>
      <div class="header__under"></div>
    </header>
    <router-view/>
    <footer>
      <div class="footer__text"><p>created by いりふね</p></div>
      <div class="footer__share__btn">
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" class="twitter-share-button" data-show-count="false">Tweet</a>
      </div>
    </footer>
  </div>
</template>
<style>
  @import "./assets/css/reset.css";
  @import "./assets/css/style.css";
  @import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
</style>