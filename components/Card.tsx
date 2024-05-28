
//importing modules
import Image from "next/image"
import mountFuji from "@/public/mount-fuji.jpg"

//importing icons
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Card(props: any) {
    
    return (
        <div className="p-6 flex justify-center items-center gap-4">
            <div className="overflow-hidden rounded-xl w-max">
                <Image
                    src={props.imgSrc}
                    className="w-60 hover:scale-[110%] duration-300"
                    alt="mount-fuji"
                />
            </div>
            <div className="w-2/3">
                <p className="flex items-center">
                    <span className="text-red-300"><LocationOnIcon /></span>
                    <span className="tracking-widest">{props.country}</span>
                    <span className="underline mx-3 text-gray-400">View on Google Maps</span>
                </p>
                <h1 className="font-bold text-4xl my-2">{props.place}</h1>
                <h2 className="font-medium pt-3 mb-1">{props.dateVisited}</h2>
                <p className="">
                    {props.description}
                </p>
            </div>
        </div>
    )
}
