<script setup>
import { onMounted, ref } from 'vue';
import { useMenuStore } from '../stores/menu.js';

const menusType = useMenuStore().menuTypes

const open = ref(false)

const selectedMenu = ref('')

const changeSelectedMenu = (menu) => {
    open.value = false
    selectedMenu.value = menu
}

onMounted(() => {
    changeSelectedMenu(menusType[0].name)
})
</script>

<template>
    <div class="sticky top-[72px] w-full bg-white border-b z-20 px-4 lg:px-10 lg:py-4">
        <div class="relative z-30 w-full lg:w-128">
            <div class="hidden lg:block">
                <div class="flex justify-between px-5 hover:font-medium cursor-pointer" @click="open = !open">
                    <p class="text-lg">{{ selectedMenu }}</p>

                    <button class="transition ease-in-out duration-300" :class="{ 'rotate-180': open, 'rotate-0': !open }">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>

                <Transition>
                    <div v-show="open"
                        class="absolute px-5 top-8 bg-white w-72 lg:w-128 h-52 overflow-y-auto rounded-lg shadow-xl flex flex-row lg:flex-col">
                        <a :href="menu.location" v-for="menu in menusType">
                            <p @click="changeSelectedMenu(menu.name)" class="text-lg w-full py-2 border-b">{{ menu.name }}
                            </p>
                        </a>
                    </div>
                </Transition>
            </div>

            <div class="flex gap-7 overflow-x-auto lg:hidden py-4">
                <a :href="menu.location" class="flex-shrink-0" v-for="menu in menusType">
                    <p @click="changeSelectedMenu(menu.name)" :class="{ 'border-b-2 border-red-600': selectedMenu == menu.name }">
                        {{ menu.name }}
                    </p>
                </a>
            </div>
        </div>
    </div>
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