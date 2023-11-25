<template>
    <view class="myInput-container">
        <view class="myInput-input-container">
            <input id="myInput-input" cols="30" rows="10" class="myInput-input" :value="value" @input="handler" />
        </view>
    </view>
</template>
  
<script setup>
const props = defineProps(["value"]);
const emit = defineEmits(["update:value"]);

const handler = (event) => {
    emit("update:value", event.target.value);
};
</script>

<style>
.myInput-header {
    height: 20px;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: rgb(146, 146, 146);
    margin-bottom: 5px;
}

.myInput-input-container {
    height: 40px;
}

.myInput-input {
    width: 95%;
    height: 100%;
    margin: auto;
    border-radius: 6px;
    background-color: rgb(244, 244, 244);
    box-sizing: border-box;
    padding-left: 2px;
}

.myInput-input:active {
    border: 1px solid #dfdfdf;
    background-color: #eee;
}
</style>