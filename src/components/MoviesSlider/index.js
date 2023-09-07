import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'

import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {item} = props

  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <Slider {...settings}>
      {item.map(each => (
        <MovieItem items={each} key={each.id} />
      ))}
    </Slider>
  )
}

export default MovieSlider
