<template>
  <div class="h-full w-full">
    <div class="flex flex-col min-h-screen">
      <div class="pl-10 pt-6">
            <img src="../assets/images/logoMiranchito.png" alt="" class="w-[200px]">
      </div>
      <div class="flex flex-1">

        <div class="flex flex-1 justify-center sticky flex-col">
          
          <div class="flex w-full pl-20">
            <div class="flex flex-col">
              <p class="font-serif text-7xl text-[#0D2231]">Lácteos <br> <P>Mi Ranchito</P></p>
              <br>
              <div class="w-[590px] pt-10">
                <p>Somos una empresa dedica a producir productos que estan hechos a base de leche en Mani-Casanare en donde todos los insumos son producidos en nuestras finca</p>
              </div>
            </div>
          </div>
          <div class="w-[320px] pl-20 pt-20">
            <router-link to="blanket/">
              <button type="button" class="text-base h-12 w-full rounded-lg max-w-xs text-[#FFFFFF] font-bold bg-[#FF312F] hover:bg-[#0D2231] duration-300">Explorar</button>
            </router-link>
          </div>
        </div>
        <div
          class="flex flex-1 items-center justify-center rounded-r-lg"
          >
          <div class="mb-8">
            <img
            src="../assets/images/vacAnimada.png"
            alt=""
            class="w-[500px]"
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
