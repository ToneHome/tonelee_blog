<script setup lang="ts">
  import './login.css'
  // import LoginBox from "~/components/login/LoginBox.vue";
  definePageMeta({
      layout:'null-page'
  })


  const formType = ref('login') // login 登录框  register 注册框
  const isChanging = ref(false)


  function changeStatus(){
     isChanging.value = true
      setTimeout(() => {
          formType.value = formType.value === 'login' ? 'register' : 'login'
          isChanging.value = false
      },1000)
  }

  const loginData = reactive({
      username:"",
      password:""
  })

  const registerData = reactive({
      username:"",
      password:"",
      confirmPassword:""
  })
</script>

<template>
    <LoginBox :class="{'front-box':formType === 'login','behind-box':formType === 'register','change-an': isChanging}">
        <span class="absolute right-0 top-0 w-1/6 h-1/6 bg-yellow-400 cursor-pointer" @click="changeStatus">

        </span>
        <div class="login-form w-full p-[30px] pt-[40px]">
            <div class="mb-[16px]">
                <input v-model="loginData.username" class="w-full px-[15px] h-[32px] border" />
            </div>
            <div class="mb-[16px]">
                <input type="password" v-model="loginData.password" class="w-full px-[15px] h-[32px] border" />
            </div>
            <div class="mb-[16px]">
               <button class="w-full bg-cyan-500 text-white py-[6px]">提交</button>
            </div>
        </div>
    </LoginBox>
    <LoginBox :class="{'front-box':formType === 'register','behind-box':formType === 'login','change-an': isChanging}">
        <span class="absolute right-0 top-0 w-1/6 h-1/6 bg-yellow-400 cursor-pointer" @click="changeStatus">

        </span>
        <div class="register-form w-full p-[30px] pt-[40px]">
            <div class="mb-[16px]">
                <input v-model="registerData.username" class="w-full px-[15px] h-[32px] border" />
            </div>
            <div class="mb-[16px]">
                <input type="password" v-model="registerData.password" class="w-full px-[15px] h-[32px] border" />
            </div>
            <div class="mb-[16px]">
                <input type="password" v-model="registerData.confirmPassword" class="w-full px-[15px] h-[32px] border" />
            </div>
            <div class="mb-[16px]">
                <button class="w-full bg-cyan-500 text-white py-[6px]">提交</button>
            </div>
        </div>
    </LoginBox>

</template>

<style scoped>

</style>