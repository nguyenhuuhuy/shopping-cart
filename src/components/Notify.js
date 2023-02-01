import React from 'react'
import { useSelector } from 'react-redux'

function Notify() {
  const notify = useSelector(state=>state.notify)
  return (
      <div className="alert alert-success" role="alert" id="mnotification">
          {notify}
      </div>
  )
}

export default Notify