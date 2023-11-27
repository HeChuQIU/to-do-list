<script setup lang="ts">
const props = defineProps<{
  currentPath: String
  paths: String[]
}>();
</script>

<template v-for="path in paths">
  <template v-if="currentPath==path" #[path]/>
</template>

<style scoped>

</style>