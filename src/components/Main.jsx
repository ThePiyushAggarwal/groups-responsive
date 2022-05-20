import Content from './Content'
import Aside from './Aside'

function Main() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-between">
          <Content />
          <Aside />
        </div>
      </div>
    </>
  )
}

export default Main
