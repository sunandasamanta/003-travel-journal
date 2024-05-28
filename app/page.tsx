// importing components
import Card from "@/components/Card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

//importing data
import { data } from "./data"

// importing assets
import mountFuji from "@/public/mount-fuji.jpg";
import sydneyOperaHouse from "@/public/sydney-opera-house.jpg";
import geirangerfjord from "@/public/Geirangerfjord.jpg";

export default function Home() {
  const images = [mountFuji, sydneyOperaHouse, geirangerfjord];
  return (
    <main>
      <Navbar />
      {
        data.map((item, index) => (
          <Card
            key={index}
            country={item.country}
            place={item.place}
            dateVisited={item.dateVisited}
            description={item.description}
            imgSrc={images[index]}
          />
        ))
      }
      <Footer />
    </main>
  )
}
