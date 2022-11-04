import React from "react"

const Form = () => {
  const [name, setName] = React.useState("")

  return (
    <div>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button disabled={!name}>Submit</button>
    </div>
  )
}

export default Form
