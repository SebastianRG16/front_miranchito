<template>
  <div class="w-full">
    <div class="pl-6">
      <button
        @click="cambioVista()"
        :class="estado"
        class="bg-transparent hover:bg-[#eb2226] text-[#eb2226] font-semibold hover:text-white py-1 px-10 border border-[#eb2226] hover:border-transparent rounded"
      >
        Agregar cliente
      </button>
    </div>
    <div
      :class="estado"
      class="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5"
    >
      <table
        class="flex-col table-auto w-full border-collapse bg-white text-left text-sm text-gray-500"
      >
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Nombre
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              identificacion
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              contacto
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Estado
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Ciudad
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody
          v-for="(cliente, index) in clientes"
          :key="index"
          class="divide-y divide-gray-100 border-t border-gray-100"
        >
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <!-- <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span
                  class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"
                ></span>
              </div> -->
              <div class="text-sm">
                <div class="font-medium text-gray-700">
                  {{ cliente.nombre }}
                </div>
                <div class="text-gray-400">{{ cliente.email }}</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <div
                class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
              >
                {{ cliente.identificacion }}
              </div>
            </td>
            <td class="px-6 py-4">{{ cliente.contacto }}</td>
            <td class="px-6 py-4">
              <span
                class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                {{ cliente.estado }}
              </span>
            </td>
            <td class="px-6 py-4">{{ cliente.ciudad }}</td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Delete' }" href="#">
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
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <editarCliente :clientes="clientes" />
    <alertaCliente v-on:primerCliente="primerCliente()" :class="estado2" />
    <AgregarCliente
      v-on:datosActualizados="datosActualizados()"
      :class="estado1"
    />
  </div>
</template>

<script>
import axios from "axios";
import AgregarCliente from "../popus/AgregarCliente.vue";
import alertaCliente from "../popus/clienteAlerta.vue";
import editarCliente from "../popus/EditarCliente.vue";

export default {
  data: () => ({
    estado: "hidden",
    estado1: "hidden",
    estado2: "hidden",
    clientes: [],
    clientess: [],
  }),
  created: async function () {
    let url = "//localhost:3000/clientes";
    await axios.get(url).then((response) => {
      this.clientes = response.data;
      if (this.clientes.length < 1) {
        this.clientesVacio();
      } else {
        this.estado = "";
      }
    });
  },
  components: {
    AgregarCliente,
    alertaCliente,
    editarCliente,
  },
  methods: {
    async datosActualizados() {
      let url = "//localhost:3000/clientes";
      await axios.get(url).then((response) => {
        this.clientes = response.data;
        if (this.clientes.length < 1) {
          this.clientesVacio();
        } else {
          this.cambioVista();
        }
      });
    },
    cambioVista() {
      if (this.estado != "") {
        this.estado = "";
        this.estado1 = "hidden";
      } else {
        this.estado = "hidden";
        this.estado1 = "";
      }
    },
    clientesVacio() {
      if (this.clientes.length < 1) {
        this.estado1 = "hidden";
        this.estado = "hidden";
        this.estado2 = "";
      } else {
        this.estado1 = "hidden";
        this.estado = "";
        this.estado2 = "hidden";
      }
    },
    primerCliente() {
      this.estado2 = "hidden";
      this.estado1 = "";
    },
  },
};
</script>

<style></style>
