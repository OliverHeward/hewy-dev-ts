import { StaticImage } from "gatsby-plugin-image";
import Title from "../Title"

const AboutMe: React.FC = () => {

    return (
        <section className="bg-neutral-800">
            <div className="w-11/12 mx-auto py-20 max-w-screen-xl">
                <Title {...{
                    className: 'text-white uppercase tracking-widest text-5xl font-heading text-center'
                }}>About</Title>
                <div className="grid lg:grid-cols-2 my-10">
                    {/* <StaticImage src="../../images/me.png" quality={100} alt="Just out snowboarding" className="rounded-full max-w-[350px] max-h-[350px] mx-auto shadow-lg" /> */}
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;