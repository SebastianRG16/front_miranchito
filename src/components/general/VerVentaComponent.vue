<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
    <table
      class="flex-col table-auto w-full border-collapse bg-white text-left text-sm text-gray-500"
    >
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Cliente
          </th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Fecha</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Cantidad
          </th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Total</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Referencia de venta
          </th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">
            Ver factura
          </th>
        </tr>
      </thead>
      <tbody
        v-for="(venta, index) in guardarId"
        :key="index"
        class="divide-y divide-gray-100 border-t border-gray-100"
      >
        <tr class="hover:bg-gray-50">
          <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div class="text-sm">
              <div class="font-medium text-gray-700">
                {{ venta.nombrecliente }}
              </div>
              <div class="text-gray-400">C.C {{ venta.identificacion }}</div>
            </div>
          </th>
          <td class="px-6 py-4">
            <div
              class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
            >
              {{ venta.fecha }}
            </div>
          </td>
          <td class="px-6 py-4">{{ venta.cantidad }}</td>
          <td class="px-6 py-4">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              <span class="text-green-700">$</span>
              {{ venta.total }}
            </span>
          </td>
          <td class="px-6 py-4 flex justify-center items-center">
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
};
</script>

<style></style>
