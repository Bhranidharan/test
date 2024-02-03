import React, {useState} from 'react'

function Yellow(props) {

  const d = {
    name: 'Bharani',
    passion: 'Singing'
  }

  let {hello = d} = props

  console.log(props)

  const [change, setchange] = useState(hello.name)

  function click() {
    setchange('Tesla')
    console.log("Karthika")
  }
    
  return (
    <div>
        <h1>My name is {change}</h1>
        <h1>My passion is {hello.passion}</h1>
        
          {hello.name === 'Karthika' ? <>hello</> : <>hi</>}
        
        <button onClick={click}>click</button>
    </div>
  )
}

export default Yellow