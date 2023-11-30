<template>
  <Home v-if="currentPath === navData[0].path" />
  <Calendar v-if="currentPath === navData[1].path" />
  <AboutUs v-if="currentPath === navData[2].path"></AboutUs>
  <HeChuBottomNav :data="navData" v-model:current-path="currentPath" />
</template>

<script setup lang="ts">
import type { Ref } from "@vue/runtime-core";
import { ref } from "vue";
import HeChuBottomNav from "@/components/HeChuBottomNav.vue";
import Home from "@/components/Home.vue";
import Calendar from "@/components/Calendar.vue";
import AboutUs from "@/components/AboutUs.vue";

const currentPath: Ref<String> = ref("home");
const navData = ref([
  {
    path: "home",
    name: "首页",
    iconName: "home",
    unselectedColor: "rgb(0,0,0)",
    selectedColor: "rgb(54,162,239)"
  },
  {
    path: "calendar",
    name: "日历",
    iconName: "calendar",
    unselectedColor: "rgb(0,0,0)",
    selectedColor: "rgb(54,162,239)"
  },
  {
    path: "us",
    name: "我们",
    iconName: "people",
    unselectedColor: "rgb(0,0,0)",
    selectedColor: "rgb(54,162,239)"
  }
]);


</script>