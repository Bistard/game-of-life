const path = require('path');

const ENV_MODE = process.env.NODE_ENV ?? 'development';
const IS_DEV = ENV_MODE === 'development';
const IS_WATCH = (process.env.WATCH_MODE == 'true');

// The webpack base configuration for each entry
const baseConfiguration = {
    node: {
        __dirname: true
    },
    mode: ENV_MODE,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            ui: path.resolve(__dirname, 'ui/'),
        },
    },

    // watch options
    watch: IS_WATCH,
    watchOptions: {
        poll: 1000, // check for changes in milliseconds.
        aggregateTimeout: 500, // aggregates any changes during the period into one rebuild.
        ignored: /node_modules/,
    },

    /**
     * Source maps are used to display your original JavaScript while debugging, 
     * which is a lot easier to look at than minified production code.
     * See more choice here https://webpack.js.org/configuration/devtool/
     */
    devtool: IS_DEV ? 'eval-source-map' : 'source-map',
    stats: 'normal',
    bail: !IS_WATCH,

    plugins: [],
};

module.exports = [
    Object.assign({}, baseConfiguration, {
        entry: {
            main: './ui/main.ts',
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './ui/dist')
        },
    }),
];
