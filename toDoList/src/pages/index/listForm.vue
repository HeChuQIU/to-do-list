<template>
    <view>
        这个是计划表表单
    </view>

    <view class="listForm">
        <view>
            <MyInput header-name="标题" :value="listInfo.name"></MyInput>
        </view>
    </view>
</template>

<script setup lang="ts">
import MyInput from "../../components/myInput/MyInput.vue";
import { reactive } from "vue";
const listInfo = reactive({
    name: "",

});

</script>