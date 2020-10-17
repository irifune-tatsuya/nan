<template>
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
      <div class="header__up__nav__link"><router-link to="/bbs">BBS</router-link></div>
    </nav>
  </div>
  <div class="header__under"></div>
</header>
</template>
