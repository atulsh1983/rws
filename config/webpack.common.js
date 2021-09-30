module.exports = {
    module: {
      rules: [
        { 
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            use: ["babel-loader"] 
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }
      ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
      },
  };
  