import React from 'react';
import GatsbyLogo from '@/images/gatsby.svg';
import Typescript from '@/images/typescript.svg';


interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className="bg-black text-white py-8 px-8">
            <div className="w-11/12 mx-auto">
                <div className="text-center">
                    <p>Powered by</p>
                    <div className="flex flex-row gap-8 items-center justify-center my-4">
                        <Typescript className="max-w-[50px] opacity-50 fill-white" />
                        <GatsbyLogo className="max-w-[50px] opacity-50 fill-white" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;