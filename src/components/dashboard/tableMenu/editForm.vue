<template>
<div id='editMenu' style="position:absolute">
    <form novalidate class="md-layout" @submit.prevent="validateUser" style="">
      <md-card class="md-layout-item md-size-50 md-small-size-100" style="width: 1100px">
        <md-card-header>
          <div class="md-title">Perbarui Menu</div>
        </md-card-header>

        <md-card-content style="display:inline-block">
            <div class="md-layout md-gutter"  style="float:left">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('namaMenu')">
                  <label for="namaMenu">Nama menu</label>
                  <md-input name="namaMenu" id="namaMenu" autocomplete="given-name" v-model="form.namaMenu" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.namaMenu.required">Nama Harus diisi</span>
                </md-field>            
              <div class="md-layout-item md-small-size-100" style="margin-top:10px" >
                  <md-field>
                      <label>Deskripsi</label>
                      <md-textarea v-model="form.deskripsi" style="height:130px"></md-textarea>
                  </md-field>
              </div>
            </div>
            <div style="float:right;padding-top:20px">  
            <img v-if="!imgUrl" :src="form.img" style="height:150px;width:250px;object-fit:cover" />
            <img v-else :src="imgUrl" style="height:150px;width:250px;object-fit:cover" />
            <div class="md-layout-item md-small-size-100">
                <md-field>
                    <label>gambar</label>
                    <md-file @change="imgSelector" accept="image/*" />
                </md-field>
              </div>
            </div>
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Perbarui Menu</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {required,} from 'vuelidate/lib/validators'
  import Axios from 'axios'
  import FormData from 'form-data'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        id:null,
        namaMenu: null,
        deskripsi: null,
        img:null
      },
      userSaved: false,
      sending: false,
      lastUser: null,
      imgUrl:null
    }),
    validations: {
      form: {
        namaMenu: {
          required,
        },
      }
    },
    beforeMount() {
        var getData = localStorage.getItem('selected')
        getData = JSON.parse(getData)

      this.form.id= getData._id
      this.form.namaMenu=getData.namaMenu
      this.form.deskripsi=getData.deskripsi
      this.form.img=getData.imgMenu

    },
    methods: {
      imgSelector(e){
          let file = e.target.files[0]
          this.form.img = file
          this.imgUrl=URL.createObjectURL(file)
      },

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
        this.form.namaMenu = null
        this.form.deskripsi = null
      },
      submit(){
        const fd = new FormData()
        fd.append('namaMenu',this.form.namaMenu)
        fd.append('deskripsi',this.form.deskripsi)
        fd.append('imgMenu',this.form.img)
        const option = {
            headers: {
                    'x-device-id': 'stuff',
                    'Content-Type': 'multipart/form-data',
                    'token':localStorage.getItem('token')
                    },
            }
            console.log(this.img)
        Axios .put( localStorage.getItem("api_url")+"/admin/menu/"+this.form.id,fd,option)

        .then((result) => {
            console.log(result)
            localStorage.setItem('updateTable',true)
            localStorage.removeItem('selected')
            this.$router.push('/dashboard/manage/menu')
        }).catch((err) => {
            
        });
      },
      saveUser () {
        this.sending = true

        window.setTimeout(() => {
          this.submit()
          this.userSaved = true
          this.sending = false
          this.clearForm()          
        }, 10)
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
  #editMenu{
    position: relative;
    top: 35px;
    left: 15px;
    height: 300px;
  }
  @keyframes showing{
      0%{height: 0px}
  }
  *{
    animation: showing;
  }
</style>