import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
    return {
        theme: 'light',
    }
})
