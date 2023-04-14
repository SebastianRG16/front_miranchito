<template>
  <div class="flex w-full h-full items-center justify-center">
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
            >Nombre del articulo</label
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
  </div>
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
      (this.nombreArticulo = ""),
        (this.precioArticulo = ""),
        (this.cantidadArticulo = ""),
        (this.imagenArticulo = "");
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
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log("error");
      }
    },
  },
};
</script>

<style></style>
