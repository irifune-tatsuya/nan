<template>
  <li class="profile__contents__list__comment profile__contents__list__comment--right">
    <div class="profile__contents__list__comment__white" v-if="profile1" @click="profile1 = !profile1"><slot></slot></div>
    <div class="profile__contents__list__comment__gray2" v-else @click="profile1 = !profile1">もとは福岡に住んでいました</div>
    <div class="profile__contents__list__comment__gray" v-if="profile1"></div>
    <div class="profile__contents__list__comment__white2" v-else></div>
  </li>
</template>