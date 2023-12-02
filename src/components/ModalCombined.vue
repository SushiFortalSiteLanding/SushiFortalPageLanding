<script setup>
import { ref, watchEffect } from 'vue';
import { useCartStore } from '../stores/cart.js';
import { useMenuStore } from '../stores/menu.js';

const props = defineProps(['product', 'quantity'])

const emits = defineEmits(['closeModal', 'addProduct'])

const cartStore = useCartStore()
const menuStore = useMenuStore();

const totalQuantity = ref(0);

const selectedOptions = ref([]);

const totalPrice = ref(parseFloat(props.product.price))

const addToCart = (product) => {
    if (totalQuantity.value >= props.quantity / 5) {
        const selectedOptionsText = selectedOptions.value.map(option => `${option.quantity} ${option.name}`).join(', ');
        const nameProduct = `${props.product.quantity} Peças Fortal | (${selectedOptionsText})`;

        totalPrice.value = parseFloat(props.product.price)

        const totalOptionsPrice = selectedOptions.value.reduce((acc, option) => {
            const optionPrice = option.price !== "0.00" ? parseFloat(option.price) * option.quantity : parseFloat(option.price);
            return acc + optionPrice;
        }, 0);

        const totalProductPrice = parseFloat(props.product.price) + totalOptionsPrice;

        const productToAdd = {
            name: nameProduct,
            price: totalProductPrice.toFixed(2),
        };

        cartStore.addToCart(productToAdd)

        emits('addProduct')

        selectedOptions.value = []
    }
}

const closeModal = () => {
    emits('closeModal')
}

const increment = (option) => {
    if (getCount(option) < props.quantity / 5 && totalQuantity.value < props.quantity / 5) {
        totalQuantity.value++
        const existingOptionIndex = selectedOptions.value.findIndex(item => item.name === option.name);
        if (existingOptionIndex !== -1) {
            selectedOptions.value[existingOptionIndex].quantity++;
        } else {
            selectedOptions.value.push({ name: option.name, quantity: 1, price: parseFloat(option.price) });
        }
    }

    totalPrice.value += parseFloat(option.price)
};

const decrement = (option) => {
    const existingOptionIndex = selectedOptions.value.findIndex(item => item.name === option.name);
    if (existingOptionIndex !== -1 && selectedOptions.value[existingOptionIndex].quantity > 0) {
        selectedOptions.value[existingOptionIndex].quantity--;
        totalPrice.value -= parseFloat(option.price);
    }
};

const getCount = (option) => selectedOptions.value.reduce((acc, item) => (item.name === option.name ? acc + item.quantity : acc), 0);

watchEffect(() => {
    totalQuantity.value = selectedOptions.value.reduce((acc, item) => acc + item.quantity, 0);
});

</script>

<template>
    <div class="relative w-[90%] lg:mx-auto lg:w-4/5">
        <div class="w-full pt-8 pb-10 bg-white rounded-md lg:pr-8 lg:pl-9">
            <div class="flex justify-end">
                <button class="mr-5 lg:mr-5" @click="closeModal">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div class="lg:flex gap-2">
                <div class="hidden lg:block">
                    <img class="object-cover w-full rounded-lg" :src="product.image" :alt="product.name" />
                </div>

                <div>
                    <div class="mx-4 mt-3 lg:mx-5">
                        <div class="text-center">
                            <p class="text-red-700 text-lg lg:text-xl">{{ product.name }}</p>
                        </div>

                        <div class="mt-5 lg:px-6">
                            <div class="mb-2 flex gap-0 lg:gap-4 justify-between" v-for="option in menuStore.combinedOptions"
                                :key="option.id">
                                <div class="flex justify-between gap-1">
                                    <p>{{ option.name }}</p>

                                    <p v-if="option.price != '0.00'">+ R$ {{ option.price }}</p>
                                </div>

                                <div class="flex gap-3">
                                    <button
                                        :class="{ 'text-red-700': totalQuantity > 0, 'text-red-300': totalQuantity < 1 }"
                                        :disabled="totalQuantity < 1" @click="decrement(option)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>

                                    <p>{{ getCount(option) }}</p>

                                    <button
                                        :class="{ 'text-red-700': totalQuantity < quantity / 5, 'text-red-300': totalQuantity > quantity / 5 - 1 }"
                                        :disabled="totalQuantity > quantity / 5 - 1" @click="increment(option)">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-2 flex-row-reverse mt-10 mr-2 lg:mr-5">
                        <button type="submit" @click="addToCart(product)" :disabled="totalQuantity < quantity / 5"
                            :class="{ 'bg-red-700': totalQuantity > quantity / 5 - 1, 'bg-red-300': totalQuantity < quantity / 5 }"
                            class="py-2 text-base tracking-tighter text-white rounded-full px-7">
                            Adicionar R$ <span>{{ (totalPrice).toFixed(2) }}</span>
                        </button>
                        <button @click="closeModal"
                            class="py-2 text-base tracking-tighter text-red-700 bg-white border border-red-700 rounded-full px-7">
                            Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>