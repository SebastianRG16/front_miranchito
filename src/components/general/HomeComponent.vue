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
            <p class="text-2xl font-bold text-gray-900">300</p>
            <p class="">Total productos</p>
          </div>
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
          class="flex items-center justify-center h-24 rounded bg-[#c9873b] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex">
            <font-awesome-icon
              :icon="['fas', 'users']"
              size="xl"
              style="color: #c9873b"
              class="p-4"
            />
          </div>

          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">20</p>
            <p class="">Total clientes</p>
          </div>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-[#2da942] bg-opacity-50 grid-cols-2 gap-4"
        >
          <div class="flex">
            <font-awesome-icon
              :icon="['fas', 'coins']"
              size="xl"
              style="color: #2da942"
              class="p-4"
            />
          </div>
          <div class="flex flex-col">
            <p class="text-2xl font-bold text-gray-900">$210000</p>
            <p class="">Total ingresos</p>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50"
      >
        <p>Collapse de productos</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
