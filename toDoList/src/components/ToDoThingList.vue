<script setup lang="ts">
import {ToDoThing} from "@/data/ToDoThing";

const props = defineProps<{
  things: ToDoThing[],
}>()
</script>

<template>
  <li v-for="thing in props.things">
    <!--    <van-swipe-cell right-width="65" left-width="65">-->
    <!--      <view slot="left" class="van-swipe-cell__left">选择</view>-->
    <!--      <van-cell-group inset>-->
    <!--        <van-cell :title="thing.title" value="内容" icon="location-o"></van-cell>-->
    <!--      </van-cell-group>-->
    <!--      <view slot="right" class="van-swipe-cell__right">删除</view>-->
    <!--    </van-swipe-cell>-->
    <van-cell value="内容" icon="shop-o" is-link>
      <template slot="title">
        <view>
          <view class="van-cell-text">单元格</view>
          <van-tag type="danger">标签</van-tag>
        </view>
      </template>
    </van-cell>
    <van-cell title="单元格">
      <template slot="right-icon">
        <van-icon name="search" class="custom-icon"/>
      </template>
    </van-cell>

  </li>
</template>

<style scoped>

</style>
