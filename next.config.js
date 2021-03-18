const fs = require("fs");
const blogPostsFolder = "./content";
const getPathsForPosts = () => {
    return fs
        .readdirSync(blogPostsFolder)
        .map(blogName => {
            const trimmedName = blogName.substring(0, blogName.length - 3);
            return {
                [`/posts/${trimmedName}`]: {
                    page: '/posts/[slug]',
                    query: {
                        slug: trimmedName,
                    },
                },
            };
        })
        .reduce((acc, curr) => {
            return { ...acc, ...curr };
        }, {});
}
module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                // options: { mode: ['react-component'] }
            }
        )
        return cfg;
    },
    async exportPathMap(defaultPathMap) {
        return {
            ...defaultPathMap,
            ...getPathsForPosts(),
        };
    },
}