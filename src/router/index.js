import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/blanket",
      component: () => import("../views/BlanketView.vue"),
      children: [
        {
          path: "/blanket",
          name: "Home",
          component: () => import("../components/general/HomeComponent.vue"),
        },
        {
          path: "ver-productos",
          name: "verProductos",
          component: () =>
            import("../components/general/ProductosComponent.vue"),
        },
        {
          path: "agregar-productos",
          name: "AgregarProductos",
          component: () =>
            import("../components/general/AgregarProductoComponent.vue"),
        },
      ],
    },
    {
      path: "/",
      component: () => import("../views/LayoutView.vue"),
      children: [
        {
          path: "/",
          name: "main",
          component: () => import("../components/MainComponent.vue"),
        },
        // {
        //   path: "Blanket",
        //   component: () => import("../views/BlanketView.vue"),
        //   children: [
        //     {
        //       path: "/",
        //       name: "Home",
        //       component: () =>
        //         import("../components/general/HomeComponent.vue"),
        //     },
        //     {
        //       path: "ver-productos",
        //       name: "verProductos",
        //       component: () =>
        //         import("../components/general/ProductosComponent.vue"),
        //     },
        //     {
        //       path: "agregar-productos",
        //       name: "AgregarProductos",
        //       component: () =>
        //         import("../components/general/AgregarProductoComponent.vue"),
        //     },
        //   ],
        // },
      ],
    },
  ],
});

export default router;
