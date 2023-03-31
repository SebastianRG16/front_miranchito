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
                <p class=" flex flex-col font-serif text-7xl max-sm:text-6xl text-[#0D2231]">Lácteos <br> <P class="flex">Mi Ranchito</P></p>
                <br>
                <div class="flex pt-10 max-sm:pr-8">
                  <p>Somos una empresa dedica a producir productos que estan hechos <br class="max-sm:hidden"> a base de leche en Mani-Casanare en donde todos los insumos 
                    <br class="max-sm:hidden"> son producidos en nuestras finca</p>
                </div>
                </div>
              </div>
              <div class="w-[320px] pl-20 pt-20 max-sm:pl-5 max-sm:w-[250px]">
                <router-link to="blanket/">
                  <button type="button" class="text-base h-12 w-full rounded-lg max-w-xs text-[#FFFFFF] font-bold bg-[#eb2226] hover:bg-[#0D2231] duration-300">Explorar</button>
                </router-link>
              </div>
          </div>
        </div>
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
</template>

<script> 
export default {};
</script>

<style></style>
