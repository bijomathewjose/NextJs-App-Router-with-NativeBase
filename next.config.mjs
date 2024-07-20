/** @type {import('next').NextConfig} */
import { withNativebase } from '@native-base/next-adapter'

const dependencies = []
const nextConfig = {
    webpack: (config, options) => {
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
            '@expo/vector-icons': 'react-native-vector-icons',
        };
        config.resolve.extensions = [
            '.web.js',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ];
        return config;
    },
    experimental: {
        forceSwcTransforms: true,
    }
}

export default withNativebase({ dependencies, nextConfig, });