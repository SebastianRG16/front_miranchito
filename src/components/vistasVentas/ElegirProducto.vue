<template>
  <div>
    <table
      class="flex-col table-auto w-full border-collapse bg-white dark:bg-gray-700 text-left text-sm text-gray-500"
    >
      <thead class="bg-gray-50">
        <tr class="dark:bg-gray-700">
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Producto
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Precio
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Cantidad
          </th>
          <th
            scope="col"
            class="flex justify-center px-6 py-4 font-medium text-gray-900"
          ></th>
        </tr>
      </thead>
      <tbody
        v-for="(producto, index) in productos"
        :key="index"
        class="divide-y dark:bg-gray-800 dark:border-gray-600 divide-gray-100 border-t border-gray-100"
      >
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
          <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="relative h-10 w-10">
              <img
                class="h-full w-full rounded-full object-cover object-center"
                :src="imgBase64 + producto.nombre"
                alt=""
              />
              <span
                class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
              ></span>
            </div>
            <div class="text-sm inline-flex items-center">
              <div
                class="font-medium text-lg text-gray-700 dark:text-slate-200"
              >
                {{ producto.name }}
              </div>
            </div>
          </th>
          <td class="px-6 py-4">
            <div
              class="inline-flex text-md items-center gap-1 rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-600"
            >
              $ {{ formatoMexico(producto.precio) }}
            </div>
          </td>
          <td class="px-6 py-4 text-lg dark:text-slate-200">
            {{ totalProductos[index].cantidad }}
          </td>
          <td class="px-6 py-4 flex">
            <div class="flex text-lg flex inline-flex text-md">
              <a @click="agregarProduc(producto)">
                <font-awesome-icon
                  class="cursor-pointer"
                  size="xl"
                  :icon="['fas', 'cart-plus']"
                  style="color: #13318b"
                />
              </a>
            </div>
            <!-- <div
              class="flex text-lg flex inline-flex text-md items-center gap-1 rounded-full bg-red-50 px-2 py-1 font-semibold text-red-600 gap-4"
            >
              <a class="cursor-pointer" @click="agregarVenta(producto)"
                ><font-awesome-icon :icon="['fas', 'minus']"
              /></a>
              <p v-if="ventaProducto.length <= 0">0</p>
              <div v-else>
                <div v-for="(ventas, i) in ventaProducto" :key="i">
                  <div v-if="ventas.id == producto.id">
                    <p v-if="ventas.cantidad != 0">
                      {{ ventas.cantidad }}
                    </p>
                  </div>
                  <div v-if="ventas.id != producto.id">
                    <p>0</p>
                  </div>
                </div>
              </div>
              <a class="cursor-pointer" @click="agregarVenta(producto)"
                ><font-awesome-icon :icon="['fas', 'plus']"
              /></a>
            </div> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    estad: [],
    totalProductos: [],
    ventaProducto: [],
    imgBase64: "data:image/*;base64,",
    productos: [],
  }),
  created: async function () {
    let url = "//localhost:3000/api/articulos";
    await axios.get(url).then((response) => {
      this.productos = response.data;
      this.totalProductos = response.data;
    });
  },
  methods: {
    agregarProduc(producto) {
      this.ventaProducto = producto;
      this.$emit("recibirProducto", this.ventaProducto);
    },
    formatoMexico(number) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = "$1.";
      let arr = number.toString().split(".");
      arr[0] = arr[0].replace(exp, rep);
      return arr[1] ? arr.join(".") : arr[0];
    },
  },
};
</script>

<style></style>
