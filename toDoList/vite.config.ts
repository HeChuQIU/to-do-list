import {defineConfig} from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path';
import copy from 'rollup-plugin-copy'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        uni(),
        copy({
            targets: [{src: 'src/cloudfunctions/*', dest: path.join(
                    __dirname,
                    '/dist',
                    process.env.NODE_ENV === 'production' ? 'build' : 'dev',
                    process.env.UNI_PLATFORM,
                    'cloudfunctions'
                )}], // 路径
            hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
            verbose: true // 在终端进行console.log
        })
    ]
});
