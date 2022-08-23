export default class ApiService {
  getAllIngredients () {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
  }

  getAllCategories () {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  }

  getCocktailsListByType (type) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`)
  }

  getCocktailsListByIngredients (ingredient) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  }

  getCocktailsListByCategories (category) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
  }
}
