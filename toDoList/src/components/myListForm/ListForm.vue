<template>
    <tui-bottom-popup :zIndex="1002" :maskZIndex="1001" :show="popupShow" @close="hiddenPopup">
        <view class="listForm">
            <tui-section title="标题" is-line background="#fff"></tui-section>
            <MyInput :value="listInfo.name"></MyInput>
        </view>
    </tui-bottom-popup>
    <view class="addList">
        <tui-fab @click="showPopup" bgColor="#5677fc"></tui-fab>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import MyInput from "../../components/myInput/MyInput.vue";
const listInfo = reactive({
    name: "",
});

const popupShow = ref(false);
const showPopup = () => popupShow.value = true;
const hiddenPopup = () => popupShow.value = false;
</script>

<style>
.listForm {
    height: 45vh;
}

.addList {
    transform: translateY(40px);
    position: relative;
    z-index: 1;
}
</style>