import Title from "../Title"

const BlogPosts: React.FC = () => {

    return (
        <section className="bg-neutral-800">
            <div className="text-white w-11/12 mx-auto py-20">
                <Title {...{
                    className: 'font-heading text-4xl tracking-widest text-center'
                }}>Blog</Title>
            </div>
        </section>
    )
}

export default BlogPosts;