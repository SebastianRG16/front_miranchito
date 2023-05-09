<template>
  <div
    class="top-10 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none transition duration-300"
  >
    <div
      class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
    >
      <div
        class="pointer-events-auto relative dark:bg-gray-700 flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none transition duration-300"
      >
        <div
          class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 dark:border-gray-600 border-opacity-100 p-4 mb-5"
        >
          <h5
            class="dark:text-white text-xl font-bold leading-normal text-neutral-800"
            id="exampleModalScrollableLabel"
          >
            Registre su producto
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
        <form @submit.prevent="CrearProductos" class="px-8">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="nombreArticulo"
              required
              type="text"
              name="nombre_producto"
              id="nombre_producto"
              class="dark:border-gray-400 dark:text-slate-200 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              placeholder=" "
            />
            <label
              for="nombre_producto"
              class="dark:text-slate-400 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Nombre del artículo</label
            >
          </div>
          <div class="grid mb-6 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model.trim="precioArticulo"
                required
                type="text"
                name="precio_producto"
                id="precio_producto"
                class="block dark:border-gray-400 dark:text-slate-200 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                placeholder=" "
              />
              <label
                for="precio_producto"
                class="dark:text-slate-400 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Precio</label
              >
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                v-model.trim="cantidadArticulo"
                required
                type="text"
                name="cantidad_producto"
                id="cantidad_producto"
                class="block dark:border-gray-400 dark:text-slate-200 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                placeholder=" "
              />
              <label
                for="cantidad_producto"
                class="dark:text-slate-400 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Cantidad</label
              >
            </div>
          </div>
          <div class="mt-1 text-sm text-gray-500 mb-6" id="user_avatar_help">
            <p
              class="block dark:text-slate-200 mb-2 text-sm font-medium text-gray-900"
            >
              Cargue la imagen del producto
            </p>
            <input
              ref="fileInput"
              accept="image/*"
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:bg-gray-800 bg-gray-50 dark:text-gray-400 focus:outline-none dark:border-gray-600 dark:placeholder-gray-500"
              aria-describedby="user_avatar_help"
              id="imgArchivo"
              type="file"
            />
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end dark:border-gray-600 rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
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
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- <div class="flex w-full h-full items-center justify-center">
    <div class="w-[500px] rounded md:bg-[#E3EDF5]">
      <p class="text-center font-bold text-2xl pt-6 mb-5">
        Registre su producto
      </p>
      <form @submit.prevent="CrearProductos" class="px-8">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model.trim="nombreArticulo"
            required
            type="text"
            name="nombre_producto"
            id="nombre_producto"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
            placeholder=" "
          />
          <label
            for="nombre_producto"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Nombre del artículo</label
          >
        </div>
        <div class="grid mb-6 md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="precioArticulo"
              required
              type="text"
              name="precio_producto"
              id="precio_producto"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              placeholder=" "
            />
            <label
              for="precio_producto"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Precio</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="cantidadArticulo"
              required
              type="text"
              name="cantidad_producto"
              id="cantidad_producto"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
              placeholder=" "
            />
            <label
              for="cantidad_producto"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#eb2226] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Cantidad</label
            >
          </div>
        </div>
        <div class="mt-1 text-sm text-gray-500 mb-6" id="user_avatar_help">
          <p class="block mb-2 text-sm font-medium text-gray-900">
            Cargue la imagen del producto
          </p>
          <input
            ref="fileInput"
            accept="image/*"
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            id="imgArchivo"
            type="file"
          />
        </div>
        <div class="grid text-center mb-6 md:grid-cols-2 md:gap-6">
          <button
            class="max-md:mb-6 text-base h-10 rounded-2xl text-[#FFFFFF] font-bold bg-[#0D2231] hover:bg-[#eb2226] duration-300"
            submit
          >
            Registrar
          </button>
          <a
            @click="limpiar()"
            class="text-base h-10 pt-2 rounded-2xl text-[#FFFFFF] font-bold bg-[#0D2231] hover:bg-[#eb2226] cursor-pointer duration-300"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    msgerror: "",
    nombreArticulo: "",
    precioArticulo: "",
    cantidadArticulo: "",
    imagenArticulo: "",
  }),
  methods: {
    limpiar() {
      this.nombreArticulo = "";
      this.precioArticulo = "";
      this.cantidadArticulo = "";
      this.imagenArticulo = "";
    },
    async CrearProductos() {
      try {
        const formData = new FormData();
        formData.append("image", this.$refs.fileInput.files[0]);
        formData.append("name", this.nombreArticulo);
        formData.append("precio", this.precioArticulo);
        formData.append("cantidad", this.cantidadArticulo);
        await axios
          .post("//localhost:3000/articulos", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log("hola");
            this.limpiar();
          })
          .catch((error) => {
            this.msgerror = "Error creando productos";
          });
      } catch (error) {
        this.msgerror = "Error creando productos";
      }
    },
  },
};
</script>
<style></style>
