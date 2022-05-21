import Card from './Card'
import mockData from '../mock-data/data.json'

function Content() {
  return (
    <div className="col-md-8 mt-3">
      {mockData.map((data) => (
        <Card data={data} key={data.id} />
      ))}
    </div>
  )
}

export default Content
