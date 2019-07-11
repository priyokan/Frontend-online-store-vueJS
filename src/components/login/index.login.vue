<template>
  <div id="login">
    <div class="wallpaper"></div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-size-50 md-small-size-100">
        <md-card-header>
            <div class="md-title">
            <img width="40%" src="../../assets/img/koki.svg" alt="" style="margin-top:-40px;display:block;margin-left:auto;margin-right:auto;">
            Login
            </div>
        </md-card-header>

        <md-card-content>        
          <md-field :class="getValidationClass('email')">
            <label>Email:</label>
            <md-input type='email' v-model="form.email"></md-input>
            <span class="md-error" v-if="!$v.form.email.required">Email wajib di isi</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
           <md-field :class="getValidationClass('password')">
            <label>Password:</label>
            <md-input type='password' v-model="form.password"></md-input>
            <span class="md-error" v-if="!$v.form.email.required">Password harus di isi</span>
          </md-field>
            <span class="error_login" v-if="pesan">maaf, {{pesan}}</span>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-dense md-raised md-primary" style="margin:auto" >Masuk</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import Axios from 'axios'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        email: '',
        password:'',
      },
      pesan:''
    }),
    validations: {
      form: {
        email: {
            required,
            email
        },
        password:{
            required,
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.email = ''
        this.form.password = ''
      },
      success() {
          this.$router.push('dashboard/home')
          this.clearForm()
      },
      login(){
        let form = this.form
        Axios
        .post(localStorage.getItem('api_url')+'/user/login',form)
        .then((result) => {
          if(result.data.status=='sukses'){
            localStorage.setItem('token',result.data.data.token)
            this.success()
          }
          this.pesan=result.data.message   
          this.clearForm()      
        }).catch((err) => {
          
        });
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.login()
        }
      }
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
    #login{
      position: absolute;
      top:0px;
      bottom: 0px;
      right: 0px;
      left: 0px;
    }
    #login .wallpaper{
        background-image: url('../../assets/img/darkwood02.jpg');
        position: absolute;
        height: 100%;
        width: 100%;
    }
    #login .md-card{
        margin:50px auto;
        width: 400px;
        height: 450px;
        padding: 20px;
    }
    .error_login{
        color:rgb(175, 22, 22);
        font-size: 10px;
        text-shadow: 1px 1px 3px #4d030352;
        background-color:rgba(200, 200, 200, 0.226);
        padding: 2px 20px;
        border: 1px solid rgba(116, 17, 17, 0.397);
        border-radius: 2px;
    }
</style>