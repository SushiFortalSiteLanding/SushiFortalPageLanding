<script setup>
import { useMenuStore } from '../stores/menu.js'
import { useCartStore } from '../stores/cart.js';
import { ref } from 'vue'

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
    <section class="bg-black text-red-600 pb-20">

        <div class="py-8 lg:py-14">
            <p class="text-center text-2xl lg:text-4xl font-bold text-white">Nosso Cardapio</p>
        </div>

        <div class="flex justify-center mx-3">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-4 gap-y-5">

                <div v-for="product in menuStore.menu" :key="product.id"
                    class="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                    <div class="relative mx-3 mt-3 flex h-48 lg:h-60 overflow-hidden rounded-xl" href="#">
                        <img class="object-cover w-full"
                            src="https://cdn0.tudoreceitas.com/pt/posts/4/3/5/hot_roll_com_cream_cheese_5534_600_square.jpg"
                            :alt="product.name" />
                        <span :title="product.description"
                            class="absolute top-0 left-0 m-2 rounded-full text-center text-sm font-medium text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </span>
                    </div>
                    <div class="mt-4 px-2 lg:px-5 pb-5">
                        <p>
                        <h5 class="text-lg lg:text-xl text-center tracking-tight">{{ product.name }}</h5>
                        </p>
                        <div class="mt-2 mb-5 flex items-center justify-center gap-1 lg:gap-5">
                            <p class="text-sm lg:text-lg font-bold">
                                8 pecas por:
                            </p>

                            <p class="lg:flex lg:gap-1">
                            <p class="text-lg lg:text-3xl font-bold">R${{ product.price }}</p>

                            </p>
                        </div>
                        <button @click="addToCart(product)"
                            class="flex items-center justify-center w-full rounded-md bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add ao carrinho</button>
                    </div>
                </div>

            </div>
        </div>

        <Transition>
            <div v-show="addProduct" class="fixed bottom-4 right-4">
                <div
                    class="flex text-red-700 items-center w-full max-w-xs p-4 space-x-4 bg-white divide-x divide-black rounded-lg shadow-xl space-x">
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

    </section>
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