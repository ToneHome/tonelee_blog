<template>
    <NConfigProvider :class="`flex items-center w-full h-full ${themeStore.theme}`" inline-theme-disabled>
        <LayoutSiderbar></LayoutSiderbar>
        <main class="flex-1 h-full">
            <slot />
        </main>
    </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { useThemeStore } from '~/store/theme';
// You might choose this based on an API call or logged-in status
const layout = "custom";

// 主题的 store
const themeStore  = useThemeStore()

</script>
