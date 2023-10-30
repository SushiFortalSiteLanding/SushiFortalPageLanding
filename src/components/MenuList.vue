<script setup>
import GridProduct from './GridProduct.vue';
import { useMenuStore } from '../stores/menu.js'

const menuStore = useMenuStore()

</script>

<template>
    <section class="pb-20 text-red-600 bg-white">

        <a class="py-8" id="Cardapio"></a>
        <div class="py-8 lg:py-14">
            <p class="text-2xl font-bold text-center text-black lg:text-4xl">Nosso Cardápio</p>
        </div>

        <GridProduct title="Entradas" :array="menuStore.menuEntradas"/>

        <GridProduct title="Combos a parti de 1real a peça" :array="menuStore.menuCombos"/>

        <GridProduct title="Combo Plus" :array="menuStore.menuCombosPlus"/>

        <GridProduct title="Combo Temaki" :array="menuStore.menuComboTemaki"/>

        <GridProduct title="Promo" :array="menuStore.menuPromo"/>

        <GridProduct title="Combinado Fortal" :array="menuStore.menuCombinadoFortal"/>

        <GridProduct title="Hot Roll" :array="menuStore.menuHotRoll"/>

        <GridProduct title="Jhou (5 Unidades)" :array="menuStore.menuJhou"/>

        <GridProduct title="Niguiri (4 Unidades)" :array="menuStore.menuNiguiri"/>

        <GridProduct title="Sashimi (5 Unidades)" :array="menuStore.menuSashimi"/>

        <GridProduct title="Uramaki (4 Unidades)" :array="menuStore.menuUramaki"/>

        <GridProduct title="Hossomaki (4 Unidades)" :array="menuStore.menuHossomaki"/>

        <GridProduct title="Yakisoba" :array="menuStore.menuYakisoba"/>

        <GridProduct title="Temakis" :array="menuStore.menuTemakis"/>

        <GridProduct title="Dog Roll" :array="menuStore.menuDogRoll"/>

        <GridProduct title="Poke" :array="menuStore.menuPoke"/>

        <GridProduct title="Pratos Quentes" :array="menuStore.menuPratosQuentes"/>

        <GridProduct title="Yakimeshi 700g" :array="menuStore.menuYakimeshi"/>

        <GridProduct title="Complementos" :array="menuStore.menuComplementos"/>

        <GridProduct title="Bebidas" :array="menuStore.menuBebidas"/>

        

    </section>
</template>
