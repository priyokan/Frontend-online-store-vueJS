<template>
  <div id='addMenu' style="position:absolute">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Tambah Menu</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('firstName')">
                <label for="namaMenu">Nama menu</label>
                <md-input name="namaMenu" id="namaMenu" autocomplete="given-name" v-model="form.namaMenu" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">Nama Harus diisi</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100" style="margin-top:10px" >
                <md-field>
                    <label>Deskripsi</label>
                    <md-textarea v-model="form.deskripsi"></md-textarea>
                </md-field>
            </div>
 

            <div class="md-layout-item md-small-size-100">
                <md-field>
                    <label>gambar</label>
                    <md-file accept="image/*" />
                </md-field>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Tamabh Menu</md-button>
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
        namaMenu: null,
        deskripsi: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
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
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  #addMenu{
    position: absolute;
    top: 25px;
    left: 25px;
    height: 300px;
  }
  @keyframes showing{
      0%{height: 0px}
  }
  *{
    animation: showing;
  }
</style>