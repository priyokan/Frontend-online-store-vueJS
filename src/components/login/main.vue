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
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-dense md-raised md-primary" style="margin:auto" >Masuk</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
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
        email: null,
        password:null,
      },
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
        this.form.email = null
        this.form.password = null
      },
      success() {
          this.clearForm()
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.success()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    #login .wallpaper{
        background-image: url('../../assets/img/darkwood02.jpg');
        position: absolute;
        height: 100%;
        width: 100%;
    }
    #login .md-card{
        margin:100px auto;
        width: 400px;
        padding: 20px;
    }
</style>