<template>
  <div class="w-full h-full">
    <div class="px-5">
      <p class="text-3xl font-semibold mb-5 dark:text-white">Nueva venta</p>
      <div class="mb-5 grid grid-cols-2 flex w-full" v-if="venta.length >= 1">
        <div class="">
          <button
            @click="hacerVenta"
            type="button"
            class="mb-5 inline-block bg-[#0D2231] text-white rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transisiton duration-300 hover:bg-[#2da942]"
          >
            Ejecutar venta
          </button>
          <button
            @click="cancelarVenta"
            type="button"
            class="sm:ml-1 bg-[#0D2231] inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-300 hover:bg-[#eb2226]"
          >
            Cancelar
          </button>
        </div>
        <div class="flex justify-end">
          <font-awesome-icon
            v-if="estadobtn == 0"
            @click="agregarProducto"
            class="pr-10 cursor-pointer"
            size="2xl"
            beat
            :icon="['fas', 'cart-plus']"
            style="color: #13318b"
          />
          <button
            v-if="estadobtn == 1"
            @click="agregarProducto"
            type="button"
            class="mb-5 ml-1 bg-[#0D2231] rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-300 hover:bg-[#eb2226]"
          >
            Cancelar
          </button>
        </div>
      </div>
      <div class="" v-if="venta.length == 0">
        <div class="flex justify-end">
          <font-awesome-icon
            v-if="estadobtn == 0"
            @click="agregarProducto"
            class="pr-10 cursor-pointer"
            size="2xl"
            beat
            :icon="['fas', 'cart-plus']"
            style="color: #13318b"
          />
          <button
            v-if="estadobtn == 1"
            @click="agregarProducto"
            type="button"
            class="mb-5 ml-1 bg-[#0D2231] rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-300 hover:bg-[#eb2226]"
          >
            Cancelar
          </button>
        </div>
      </div>
      <p class="mb-5 text-2xl dark:text-white">
        Total: $ {{ formatoMexico(valorTotal) }}
      </p>
    </div>
    <div
      class="overflow-x-auto transition-300 rounded-lg border dark:border-gray-600 border-gray-200 shadow-md m-5"
    >
      <table
        :class="vistaPrincipal"
        class="flex-col table-auto w-full dark:bg-gray-800 border-collapses bg-white text-left text-sm text-gray-500"
      >
        <thead class="bg-gray-50">
          <tr class="dark:bg-gray-700">
            <th
              scope="col"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              Id de producto
            </th>
            <th
              scope="col"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              Descripcion
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
              class="flex justify-center px-6 py-4 font-medium text-gray-900 dark:text-white"
            >
              Retirar
            </th>
          </tr>
        </thead>
        <tbody
          v-for="(ventas, index) in venta"
          :key="index"
          class="divide-y divide-gray-100 border-t dark:border-gray-600 border-gray-100"
        >
          <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="text-sm">
                <div class="font-medium text-gray-700 dark:text-slate-200">
                  {{ ventas.id }}
                </div>
              </div>
            </th>
            <td class="px-6 py-4">
              <div
                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
              >
                {{ ventas.name }}
              </div>
            </td>
            <td class="px-6 py-4 dark:text-slate-200">{{ ventas.precio }}</td>
            <td class="px-6 py-4">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                1
              </span>
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-center flex gap-4">
                <a @click="eliminarProducto(index)">
                  <font-awesome-icon
                    :icon="['fas', 'trash-can']"
                    class="hover:h-6"
                    size="xl"
                    style="color: #eb2226"
                  />
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ElegirProducto @recibirProducto="recibirProducto" :class="agProducto" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ElegirProducto from "../vistasVentas/ElegirProducto.vue";
export default {
  data: () => ({
    valorTotal: 0,
    restarTotal: 0,
    cantidadProducto: 1,
    estadobtn: 0,
    vistaPrincipal: "hidden",
    agProducto: "",
    nombre: "Sebastian Rodriguez",
    identificacionCliente: "1006856791",
    ultimoId_venta: "",
    venta: [],
    ultimoIdVenta: [],
    ArreglarDatos: [],
  }),
  created: async function () {
    let url = "//localhost:3000/ventasId";
    await axios.get(url).then((response) => {
      this.ultimoIdVenta = response.data;
    });
  },
  methods: {
    agregarProducto() {
      if (this.agProducto == "") {
        this.estadobtn = 0;
        this.agProducto = "hidden";
        this.vistaPrincipal = "";
      } else {
        this.estadobtn = 1;
        this.agProducto = "";
        this.vistaPrincipal = "hidden";
      }
    },
    recibirProducto(producto) {
      this.valorTotal = producto.precio + this.valorTotal;
      this.ArreglarDatos = producto;
      this.venta.push(this.ArreglarDatos);
      this.estadobtn = 0;
      this.agProducto = "hidden";
      this.vistaPrincipal = "";
    },
    async hacerVenta() {
      let today = new Date();
      let fechaActual = today.toLocaleString();
      console.log("esto es venta", this.ultimoId_venta);
      console.log(this.ultimoIdVenta);
      if (this.ultimoIdVenta.length == 0) {
        this.ultimoId_venta = 0;
      } else {
        this.ultimoId_venta =
          this.ultimoIdVenta[this.ultimoIdVenta.length - 1].id_venta;
      }
      // console.log(this.ultimoId_venta + 1);
      try {
        console.log("esto es venta", this.ultimoId_venta);
        for (let index = 0; index < this.venta.length; index++) {
          // console.log(this.ultimoId_venta + 1);
          // console.log(fechaActual);
          // console.log(this.venta[index].id);
          // console.log(this.venta[index].precio);
          // console.log(this.cantidadProducto);
          // console.log(this.nombre);
          // console.log(this.identificacionCliente);
          await axios
            .post("//localhost:3000/ventas", {
              id: this.ultimoId_venta + 1,
              fecha: fechaActual,
              id_producto: this.venta[index].id,
              total: this.venta[index].precio,
              cantidad: this.cantidadProducto,
              nombrecliente: this.nombre,
              identificacion: this.identificacionCliente,
            })
            .then((response) => {
              if (response.status == 200) {
                // this.cancelarVenta();
              }
            })
            .catch((error) => {
              this.msgerror = "Error creando la venta";
            });
        }
        this.cancelarVenta();
      } catch (error) {
        this.msgerror = "Error creando la venta";
      }
    },
    cancelarVenta() {
      this.valorTotal = 0;
      this.venta = [];
      this.ultimoId_venta = [];
    },
    eliminarProducto(productoEliminar) {
      this.restarTotal = this.venta.splice(productoEliminar, 1);
      this.valorTotal = this.valorTotal - this.restarTotal[0].precio;
    },
    formatoMexico(number) {
      const exp = /(\d)(?=(\d{3})+(?!\d))/g;
      const rep = "$1.";
      let arr = number.toString().split(".");
      arr[0] = arr[0].replace(exp, rep);
      return arr[1] ? arr.join(".") : arr[0];
    },
  },
  components: {
    ElegirProducto,
  },
};
</script>

<style></style>
