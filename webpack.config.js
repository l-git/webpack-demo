var path=require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js',
        print:'./src/print.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        chunkFilename: '[name].[contenthash].js',
    }
    ,module:{
        rules:[{
            test: /\.css$/
            ,use: [
                'style-loader',
                'css-loader'
            ]
            }
            ,      {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  'file-loader'
                ]
              }
              , {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
              }
        ]
    }
    ,plugins:[
        new webpack.ProvidePlugin({
                   _: 'lodash'
                 }),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
                   title: 'Output Management'
        })
    ]

}