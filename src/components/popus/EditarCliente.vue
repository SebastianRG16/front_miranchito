<template>
  <div
    :class="modalEditar"
    class="fixed top-0 pt-20 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none transition duration-300 bg-white bg-opacity-50"
  >
    <div
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
    >
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none transition duration-300"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4"
        >
          <h5
            class="text-xl font-bold leading-normal text-neutral-800"
            id="exampleModalScrollableLabel"
          >
            Está editando información de un cliente
          </h5>
          <button
            @click="limpiar"
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
        <div class="relative p-4">
          <div class="relative z-0 w-full mb-6 group">
            <p>Nombre del cliente</p>
            <input
              v-model.trim="nombreClienteGuardar"
              type="text"
              name="nombre_producto"
              id="nombre_producto"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              :placeholder="nombre"
            />
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <p>Identificación</p>
              <input
                v-model.trim="identificacionGuardar"
                type="text"
                name="precio_producto"
                id="precio_producto"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                :placeholder="identificacion"
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <p>Teléfono</p>
              <input
                v-model.trim="telefonoGuardar"
                type="text"
                name="cantidad_producto"
                id="cantidad_producto"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                :placeholder="telefono"
              />
            </div>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <p>Correo electrónico</p>
            <input
              v-model.trim="correoGuardar"
              type="text"
              name="nombre_producto"
              id="nombre_producto"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              :placeholder="correo"
            />
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <p>Ciudad</p>
              <input
                v-model.trim="ciudadGuardar"
                type="text"
                name="precio_producto"
                id="precio_producto"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                :placeholder="ciudad"
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <p>Estado</p>
              <input
                v-model.trim="estadoGuardar"
                type="text"
                name="cantidad_producto"
                id="cantidad_producto"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                :placeholder="estado"
              />
            </div>
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
            @click="datosActualizar()"
            type="button"
            class="ml-1 bg-[#0D2231] inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-300 hover:text-[#2da942]"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    nombreClienteGuardar: "",
    identificacionGuardar: "",
    telefonoGuardar: "",
    correoGuardar: "",
    ciudadGuardar: "",
    estadoGuardar: "",
    msgerror: "",
    nombreProps: "",
  }),
  props: {
    nombre: String,
    identificacion: "",
    contacto: "",
    telefono: "",
    correo: "",
    ciudad: "",
    estado: "",
    id: "",
  },
  methods: {
    async datosActualizar() {
      try {
        console.log(this.nombre);
        await axios
          .patch(`//localhost:3000/clientes/${this.id}`, {
            nombre: this.nombreClienteGuardar,
            identificacion: this.identificacionGuardar,
            contacto: this.telefonoGuardar,
            email: this.correoGuardar,
            ciudad: this.ciudadGuardar,
            estado: this.estadoGuardar,
          })
          .then((response) => {
            if (response.status == 200) {
              console.log("Modificado exitosamente");
              this.limpiar();
            }
          })
          .catch((error) => {
            this.msgerror =
              "Tuvimos un error con nuestro servidor, intentalo nuevamente o comunicate con el equipo de desarrollo";
          });
      } catch (error) {
        this.msgerror =
          "Tuvimos un error el enviar los datos, intentalo nuevamente o comunicate con el equipo de desarrollo";
      }
      // this.$emit("datoNombre", this.nombreClienteGuardar);
    },
    limpiar() {
      this.nombreClienteGuardar = "";
      this.identificacionGuardar = "";
      this.telefonoGuardar = "";
      this.correoGuardar = "";
      this.ciudadGuardar = "";
      this.estadoGuardar = "";
      this.$emit("datosActualizados");
    },
  },
};
</script>

<style></style>
