<script setup>
import { ref } from 'vue'
import './index.css'

const msg = ref('Hello world!')
</script>

<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
  <view>
    <van-button type="primary">Button</van-button>
  </view>
  <view class="tab-box">
    <router-link class="tab-item" to="/timeLine" replace>TimeLine</router-link>
  </view>
  <router-view></router-view>
</template>

