<template>
    <div>        
        <md-list>
          <md-list-item  to="/dashboard/home">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </md-list-item>

          <md-list-item to="/dashboard/manage/menu">
            <md-icon>list_alt</md-icon>
            <span class="md-list-item-text">Manage Menu</span>
          </md-list-item>

          <md-list-item to="/dashboard/manage/kue">
            <md-icon>cake</md-icon>
            <span class="md-list-item-text">Manage Kue</span>
          </md-list-item>

          <md-list-item to="/dashboard/addAdmin">
            <md-icon>person_add</md-icon>
            <span class="md-list-item-text">Tambah Admin</span>
          </md-list-item>

          <md-list-item to="/dashboard/home">
            <md-icon>assignment</md-icon>
            <span class="md-list-item-text">Laporan Bulanan</span>
          </md-list-item>
        </md-list>
    </div>
</template>