import { Card } from 'ui/Card'

import Symbols from 'consts/symbols.json'

import Catalogs from './catalogs.json'
import Strings from './es.json'

export default function SymbolsPage() {
  return (
    <Card title={Strings.title}>
      <div className='my-2 flex justify-around items-start'>
        <table>
          <thead>
            <tr>
              <td className='border text-center font-bold' colSpan={2}>
                {Strings.symbols}
              </td>
            </tr>
          </thead>
          <tbody>
            {Symbols.map(s => (
              <tr key={s.name_es}>
                <td className='w-35 border text-center font-bold tracking-tighter'>
                  {s.symbol}
                </td>
                <td className='w-70 px-1 border'>
                  {s.name_es}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <td className='border text-center font-bold' colSpan={2}>
                {Strings.catalogs}
              </td>
            </tr>
          </thead>
          <tbody>
            {Catalogs.map(c => (
              <tr key={c.code}>
                <td className='w-35 border text-center font-bold'>{c.code}</td>
                <td className='w-120 px-1 border'>{c.name_es}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
