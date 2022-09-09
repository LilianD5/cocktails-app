export default class ApiService {
  getAllIngredients () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?i=list')
  }

  getAllCategories () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/list.php?c=list')
  }

  getCocktailsListByType (type) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?a=${type}`)
  }

  getCocktailsListByIngredients (ingredient) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredient}`)
  }

  getCocktailsListByCategories (category) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?c=${category}`)
  }

  getCocktailDetails (id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${id}`)
  }

  getPopularCocktails () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php')
  }

  getRandomCocktails () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
  }

  getResearchCocktails (search) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  }

  getRatingByName (name) {
    return fetch(`http://localhost:7070/api/getOne/${name}`)
  }

  UpdateRatingByName (name, note, vote) {
    return fetch(`http://localhost:7070/api/update/${name}/${note}/${vote}`, {
      method: 'PATCH'
    })
  }

  CreateNewEntryRating (name, note) {
    return fetch(`http://localhost:7070/api/post/${name}/${note}`, {
      method: 'POST'
    })
  }
}
