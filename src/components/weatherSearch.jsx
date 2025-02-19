import { useState } from "react"



const WeatherSearch = (props) => {

    const [formData, setFormData] = useState('')

const handleChange = (e) => {
    setFormData(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchData(formData)
    setFormData('')
}

    return (
        <>
        <h2> Search </h2> 
        <form onSubmit={handleSubmit}> 
            <label>
                Enter a city: 
            </label>
            <input type="text" 
            value={formData}
            onChange={handleChange}
            >
            
            </input>
            <button type="submit"> Search </button>
        </form>
        </>
    )
}
export default WeatherSearch