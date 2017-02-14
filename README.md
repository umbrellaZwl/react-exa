# react-exa


+ 参照[react-zhihu-webpack](https://github.com/tsrot/react-zhihu)写的demo
+ 使用webpack搭建开发环境，并配置babel-plugin-transform-decorators-legacy来支持转码decorator
+ 使用ExtractTextPlugin提取css，不过要注意如果同时要关联css的sourceMap的,请将devtool改为source-map
+ 利用htmlWebpackPlugin来加入html，并且注入css和js
+ UglifyJsPlugin来压缩js
+ 注意path和publicPath的作用[webpack解惑](https://zhuanlan.zhihu.com/p/24744677)
+ 引入redux来解决数据存储和通信问题，可以去[flux分支](https://github.com/umbrellaZwl/react-exa/tree/flux),[master](https://github.com/umbrellaZwl/react-exa)分别查看利用flux和pubsub进行通信,[redux分支](https://github.com/umbrellaZwl/react-exa/tree/redux),[redux-thunk分支](https://github.com/umbrellaZwl/react-exa/tree/redux-thunk)

### npm i 
### npm run dev
