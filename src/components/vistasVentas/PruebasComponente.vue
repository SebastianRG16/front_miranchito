<template>
  <div>
    <section class="h-full overflow-auto p-8 w-full h-full flex flex-col">
      <div
        @click="areaArchivo"
        id="drop-area"
        class="drop-area border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
      >
        <p
          class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center"
        >
          <span>Arrastra y suelta imagenes</span>&nbsp;<span>o</span>
        </p>
        <input
          accept="image/*"
          type="file"
          multiple
          class="hidden"
          id="input-file"
        />
        Cargar imagen
        <button
          @click="subirArchivo"
          id="button"
          class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
        >
          Selecciona tus archivos
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    inputFile: "",
    areaFile: "",
  }),
  methods: {
    subirArchivo() {
      this.inputFile = document.getElementById("input-file");
      //   this.inputFile = dropArea.querySelector("#input-file");
      this.inputFile.click();
      console.log("hola");
    },
    areaArchivo(e) {
      this.areaFile = document.getElementById("drop-area");
      console.log(this.areaFile);
      console.log("hola area");
    },
  },
};
</script>

<style></style>
