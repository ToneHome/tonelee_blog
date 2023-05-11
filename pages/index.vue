<template>
    <div class="text-red-300">{{ a }}</div>
    <button @click="toAbout">about</button>
    <AppAlert>
        sdsd
    </AppAlert>
</template>
    
<script setup lang='ts'>
    const a = ref('1')
    function toAbout(){
        navigateTo({
            path:'/about',
            query:{
                id: Math.random()
            }
        })
    }
</script>
    
<style>
    
</style>
