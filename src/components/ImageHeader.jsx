import HeaderImage from '../images/header-image.png'

function ImageHeader() {
  return (
    <div className="mb-4">
      <img className="img-fluid" src={HeaderImage} alt="HeaderImage" />
    </div>
  )
}

export default ImageHeader
