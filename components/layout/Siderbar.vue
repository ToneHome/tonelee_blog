<template>
    <div class="pt-[30px] px-[50px] w-[280px] shandow-right bg-gradient-to-b to-cyan-500 from-blue-500 h-full">
        <h3 class="text-center text-[20px] text-white">
            {{ appConfig.cnAutor }} ({{ appConfig.autor }})
        </h3>

        <div class="avtor ">
            <img class="w-[170px] h-[170px] my-[30px] rounded-full object-cover" src="@/assets/images/WechatIMG9.jpeg" alt="">
        </div>

        <div class="text-center text-xs text-white mt-3">
            Hi, my name is Tone Lee. Briefly introduce yourself here. You can also provide a link to the about page.
        </div>

        <div class="flex items-center justify-between text-[14px] mt-[15px] text-white link">
            <div class="item">微博</div>
            <div class="item">github</div>
            <div class="item">微信</div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import './Siderbar.scss'
const appConfig = useAppConfig()

</script>
    
<style></style>