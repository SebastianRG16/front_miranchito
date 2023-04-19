<template>
  <div
    class="top-10 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none transition duration-300"
  >
    <div
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
    >
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none transition duration-300"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 mb-5"
        >
          <h5
            class="text-xl font-bold leading-normal text-neutral-800"
            id="exampleModalScrollableLabel"
          >
            Agregando cliente
          </h5>
          <button
            type="button"
            class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form @submit.prevent="agregarCliente" class="px-8">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="nombre"
              required
              type="text"
              name="nombre_cliente"
              id="nombre_cliente"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              placeholder=" "
            />
            <label
              for="nombre_cliente"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Nombre completo</label
            >
          </div>
          <div class="grid mb-6 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full group">
              <input
                v-model.trim="identificacion"
                required
                type="text"
                name="identificacion_cliente"
                id="identificacion_cliente"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                placeholder=" "
              />
              <label
                for="identificacion_cliente"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Identificacion</label
              >
            </div>
            <div class="relative z-0 w-full group">
              <input
                v-model.trim="telefono"
                required
                type="text"
                name="telefono_cliente"
                id="telefono_cliente"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                placeholder=" "
              />
              <label
                for="telefono_cliente"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Telefono</label
              >
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="correo"
              required
              type="text"
              name="correo_cliente"
              id="correo_cliente"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              placeholder=" "
            />
            <label
              for="correo_cliente"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Correo electronico</label
            >
          </div>
          <div class="grid mb-6 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full group">
              <input
                v-model.trim="ciudad"
                required
                type="text"
                name="ciudad_cliente"
                id="ciudad_cliente"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                placeholder=" "
              />
              <label
                for="ciudad_cliente"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Ciudad de residencia</label
              >
            </div>
            <div class="relative z-0 w-full group">
              <input
                v-model.trim="estado"
                required
                type="text"
                name="estado_cliente"
                id="estado_cliente"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                placeholder=" "
              />
              <label
                for="estado_cliente"
                class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Estado</label
              >
            </div>
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
          >
            <button
              @click="limpiar()"
              type="button"
              class="inline-block bg-[#0D2231] text-white rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transisiton duration-300 hover:text-[#eb2226]"
            >
              Cancelar
            </button>
            <button
              type="submit"
              class="ml-1 bg-[#0D2231] inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-300 hover:text-[#2da942]"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    nombre: "",
    identificacion: "",
    telefono: "",
    correo: "",
    ciudad: "",
    estado: "",
    clientes: [],
  }),
  methods: {
    async agregarCliente() {
      try {
        await axios
          .post("//localhost:3000/clientes", {
            nombre: this.nombre,
            identificacion: this.identificacion,
            telefono: this.telefono,
            correo: this.correo,
            ciudad: this.ciudad,
            estado: this.estado,
          })
          .then((response) => {
            if (response.status == 200) {
              this.limpiar();
            }
          })
          .catch((error) => {
            this.msgerror = "Error creando productos";
          });
      } catch (error) {
        this.msgerror = "Error creando productos";
      }
    },
    limpiar() {
      this.$emit("datosActualizados");
      this.nombre = "";
      this.identificacion = "";
      this.telefono = "";
      this.correo = "";
      this.ciudad = "";
      this.estado = "";
    },
  },
};
</script>

<style></style>
