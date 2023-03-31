<template>
  <div
    class="w-full flex grid gap-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 place-items-stretch justify-center items-center"
  >
    <div
      v-for="(producto, index) in productos"
      :key="index"
      class="flex mb-5 items-center justify-center"
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-8">
        <div class="flex h-[200px] items-center justify-center">
          <img
            class="w-full"
            src="../../assets/images/vacAnimada.png"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="py-4">
          <div class="font-bold text-lg mb-2">{{ producto.name }}</div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-gray-900"
            >${{ producto.precio }}</span
          >
          <button
            class="rounded-lg text-sm px-5 py-2 text-center text-[#FFFFFF] font-bold bg-[#eb2226] hover:bg-[#0D2231] duration-300"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="flex mb-5 items-center justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-8">
        <div class="flex h-[200px] items-center justify-center">
          <img
            class="w-full"
            src="../../assets/images/vacAnimada.png"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="py-4">
          <div class="font-bold text-xl mb-2">Nombre producto</div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900">$599</span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</a
          >
        </div>
      </div>
    </div> -->
    <!-- <div class="flex mb-5 items-center justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-8">
        <div class="flex h-[200px] items-center justify-center">
          <img
            class="w-full"
            src="../../assets/images/vacAnimada.png"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="py-4">
          <div class="font-bold text-xl mb-2">Nombre producto</div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900">$599</span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</a
          >
        </div>
      </div>
    </div> -->
    <!-- <div class="flex mb-5 items-center justify-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg p-8">
        <div class="flex h-[200px] items-center justify-center">
          <img
            class="w-full"
            src="../../assets/images/vacAnimada.png"
            alt="Sunset in the mountains"
          />
        </div>
        <div class="py-4">
          <div class="font-bold text-xl mb-2">Nombre producto</div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900">$599</span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</a
          >
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    productos: [],
  }),
  created: async function () {
    let url = "//localhost:3000/api/articulos";
    // let url = "//localhost:5000/images";
    await axios.get(url).then((response) => (this.productos = response.data));
    console.log(this.productos[1].precio);
  },
  methods: {},
};
</script>

<style></style>
