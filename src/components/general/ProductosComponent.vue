<template>
  <div class="h-full">
    <div
      :class="modalEditar"
      class="fixed h-full top-10 left-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none transition duration-300"
    >
      <div
        class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none dark:bg-gray-700 bg-white bg-clip-padding text-current shadow-lg outline-none transition duration-300"
        >
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 dark:border-gray-600 border-neutral-100 border-opacity-100 p-4"
          >
            <h5
              class="text-xl font-bold leading-normal text-neutral-800 dark:text-white"
              id="exampleModalScrollableLabel"
            >
              Está editando información de un producto
            </h5>
            <button
              @click="ocultar"
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
            <div class="flex mb-5 h-[200px] items-center justify-center">
              <img
                class=""
                :src="imgBase64 + imagen"
                width="200"
                alt="Sunset in the mountains"
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <p class="dark:text-white">Nombre del artículo</p>
              <input
                v-model.trim="nombreGuardar"
                type="text"
                name="nombre_producto"
                id="nombre_producto"
                class="block py-2.5 px-0 w-full dark:text-white text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                :placeholder="nombre"
              />
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <p class="dark:text-white">Precio</p>
                <input
                  v-model.trim="precioGuardar"
                  type="text"
                  name="precio_producto"
                  id="precio_producto"
                  class="block py-2.5 px-0 dark:text-white w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                  :placeholder="precio"
                />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <p class="dark:text-white">Cantidad</p>
                <input
                  v-model.trim="cantidadGuardar"
                  type="text"
                  name="cantidad_producto"
                  id="cantidad_producto"
                  class="block py-2.5 px-0 dark:text-white w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#eb2226] peer"
                  :placeholder="cantidad"
                />
              </div>
            </div>
            <div class="mt-1 text-sm text-gray-500" id="user_avatar_help">
              <p
                class="dark:text-white block mb-2 text-sm font-medium text-gray-900"
              >
                Cargue la imagen del producto
              </p>
              <input
                ref="fileInput"
                accept="image/*"
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                aria-describedby="user_avatar_help"
                id="imageArchivo"
                type="file"
              />
            </div>
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4"
          >
            <button
              @click="ocultar()"
              type="button"
              class="inline-block bg-[#0D2231] text-white rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transisiton duration-300 hover:text-[#eb2226]"
            >
              Cancelar
            </button>
            <button
              @click="guardarCambios()"
              type="button"
              class="ml-1 bg-[#0D2231] inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white transition duration-300 hover:text-[#2da942]"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="opaco"
      class="w-full flex grid gap-4 grid-cols-2 max-sm:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 place-items-stretch justify-center items-center"
    >
      <div
        v-for="(producto, index) in productos"
        :key="index"
        class="flex mb-5 rounded items-center justify-center"
      >
        <div
          class="max-w-sm rounded dark:bg-gray-700 overflow-hidden shadow-lg p-8 max-sm:p-2"
        >
          <div
            class="flex h-[200px] max-sm:h-[100px] min-[480px]:h-[150px] sm:h-[200px] max-[300px]:h-[60px] items-center justify-center"
          >
            <img
              class="w-full 2xl:mb-5"
              :src="imgBase64 + producto.nombre"
              alt=""
            />
          </div>
          <div class="py-4 max-[300px]:py-2">
            <div
              class="font-bold max-[300px]:text-sm text-lg mb-2 max-[300px]:mb-0 dark:text-white"
            >
              {{ producto.name }}
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span
              class="text-2xl max-[300px]:text-lg font-bold text-gray-900 dark:text-slate-200"
              >${{ formatoMexico(producto.precio) }}</span
            >
            <div class="space-x-4 max-[300px]:space-x-0">
              <button
                class="cursor-pointer text-[#13318b] transition duration-300"
              >
                <font-awesome-icon
                  @click="editar(producto)"
                  class="hover:h-6"
                  :icon="['fas', 'pen-to-square']"
                  size="lg"
                />
              </button>
              <button class="cursor-pointer transition duration-300">
                <font-awesome-icon
                  @click="eliminarProducto(producto)"
                  :icon="['fas', 'trash-can']"
                  class="hover:h-6"
                  size="lg"
                  style="color: #eb2226"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    productos: [],
    modalEditar: "hidden",
    opaco: "",
    ocultarModal: "",
    nombre: "",
    precio: "",
    cantidad: "",
    imagen: "",
    id: "",
    nombreGuardar: "",
    precioGuardar: "",
    cantidadGuardar: "",
    message: "",
    imgBase64: "data:image/*;base64,",
  }),
  created: async function () {
    let url = "//localhost:3000/api/articulos";
    await axios.get(url).then((response) => {
      this.productos = response.data;
    });
  },
  methods: {
    async productosActualizados() {
      let url = "//localhost:3000/api/articulos";
      await axios
        .get(url)
        .then(
          (response) => (
            (this.productos = response.data),
            (this.modalEditar = "hidden"),
            (this.opaco = "")
          )
        );
    },
    editar(posicion) {
      this.id = posicion.id;
      this.nombre = posicion.name;
      this.precio = posicion.precio;
      this.cantidad = posicion.cantidad;
      this.imagen = posicion.nombre;
      this.modalEditar = "";
      this.opaco = "opacity-25";
    },
    ocultar() {
      this.modalEditar = "hidden";
      this.opaco = "";
    },
    async guardarCambios() {
      try {
        const formData = new FormData();
        formData.append("image", this.$refs.fileInput.files[0]);
        formData.append("name", this.nombreGuardar);
        formData.append("precio", this.precioGuardar);
        formData.append("cantidad", this.cantidadGuardar);
        await axios
          .patch(`//localhost:3000/api/articulos/${this.id}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            if (response.status === 200) {
              this.message = "Producto modificado exitosamente";
              this.nombreGuardar = "";
              this.precioGuardar = "";
              this.cantidadGuardar = "";
              const input = document.getElementById("imageArchivo");
              input.value = "";
              this.productosActualizados();
            } else {
              this.message =
                "Lo siento ocurrio un error al modificar tu producto";
            }
          })
          .catch((error) => {
            this.message = "Error consultando la base de datos";
          });
      } catch (error) {
        this.message = "Error consultando la base de datos";
      }
    },
    async eliminarProducto(posicion) {
      let url = `//localhost:3000/api/articulos/${posicion.id}`;
      await axios
        .delete(url)
        .then((res) => {
          if (res.status === 204) {
            this.productosActualizados();
          }
        })
        .catch((error) => {
          this.message = "Error eliminado el producto";
        });
    },
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
