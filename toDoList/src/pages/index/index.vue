<template>
  <Home v-if="currentPath===paths[0]"/>
  <Calendar v-if="currentPath===paths[1]"/>
  <HeChuBottomNav :names="names" :paths="paths" v-model:current-path="currentPath" :images-src="imagesSrc"
                  :clicked-images-src="clickedImagesSrc"/>
</template>

<script setup lang="ts">
import type {Ref} from "@vue/runtime-core";
import {ref} from "vue";
import HeChuBottomNav from "@/components/HeChuBottomNav.vue";
import SinglePage from "@/components/SinglePage.vue";
import Home from "@/components/Home.vue";
import Calendar from "@/components/Calendar.vue";

const names: Ref<String[]> = ref([
  "首页",
  "日历",
  "我们"
]);

const paths: Ref<String[]> = ref([
  "home",
  "calendar",
  "us"
]);

const currentPath: Ref<String> = ref("home");

const imagesSrc: Ref<String[]> = ref([
  "../static/home.png",
  "../static/calendar.png",
  "../static/us.png"
]);

const clickedImagesSrc: Ref<String[]> = ref([
  "../static/changeHome.png",
  "../static/changeCalendar.png",
  "../static/changeUs.png"
]);
</script>