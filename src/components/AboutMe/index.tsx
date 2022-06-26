import { StaticImage } from "gatsby-plugin-image";
import Title from "../Title"

import { useParallax } from "react-scroll-parallax";

const AboutMe: React.FC = () => {

    const parallax = useParallax({
        speed: -10
    });

    return (
        <section className="bg-neutral-800 overflow-hidden">
            <div className="w-11/12 mx-auto py-20 max-w-screen-xl relative text-white">
                <Title {...{
                    className: 'text-white uppercase tracking-widest text-5xl font-heading text-center'
                }}>About</Title>
                <span {...{
                    ref: parallax.ref,
                    className: 'font-heading uppercase text-center text-[14rem] absolute opacity-5 -left-40 text-white tracking-widest'
                }}>About</span>
                <div className="grid lg:grid-cols-2 my-10">
                    {/* <StaticImage src="../../images/me.png" quality={100} alt="Just out snowboarding" className="rounded-full max-w-[350px] max-h-[350px] mx-auto shadow-lg" /> */}
                    <div className="font-body font-thin">
                        <p>Hi, I am Oliver. I am a Fullstack JavaScript Developer working within the Gaming Industry for an International Award Winning Agency, Fluid. My journey started with leaving a previous career in Embalming, and seeking the path of becoming a developer. Around 5 years ago I started self teaching myself code, and have not looked back. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;