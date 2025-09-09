import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "removeAttrs",
                    params: { attrs: "(fill|stroke)" } // remove fill/stroke so currentColor works
                  }
                ]
              }
            },
          },
        ],
        as: "*.js",
      },
    },
  },
  // other config options
};

export default nextConfig;
