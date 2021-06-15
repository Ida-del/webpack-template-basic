// 해당 패키지 import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//  nodejs 환경에서 동작, Brower에서 동작하지 않음
module.exports = {

    //  파일을 읽으들이기 시작하는 진입점
    entry: './js/main.js',

    //  결과물(bundle) 리턴 환경설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true // 기존 결과물 제거 후 리턴
    },


    // 번들링 후 번들 처리 방식 등 다양한 플로그인들 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' } // 배열 형식으로 해당하는 경로를 설정
            ]
        })
    ],

    // 웹 서버 오픈 시 동작하게 하는 플러그인
    devServer: {
        host: 'localhost'
    }
}