<template>
  <div class="flex h-full w-full justify-center items-center">
    <div class="flex justify-center items-center">
      <div>
        <div>
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div
              class="relative transform overflow-hidden border border-gray-400 shadow-md rounded-lg bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div
                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'triangle-exclamation']"
                      size="xl"
                      style="color: #facc15"
                    />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      class="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      No hay ningun cliente agregado
                    </h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        Debes agregar un cliente antes de poder visualizar el
                        apartado de clientes, por favor selecciona la opcion
                        agregar cliente a continuacion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
              >
                <button
                  @click="redireccionar()"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-50 sm:ml-3 sm:w-auto"
                >
                  Agregar cliente
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-500 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {},
  methods: {
    redireccionar() {
      this.$emit("primerCliente");
    },
  },
};
</script>

<style></style>
