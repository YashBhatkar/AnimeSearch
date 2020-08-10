module.exports = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }
    },

    {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
    },

    {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
    },

    {
        test: /\.html$/,
        use: ['html-loader']
    }
]