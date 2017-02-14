# react-exa


+ 参照[react-zhihu-webpack](https://github.com/tsrot/react-zhihu)写的demo
+ 使用webpack搭建开发环境,并通过[webpack-dev-middleware](https://www.npmjs.com/package/webpack-dev-middleware)和[webpack-hot-middleware](https://www.npmjs.com/package/webpack-hot-middleware)配合express使用
+ 使用ExtractTextPlugin提取css，不过要注意如果同时要关联css的sourceMap的,请将devtool改为source-map
+ 利用htmlWebpackPlugin来加入html，并且注入css和js
+ UglifyJsPlugin来压缩js
+ 注意path和publicPath的作用[webpack解惑](https://zhuanlan.zhihu.com/p/24744677)
+ 引入redux来解决数据存储和通信问题，可以去[flux分支](https://github.com/umbrellaZwl/react-exa/tree/flux),[master](https://github.com/umbrellaZwl/react-exa)分别查看利用flux和pubsub进行通信,[redux分支](https://github.com/umbrellaZwl/react-exa/tree/redux),[react-redux分支](https://github.com/umbrellaZwl/react-exa/tree/react-redux)
+ 使用babel-plugin-transform-runtime的时候注意要install babel-runtime -S
+ 使用redux-thunk中间件来解决异步通信，没有引入ajax等而是使用[fetch](https://github.com/camsong/blog/issues/2)

### npm i 
### npm run dev
