import React from "react";

class Nav extends React.Component{
    render(){
        return(
            <div className="container px-5 lg:px-0 flex justify-between items-center mx-auto text-sm py-[2rem]">
                <img src="./images/logo.svg" alt="logo" className="sm:w-auto sm:h-auto w-[100px] h-[30px]"/>
                <ul className="flex 
                text-white gap-[2.5rem] font-normal text-[#65E2D9] items-center">
                    <li className="cursor-pointer hover:text-white hover:border-white hover:border-b">Features</li>
                    <li className="cursor-pointer hover:text-white hover:border-white hover:border-b">Team</li>
                    <li className="cursor-pointer hover:text-white hover:border-white hover:border-b">Sign In</li>
                </ul>
            </div>
        )
    }
}

export default Nav;