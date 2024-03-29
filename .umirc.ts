import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  ssr:true,  //服务端渲染
  treeShaking: true,
  routes: [ //如果配置了 routes ，则约定式路由会不生效
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/products',
          component: './products',
        },
        {
          path: '/',
          component: './index',
        },
        {
          path: '/',
          component: '../pages/index',
        },
        {
          path: '/users',
          component: '../pages/users',
        },
        {
          path: '/helloword',
          component: '../pages/HelloWord',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        // dva: true,
        dva: {
          immer: true,
        },
        //禁用包括 component 和 models 的按需加载
        // dynamicImport: false,
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/Loading.js',
        },
        locale: {
          enable: true,
        },
        title: 'wqj-umi',
        // dll: false,
        dll: {
          exclude: [],
        },
        routes: {
          exclude: [/components\//],
        }, 
        // polyfills: ['ie9'],
        // library: 'react',
        // pwa: true,
        // hd: true,
        // fastClick: true,
        // chunks: ['vendor', 'umi'],
        // scripts: [
        //   { src: 'http://cdn/a.js' },
        //   { src: '<%= PUBLIC_PATH %>a.js' },
        //   { content: `alert('a');` },
        // ],
        // headScripts: [],
        // metas: [{ charset: 'utf-8' }],
        // links: [{ rel: 'stylesheet', href: 'http://cdn/a.css' }],
      },
    ],
  ],
};
export default config;