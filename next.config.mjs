// import createNextIntlPlugin from 'next-intl/plugin';
 
// const withNextIntl = createNextIntlPlugin();
 
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
 
// export default withNextIntl(nextConfig);
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['d1ea147o02h74h.cloudfront.net'], // Add your image domain here
  },
};

export default withNextIntl(nextConfig);
