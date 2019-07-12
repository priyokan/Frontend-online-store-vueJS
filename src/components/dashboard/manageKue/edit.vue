<template>
  <div id='editKue' style="position:absolute">
    <form novalidate class="md-layout" @submit.prevent="validateUser" style="">
      <md-card class="md-layout-item md-size-50 md-small-size-100" style="width: 1100px">
        <md-card-header>
          <div class="md-title">Edit Kue</div>
        </md-card-header>

        <md-card-content style="display:inline-block">
            <div class="md-layout md-gutter"  style="float:left">
              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('namaKue')">
                  <label for="namaKue">Nama Kue</label>
                  <md-input name="namaKue" id="namaKue" autocomplete="given-name" v-model="form.namaKue" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.namaKue.required">Nama Harus diisi</span>
                </md-field>            
              <div class="md-layout-item md-small-size-100" style="margin-top:15px" >
                  <md-field>
                      <label>Deskripsi</label>
                      <md-textarea v-model="form.deskripsi" style="height:130px"></md-textarea>
                  </md-field>
              </div>
              <div class="md-layout-item">
                    <md-field>
                    <md-select v-model="form.menuType" name="menuType" id="menuType" placeholder="Type menu">
                        <md-option v-for="(item, index) in menus" :key="index" :value="item">{{item}}</md-option>
                    </md-select>
                    </md-field>
                </div>
            </div>
            <div style="float:right;padding-top:20px">  
            <md-field :class="getValidationClass('harga')">
                <label>Harga</label>
                <span class="md-prefix">Rp</span>
                <md-input type="number"  v-model="form.harga"></md-input>
                <span class="md-error" v-if="!$v.form.harga.required">Harga Harus diisi</span>
            </md-field>
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
          <md-button type="submit" class="md-primary" :disabled="sending"> Edit </md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {required} from 'vuelidate/lib/validators'
  import Axios from 'axios'
  import FormData from 'form-data'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        id:null,
        namaKue: null,
        deskripsi: null,
        menuType:null,
        harga:null,
        img:null
      },
      userSaved: false,
      sending: false,
      lastUser: null,
      imgUrl: null,
      menus:[]
    }),
    validations: {
      form: {
        namaKue: {
          required,
        },
        harga:{
            required
        }
      }
    },
    methods: {
        imgSelector(e){
            let file = e.target.files[0]
            this.form.img = file
            this.imgUrl=URL.createObjectURL(file)
        },
        getMenu(){
            const option = {
            baseURL: localStorage.getItem("api_url")+"/admin/menu",
            timeout: 1500,
            headers: {'content-type': 'application/x-www-form-urlencoded',
                      'token':localStorage.getItem('token')},
          }
          Axios(option)
          .then((result) => {
            result.data.forEach(el => {
              this.menus.push(el.namaMenu)
            });
          }).catch(() => {
            
          });
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
        this.form.id=null
        this.form.namaKue = null
        this.form.deskripsi = null
        this.form.menuType = null
        this.form.harga = null
        this.form.img= null
      },
      submit(){
        const fd = new FormData()
        fd.append('namaKue',this.form.namaKue)
        fd.append('deskripsi',this.form.deskripsi)
        fd.append('menuType',this.form.menuType)
        fd.append('harga',this.form.harga)
        fd.append('imgKue',this.form.img)
        const option = {
            headers: {
                    'x-device-id': 'stuff',
                    'Content-Type': 'multipart/form-data',
                    'token':localStorage.getItem('token')
                    },
            }
        Axios .put( localStorage.getItem("api_url")+"/admin/kue/"+this.form.id,fd,option)

        .then(() => {
            localStorage.setItem('updateTable',true)
            this.$router.go(-1)
        }).catch(() => {
            
        });
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
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
    },
    beforeMount() {
        var getData = localStorage.getItem('selected')
        getData = JSON.parse(getData)

      this.form.id= getData._id
      this.form.namaKue=getData.namaKue
      this.form.deskripsi=getData.deskripsi
      this.form.menuType = getData.menuType
      this.form.harga = getData.harga
      this.form.img=getData.imgKue

    },
    mounted() {
        this.getMenu()        
    },
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