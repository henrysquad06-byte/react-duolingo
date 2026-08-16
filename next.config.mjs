/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
if (!process.env.SKIP_ENV_VALIDATION) {
  try {
    await import("./src/env.mjs");
  } catch (err) {
    // Fail the build if env validation throws, providing the original behavior.
    console.error("Environment validation failed during build:", err);
    throw err;
  }
} else {
  // Allow builds to continue when SKIP_ENV_VALIDATION=1 is set in the environment.
  // This is handy for local dev, static exports, or CI where you don't have all runtime secrets.
  console.warn("SKIP_ENV_VALIDATION is set — skipping env validation.");
}

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placekitten.com",
        port: "",
        pathname: "/100/100",
      },
    ],
  },
};
export default config;
