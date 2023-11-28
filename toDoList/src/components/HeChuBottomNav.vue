<script setup lang="ts">
import ColorString = HBuilderX.ColorString;

const props = defineProps<{
  currentPath: String
  paths: String[]
  names: String[]
  imageNames: String[]
  unselectedColor: String
  selectedColor: String
}>();

const emit = defineEmits<{
  (e: "update:currentPath", value: String): void
}>();

const onClick = (e: MouseEvent, path: String) => {
  emit("update:currentPath", path);
};

const getIndex = (path: String) => {
  return props.paths.findIndex(v => v === path);
};

</script>

<template>
  <view class="bottomNav">
    <view class="tabbar">
      <view v-for="path in paths" :key="path" class="tabbarItem" @click="e => onClick(e,path)">
        <view class="pic">
          <tui-icon :name="imageNames[getIndex(path)]"
                    :color="path===currentPath?selectedColor:unselectedColor"></tui-icon>
        </view>
        {{ names[getIndex(path)] }}
      </view>
    </view>
  </view>
</template>

<style scoped>
.bottomNav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
}

.tabbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.021);
  border-top: solid 1px rgba(128, 128, 128, 0.747);
  height: 10vh;
}

.tabbarItem {
  text-align: center;
  font-family: "楷体";
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