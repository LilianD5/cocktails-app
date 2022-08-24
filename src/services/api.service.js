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

  getRandom () {
    return fetch('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
  }
}
