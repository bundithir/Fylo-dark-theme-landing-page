import React from "react";

class Access extends React.Component{
    render(){
        return(
            <div className="container px-5 lg:px-0 mx-auto text-sm text-white mt-[1rem] translate-y-[8rem]">
                <div className="w-full lg:w-[900px] h-fit bg-[#1C2431] mx-auto text-center shadow-xl rounded-md py-[2rem] px-[1.5rem]">
                    <h1 className="font-['Raleway'] font-bold text-4xl mb-[1.5rem]">Get early access today</h1>
                    <p className="max-w-[600px] text-[#65E2D9] mx-auto mb-[2rem]">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
                    </p>
                    <div className="flex lg:flex-row flex-col lg:gap-[2rem] gap-[1rem] items-center justify-center">
                        <input onChange={this.props.Email} type="email" placeholder="email@example.com" className="rounded-full py-[1em] focus:outline-none text-black w-full lg:w-[550px] px-[2rem] "/>
                        <button className="transition-all duration-500 bg-size-200 bg-pos-100 hover:bg-pos-200 via-[#65E2D9] font-bold py-[1rem] px-[2rem] rounded-full bg-gradient-to-r from-[#65E2D9] to-[#339ECC] w-full lg:w-[196.1px]" onClick={this.props.Click}>Get Started For Free</button>
                    </div>
                    {this.props.Error?
                        <p className="text-left px-[2rem] lg:px-[4rem] text-[#FF4242]">Please enter a valid email address</p>
                        :
                        null
                    }
                    
                </div>
            </div>
        )
    }
}

export default Access;