<template>
  <div class="h-full w-full">
    <div class="flex flex-col min-h-screen">
      <div class="flex flex-1 grid grid-cols-2 max-lg:grid-cols-1 duration-300">
        <div class="flex flex-1 sticky flex-col">
          <div class="pl-10 max-sm:pl-5 pt-6">
            <img
              src="../../src/assets/images/LogoMiranchito.png"
              alt=""

              class="w-[200px]"
            />
          </div>
          <div class="flex flex-1 justify-center flex-col">
            <div class="w-full pl-20 max-sm:pl-5 ">
              <div class="">
                <img src="../../src/assets/images/productos.png" class="lg:hidden pr-7 duration-300">
              </div>
              <div class="flex-col">
                <p class=" flex flex-col font-serif text-7xl max-sm:text-6xl dark:text-white text-[#0D2231]">Lácteos <br> <P class="flex">Mi Ranchito</P></p>
                <br>
                <div class="flex pt-10 max-sm:pr-8 w-full">
                  <p class="w-[500px] dark:text-slate-200">Somos una empresa dedica a la producción, venta y distribución  de lácteos y sus derivados, 
                     directamente hechos y recolectados en nuestra finca.</p>
                </div>
                </div>
              </div>
              <div class="w-[320px] pl-20 pt-20 max-sm:pl-5 max-sm:w-[250px]">
                <router-link to="blanket/">
                  <button type="button" class="text-base h-12 w-full rounded-lg max-w-xs text-[#FFFFFF] font-bold bg-[#eb2226] hover:bg-[#0D2231] duration-300">Explorar</button>
                </router-link>
                <!-- <button @click="changeDarkmode" class="text-base h-12 w-full rounded-lg max-w-xs text-[#FFFFFF] font-bold bg-[#eb2226] hover:bg-[#0D2231] duration-300">Modo oscuro</button> -->
              </div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="flex justify-end pr-10 pt-8">
            <font-awesome-icon :icon="['fas', 'moon']" @click="changeDarkmode" class="text-dark dark:text-white cursor-pointer" size="xl" />
          </div>
          <!-- <button class="flex justify-end">modo oscuro</button> -->
          <div
          class="max-lg:hidden flex flex-1 items-center justify-center "
          >
          <div class="mb-8">
            <img
            src="../assets/images/BannerElectivaII.png"
            alt=""
            class="w-full"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// // Whenever the user explicitly chooses light mode
// localStorage.theme = "light";

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = "dark";

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem("theme");
const toggleDarkMode = ref(document.documentElement.className === "dark");

const changeDarkmode = () => {
  toggleDarkMode.value = document.documentElement.classList.toggle("dark");
  toggleDarkMode.value
    ? (localStorage.theme = "dark")
    : (localStorage.theme = "light");
}; 
// export default {
//   methods: {
    
//   }
// };
</script>

<style></style>
