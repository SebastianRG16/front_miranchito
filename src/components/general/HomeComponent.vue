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
              {{ productos }}
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
            <p class="text-2xl font-bold text-gray-900">{{ ventasTotal }}</p>
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
            <p class="text-2xl font-bold text-gray-900">{{ clientes }}</p>
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
            <p class="text-2xl font-bold text-gray-900">$ {{ ingreso }}</p>
            <p class="">Total ingresos</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-1 xl:grid-cols-2">
        <div class="flex flex-col bg-gray-50 h-80">
          <div class="overflow-x-auto rounded-lg border shadow-md">
            <table
              class="flex-col table-auto w-full border-collapse bg-white text-left text-sm text-gray-500"
            >
              <thead class="bg-gray-50 w-full">
                <tr>
                  <th
                    scope="col"
                    colspan="4"
                    class="px-6 py-4 text-lg font-medium text-gray-900"
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
                class="divide-y divide-gray-100 border-t border-gray-100"
              >
                <tr class="hover:bg-gray-50">
                  <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    <div class="text-sm">
                      <div class="font-medium text-gray-700">
                        {{ venta.nombrecliente }}
                      </div>
                      <div class="text-gray-400">{{ venta.fecha }}</div>
                    </div>
                  </th>
                  <td class="px-6 py-4">
                    <div
                      class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                    >
                      {{ venta.cantidad }}
                    </div>
                  </td>
                  <td class="px-6 py-4">{{ venta.id_venta }}</td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                    >
                      <span class="text-green-700">$</span>
                      {{ venta.total }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center bg-gray-50 h-48">
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
    productos: 0,
    ingreso: 0,
    clientes: 0,
    ventasTotal: 0,
    ventas: [],
    guardarId: [],
  }),
  created: async function () {
    let url = "//localhost:3000/api/cantidadArticulo";
    let url1 = "//localhost:3000/cantidadIngresos";
    let url2 = "//localhost:3000/clientesCantidad";
    let url3 = "//localhost:3000/cantidadVentas";
    let url4 = "//localhost:3000/ventas";
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
  },
  methods: {},
};
</script>

<style></style>
