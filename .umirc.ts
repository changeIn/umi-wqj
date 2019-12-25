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
        dva: true,
        dynamicImport: false,
        locale: {
          enable: true,
        },
        title: 'wqj-umi',
        dll: false,
        routes: {
          exclude: [/components\//],
        },
    }],
  ],


};
export default config;
