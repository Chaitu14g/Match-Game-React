import './index.css'

const SingleItem = props => {
  const {eachItem, onClickThumbnail} = props
  const {thumbnailUrl} = eachItem
  const onClickThumbnailImage = () => {
    onClickThumbnail(thumbnailUrl)
  }
  return (
    <li className="single_list" onClick={onClickThumbnailImage}>
      <button type="button" className="useless_button_list">
        <img alt="thumbnail" className="single_list_image" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default SingleItem
