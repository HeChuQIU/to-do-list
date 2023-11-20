<script setup lang="ts">
import {ref} from 'vue'
import './index.css'
import {router} from "@/router";
import TimeLine from "@/components/TimeLine.vue";
import {ToDoThing} from "@/data/ToDoThing";

const active = ref(0);
const ToDoThingList: ToDoThing[] = [
  new ToDoThing().withTitle("Thing0"),
  new ToDoThing().withTitle("Thing1"),
  new ToDoThing().withTitle("Thing2"),
];

const change = (event) => {
  active.value = event.detail;
  router.push("/timeLine");
}
</script>

<template>
  <TimeLine :things="ToDoThingList"></TimeLine>
  <router-view></router-view>
  <van-tabbar :active="active" @change="change">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>

