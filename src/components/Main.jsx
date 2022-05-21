import Content from './Content'
import Aside from './Aside'

function Main() {
  return (
    <>
      <div className="container-lg">
        <div className="row justify-content-between g-0">
          <Content />
          <Aside />
        </div>
      </div>
    </>
  )
}

export default Main
