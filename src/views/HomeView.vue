<script setup>
import MainLayout from '../layout/MainLayout.vue';
import HomeSection from '../components/HomeSection.vue'
import MostRequested from '../components/MostRequested.vue'
import MenuList from '../components/MenuList.vue';
import MenuSection from '../components/MenuSection.vue';
</script>

<template>
  <MainLayout>
    <HomeSection />

    <MenuSection />
    
    <MenuList />

    <MostRequested />
  </MainLayout>
</template>

