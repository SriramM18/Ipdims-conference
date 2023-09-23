import React from 'react'
import {Carousel} from 'flowbite-react'
import DSC_0213 from "../resources/DSC_0213.JPG"
import DSC_0779 from "../resources/DSC_0779.JPG"
import DSC_0129 from "../resources/DSC_0129.JPG"

const HeroCarousel = () => {
  return (
    <div className="shadow-xl h-56 w-full sm:h-64 xl:h-80 2xl:h-96 hover:shadow-2xl hover:scale-105 ">
  <Carousel slideInterval={5000}>
    <img
    src={DSC_0213}
    alt="..."
    />
    
    <img
      src={DSC_0779}
      alt="..."
    />
    <img
      src={DSC_0129}
      alt="..."
    />
  </Carousel>
</div>
  )
}

export default HeroCarousel