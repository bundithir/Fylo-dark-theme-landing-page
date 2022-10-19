import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="bg-[#0B1523]">
                <div className="container px-5 lg:px-0 mx-auto text-sm text-[#65E2D9] pt-[10rem]">
                    <img src="./images/logo.svg" alt="logo" className="sm:w-auto sm:h-auto mb-[2rem] w-[100px] h-[30px] mr-auto mt-[3rem]"/>
                    <div className="flex flex-col lg:flex-row lg:justify-between pb-[5rem]">
                        <div className="flex gap-[1.5rem] lg:mb-[0rem] mb-[2rem]">
                                <svg width="18" height="18" className="" xmlns="http://www.w3.org/2000/svg"><path d="M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z" fill="#FFF" fill-rule="evenodd"/></svg>
                                <p className="max-w-[250px] sm:max-w-none lg:max-w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                        </div>
                        <div className="flex flex-col mb-[5rem] gap-[1.2rem] lg:mb-[0rem]">
                            <div className="flex gap-[1.5rem]">
                                <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z" fill="#FFF" fill-rule="evenodd"/></svg>
                                <p>+1-543-123-4567</p>
                            </div>
                            <div className="flex gap-[1.5rem]">
                                <svg width="20" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-2-4h24v24H-2z"/><path d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z" fill="#FFF"/></g></svg>
                                <p>example@fylo.com</p>
                            </div>
                        </div>
                        <ul className="flex flex-col gap-[1rem] lg:mb-[0rem] mb-[3rem]">
                            <li className="cursor-pointer hover:text-white">About Us</li>
                            <li className="cursor-pointer hover:text-white">Jobs</li>
                            <li className="cursor-pointer hover:text-white">Press</li>
                            <li className="cursor-pointer hover:text-white">Blog</li>
                        </ul>
                        <ul className="flex flex-col gap-[1rem] lg:mb-[0rem] mb-[5rem]">
                            <li className="cursor-pointer hover:text-white">Contact Us</li>
                            <li className="cursor-pointer hover:text-white">Terms</li>
                            <li className="cursor-pointer hover:text-white">Privacy</li>
                        </ul>
                        <div className="icon flex gap-[0.5rem]  justify-center">
                        <svg width="36" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon fill-white hover:fill-[#65E2D9] cursor-pointer" viewBox="0 0 512 512"><title>Logo Facebook</title><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/></svg>

                        <svg width="36" height="24" xmlns="http://www.w3.org/2000/svg" class="ionicon fill-white hover:fill-[#65E2D9] cursor-pointer" viewBox="0 0 512 512"><title>Logo Twitter</title><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"/></svg>

                        <svg width="36" height="24" xmlns="http://www.w3.org/2000/svg" class="ionicon fill-white hover:fill-[#65E2D9] cursor-pointer" viewBox="0 0 512 512"><title>Logo Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Footer;