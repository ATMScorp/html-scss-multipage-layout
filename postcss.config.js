module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 16, // Base font size (e.g., 16px)
            propList: ['*'], // Properties to convert (e.g., all)
            unitPrecision: 5, // Precision of rem values
            selectorBlackList: [], // Selectors to ignore
            replace: true, // Replace pixels with rem
            mediaQuery: true, // Do not convert in media queries
            minPixelValue: 0, // Minimum pixel value to convert
        },
    },
};
