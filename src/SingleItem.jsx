import { useState } from "react"

const SingleItem = ({item,removeItem}) => {
    const [isChecked, setIsChecked] = useState(item.completed)
  return (
    <div className="single-item">
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
        <button className="btn remove-btn" type="button">delete</button>
    </div>
  )
}
export default SingleItem