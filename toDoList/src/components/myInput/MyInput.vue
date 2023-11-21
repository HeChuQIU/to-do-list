<template>
    <view class="myInput-container">
        <view class="myInput-header">
            <span>{{ headerName }}</span>
        </view>
        <view class="myInput-input-container">
            <input id="myInput-input" cols="30" rows="10" class="myInput-input" :value="value" @input="handler" />
        </view>
    </view>
</template>
  
<script setup>
const props = defineProps(["headerName", "value"]);
const emit = defineEmits(["change"]);

const handler = (event) => {
    emit("change", event.target.value);
};
</script>