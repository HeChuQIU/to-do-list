<script setup lang="ts">
const props = defineProps<{
  currentPath: String
  paths: String[]
}>();
</script>

<template>
  <view v-for="path in [paths.find(v => currentPath===v)]" :key="path">
    {{ currentPath }}==={{ path }}
    <slot :name="path"/>
  </view>
</template>

<style scoped>

</style>