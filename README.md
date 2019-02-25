# JS Pokemon Maker


## Objectives

- DOM Manipulation
- Events and Event Handlers
- Callbacks
- Fetch
---

Hello, your assignment today is to create a full CRUD app with the pokemon API.

---

## Instructions

- Fetch all pokemon and create a pokemon card for each.

- User should be able to create new pokemon with a minimum of a name, image, height, weight, and checkbox to pick which abilities the new pokemon will have.

- Abilities include (but are not limited to):
  - overgrow
  - chlorophyll
  - blaze
  - solar-power
  - torrent
  - rain-dish
  - shield-dust
  - runaway
  - shed skin
  - electric shock
  - poison-point
  - cute-charm
  - flash-fire

- A user should be able to edit and delete any pokemon they create, or that is already existing in the database.

- The file `db.json` is your server. Start your server by doing the following in your terminal:
  - `$ npm install -g json-server`
  - `$ json-server --watch db.json`

---

### Deliverables:

1.  Implement checkbox functionality for abilities.
2.  Implement a click functionality to see more details about the pokemon as well as edit and delete buttons.
3.  When edit is clicked, it should replace the pokemon's information with a edit form.
4.  When delete is clicked, it should be deleted from both the frontend and the backend.

---

### Sample Markup:

Each Pokemon card might look something like this in HTML:

```html
<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">charizard</h1>
    <div class="pokemon-image">
      <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
    </div>
  </div>
  <div class="pokemon-info">
    <!-- Pokemon info here -->
  </div>
</div>
```

Take a look at `/style.css` if you're curious about how this app is styled. Applying the classes appropriately from the snippet above should style your Pokemon cards.

---

BONUS:
1. More complex create form: ability to choose stats, moves, etc. (have fun!)
2. Delete functionality should bring user to confirmation and cancel buttons in which the user can choose to fully delete or go back to the information area of card.
3. Instead of edit form only replacing the info div, the edit form should take up the entire window. There should be a back button to return to index, and a submit to confirm edits and return to the changed index page.
4. Add search functionality by ability.
