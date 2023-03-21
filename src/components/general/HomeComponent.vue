<template>
  <div class="h-full w-full">
    <div
      class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700"
    >
      <div class="grid grid-cols-3 gap-4 mb-4">
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">
            <router-link
              to="agregar-productos"
              class="flex items-center p-2 text-base font-semibold text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap"
                >Agregar productos</span
              >
            </router-link>
          </p>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div
          class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800"
        >
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div>
      <div
        class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800"
      >
        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
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
