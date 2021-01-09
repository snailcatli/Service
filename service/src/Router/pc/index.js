export default [
  {
    path: '/home',
    component: () => import("@/views/pc/Home"),
    meta: {
        title: '首页',
    },
    children: [
      {
        path: '/',
        component: () => import("@/views/pc/Homepage"),
        meta: {
            title: '首页',
        },
      }
    ]
  }
]