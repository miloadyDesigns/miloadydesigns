/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
};

export default nextConfig;
