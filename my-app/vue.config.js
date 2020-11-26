module.exports = {
    devServer: {
        proxy: {
            '/asgard': {
                target: 'https://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
}