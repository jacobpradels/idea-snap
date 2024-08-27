"use client"
import Image from "next/image"
import BottleImage from "@/app/bottle.png"
import { useWindowScroll } from "@uidotdev/usehooks"

const clamp = (input: number, min: number, max: number) => {
  return Math.min(Math.max(input, min), max);
}

const Bottle = () => {
  const [state, scrollTo] = useWindowScroll();
  const max = Math.min(state.y, 100)
  console.log(max)
  return (
    <div style={{
    }}
      className="absolute"
    >
      <div 
        className="w-full flex"
        style={{
          gap: `${state.y}px`
        }}
      >
        <Image
          src={BottleImage}
          alt="Lightning in a bottle"
          className="w-full mr-36"
          style={{ 
            scale: `${max}%`,
            rotate: `${state.y / 5}deg`
          }}
          width={320}
          height={661}
        />
        <Image
          src={BottleImage}
          alt="Lightning in a bottle"
          className="w-full"
          style={{ 
            scale: `${max}%`,
            rotate: `-${state.y / 5}deg`
          }}
          width={320}
          height={661}
        />
      </div>
    </div>
  )
}

export default Bottle;