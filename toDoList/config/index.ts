import {defineConfig, type UserConfigExport} from '@tarojs/cli'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import devConfig from './dev'
import prodConfig from './prod'

/**
 * @description 根据vant组件名，生成相应的映射地址。来源: https://juejin.cn/post/6951948332201672718
 * @param {*} componentName 组件名
 * @return {*} 组件映射地址
 */
const createVantPatterns = (componentName) => {
  const fileTypes = ['wxml', 'wxs', 'wxss'];
  return fileTypes.map((item) => {
    return {
      from: `src/components/vant-weapp/dist/${componentName}/index.${item}`,
      to: `dist/components/vant-weapp/dist/${componentName}/index.${item}`,
    };
  });
};

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, {command, mode}) => {
  const baseConfig: UserConfigExport = {
    projectName: 'toDoList',
    date: '2023-11-16',
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    plugins: [
      [
        "@tarojs/plugin-html",
        {
          pxtransformBlackList: [/van-/],
        },
      ],
    ],
    defineConstants: {},
    copy: {
      patterns: [
        {
          from: "src/components/vant-weapp/dist/wxs", // 公共模块
          to: "dist/components/vant-weapp/dist/wxs",
        },
        {
          from: "src/components/vant-weapp/dist/common/", // 公共模块
          to: "dist/components/vant-weapp/dist/common/",
        },
        ...createVantPatterns("button"),
      ],
      options: {},
    },
    framework: 'vue3',
    compiler: 'webpack5',
    cache: {
      enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
    },
    mini: {
      postcss: {
        pxtransform: {
          enable: true,
          config: {
            selectorBlackList: [/van-/],
          }
        },
        url: {
          enable: true,
          config: {
            limit: 1024 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },
    h5: {
      publicPath: '/',
      staticDirectory: 'static',
      output: {
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[chunkhash:8].js'
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
        filename: 'css/[name].[hash].css',
        chunkFilename: 'css/[name].[chunkhash].css'
      },
      postcss: {
        autoprefixer: {
          enable: true,
          config: {}
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      },
      webpackChain(chain) {
        chain.resolve.plugin('tsconfig-paths').use(TsconfigPathsPlugin)
      }
    },
    rn: {
      appName: 'taroDemo',
      postcss: {
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        }
      }
    }
  }
  if (process.env.NODE_ENV === 'development') {
    // 本地开发构建配置（不混淆压缩）
    return merge({}, baseConfig, devConfig)
  }
  // 生产构建配置（默认开启压缩混淆等）
  return merge({}, baseConfig, prodConfig)
})
