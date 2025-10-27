import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { getValueTranslationKey } from '../utils/filterMappings'

const ItemsTable = ({ data }) => {
  const { t } = useTranslation()

  // Translate value if it has a translation, otherwise return as-is
  const translateValue = (fieldName, value) => {
    const translationKey = getValueTranslationKey(fieldName, value)
    return translationKey ? t(translationKey) : value
  }

  // Create columns with translated headers and custom cell renderers for values
  const columns = [
    {
      accessorKey: 'estado',
      header: t('table.condition'),
      cell: ({ getValue }) => translateValue('estado', getValue()),
    },
    {
      accessorKey: 'disponibilidad',
      header: t('table.availability'),
      cell: ({ getValue }) => translateValue('disponibilidad', getValue()),
    },
    { accessorKey: 'nombre', header: t('table.name') },
    { accessorKey: 'descripcionModelo', header: t('table.modelDescription') },
    {
      accessorKey: 'categoria',
      header: t('table.category'),
      cell: ({ getValue }) => translateValue('categoria', getValue()),
    },
    { accessorKey: 'compatibilidad', header: t('table.compatibility') },
    {
      accessorKey: 'tipoBicicleta',
      header: t('table.bicycleType'),
      cell: ({ getValue }) => translateValue('tipoBicicleta', getValue()),
    },
    {
      accessorKey: 'color',
      header: t('table.color'),
      cell: ({ getValue }) => translateValue('color', getValue()),
    },
    {
      accessorKey: 'genero',
      header: t('table.gender'),
      cell: ({ getValue }) => translateValue('genero', getValue()),
    },
    {
      accessorKey: 'edad',
      header: t('table.age'),
      cell: ({ getValue }) => translateValue('edad', getValue()),
    },
    {
      accessorKey: 'tamañoMarco',
      header: t('table.frameSize'),
      cell: ({ getValue }) => translateValue('tamañoMarco', getValue()),
    },
    {
      accessorKey: 'materialMarco',
      header: t('table.frameMaterial'),
      cell: ({ getValue }) => translateValue('materialMarco', getValue()),
    },
    { accessorKey: 'tamañoRueda', header: t('table.wheelSize') },
    {
      accessorKey: 'tipoFrenos',
      header: t('table.brakeType'),
      cell: ({ getValue }) => translateValue('tipoFrenos', getValue()),
    },
    { accessorKey: 'velocidades', header: t('table.speeds') },
    {
      accessorKey: 'suspension',
      header: t('table.suspension'),
      cell: ({ getValue }) => translateValue('suspension', getValue()),
    },
    {
      accessorKey: 'transmision',
      header: t('table.transmission'),
      cell: ({ getValue }) => translateValue('transmision', getValue()),
    },
    {
      accessorKey: 'tipoPedales',
      header: t('table.pedalType'),
      cell: ({ getValue }) => translateValue('tipoPedales', getValue()),
    },
    {
      accessorKey: 'manubrio',
      header: t('table.handlebar'),
      cell: ({ getValue }) => translateValue('manubrio', getValue()),
    },
    { accessorKey: 'pesoBicicleta', header: t('table.bicycleWeight') },
    { accessorKey: 'pesoMaximo', header: t('table.maxWeight') },
    {
      accessorKey: 'extras',
      header: t('table.extras'),
      cell: ({ getValue }) => translateValue('extras', getValue()),
    },
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
          {table.getRowModel().rows.map((row) =>
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

ItemsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ItemsTable
