/*
 * @Author: 熊望
 * @Date: 2022-07-06 10:08:30
 * @LastEditors: 熊望
 * @LastEditTime: 2022-08-17 10:01:08
 * @FilePath: /nginx/Users/bear/projects/project-bear/bearSeeTeam/vue.config.js
 * @Description: 
 */

module.exports = {
  lintOnSave: true,
  devServer: {
      port: 8889,
      overlay: {
        warnings: true,
        errors: true,
      },
      hot: true,
      open: false,
      disableHostCheck: true, // 热加载
  },
  publicPath: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: undefined,
  transpileDependencies: [],
};
