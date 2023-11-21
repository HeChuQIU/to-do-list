<template>
  <view class="bottomNav">
    <view class="tabbar">
      <view class="tabbarItem" id="homePage">
        <view class="picHome">
        </view>今日清单
      </view>
      <view class="tabbarItem" id="calendarPage">
        <view class="picCalendar"></view>
        <view>日历计划</view>

      </view>

      <view class="tabbarItem" id="pesonnalPage">
        <view class="picUs"></view>关于我们
      </view>

    </view>
  </view>
  toDoThings length : {{ toDoThings.length }}
  <ToDoThingList :things="toDoThings"></ToDoThingList>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Helloaa')
import {ref} from 'vue'
import {ToDoThing} from "@/data/ToDoThing";
import ToDoThingList from "@/components/ToDoThingList.vue";

const title = ref('Hello')
const toDoThings = ref(
    new Array(10).fill(true)
        .map((value, index, array) => new ToDoThing()
            .WithTitle('Hello There')
            .WithStartTime(new Date())
            .WithDescription(index.toString())
        ));
</script>

<style>
.bottomNav {
  position: fixed;
  bottom: 0;
  width: 100%;
}

.tabbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* margin-top: 78vh; */
  background-color: rgba(0, 0, 0, 0.021);
  border-top: solid 1px rgba(128, 128, 128, 0.747);
  height: 50px;
}

.tabbarItem {
  text-align: center;
  font-family: "楷体";
  font-size: small;
  text-align: center;
}

.picHome {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAO9JREFUOE/NkzFuwkAQRd/nBvScACoa+khwBKi5gTeVy5iC2sAVIpGIkjpSeqSUyUXSRCk8kQ1r2SZrXDLtzn87/8+uaCnbMMcY6ZEk1KbQQSGGAyIhQyHIvwAvlqM4ty1PIcgVoCn2E4YgNUBI3AYpAbfEIcjZ4yUw77ltM81MfEhHYK+I11viApCSIPpyRFUL73I8dAJsMD/tfQFOckzKtHcMyHhB/ChiVrVmAQulr0pQQ8QbxlSORQnvDMgV4hOYdwJgrIpbelj+CzG+LoAY8ayIbfPN1J9yvt9K+R9oKUvEGDEkY80vH4r5zlv/AAMQfRGywm/WAAAAAElFTkSuQmCC");
}

.picCalendar {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAYZJREFUOE+tkz1oU2EUhp9zDSaQZlCRCiLFmx8XndROhaiDiblxCoLF2UFBxNysIo5Vb+qSRRxFJ3Wwt0Xs0KmFipPQqbmgSxddDAkByXck4QbyK1r9xnPO+3Dec84n/OOTUb3tl0uodeLQsR+1T+ee/ezmU6t3osZEb4nypX71ydtBzTBAEXut/Brksxh9Xy9WN3uAd5ULxjJZVE4HRe/aGCDpVzYUzfYSok8x1jqiK8OF5opi5YG7YfxD4HiXex3YvtsBrDCxjRCgXB+2py9B0sD5MN4JHC/SB+h+Zhk4noSA8oP9AaoP/1cH7qiFvWZE0vGOuY/KpVgzsdCON16hmFgrcaMdb3S3c3bAwihAW8AjwbqoaBL0OUgJUNA3IDeB45MAO8ARYBb4CJwCEsAWMA9EBmc1CjBB8+vBkzNzBVFdDhwvZfvuPRFy9YKXt323Btz+HaB7REtABiU3xcKZaYDvwOG/XOW3wPGO9u8gAyyCNfa5JkONWnLgxW7hcf0PBdN7+wVleJgRiQ5/BAAAAABJRU5ErkJggg==");
}

.picUs {
  width: 30px;
  height: 30px;
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAXZJREFUOE+1k78vBEEUx79v9tBIlArB7o6jIfEHiGg0CiEScudGSyEXColOFAqVUoREmNNoVGq/EomS6OzsXLiWXHQXt/vkCsLZEBFTTPc+7zPfN4/wx0N/rMf/AFxtMkRYAKNCwG6o5K6r74aKKn1ab/zFwNfmiMG9MSEvYtEM4kMGzxJEBuAhq+Snmi8ATxt2KG4JcunnWrfOvWBcCFq0Sg56++aREY0UZ7qv3kwSAR+7SP3QFaNyZlVXm1swtyQoa7P+zTeA4ITBq2/vdbVZAVAGiTJxPGGVHP2YQ+IUvIKxYBC4dtN5RM56iqtrDIQOxRtBLl1KNPD3zSIT5mLiZSHEpRNHDRHTGEBLkUj1C65OEWMzEil5P90Z1iDvBv6haeEKjq2SA/Wj8gumj4Fjm5Mdrg7GAKe1qLytTwBPmx0CTkIlD5J+p6eDeSC6tqrnopZLUcnVekDhpakxX5psf0oGhMMguDbnb/8Y4m/243924TcGr4sWlBGMyouQAAAAAElFTkSuQmCC");
}
</style>
