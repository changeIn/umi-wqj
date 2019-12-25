import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  //singular:true,  //umi中存放页面代码的文件夹是pages是复数，可改成page单数
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
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
    ['umi-plugin-react',{
        antd: true,
        dva: {
          immer: true,
        },
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

        polyfills: ['ie9'],
        library: 'react',
        pwa: true,
        hd: true,
        fastClick: true,
        chunks: ['vendor', 'umi'],
        scripts: [
          { src: 'http://cdn/a.js' },
          { src: '<%= PUBLIC_PATH %>a.js' },
          { content: `alert('a');` },
        ],
        headScripts: [],
        metas: [{ charset: 'utf-8' }],
        links: [{ rel: 'stylesheet', href: 'http://cdn/a.css' }],


    }],

  ],

};
export default config;
