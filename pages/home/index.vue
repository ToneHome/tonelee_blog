<template>
    <div>
        {{ data?.hello }}
    </div>
</template>
<script setup lang='ts'>

const {data} = await useFetch('/api/hello')
</script>
<style></style>
