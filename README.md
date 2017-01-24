# react-exa


+ 学习完react基础知识点之后参照[react-zhihu-webpack](https://github.com/tsrot/react-zhihu)写的demo
+ 使用webpack搭建开发环境
+ 使用ExtractTextPlugin提取css，不过要注意如果同时要关联css的sourceMap的,请将devtool改为source-map
+ 利用htmlWebpackPlugin来加入html，并且注入css和js
+ UglifyJsPlugin来压缩js
+ 注意path和publicPath的作用[webpack解惑](https://zhuanlan.zhihu.com/p/24744677)
+ 引入Pubsub来解决组件间通信问题，避免层层嵌套的通信树.要查看使用flux，请前往[flux分支](https://github.com/umbrellaZwl/react-exa/tree/flux)和[redux分支](https://github.com/umbrellaZwl/react-exa/tree/redux)

### npm i 
### npm run dev
