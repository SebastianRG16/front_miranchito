<template>
  <div class="flex w-full h-full items-center justify-center">
    <div class="w-[500px] rounded md:bg-[#E3EDF5]">
      <p class="text-center font-semibold text-2xl pt-6 mb-5">
        Registre su producto
      </p>
      <form @submit.prevent="CrearProductos" class="px-8">
        <div class="relative z-0 w-full mb-6 group">
          <input
            v-model.trim="nombreArticulo"
            type="text"
            name="nombre_producto"
            id="nombre_producto"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="nombre_producto"
            class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Nombre del articulo</label
          >
        </div>
        <div class="grid mb-6 md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="precioArticulo"
              type="text"
              name="precio_producto"
              id="precio_producto"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="precio_producto"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Precio</label
            >
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              v-model.trim="cantidadArticulo"
              type="text"
              name="cantidad_producto"
              id="cantidad_producto"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              for="cantidad_producto"
              class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >Cantidad</label
            >
          </div>
        </div>
        <div class="grid text-center mb-6 md:grid-cols-2 md:gap-6">
          <button
            class="max-md:mb-6 text-base h-10 rounded-2xl text-[#FFFFFF] font-bold bg-[#0D2231] hover:bg-[#FF312F] duration-300"
            submit
          >
            Registrar
          </button>
          <button
            class="text-base h-10 rounded-2xl text-[#FFFFFF] font-bold bg-[#0D2231] hover:bg-[#FF312F] duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    nombreArticulo: "",
    precioArticulo: "",
    cantidadArticulo: "",
  }),
  methods: {
    async CrearProductos() {
      // let url = "http://localhost:3000/api/articulos";
      // let data = {
      //   name: this.nombreArticulo,
      //   precio: this.precioArticulo,
      // };
      // let post = {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      // fetch(url, post).then((response) => response.json());
      try {
        const data = await axios({
          method: "POST",
          url: "//localhost:3000/api/articulos",
          data: {
            name: this.nombreArticulo,
            precio: this.precioArticulo,
          },
        });
        if (data) {
          console.log("operacion correcta");
          console.log(data);
        }
      } catch (error) {
        console.log("error al enviar los datos");
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
