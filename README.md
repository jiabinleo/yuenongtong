# yuenongtong

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##数据代理
```
proxyTable: {
      '/v1': {
        target: "https://www.kwantler.com.cn/v1",
        changeOrigin: true,
        pathRewrite: {
          '^/v1': ''
        },
      },
    },
```

##组件传值
```
  子组件向父组件传值  
    子组件 this.$emit("Fn1", data);
    父组件 @Fn1="Fn2"
          Fn2(data) {
            this.$refs.showMy.子组件函数名(data); //调用子组件函数 在子组件中添加res="showMy"
          }
```