/** @type {import('next').NextConfig} */
import {withContentlayer} from 'next-contentlayer'
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = { reactStrictMode: true, swcMinify: true}
const useNext = withNextIntl(nextConfig);

export default withContentlayer(useNext)