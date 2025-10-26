import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'

// Map database field names to translation keys
const ItemsTable = ({ data }) => {
  const { t } = useTranslation()

  // Create columns with translated headers
  const columns = [
    { accessorKey: 'estado', header: t('table.condition') },
    { accessorKey: 'disponibilidad', header: t('table.availability') },
    { accessorKey: 'nombre', header: t('table.name') },
    { accessorKey: 'descripcionModelo', header: t('table.modelDescription') },
    { accessorKey: 'categoria', header: t('table.category') },
    { accessorKey: 'compatibilidad', header: t('table.compatibility') },
    { accessorKey: 'tipoBicicleta', header: t('table.bicycleType') },
    { accessorKey: 'color', header: t('table.color') },
    { accessorKey: 'genero', header: t('table.gender') },
    { accessorKey: 'edad', header: t('table.age') },
    { accessorKey: 'tamañoMarco', header: t('table.frameSize') },
    { accessorKey: 'materialMarco', header: t('table.frameMaterial') },
    { accessorKey: 'tamañoRueda', header: t('table.wheelSize') },
    { accessorKey: 'tipoFrenos', header: t('table.brakeType') },
    { accessorKey: 'velocidades', header: t('table.speeds') },
    { accessorKey: 'suspension', header: t('table.suspension') },
    { accessorKey: 'transmision', header: t('table.transmission') },
    { accessorKey: 'tipoPedales', header: t('table.pedalType') },
    { accessorKey: 'manubrio', header: t('table.handlebar') },
    { accessorKey: 'pesoBicicleta', header: t('table.bicycleWeight') },
    { accessorKey: 'pesoMaximo', header: t('table.maxWeight') },
    { accessorKey: 'extras', header: t('table.extras') },
    { accessorKey: 'nombreMarca', header: t('table.brand') },
  ]
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full ">
        <thead>
          <tr className="bg-primary/80 rounded-xl">
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border">
              {t('table.characteristic')}
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border ">
              {t('table.description')}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row, rowIndex) =>
            row.getVisibleCells().map((cell, cellIndex) => {
              const cellValue = cell.getValue()
              if (!cellValue) return null
              return (
                <tr
                  key={`${row.id}-${cell.id}`}
                  className={`${cellIndex % 2 != 0 ? 'bg-primary/20' : ''}`}
                >
                  <td className="px-6 py-3 whitespace-nowrap text-sm border font-bold w-1/2">
                    {flexRender(
                      cell.column.columnDef.header,
                      cell.getContext()
                    )}
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap text-sm border font-medium w-1/2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ItemsTable
