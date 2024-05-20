import { createClient } from './server'

import { Table } from 'consts/db'

export const getItemsCount = async () => {
  const supabase = createClient()

  const items = await supabase
    .from(Table.Items)
    .select('*', { count: 'exact', head: true })
    .gt('stock', 0)

  return items.count
}
