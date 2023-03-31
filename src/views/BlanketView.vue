<template>
  <div class="bg-[#FFF] h-screen">
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
      class="flex flex-col fixed top-0 left-0 z-40 w-64 h-screen md:translate-x-0 duration-300"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
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
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3">Inicio</span>
            </router-link>
          </li>
          <li @click="sidebar">
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Ventas</span>
            </a>
          </li>
          <li @click="sidebar">
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                ></path>
                <path
                  d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Hacer venta</span>
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                >3</span
              >
            </a>
          </li>
          <li @click="sidebar">
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Clientes</span>
            </a>
          </li>
          <li @click="sidebar">
            <router-link
              to="ver-productos"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Productos</span>
            </router-link>
          </li>
          <li @click="sidebar">
            <router-link
              to="agregar-productos"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap"
                >Agregar productos</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="p-4 h-screen md:ml-64">
      <router-view />
    </div>
  </div>
</template>

<script>
import HomeComponent from "../components/general/HomeComponent.vue";
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
  components: {
    HomeComponent,
  },
};
</script>

<style></style>
