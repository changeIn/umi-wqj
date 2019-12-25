//mock文件夹在umi中，会自动引入使用，可以新建多个mock文件。会根据请求路径对应拦截
export default {
    'get /dev/random_joke': {
      setup: 'What is the object oriented way to get wealthy ?',
      punchline: 'Inheritance',
    },
};
  