<script setup lang="ts">
  import './login.css'

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
      },500)
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

  const showInput = ref(false)
  onMounted(() => {
      setTimeout(() => {
          showInput.value = true
      })
  })
</script>

<template>
    <LoginBox @click-toggle="changeStatus" toggle-text="注册" :class="{'front-box':formType === 'login','behind-box':formType === 'register','change-an': isChanging}">
        <div class="login-form w-full p-[30px] pt-[40px]">
            <div class="form-item">
                <input  v-show="showInput" v-model="loginData.username" name="addr" autocomplete="off" placeholder="请输入用户名" />
            </div>
            <div class="form-item">
                <input v-show="showInput" type="password" v-model="loginData.password" placeholder="请输入密码" />
            </div>
            <div class="form-item">
               <button class="w-full bg-cyan-500 text-white py-[6px]">提交</button>
            </div>
        </div>
    </LoginBox>
    <LoginBox @click-toggle="changeStatus" toggle-text="返回登录" :class="{'front-box':formType === 'register','behind-box':formType === 'login','change-an': isChanging}">
        <div class="register-form w-full p-[30px] pt-[40px]">
            <div class="form-item">
                <input v-show="showInput" v-model="registerData.username" placeholder="请输入用户名" />
            </div>
            <div class="form-item">
                <input v-show="showInput" type="password" v-model="registerData.password" placeholder="输入密码" />
            </div>
            <div class="form-item">
                <input type="password" v-show="showInput" v-model="registerData.confirmPassword" placeholder="确认密码" />
            </div>
            <div class="form-item">
                <button class="w-full bg-cyan-500 text-white py-[6px]">提交</button>
            </div>
        </div>
    </LoginBox>

</template>

<style scoped>

</style>
