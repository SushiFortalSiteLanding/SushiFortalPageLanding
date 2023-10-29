<script setup>
import { ref } from 'vue'

const modalFormProduct = ref(false)
</script>

<template>
    <nav class="bg-black text-white fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sushi</span>
            </a>
            <div class="flex gap-1 md:order-2">
                <button type="button" @click="modalFormProduct = true"
                    class="focus:ring-2 focus:outline-none focus:ring-white font-medium rounded-lg text-sm text-white px-2 py-2 text-center mr-1 md:mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
                <button data-collapse-toggle="navbar-sticky" type="button"
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
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                <ul
                    class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">About</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Services</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 ">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <Transition>
        <div>
            <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
                v-show="modalFormProduct">
                <div class="relative w-4/5 lg:mx-auto lg:w-2/5">
                    <div class="w-full pt-8 pb-10 pr-8 bg-white rounded-md pl-9">
                        <div class="flex justify-between">
                            <p class="text-2xl font-bold tracking-tight"></p>

                            <button class="" @click="modalFormProduct = false">X</button>
                        </div>

                        <div class="mt-6">
                            <p class="text-2xl text-red-700 text-center font-bold tracking-tight">Preencha o
                                formulario</p>
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

                        <div class="flex flex-row-reverse mt-10">
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
            <div v-show="modalFormProduct" class="absolute h-screen inset-0 z-40 bg-black opacity-50"></div>
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