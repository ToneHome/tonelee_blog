<template>
    <div class="bg-[#fafafa] py-[40px]">
        <div class="home-title text-center text-[30px]  font-bold">
            Welcome to my Blog
        </div>
        <div class=" text-center mt-[10px] w-[800px] flex align-middle justify-center m-auto">
            <input type="text" :placeholder="placeholderValue" v-model="searchValue"
                class="px-[15px]  focus:shadow-[0_0_0_2px_#3296eb] rounded mr-[15px] flex-1 border border-[#333] h-10 ">

            <button class=" bg-[#3296eb] w-[20%] h-10 text-white rounded">订阅</button>
        </div>
    </div>
</template>
<script setup lang='ts'>
const searchValue = ref("")
const placeholderValue = shallowRef("找你喜欢的东西")
</script>
<style></style>
