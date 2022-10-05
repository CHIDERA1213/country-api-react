import { useState, useEffect } from "react"

const Footer = () => {
    const [date, setDate] = useState("")

    useEffect(function(){
        setDate(new Date().getFullYear())
    })


  return (
    <div className="footer">
        copyright &copy; {date}
    </div>
  )
}

export default Footer