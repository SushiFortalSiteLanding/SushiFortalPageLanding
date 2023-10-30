<script setup>
import { useMenuStore } from '../stores/menu.js'
import { useCartStore } from '../stores/cart.js';
import { ref } from 'vue';

const menuStore = useMenuStore()

const cartStore = useCartStore()

const addProduct = ref(false)

const addToCart = (product) => {
    addProduct.value = true
    setTimeout(() => addProduct.value = false, 2500)

    cartStore.addToCart(product)
}
</script>

<template>
    <a class="py-8" id="Destaques"></a>
    <section class="pb-28">

        <div class="py-8 lg:py-14">
            <p class="text-2xl font-bold text-center text-black lg:text-4xl">Mais Pedido</p>
        </div>

        <div v-for="product in menuStore.menuDestaques" :key="product.id" class="mb-10">
            <div class="gap-8 mx-4 lg:grid lg:grid-cols-2 lg:mx-20">

                <div class="">
                    <img class="object-cover w-full h-48 rounded-lg lg:h-full" :src="product.image" alt="">
                </div>

                <div class="mx-4 mt-5 lg:mt-20">
                    <p class="text-3xl text-center">{{ product.name }}</p>

                    <p class="mt-4 text-left text-gray-500">{{ product.description }}
                    </p>

                    <div class="flex justify-end mt-4">
                        <p class="text-xl font-bold text-red-700 lg:text-3xl">R${{ product.price }}</p>
                    </div>

                    <div class="mt-4">
                        <button @click="addToCart(product)" class="px-5 py-2.5 bg-red-700 rounded-lg text-white">
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Transition>
        <div v-show="addProduct" class="fixed bottom-4 right-4">
            <div
                class="flex items-center w-full max-w-xs p-4 space-x-4 text-red-700 bg-white divide-x divide-black rounded-lg shadow-xl space-x">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div class="pl-4 text-sm font-bold text-red-700">
                    <p>Add ao Carrinho</p>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>