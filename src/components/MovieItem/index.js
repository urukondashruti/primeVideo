import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {items} = props
  const {id, thumbnailUrl, videoUrl} = items

  return (
    <div className="con10">
      <Popup
        modal
        trigger={
          <button type="button" className="but1">
            <img src={thumbnailUrl} alt="thumbnail" className="img1" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div>
            <div className="con11 but2">
              <button
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
                className="but2"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="con12">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
