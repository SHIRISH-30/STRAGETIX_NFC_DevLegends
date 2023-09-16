const former = document.querySelector('.former')
const def1 = document.querySelector('.def')
let word = ""
let def = ""
former.addEventListener("submit", async (e) => {
    e.preventDefault();
    word = former.elements.word.value;
    const config = { headers: {'X-RapidAPI-Key' : '', 'X-RapidAPI-Host' : 'dictionary-by-api-ninjas.p.rapidapi.com'}, params : { word: `${word}`} }
    const res = await axios.get("Your API here",config)
    console.log(res.data)
    def = res.data.definition
    def1.textContent = def
    former.elements.word.value = ""
})