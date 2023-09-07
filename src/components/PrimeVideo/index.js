import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const val = moviesList.filter(each => each.categoryId === 'ACTION')

  const val1 = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="con2"
        alt="prime video"
      />
      <div>
        <h1 className="head">Action Movies</h1>
        <div className="con1">
          <MovieSlider item={val} />
        </div>
      </div>
      <div>
        <h1 className="head">Comedy Movies</h1>
        <div className="con1">
          <MovieSlider item={val1} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
