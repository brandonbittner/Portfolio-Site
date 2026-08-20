import { useParams } from 'react-router-dom'

export default function CaseStudy() {
  const { slug } = useParams()
  return (
    <div>
      <h1>Case Study: {slug}</h1>
    </div>
  )
}
