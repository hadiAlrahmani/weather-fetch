const API_KEY='7d61cd98c5bc4e53933101553251902'
const BASE_URL=`http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

const show = async (formData) => {
    try {
        const queryString = `&q=${formData}`
        const res = await fetch(BASE_URL + queryString)
        const data = await res.json()
        console.log('Data: ', data)
        return data

    } catch (err) {
console.log(err)
    }
}

// src/services/weatherService.js
show('New York');



export {
    show,
}