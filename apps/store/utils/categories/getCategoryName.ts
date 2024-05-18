import { Categories } from 'consts/categories.es'

const CategoriesMap = new Map<number, string>()
Categories.forEach(c => {
  if (!c.subcategories?.length) {
    CategoriesMap.set(c.id, c.name)
  } else {
    c.subcategories.forEach(s => CategoriesMap.set(s.id, s.name))
  }
})

export const getCategoryName = (id: number) => CategoriesMap.get(id)
