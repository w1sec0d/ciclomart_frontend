import React from 'react'
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'

const columns = [
  { accessorKey: 'estado', header: 'Estado' },
  { accessorKey: 'disponibilidad', header: 'Disponibilidad' },
  { accessorKey: 'nombre', header: 'Nombre' },
  { accessorKey: 'tipo', header: 'Tipo' },
  { accessorKey: 'descripcionModelo', header: 'Descripción del Modelo' },
  { accessorKey: 'categoria', header: 'Categoría' },
  { accessorKey: 'compatibilidad', header: 'Compatibilidad' },
  { accessorKey: 'tipoBicicleta', header: 'Tipo de Bicicleta' },
  { accessorKey: 'color', header: 'Color' },
  { accessorKey: 'genero', header: 'Género' },
  { accessorKey: 'edad', header: 'Edad' },
  { accessorKey: 'tamañoMarco', header: 'Tamaño del Marco' },
  { accessorKey: 'materialMarco', header: 'Material del Marco' },
  { accessorKey: 'tamañoRueda', header: 'Tamaño de la Rueda' },
  { accessorKey: 'tipoFrenos', header: 'Tipo de Frenos' },
  { accessorKey: 'velocidades', header: 'Velocidades' },
  { accessorKey: 'suspension', header: 'Suspensión' },
  { accessorKey: 'transmision', header: 'Transmisión' },
  { accessorKey: 'tipoPedales', header: 'Tipo de Pedales' },
  { accessorKey: 'manubrio', header: 'Manubrio' },
  { accessorKey: 'pesoBicicleta', header: 'Peso de la Bicicleta' },
  { accessorKey: 'pesoMaximo', header: 'Peso Máximo' },
  { accessorKey: 'extras', header: 'Extras' },
  { accessorKey: 'nombreMarca', header: 'Marca' },
]

const ItemsTable = ({ data }) => {
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
              Característica
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border ">
              Valor
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
