import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // IMPORTANT - must build with this option
    // to run Next.js in a container
    output: "standalone"

};

export default nextConfig;
