<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart.js';

const modalFormProduct = ref(false)

const cartStore = useCartStore()

let menu = ref(false)

const showMenu = () => {
    menu.value = !menu.value
}
</script>

<template>
    <nav class="bg-black text-white fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="../assets/images/logo.avif" class="h-8 mr-3" alt="Flowbite Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sushi Fortal</span>
            </a>
            <div class="flex gap-1 md:order-2">
                <button type="button" @click="modalFormProduct = true"
                    class="relative focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-white px-2 py-2 text-center mr-1 md:mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <div class="absolute bottom-1 right-0">
                        <p class="">
                            {{ cartStore.cartItems.length }}
                        </p>
                    </div>
                </button>
                <button @click="showMenu" data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div :class="{ 'md:block': menu, 'hidden md:block': !menu }" class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black text-white">
                    <li>
                        <a href="#Cardapio"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Cardapio</a>
                    </li>
                    <!--
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
                    </li>
                    -->
                </ul>
            </div>
        </div>
    </nav>

    <Transition>
        <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
            v-show="modalFormProduct">
            <div class="relative w-4/5 lg:mx-auto lg:w-2/5">
                <div class="w-full pt-8 pb-10 lg:pr-8 bg-white rounded-md lg:pl-9">
                    <div class="flex justify-between">
                        <p class="text-2xl font-bold tracking-tight"></p>

                        <button class="mr-5 lg:mr-5" @click="modalFormProduct = false">X</button>
                    </div>

                    <div class="mt-6">
                        <p class="text-2xl text-red-700 text-center font-bold tracking-tight">Meu Carrinho</p>
                    </div>

                    <div v-if="cartStore.cartItems.length > 0">
                        <div class="mt-4 lg:mx-2">
                            <div v-for="(product, index) in cartStore.cartItems" :key="product.id"
                                class="flex justify-between rounded-lg py-3 px-4 mb-3">
                                <p>{{ product.name }}</p>

                                <div class="flex gap-2">
                                    <p>R${{ product.price }}</p>
                                    <button class="text-red-700" @click="cartStore.removeFromCart(product)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-end mt-2 mx-5">
                            <p>Total: R${{ cartStore.cartTotal + '0' }}</p>
                        </div>
                    </div>

                    <div v-else class="my-10">
                        <p class="text-center text-lg">Seu carrinho esta vazio</p>
                    </div>

                    <!--
                    <div>
                        <div class="mb-6">
                            <label for="size" class="block mb-2 text-sm font-medium text-gray-900">Tamanho</label>
                            <input type="text" id="size" v-model="size"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Seu
                                Endereco</label>
                            <input type="text" id="address" placeholder="Rua, 999, Bairro, Cidade, Estado" v-model="address"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="payment" class="block mb-2 text-sm font-medium text-gray-900">Metodo
                                de Pagamento</label>
                            <input type="text" id="payment" v-model="payment"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                required>
                        </div>
                    </div>
                    -->

                    <div class="flex flex-row-reverse mt-10 mr-4">
                        <button type="submit" @click="continueBuy"
                            class="ml-5 px-7 py-2 text-base tracking-tighter text-white bg-red-700 rounded-full">
                            Continuar
                        </button>
                        <button @click="modalFormProduct = false"
                            class="px-7 py-2 text-base tracking-tighter text-red-700 bg-white border border-red-700 rounded-full">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
    <div v-show="modalFormProduct" class="fixed inset-0 z-40 bg-black opacity-75"></div>
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