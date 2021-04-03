import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
import React from 'react'
import { Carousel } from 'react-bootstrap'

const CustomCarousel = ({ imageUrls = [], index, handleSelect }) => {
  return (
    <div className="my-4 width-100 mobile-carousel ">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={
          <span aria-hidden="true" className=" text-dark">
            <ArrowForwardIos />
          </span>
        }
        prevIcon={
          <span aria-hidden="true" className=" text-dark">
            <ArrowBackIos />
          </span>
        }
        indicators={true}
      >
        {imageUrls &&
          imageUrls.map((image, i) => (
            <Carousel.Item key={image + i}>
              <img className="d-block w-100" src={image} alt={image} />
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  )
}

export default CustomCarousel
