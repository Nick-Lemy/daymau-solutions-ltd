import React from "react";

export default function Header() {
    return (
        <header>
            <div className="md:flex md:justify-between md:px-7 bg-blue-900 text-sm flex justify-center text-white p-3">
                <p className="hidden md:flex">sales@cadgulf.com <span className="px-2">+971-585808937</span></p>
                <p>Follow Us</p>
            </div>
            <div className="md:py-2 flex justify-between px-7">
                <img className="w-28" src="/logo.jpeg" alt="Logo" />
                <img className="w-10" src="/menu.svg" alt="" />
            </div>
            <div className="flex flex-row items-center py-10 min-h-svw bg-no-repeat bg-[url('https://cadgulf.com/wp-content/uploads/2021/06/website-banner-1.jpg?id=16289')] ">
                <div className="flex flex-col gap-10 w-full justify-center items-center bg-cover h-full w-h-full ">
                    <h1 className="text-6xl w-fit h-fit text-center text-white font-semibold">
                        Beyond our expertise & experience
                        what sets us apart is our people
                    </h1>
                    <div className="self-start md:flex-row md:justify-evenly w-full flex flex-col">
                        <a href="" className="text-white font-semibold rounded-3xl py-3 w-fit px-10 bg-blue-700">
                            Request a Quote
                        </a>
                        <a href="" className="text-white font-semibold rounded-3xl w-fit py-3 px-10 bg-orange-400">
                            Free IT Consultation
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}