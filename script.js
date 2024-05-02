const key = "8081f454be9c24b127e6d63c0747367e"

const buttonClick = () => {
    const cidade = document.querySelector(".inputCity").value

    searchCity(cidade)
}

async function searchCity(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    updateScreen(dados)
}

const updateScreen = (dados) => {
    document.querySelector(".nameCity").innerHTML = `Tempo em ${dados.name}`;
    document.querySelector(".temp").innerHTML= `${Math.floor(dados.main.temp)}°C`;
    document.querySelector(".textPrev").innerHTML= dados.weather[0].description
    document.querySelector(".humidity").innerHTML= `Umidade: ${dados.main.humidity}%`
    document.querySelector(".imgPrev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    console.log(dados)
}