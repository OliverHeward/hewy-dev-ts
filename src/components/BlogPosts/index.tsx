import { useParallax } from "react-scroll-parallax";
import { useStaticQuery, graphql, Link } from "gatsby";
import Title from "@/components/Title"
import { IGatsbyImageData, getImage, GatsbyImage } from "gatsby-plugin-image";

type PostsProps = {
    posts: {
        edges: Post[];
    }
}

type Post = {
    node: {
        id: string;
        frontmatter: {
            slug: string;
            title: string;
            date: string;
            featuredImage: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }
        }
    }
}

const BlogPosts: React.FC = () => {
    const { posts }: PostsProps = useStaticQuery(graphql`
        query markdownPosts {
            posts: allMarkdownRemark(limit: 3) {
                edges {
                    node {
                        id
                        html
                        frontmatter {
                            date(formatString: "DD MMMM, YYYY")
                            slug
                            title
                            featuredImage {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                        }
                    }
                }
            }
    }`);

    console.log(posts);

    const parallax = useParallax({
        speed: -10
    });

    return (
        <section className="bg-neutral-800 overflow-hidden">
            <div className="text-white w-11/12 mx-auto py-20 max-w-screen-xl relative">
                <Title {...{
                    className: 'font-heading text-5xl tracking-widest text-center'
                }}>Blog</Title>

                <span {...{
                    ref: parallax.ref,
                    className: 'pointer-events-none font-heading uppercase text-center text-[14rem] absolute opacity-5 -left-40 text-white tracking-widest'
                }}>Blog</span>

                <div className="flex flex-col items-center justify-center w-full lg:grid lg:grid-cols-3 gap-6 my-10">
                    {posts.edges.map(({ node }: Post) => {

                        const image = getImage(node?.frontmatter.featuredImage.childImageSharp.gatsbyImageData);

                        return (
                            <div className="w-full max-w-[475px] group" key={node.frontmatter.title}>
                                <Link to={node.frontmatter.slug}>
                                    <div className="overflow-hidden mb-6 relative group-hover:shadow-xl">
                                        <GatsbyImage image={image} alt={`Image for blog post ${node.frontmatter.title}`} className="group-hover:scale-105 delay-200 transition-transform duration-500" objectFit="cover" />

                                        <div className="bg-purple-400 opacity-20 absolute bottom-[-100%] left-[100%] group-hover:left-0 group-hover:bottom-0 w-full h-full transition-all duration-500" />
                                    </div>
                                    <h2 className="uppercase font-heading text-white text-2xl">{node.frontmatter.title}</h2>
                                    <span className="font-body">{node.frontmatter.date}</span>
                                </Link>
                            </div>
                        )
                    })}
                </div>

                <div className="">

                    <Link to={`/blog`} className="mx-auto max-w-[225px] block text-center bg-purple-600 text-white py-4 uppercase font-heading text-2xl hover:bg-purple-800 transition-colors duration-500">
                        View Blogs
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BlogPosts;