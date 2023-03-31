<template>
  <div class="h-full w-full">
    <div class="p-4 rounded-lg dark:border-gray-700">
      <div class="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 xl:grid-cols-4">
        <div
          class="flex items-center justify-center h-24 rounded bg-[#eb2226] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex flex-col">
            <font-awesome-icon
              :icon="['fas', 'warehouse']"
              size="xl"
              style="color: #eb2226"
              class="p-4"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">$ 3000</p>
            <p class="">Total de productos</p>
          </div>
          <!-- <p class="text-2xl text-gray-400 dark:text-gray-500">
            total productos color #eb2226
          </p> -->
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-[#13318b] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex">
            <font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              size="xl"
              style="color: #13318b"
              class="p-4"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">340</p>
            <p class="">Total ventas</p>
          </div>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            Cantidad de clientes
          </p>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            total ingresos
          </p>
        </div>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50"
      >
        <p>Collapse de productos</p>
      </div>
      <!-- <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
