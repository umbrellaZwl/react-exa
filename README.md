# react-exa


+ 参照[react-zhihu-webpack](https://github.com/tsrot/react-zhihu)写的demo
+ 使用webpack搭建开发环境
+ 使用ExtractTextPlugin提取css，不过要注意如果同时要关联css的sourceMap的,请将devtool改为source-map
+ 利用htmlWebpackPlugin来加入html，并且注入css和js
+ UglifyJsPlugin来压缩js
+ 注意path和publicPath的作用[webpack解惑](https://zhuanlan.zhihu.com/p/24744677)
+ 一定要注意this指向问题
+ 引入Flux来解决数据存储和通信问题，参考阮一峰老师的[extremely-simple-flux-demo](https://github.com/ruanyf/extremely-simple-flux-demo),可以前往[master分支](https://github.com/umbrellaZwl/react-exa)和[redux分支](https://github.com/umbrellaZwl/react-exa/tree/redux)和[react-redux分支](https://github.com/umbrellaZwl/react-exa/tree/react-redux)查看不同的通信方式

### npm i 
### npm run dev
