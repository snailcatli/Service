const routes = [
  {
    path: '/mobileHome',
    name: 'mobileHome',
    component: () => import("@/views/pc/Home"),
    meta: {
        title: '首页',
    },
    children: [
      
    ]
  }
]

export default routes;