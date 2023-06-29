<script lang="ts" setup>
const locale = useState<string>('locale.i18n')
</script>

<template>
  <Html :lang="locale">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Html>
</template>

<style lang="postcss">
body,html, #__nuxt{
  height: 100%;
}
.global-text {
  @apply text-gray-900 dark:text-gray-50;
}
</style>
