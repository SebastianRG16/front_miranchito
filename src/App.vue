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
</script>

<template>
  <div>
    <router-view />
    <!-- <button @click="changeDarkmode">modo oscuro</button> -->
  </div>
</template>

<style scoped></style>
