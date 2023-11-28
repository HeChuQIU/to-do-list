<template>
  <Home v-if="currentPath===paths[0]"/>
  <Calendar v-if="currentPath===paths[1]"/>
  <HeChuBottomNav :names="names" :paths="paths" v-model:current-path="currentPath" :image-names="imageNames"
                  :selected-color="selectColor" :unselected-color="unselectColor"/>
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

const imageNames: Ref<String[]> = ref([
  "home",
  "calendar",
  "people"
]);

const selectColor = ref("rgb(54,162,239)");
const unselectColor = ref("rgb(0,0,0)");

</script>