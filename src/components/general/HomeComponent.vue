<template>
  <div class="h-full w-full">
    <div class="p-4 rounded-lg dark:border-gray-700">
      <div
        class="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4"
      >
        <div
          class="flex items-center justify-center h-24 rounded bg-[#eb2226] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex flex-col">
            <font-awesome-icon
              :icon="['fas', 'warehouse']"
              size="xl"
              style="color: #eb2226"
              class="p-4"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">
              {{ productos.length }}
            </p>
            <p class="">Total productos</p>
          </div>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-[#13318b] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex">
            <font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              size="xl"
              style="color: #13318b"
              class="p-4"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">340</p>
            <p class="">Total ventas</p>
          </div>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-[#c9873b] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex">
            <font-awesome-icon
              :icon="['fas', 'users']"
              size="xl"
              style="color: #c9873b"
              class="p-4"
            />
          </div>

          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">20</p>
            <p class="">Total clientes</p>
          </div>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-[#2da942] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex">
            <font-awesome-icon
              :icon="['fas', 'coins']"
              size="xl"
              style="color: #2da942"
              class="p-4"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">$210000</p>
            <p class="">Total ingresos</p>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-5 flex gap-4 flex items-center justify-center mb-4 rounded"
      >
        <div
          class="col-span-3 flex justify-center items-center bg-gray-50 h-48"
        >
          <p>Actividad reciente</p>
        </div>
        <div
          class="col-span-2 flex justify-center items-center bg-gray-50 h-48"
        >
          <p>Lista de clientes</p>
        </div>
      </div>
    </div>
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
    await axios
      .get(url)
      .then(
        (response) => (
          (this.productos = response.data), console.log(response.data)
        )
      );
  },
  methods: {},
};
</script>

<style></style>
