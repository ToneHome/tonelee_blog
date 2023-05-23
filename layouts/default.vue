<template>
    <div class="flex items-center w-full h-full">
        <LayoutSiderbar></LayoutSiderbar>
        <main class="flex-1 h-full">
            <slot />
        </main> 
    </div>

</template>
<script setup>
// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>
