module.exports = {
    plugins: [
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-cosmicjs',
            options: {
                bucketSlug: 'gatsby-blog-cosmic-js', // Bucket Slug
                objectTypes: ['posts','settings'], // List of the Object Types you want to be able to request from Gatsby.
                apiAccess: {
                    read_key: '',
                }
            }
        },
    ],
}