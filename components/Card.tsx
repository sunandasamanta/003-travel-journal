
//importing modules
import Image from "next/image"
import mountFuji from "@/public/mount-fuji.jpg"

//importing icons
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Card() {
    return (
        <div className="p-6 flex items-center gap-4">
            <div className="overflow-hidden rounded-xl w-1/2">
                <Image
                    src={mountFuji}
                    className="w-60 hover:scale-[110%] duration-300"
                    alt="mount-fuji"
                />
            </div>
            <div className="">
                <p className="flex items-center">
                    <span className="text-red-300"><LocationOnIcon /></span>
                    <span className="tracking-widest">JAPAN</span>
                    <span className="underline mx-3 text-gray-400">View on Google Maps</span>
                </p>
                <h1 className="font-bold text-4xl my-2">Mount Fuji</h1>
                <h2 className="font-medium pt-3 mb-1">12 Jan, 2024 - 24 Jan, 2024</h2>
                <p className="">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
    )
}
