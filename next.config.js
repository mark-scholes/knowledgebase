/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  }, 
  //this will allow us to pull in images from the website if want to in the future. 
  images: {
    domains: [process.env.COMPANY_SITE, "https://dummyimage.com", 'cdn.sanity.io'],
  }
}


module.exports = nextConfig
