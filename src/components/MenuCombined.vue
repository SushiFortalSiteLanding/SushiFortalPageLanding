<script setup>
import ModalCombined from './ModalCombined.vue';
import { ref } from 'vue';

const props = defineProps(['title', 'array'])

const addProduct = ref(false)

const products = props.array.map(product => ({
    ...product,
    showDescriptionCombined: ref(false),
    modalSet: ref(false)
}))

const addToCart = (product) => {
    product.modalSet = false
    addProduct.value = true
    setTimeout(() => addProduct.value = false, 2500)
}

const setOptions = (product) => {
    product.showDescriptionCombined = false
    product.modalSet = true
}
</script>

<template>
    <section class="pb-14 lg:pb-24">
        <div class="my-4 ml-6 text-left">
            <h2 class="text-xl font-bold text-black lg:text-3xl">
                {{ title }}</h2>
        </div>

        <div class="flex justify-center mx-3">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-2 lg:gap-x-4 gap-y-5">

                <div v-for="product in array" :key="product.id"
                    class="relative flex flex-col w-full overflow-hidden bg-white border border-gray-100 rounded-lg shadow-md">
                    <div @click="product.showDescriptionCombined = true"
                        class="relative flex h-48 mx-3 mt-3 overflow-hidden lg:h-60 rounded-xl" href="#">
                        <img class="object-cover w-full" :src="product.image" :alt="product.name" />
                        <span :title="product.description"
                            class="absolute top-0 left-0 m-2 text-sm font-medium text-center text-white rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                        </span>
                    </div>
                    <div class="px-2 pb-5 mt-4 lg:px-5">
                        <div class="h-16">
                            <p class="text-lg tracking-tight text-center lg:text-xl">{{ product.name }}</p>
                        </div>
                        <div class="flex items-center justify-center gap-1 mt-2 mb-5 lg:gap-5">
                            <p class="text-lg font-bold lg:text-3xl">R${{ product.price }}</p>
                        </div>

                        <button @click="product.modalSet = true"
                            class="flex items-center justify-center w-full rounded-md bg-red-700 px-5 py-2.5 text-center text-sm lg:font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Montar</button>
                    </div>

                    <Transition>
                        <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
                            v-show="product.modalSet">
                            <ModalCombined :product="product" :quantity="product.quantity"
                                @close-modal="product.modalSet = false" @add-product="addToCart(product)" />
                        </div>
                    </Transition>
                    <div v-show="product.modalSet" class="fixed inset-0 z-40 bg-black opacity-75"></div>

                    <Transition>
                        <div class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto"
                            v-show="product.showDescriptionCombined">
                            <div class="relative w-4/5 lg:mx-auto lg:w-2/5">
                                <div class="w-full pt-8 pb-10 bg-white rounded-md lg:pr-8 lg:pl-9">
                                    <div class="flex justify-end">
                                        <button class="mr-5 lg:mr-5" @click="product.showDescriptionCombined = false">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="mx-4 mt-3 lg:mx-10">
                                        <div class="text-center">
                                            <p class="text-red-700 text-lg lg:text-xl">{{ product.name }}</p>
                                        </div>

                                        <div class="mt-4">
                                            <img class="object-cover w-full rounded-lg" :src="product.image"
                                                :alt="product.name" />
                                        </div>

                                        <div class="mt-5">
                                            <p class="text-black">{{ product.description }}</p>
                                        </div>
                                    </div>

                                    <div class="flex flex-row-reverse mt-10 mr-5">
                                        <button type="submit" @click="setOptions(product)"
                                            class="py-2 ml-5 text-base tracking-tighter text-white bg-red-700 rounded-full px-7">
                                            Montar
                                        </button>
                                        <button @click="product.showDescriptionCombined = false"
                                            class="py-2 text-base tracking-tighter text-red-700 bg-white border border-red-700 rounded-full px-7">
                                            Fechar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <div v-show="product.showDescriptionCombined" class="fixed inset-0 z-40 bg-black opacity-75"></div>
                </div>
            </div>
        </div>

        <Transition>
            <div v-show="addProduct" class="fixed bottom-4 right-4 z-50">
                <div
                    class="flex items-center w-full max-w-xs p-4 space-x-3 text-red-700 bg-white divide-x divide-black rounded-lg shadow-xl space-x">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <div class="pl-4 text-sm font-bold text-red-700">
                        <p>Adicionado ao Carrinho!</p>
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