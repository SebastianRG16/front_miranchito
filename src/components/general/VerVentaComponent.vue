<template>
  <div
    class="overflow-x-auto rounded-lg border dark:border-gray-600 border-gray-200 shadow-md m-5"
  >
    <table
      class="flex-col table-auto w-full border-collapse bg-white dark:bg-gray-800 text-left text-sm text-gray-500"
    >
      <thead class="bg-gray-50">
        <tr class="dark:bg-gray-700">
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Cliente
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Fecha
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Cantidad
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Total
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Referencia de venta
          </th>
          <th
            scope="col"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Ver factura
          </th>
        </tr>
      </thead>
      <tbody
        v-for="(venta, index) in guardarId"
        :key="index"
        class="divide-y divide-gray-100 border-t dark:border-gray-600 border-gray-100"
      >
        <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
          <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="text-sm">
              <div class="font-medium text-gray-700 dark:text-slate-200">
                {{ venta.nombrecliente }}
              </div>
              <div class="text-gray-400 dark:text-slate-400">
                C.C {{ venta.identificacion }}
              </div>
            </div>
          </th>
          <td class="px-6 py-4">
            <div
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              {{ venta.fecha }}
            </div>
          </td>
          <td class="px-6 py-4 dark:text-slate-200">{{ venta.cantidad }}</td>
          <td class="px-6 py-4">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              <span class="text-green-700">$</span>
              {{ formatoMexico(venta.total) }}
            </span>
          </td>
          <td
            class="px-6 py-4 flex justify-center items-center dark:text-slate-200"
          >
            {{ venta.id_venta }}
          </td>
          <td class="px-6 py-4">
            <div class="flex justify-center">
              <a class="cursor-pointer">
                <font-awesome-icon
                  :icon="['fas', 'file-invoice']"
                  size="2xl"
                  style="color: #c9873b"
                />
              </a>
              <!-- <a x-data="{ tooltip: 'Delete' }" href="#">
                <font-awesome-icon
                  :icon="['fas', 'trash-can']"
                  class="hover:h-6"
                  size="xl"
                  style="color: #eb2226"
                />
              </a>
              <a x-data="{ tooltip: 'Edite' }" href="#">
                <font-awesome-icon
                  class="hover:h-6"
                  :icon="['fas', 'pen-to-square']"
                  size="xl"
                  style="color: #13318b"
                />
              </a> -->
            </div>
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
    estadoVista: "hidden",
    ventas: [],
    guardarId: [],
  }),
  created: async function () {
    let url = "//localhost:3000/ventas";
    let Posicion = 0;
    let cantidad = 0;
    let totalVenta = 0;
    await axios.get(url).then((response) => {
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
