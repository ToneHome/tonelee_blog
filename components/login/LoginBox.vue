<script setup lang="ts">
import '@/assets/css/loginBox.css'
const props = defineProps({
    toggleText: {
        type: String,
        default: '注册'
    }
})
const emit = defineEmits(['clickToggle'])

function clickToggle() {
    emit('clickToggle')
}
</script>

<template>
    <div class="login-box flex items-center justify-center w-[400px] h-[300px] rounded-lg absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] ">
        <div class="absolute right-0 top-0 w-full h-[20px] pr-2 text-right rounded-lg ">
            <span @click="clickToggle" class="cursor-pointer select-none text-white">
                {{ props.toggleText }}
            </span>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped>

</style>