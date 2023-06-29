<template>
    <div>
        {{ $route.params.id }}
        <main>
            <ContentDoc path="/test"/>
        </main>
        <img src="/1.png" alt="">
    </div>
</template>

<script setup lang='ts'>
definePageMeta({
    layout:'custom',
    middleware: "auth"
})
</script>

<style></style>