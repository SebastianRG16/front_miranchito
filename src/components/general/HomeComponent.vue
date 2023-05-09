<template>
  <div class="h-screen w-full dark:bg-gray-800">
    <div class="p-4 rounded-lg dark:border-gray-700">
      <div
        class="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:mb-6"
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
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ productos }}
            </p>
            <p class="dark:text-slate-200">Total productos</p>
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
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ ventasTotal }}
            </p>
            <p class="dark:text-slate-200">Total ventas</p>
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
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ clientes }}
            </p>
            <p class="dark:text-slate-200">Total clientes</p>
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
            <p class="text-2xl font-bold text-gray-900 dark:text-white">
              $ {{ formatoMexico(ingreso) }}
            </p>
            <p class="dark:text-slate-200">Total ingresos</p>
          </div>
        </div>
      </div>
      <div
        class="flex max-xl:hidden w-full flex-nowrap mb-6 grid grid-cols-4 dark:bg-gray-800 justify-center items-center items-stretch gap-4"
        v-if="productosImg.length != 0"
      >
        <div class="flex items-center justify-center">
          <div
            class="flex container mx-auto p-9 items-center dark:bg-gray-700 justify-center max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl h-[200px]"
              :src="imgBase64 + productosImg[0].nombre"
              alt=""
            />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div
            class="flex container mx-auto p-9 max-w-sm rounded-2xl dark:bg-gray-700 items-center justify-center overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl h-[200px]"
              :src="imgBase64 + productosImg[1].nombre"
              alt=""
            />
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="flex items-center justify-center container mx-auto p-9 dark:bg-gray-700 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl h-[200px]"
              :src="imgBase64 + productosImg[2].nombre"
              alt=""
            />
          </div>
        </div>
        <div class="flex items-center">
          <div
            class="flex items-center justify-center container mx-auto p-9 dark:bg-gray-700 max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="rounded-xl h-[200px]"
              :src="imgBase64 + productosImg[3].nombre"
              alt=""
            />
          </div>
        </div>
        <!-- <div class="flex h-[200px]">
          <img class="w-full" :src="imgBase64 + productosImg[0].nombre" />
        </div>
        <div class="flex h-[200px]">
          <img class="w-full" :src="imgBase64 + productosImg[1].nombre" />
        </div>
        <div class="flex h-[200px]">
          <img class="w-full" :src="imgBase64 + productosImg[2].nombre" />
        </div>
        <div class="flex h-[200px]">
          <img class="w-full" :src="imgBase64 + productosImg[3].nombre" />
        </div>
        <div class="flex h-[200px]">
          <img class="w-full" :src="imgBase64 + productosImg[4].nombre" />
        </div>
        <div class="flex h-[200px]">
          <img class="w-full" :src="imgBase64 + productosImg[5].nombre" />
        </div> -->
      </div>
      <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-1 xl:grid-cols-2">
        <div class="flex flex-col h-80 dark:bg-gray-800">
          <div
            class="overflow-x-auto rounded-lg border dark:border-none shadow-md dark:bg-gray-700"
          >
            <table
              class="flex-col table-auto w-full border-collapse text-left text-sm dark:bg-gray-700 text-gray-500"
            >
              <thead class="dark:bg-gray-700 w-full">
                <tr>
                  <th
                    scope="col"
                    colspan="4"
                    class="px-6 py-4 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Listado de ventas
                  </th>
                  <!-- <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Fecha
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Cantidad
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Total
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Referencia de venta
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Ver factura
                  </th> -->
                </tr>
              </thead>
              <tbody
                v-for="(venta, index) in guardarId"
                :key="index"
                class="divide-y divide-gray-100 border-t dark:border-gray-600 dark:bg-gray-700"
              >
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="text-sm">
                      <div
                        class="font-medium text-gray-700 dark:text-slate-200"
                      >
                        {{ venta.nombrecliente }}
                      </div>
                      <div class="text-gray-400 dark:text-slate-400">
                        {{ venta.fecha }}
                      </div>
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    <div
                      class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                    >
                      {{ venta.cantidad }}
                    </div>
                  </td>
                  <td class="px-6 py-4 dark:text-slate-400">
                    {{ venta.id_venta }}
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                      <span class="text-green-700">$</span>
                      {{ formatoMexico(venta.total) }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-col h-80">
          <div
            class="overflow-x-auto rounded-lg border dark:border-none shadow-md"
          >
            <table
              class="flex-col table-auto w-full border-collapse bg-white dark:bg-gray-700 text-left text-sm text-gray-500"
            >
              <thead class="bg-gray-50 dark:bg-gray-700 w-full">
                <tr>
                  <th
                    scope="col"
                    colspan="3"
                    class="px-6 py-4 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Listado de Clientes
                  </th>
                  <!-- <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Fecha
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Cantidad
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Total
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Referencia de venta
                  </th>
                  <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                    Ver factura
                  </th> -->
                </tr>
              </thead>
              <tbody
                v-for="(clienteList, index) in clientesListado"
                :key="index"
                class="divide-y divide-gray-100 border-t dark:border-gray-600 border-gray-100"
              >
                <tr class="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="text-sm">
                      <div
                        class="font-medium text-gray-700 dark:text-slate-200"
                      >
                        {{ clienteList.nombre }}
                      </div>
                      <div class="text-gray-400"></div>
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    <div
                      class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                    >
                      {{ clienteList.identificacion }}
                    </div>
                  </td>
                  <td class="px-6 py-4 dark:text-slate-200">
                    {{ clienteList.contacto }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    productos: 0,
    ingreso: 0,
    clientesListado: [],
    clientes: 0,
    ventasTotal: 0,
    ventas: [],
    guardarId: [],
    productosImg: [],
    imgBase64: "data:image/*;base64,",
  }),
  created: async function () {
    let url = "//localhost:3000/api/cantidadArticulo";
    let url1 = "//localhost:3000/cantidadIngresos";
    let url2 = "//localhost:3000/clientesCantidad";
    let url3 = "//localhost:3000/cantidadVentas";
    let url4 = "//localhost:3000/ventas";
    let url5 = "//localhost:3000/clientes";
    let url6 = "//localhost:3000/api/articulos";
    let Posicion = 0;
    let cantidad = 0;
    let totalVenta = 0;
    await axios
      .get(url)
      .then((response) => (this.productos = response.data["COUNT(*)"]));
    await axios
      .get(url1)
      .then((response) => (this.ingreso = response.data["SUM(total)"]));
    await axios
      .get(url2)
      .then((response) => (this.clientes = response.data["COUNT(*)"]));
    await axios
      .get(url3)
      .then(
        (response) =>
          (this.ventasTotal = response.data["COUNT(DISTINCT id_venta)"])
      );
    await axios.get(url4).then((response) => {
      this.ventas = response.data;
      for (let index = 1; index < this.ventas.length; index++) {
        totalVenta = totalVenta;
        Posicion = Posicion;
        cantidad = cantidad + 1;
        totalVenta = totalVenta + this.ventas[Posicion].total;
        if (this.ventas[index].id_venta != this.ventas[Posicion].id_venta) {
          this.guardarId.push(this.ventas[Posicion]);
          this.ventas[Posicion].cantidad = cantidad;
          this.ventas[Posicion].total = totalVenta;
          cantidad = 0;
          totalVenta = 0;
        }
        Posicion++;
      }
      cantidad = cantidad + 1;
      Posicion = this.ventas.length - 1;
      totalVenta = totalVenta + this.ventas[Posicion].total;
      this.ventas[Posicion].cantidad = cantidad;
      this.ventas[Posicion].total = totalVenta;
      this.guardarId.push(this.ventas[Posicion]);
      this.guardarId.reverse();
    });
    await axios.get(url5).then((response) => {
      this.clientesListado = response.data;
    });
    await axios.get(url6).then((response) => {
      this.productosImg = response.data;
      console.log(this.productosImg);
    });
  },
  methods: {
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
