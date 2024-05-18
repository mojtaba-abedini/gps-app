

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: false
})
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    
    publicRuntimeConfig: {
        // Will be available on both server and client
        backendUrl: process.env.BACKEND_URL,
    },
    swcMinify: true,
    distDir: "build",
}

module.exports = withPWA(nextConfig)