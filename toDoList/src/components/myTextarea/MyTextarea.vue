<template>
    <view>
        <view class="myTextarea-header">
        </view>
        <textarea maxlength="1000" placeholder-style="font-size:small" class="myTextarea-textarea" :value="value"
            @input="handler" />
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
.myTextarea-textarea {
    width: 95%;
    margin: auto;
    background-color: rgb(244, 244, 244);
    padding: 5px;
    box-sizing: border-box;
}
</style>