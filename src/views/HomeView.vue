<script setup>
import MainLayout from '../layout/MainLayout.vue';
import HomeSection from '../components/HomeSection.vue'
import MostRequested from '../components/MostRequested.vue'
import MenuList from '../components/MenuList.vue';
</script>

<template>
  <MainLayout>
    <HomeSection />

    <MenuList />
    
    <MostRequested />
  </MainLayout>
</template>

