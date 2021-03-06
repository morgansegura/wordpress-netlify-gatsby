
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    siteUrl: 'https://catapultarts.com/app',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'catapultarts.com/app',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {
          htaccess_user: process.env.WP_USERNAME,
          htaccess_pass: process.env.WP_PASSWORD,
          htaccess_sendImmediately: false,          
        },
        perPage: 100,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "catapultarts.com/app",
        //   replacementUrl: "catapultarts.netlify.com",
        // },
        concurrentRequests: 10,
        includedRoutes: [
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
          "/*/*/acf",
          "/*/*/settings",
        ],
        excludedRoutes: [
          "/*/*/block-renderer",
          "/wp-json/v2/block-renderer/*",
          // "/*/*/comments",
          "/yoast/**",
          // "/*/*/users",
          "/*/*/users/me",
          "/wp/v2/users/me",
          // "/oembed/*",
          // "/acf/v2/options",
          "/wp-json/v2/settings",
          "/*/*/settings",
          "/wp-json/v2/themes",
          "/*/*/themes"
        ],
        normalizer: function ({ entities }) {
          return entities
        },             
        verboseOutput: true,                        
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `norican`,
          `fjalla one`,
          `source sans pro\:300,400,600,700,900`
        ]
      }
    },     
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap', 
    {
      resolve: "gatsby-remark-better-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77.
        height: 400, // Optional: Overrides optional.ratio.
        related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
        showInfo: false // Optional: Hides video title and player actions.
      }
    },
    `gatsby-remark-responsive-iframe`,      
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Catapult Arts",
        short_name: "catapult arts",
        description: "web design, web development, social media marketing, search engine optimizaion, search engine marketing",
        start_url: "catapultarts.com",
        background_color: "#efefef",
        theme_color: "red",
        display: 'minimal-ui',
        icons: [
          {
            src: '/logos/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logos/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
