import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {

    const items = ref([])

    const cartItems = items.value

    const cartTotal = computed(() => {
        return items.value.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(1);
      });

    function addToCart(item) {
        items.value.push(item)

        console.log(items.value)
    }

    function removeFromCart(product) {
        const index = items.value.findIndex((item) => item.id === product.id);
        if (index !== -1) {
          items.value.splice(index, 1);
        }
      }

    function clearCart() {
        items.value = []
    }

    return {
        items,
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
    }
})