export const getCategoryFilter = (categoryId: number) => {
  switch(categoryId) {
    case 0:  // Argentina - Full catalog
      return `category_1.lte.33, category_2.lte.33`
    case 33: // Universals
      return `and(category_1.gte.34,category_1.lte.41), and(category_2.gte.34, category_2.lte.41)`
    case 43: // Postcard
      return `and(category_1.gte.43,category_1.lte.53), and(category_2.gte.43, category_2.lte.53)`
    default:
      return `category_1.eq.${categoryId}, category_2.eq.${categoryId}`
  }
}
