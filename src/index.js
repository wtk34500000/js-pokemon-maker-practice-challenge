document.addEventListener('DOMContentLoaded', () => {
  
  //YOUR CODE HERE
  const fetchPokemon = () => {
    return fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
  }

  
  const deletePokemon = (pokemonId) => {
    fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
      method: "delete"
    })
  }

  const updatePokemon = (pokemonData) => {
    return fetch(`http://localhost:3000/pokemon/${pokemonData.id}`, {
      method: "put",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(pokemonData)
    }).then(resp => resp.json()).then(json => {return json})
    
  }

  const handleCreatePokemon = (pokemonData) => {
    
    return fetch('http://localhost:3000/pokemon', {
      method: 'POST',

      // There was a typo here; 'header' instead of 'headers'

      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(pokemonData)
    }).then(resp => resp.json())
    .then(res => {
      return res
    })
  }

  const createNewPokemon = () =>{
    const name=document.querySelector('#name').value
    const height=document.querySelector('#height').value
    const weight=document.querySelector('#weight').value
    const imgUrl=document.querySelector('#imgUrl').value

    // the querySelectorAll argument string was incorrectly formatted as 'type[checkbox]'
    const checkbox=document.querySelectorAll('input[type="checkbox"]')

    const abilityArray=[]

    
    checkbox.forEach((abiChecked)=> {
      // We need to push the name into the array and use 'checked' as the condition
      if(abiChecked.checked){
        abilityArray.push(abiChecked.name)
      }
    })
    
    const pokemonData={
      name: name,
      height: height,
      weight: weight,
      sprites: {
       front: imgUrl
     },
      abilities: abilityArray
    }

    return pokemonData;
  }

  const pokemonDivCard = (pokemon) => {
    
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const h1 = document.createElement('h1')
    const div3 = document.createElement('div')
    const img = document.createElement('img')

    const div4 = document.createElement('div')

    const editB = document.createElement('button')
    const deleteB = document.createElement('button')

    const ul = document.createElement('ul')


    div1.classList.add("pokemon-card")
    div2.classList.add("pokemon-frame")
    h1.classList.add("center-text")
    h1.innerText = pokemon.name
    div3.classList.add("pokemon-image")
    ul.classList.add("pokemon-ability")
    
    pokemon.abilities.forEach(abi =>{
      if(abi.length > 0){
        const li = document.createElement('li')
        li.innerText = abi
        ul.append(li)
      }
    })
    
    img.dataset.id = pokemon.id
    img.dataset.action = "flip"
    img.classList.add("toggle-sprite")
    img.src = pokemon.sprites.front
    editB.innerText = "Edit"
    editB.classList.add('edit')
    editB.addEventListener("click", (event) => handleEditForm(event, pokemon))
    deleteB.innerText = "Delete"
    deleteB.classList.add('submit')
    // deleteB.addEventListener("click", (e)=> { 
    //           deletePokemon(pokemon)
    //           e.target.parentElement.parentElement.remove()
    // })
    div4.classList.add("pokemon-info")


    div1.append(div2, div4)
    div4.append(ul)
    div2.append(h1, div3, editB, deleteB)
    div3.append(img)
    
    return div1
  }

  const handleEditForm = (event, pokemon) =>{
    const div = document.querySelector('.pokemon-info')
    div.innerHTML = editFormHtml(pokemon)
    const form = document.querySelector('#edit-form')
    form.addEventListener('submit', (e) => {
      hanldeEditButton(e, pokemon)
    })

  }

    const hanldeEditButton= (e, pokemon)=>{
      e.preventDefault()
      const name=document.querySelector('#name2').value
      
      const height=document.querySelector('#height2').value
      const weight=document.querySelector('#weight2').value
      const imgUrl=document.querySelector('#imgUrl2').value
      

      const checkbox=document.querySelectorAll('input[type="checkbox"]')

      const abilityArray=[]

    
      checkbox.forEach((abiChecked)=> {
        // We need to push the name into the array and use 'checked' as the condition
        if(abiChecked.checked){
          abilityArray.push(abiChecked.name)
        }
      })
    
    const pokemonData={
      id: pokemon.id,
      name: name,
      height: height,
      weight: weight,
      sprites: {
       front: imgUrl
     },
      abilities: abilityArray
    }
    
    updatePokemon(pokemonData)
  
  }


  const editFormHtml = (pokemon) =>{
      return `<form id="edit-form" class ="edit-pokemon-form">
      <h1>Edit Pokemon:</h1>
      <label for="name">Pokemon Name: </label>
      <input type="text" id="name2", name="name" value=${pokemon.name}><br>
      <label for="height">Pokemon Height: </label>
      <input type="number" id="height2", name="height" value=${pokemon.height}><br>
      <label for="weight">Pokemon Weight: </label>
      <input type="number" id="weight2", name="weight" value=${pokemon.weight}><br>
      <label for="imgUrl">Pokemon Image Url: </label>
      <input type="url" id="imgUrl2", name="imgUrl" value=${pokemon.sprites.front}><br>

      <label>Abilities: </label><br>
      <input type="checkbox" name="overgrow" value="overgrow" ${pokemon.abilities.includes("overgrow") ? 'checked' : ''}> overgrow 
      <input type="checkbox" name="chlorophyll" value="chlorophyll" ${pokemon.abilities.includes("chlorophyll") ? 'checked' : ''}> chlorophyll
      <input type="checkbox" name="blaze" value="blaze" ${pokemon.abilities.includes("blaze") ? 'checked' : ''}> blaze
      <input type="checkbox" name="solar-power" value="solar-power" ${pokemon.abilities.includes("solar-power") ? 'checked' : ''}> solar-power
      <input type="checkbox" name="torrent" value="torrent" ${pokemon.abilities.includes("torrent") ? 'checked' : ''}> torrent
      <input type="checkbox" name="rain-dish" value="rain-dish" ${pokemon.abilities.includes("rain-dish") ? 'checked' : ''}> rain-dish
      <input type="checkbox" name="shield-dust" value="shield-dust" ${pokemon.abilities.includes("shield-dust") ? 'checked' : ''}> shield-dust
      <input type="checkbox" name="run-away" value="run-away" ${pokemon.abilities.includes("run-away") ? 'checked' : ''}> run-away 
      <input type="checkbox" name="shed-skin" value="shed-skin" ${pokemon.abilities.includes("shed-skin") ? 'checked' : ''}> shed-skin 
      <input type="checkbox" name="electric-shock" value="electric-shock" ${pokemon.abilities.includes("electric-shock") ? 'checked' : ''}> electric-shock 
      <input type="checkbox" name="poison-point" value="poison-point" ${pokemon.abilities.includes("poison-point") ? 'checked' : ''}> poison-point 
      <input type="checkbox" name="cute-charm" value="cute-charm" ${pokemon.abilities.includes("cute-charm") ? 'checked' : ''}> cute-charm 
      <input type="checkbox" name="flash-fire" value="flash-fire" ${pokemon.abilities.includes("flash-fire") ? 'checked' : ''}> flash-fire <br>

      <input type="submit" id='submit2' value="Edit Pokemon"> <br>
      </form>
      <form id="go-back">
        <input type="submit" id='submit3' value="Go Back"> <br>
      </form>
      `
  }

  fetchPokemon().then(pokemons => {
    const container = document.querySelector('#container')
      pokemons.forEach(pokemon => {
        container.append(pokemonDivCard(pokemon))
      })
  })

  const submitB = document.querySelector('#submit')
  const container = document.querySelector('#container')
  container.addEventListener("click", (e)=>{
      if(e.target.className === 'submit'){
        const pokemonId = parseInt(e.target.parentElement.querySelector('img').dataset.id)
        deletePokemon(pokemonId)
        e.target.parentElement.parentElement.remove()
      }
  })
  
  submitB.addEventListener('submit', (event)=>{
    event.preventDefault()
    // event.stopPropagation()
    // You need to add a .then after handleCreatePokemon() because the return value is a promise object

    const pokemon=handleCreatePokemon(createNewPokemon()).then(pokemon => {
      container.append(pokemonDivCard(pokemon))
    })
  })

})
