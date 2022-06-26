import Title from "../Title";

import { StaticImage } from "gatsby-plugin-image";

import { useParallax } from "react-scroll-parallax";

import Anuvu from '@/images/anuvu.svg';
import CocaCola from '@/images/coca-cola.svg';
import JackDaniels from '@/images/jack-daniels.svg';
import Savencia from '@/images/savencia.svg';
import SingKing from '@/images/singking.svg';
import Soprasteria from '@/images/soprasteria.svg';
import Bastion from '@/images/bastion.svg';
import StarWars from '@/images/star-wars.svg';
import ExpansiveWorlds from '@/images/expansive-worlds.svg';
import Ndreams from '@/images/ndreams.svg';
import Dodoni from '@/images/dodoni.svg';
import Weetabix from '@/images/weetabix.svg'
import Noblefoods from '@/images/noblefoods.svg'
import Pubg from '@/images/pubg.svg';
import Chesneys from '@/images/chesneys-logo.svg';
import Yager from '@/images/yager.svg';

const Clients: React.FC = () => {

    const parallax = useParallax({
        speed: -10
    });

    return (
        <section className="bg-neutral-900 overflow-hidden">
            <div className="w-11/12 mx-auto py-20 max-w-screen-xl relative">
                <Title {...{
                    className: 'font-heading uppercase text-center text-5xl text-white tracking-widest'
                }}>Clients</Title>

                <span {...{
                    ref: parallax.ref,
                    className: 'pointer-events-none font-heading uppercase text-center text-[14rem] absolute opacity-5 -right-40 text-white tracking-widest'
                }}>Clients</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 gap-y-20 place-items-center my-20">
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <StarWars className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <CocaCola className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <JackDaniels className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px] fill-white">
                        <ExpansiveWorlds className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center justify-center group max-h-[100px] max-w-[225px] fill-white object-contain">
                        <Pubg className="fill-white group-hover:fill-purple-600 max-h-[100px] transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center justify-center group max-h-[100px] max-w-[225px] fill-white">
                        <Yager className="fill-white group-hover:fill-purple-600 max-h-[100px] transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px] fill-white">
                        <Ndreams className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[175px] fill-white">
                        <Weetabix className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <Bastion className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <Anuvu className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center justify-center max-h-[100px] max-w-[225px] group fill-white">
                        <Chesneys className="fill-white group-hover:fill-purple-600 max-h-[100px] transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <Savencia className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <SingKing className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px]">
                        <Soprasteria className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px] fill-white">
                        <Dodoni className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                    <div className="flex h-fit items-center group justify-center max-h-[100px] max-w-[225px] fill-white">
                        <Noblefoods className="fill-white group-hover:fill-purple-600 transition-color duration-700" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Clients;