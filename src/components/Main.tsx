import React from "react"

function Card(props: { src: string, title: string, content: string, readmore: string }) {
    return (
        <a className="flex max-w-xs gap-3 hover:bg-myorange hover:*:text-white cursor-pointer duration-300 flex-col p-10 shadow-xl bg-white text-blue-900 rounded-lg shadow-black/50 shat w-fit">
            <img className="w-20" src={props.src} alt="" />
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <p className="text-gray-500 text-wrap">{props.content}</p>
            <a href={props.readmore} className="text-blue-900">Read More</a>
        </a>
    )
}

export default function Main() {
    return (
        <div className="relative h-svh">

            <div className="absolute md:-top-[35%] lg:-top-[20%] -top-[20%] z-40 px-7 py-10 flex flex-wrap gap-5 justify-center w-full">
                <Card src="https://cadgulf.com/wp-content/uploads/2022/01/IT-Infrastructure-Solutions_icon.png" title="IT Infrastructure Solutions" content="  Matured Approach to Design and <br /> Implementation." readmore="" />
                <Card src="https://cadgulf.com/wp-content/uploads/2022/01/cad-engineering_icon.png" title="CAD &
Engineering" content="Address your business through comprehensive Autodesk services." readmore="" />
                <Card src="https://cadgulf.com/wp-content/uploads/2022/01/networking_icon.png" title="Networking & IT Security" content="Simplified Security Without Impacting Network Performance." readmore="" />
                <Card src="https://cadgulf.com/wp-content/uploads/2022/01/Structured-cabling_icon.png" title="Structured Cabling For Networks" content="Comprehensive Range of Structured Cabling & Installation Solutions." readmore="" />
            </div>
        </div>
    )
}