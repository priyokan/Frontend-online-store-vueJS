<template>
    <div>
         <md-card class="md-accent" md-with-hover>
            <md-ripple>

                <md-card-content>
                <div class="md-title" style="color:#ffffff"> Hapus {{namaKue}} </div>
                    Apa anda yakin?
                </md-card-content>

                <md-card-actions>
                <md-button @click="hapus">yakin</md-button>
                </md-card-actions>
            </md-ripple>
        </md-card>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data() {
        return {
            Id:null,
            namaKue :null,
        }
    },
    methods: {
        hapus(){

            const option = {
                headers: {
                        'x-device-id': 'stuff',
                        'Content-Type': 'multipart/form-data',
                        'token':localStorage.getItem('token')
                        },
                }
            Axios .delete( localStorage.getItem("api_url")+"/admin/kue/"+this.Id,option)
            .then((result) => {
                console.log(result)
                localStorage.setItem('updateTable',true)
                localStorage.removeItem('selected')
                this.$router.replace('/dashboard/manage/kue/')
            }).catch((err) => {
                
              });

        },
    },
    destroyed() {        
    },
    updated() {
        
    },
    mounted() {
        var getData = localStorage.getItem('selected')
        getData = JSON.parse(getData)

        this.Id=getData._id
        this.namaKue=getData.namaKue
    },
}
</script>