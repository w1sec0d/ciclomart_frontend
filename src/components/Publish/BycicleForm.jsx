import { useState } from 'react'
import filters from '../../utils/filters'
import Input from '../Input'
import Button from '../Button'
import Select from './Select'

const BycicleForm = ({ onSubmit }) => {
  const [bycicle, setBycicle] = useState({
    marca: '',
    modelo: '',
    anio: '',
    tipo: '',
    rodado: '',
    material: '',
    cambios: '',
    suspension: '',
    frenos: '',
    accesorios: '',
  })

  const handleChange = (event) => {
    const { id, value } = event.target
    setBycicle({ ...bycicle, [id]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(bycicle)
  }

  return (
    <div>
      <Input
        id="marca"
        label="Marca"
        value={bycicle.marca}
        onChange={handleChange}
      />
      <Input
        id="modelo"
        label="Modelo"
        value={bycicle.modelo}
        onChange={handleChange}
      />
      <Input
        id="anio"
        label="Año"
        value={bycicle.anio}
        onChange={handleChange}
      />
      {/* <Select
        id="tipo"
        label="Tipo"
        options={filters.tipo}
        value={bycicle.tipo}
        onChange={handleChange}
      /> */}
      <Input
        id="rodado"
        label="Rodado"
        value={bycicle.rodado}
        onChange={handleChange}
      />
      <Input
        id="material"
        label="Material"
        value={bycicle.material}
        onChange={handleChange}
      />
      <Input
        id="cambios"
        label="Cambios"
        value={bycicle.cambios}
        onChange={handleChange}
      />
      <Input
        id="suspension"
        label="Suspensión"
        value={bycicle.suspension}
        onChange={handleChange}
      />
      <Input
        id="frenos"
        label="Frenos"
        value={bycicle.frenos}
        onChange={handleChange}
      />
      <Input
        id="accesorios"
        label="Accesorios"
        value={bycicle.accesorios}
        onChange={handleChange}
      />
    </div>
  )
};

export default BycicleForm
