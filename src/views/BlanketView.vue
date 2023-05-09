<template>
  <div class="bg-[#FFF] dark:bg-gray-800">
    <button
      @click="sidebar"
      data-drawer-target="logo-sidebar"
      data-drawer-toggle="logo-sidebar"
      aria-controls="logo-sidebar"
      type="button"
      :class="bottonSidebar"
      class="inline-flex md:hidden items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button>
    <div
      id="logo-sidebar"
      :class="ClaseSidebar"
      class="flex flex-col overflow-y-auto bg-gray-50 dark:bg-gray-900 fixed top-0 left-0 z-40 w-64 h-screen md:translate-x-0 duration-300"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4">
        <div class="flex grid-col-2 items-center pl-2.5 mb-5">
          <router-link to="/" class="">
            <img
              src="../assets/images/LogoMiranchito.png"
              class="h-6 mr-3 md:h-7"
            />
          </router-link>
          <button href="" class="md:hidden pl-8" @click="sidebar">
            <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
          </button>
        </div>
        <ul class="space-y-2">
          <li @click="sidebar">
            <router-link
              to="/blanket/"
              class="flex items-center dark:text-white p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'home']" />
              <span class="ml-3 dark:text-white">Inicio</span>
            </router-link>
          </li>
          <li @click="sidebar">
            <router-link
              to="ver-venta"
              class="flex items-center p-2 dark:text-white text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
              <span class="flex-1 ml-3 whitespace-nowrap dark:text-white"
                >Ventas</span
              >
            </router-link>
          </li>
          <li @click="sidebar">
            <router-link
              to="hacer-venta"
              class="flex items-center p-2 text-base dark:text-white font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'cart-plus']" />
              <span class="flex-1 ml-3 whitespace-nowrap dark:text-white"
                >Hacer venta</span
              >
              <!-- <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >12</span
              > -->
            </router-link>
          </li>
          <li @click="sidebar">
            <router-link
              to="ver-clientes"
              class="flex items-center dark:text-white p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'users']" />
              <span class="flex-1 ml-3 whitespace-nowrap dark:text-white"
                >Clientes</span
              >
            </router-link>
          </li>
          <li @click="sidebar">
            <router-link
              to="ver-productos"
              class="flex items-center dark:text-white p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'warehouse']" />
              <span class="flex-1 ml-3 whitespace-nowrap dark:text-white"
                >Productos</span
              >
            </router-link>
          </li>
          <li @click="sidebar">
            <router-link
              to="agregar-productos"
              class="flex items-center p-2 dark:text-white text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <font-awesome-icon :icon="['fas', 'clipboard-list']" size="xl" />
              <span class="flex-1 ml-3 whitespace-nowrap dark:text-white"
                >Agregar productos</span
              >
            </router-link>
          </li>
        </ul>
      </div>
      <div class="flex pb-8 pl-4 space-x-6">
        <p class="font-bold dark:text-white">Modo oscuro/claro</p>
        <font-awesome-icon
          :icon="['fas', 'moon']"
          @click="changeDarkmode"
          class="text-dark dark:text-white flex items-end cursor-pointer"
          size="xl"
        />
      </div>
    </div>

    <div class="p-4 h-screen md:ml-64">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ClaseSidebar: "-translate-x-full",
  }),
  methods: {
    sidebar() {
      if (this.ClaseSidebar == "-translate-x-full") {
        this.ClaseSidebar = "";
      } else {
        this.ClaseSidebar = "-translate-x-full";
      }
    },
  },
};
</script>
<script setup>
import { ref } from "vue";
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
const toggleDarkMode = ref(document.documentElement.className === "dark");

const changeDarkmode = () => {
  toggleDarkMode.value = document.documentElement.classList.toggle("dark");
  toggleDarkMode.value
    ? (localStorage.theme = "dark")
    : (localStorage.theme = "light");
};
</script>

<style></style>
