import React from "react"

function Card() {
    return (
        <div className="flex flex-col p-10 shadow-xl bg-white text-blue-900 rounded-lg shadow-black/50 shat w-fit">
            <img className="w-20" src="/computer.svg" alt="" />
            <h3 className="text-lg font-semibold">IT Infrastructure Solutions</h3>
            <p className="text-gray-500 text-wrap">
                Matured Approach to Design and <br /> Implementation.
            </p>
            <a href="" className="text-blue-900">Read More</a>
        </div>
    )
}

export default function Main() {
    return (
        <div className="relative h-svh">

            <div className="absolute md:-top-[35%] -top-[20%] z-40 px-7 py-10 flex flex-wrap gap-5 justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}