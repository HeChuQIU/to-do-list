<script setup lang="ts">
import ColorString = HBuilderX.ColorString;

const props = defineProps<{
  currentPath: String
  data: {
    path: String
    name: String
    iconName: String
    unselectedColor: String
    selectedColor: String
  }[]
}>();

const emit = defineEmits<{
  (e: "update:currentPath", value: String): void
}>();

const onClick = (e: MouseEvent, path: String) => {
  emit("update:currentPath", path);
};

const getIndex = (path: String) => {
  return props.data.findIndex(v => v.path === path);
};

</script>

<template>
  <view class="bottomNav">
    <view class="tabbar">
      <view v-for="d in data" :key="d.path" class="tabbarItem" @click="e => onClick(e, d.path)">
        <view class="pic">
          <tui-icon :name="d.iconName" :color="d.path === currentPath ? d.selectedColor : d.unselectedColor"></tui-icon>
        </view>
        {{ d.name }}
      </view>
    </view>
  </view>
</template>

<style scoped>
.bottomNav {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.tabbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.021);
  border-top: solid 1px rgba(128, 128, 128, 0.747);
  height: 11vh;
}

.tabbarItem {
  text-align: center;
  font-size: small;
}

image {
  width: 30px;
  height: 30px;
}

.pic {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  text-align: center;
}
</style>