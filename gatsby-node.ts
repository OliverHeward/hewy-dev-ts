import type { GatsbyNode } from 'gatsby';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import path from 'path';

type Data = {
  data?: {
    posts: {
      edges: Post[]
    }
  }
}

type Post = {
  node: {
    id: string;
    frontmatter: {
      slug: string;
      title: string;
    }
  }
}

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql, actions
}) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  const { data }: Data = await graphql(`
    query markdownPosts {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  data?.posts.edges.map(({ node }: Post) => {
    console.log("Creating page: " + node.frontmatter.slug);

    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug
      },
    })
  })
}

