import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
    const menu = [
        {
            id: 1,
            name: 'Sushi de Salmão',
            description: 'Delicioso sushi de salmão fresco.',
            price: 10.99,
        },
        {
            id: 2,
            name: 'Temaki de Atum',
            description: 'Temaki recheado com atum fresco.',
            price: 8.99,
        },
        {
            id: 3,
            name: 'Sashimi de Peixe Branco',
            description: 'Sashimi de peixe branco com molho especial.',
            price: 12.99,
        },
        {
            id: 4,
            name: 'Roll de Abacate',
            description: 'Roll de sushi com abacate e legumes.',
            price: 9.99,
        },
        {
            id: 5,
            name: 'Gyoza',
            description: 'Gyoza recheado com carne e legumes.',
            price: 6.99,
        },
    ]

    return {
        menu
    }
})