import { useState } from 'react'
import filters from '../../utils/newFilters'
import Input from '../Input'
import CustomSelect from './Select'
import TextArea from '../TextArea'
import Button from '../Button'
import Select from './Select'

const BycicleForm = ({ onSubmit, bycicle, handleChange }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoBicicleta"
          label="Tipo"
          options={filters['bicicleta'].tipo}
          value={bycicle.tipoBicicleta}
          onChange={handleChange}
        />
        <CustomSelect
          name="color"
          label="Color"
          options={filters['bicicleta'].color}
          value={bycicle.color}
          onChange={handleChange}
        />
        <CustomSelect
          name="genero"
          label="Genero"
          options={filters['bicicleta'].genero}
          value={bycicle.genero}
          onChange={handleChange}
        />
        <CustomSelect
          name="edad"
          label="Edad"
          options={filters['bicicleta'].edad}
          value={bycicle.edad}
          onChange={handleChange}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles del marco
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {/* <Input
          type="number"
          id="modeloMarco"
          label="Modelo del marco"
          value={bycicle.modeloMarco}
          onChange={handleChange}
        /> */}

        <Input
          type="number"
          id="tamañoMarco"
          label="Tamaño del marco (cm)"
          value={bycicle.material}
          onChange={handleChange}
        />

        <CustomSelect
          name="materialMarco"
          label="Material del marco"
          options={filters['bicicleta'].materialMarco}
          value={bycicle.materialMarco}
          onChange={handleChange}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de las ruedas
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {/* <Input
          type="number"
          id="modeloRuedas"
          label="Modelo de las ruedas"
          value={bycicle.modeloRuedas}
          onChange={handleChange}
        /> */}

        <Input
          type="number"
          id="tamañoRueda"
          label="Tamaño de las ruedas"
          value={bycicle.tamañoRueda}
          onChange={handleChange}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de transmisión
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="transmision"
          label="Transmisión"
          options={filters['bicicleta'].transmision}
          value={bycicle.transmision}
          onChange={handleChange}
        />

        <CustomSelect
          name="tipoPedales"
          label="Pedales"
          options={filters['bicicleta'].pedales}
          value={bycicle.tipoPedales}
          onChange={handleChange}
        />

        <Input
          type="number"
          id="velocidades"
          label="Número de velocidades"
          value={bycicle.velocidades}
          onChange={handleChange}
        />

        {/* <Input
          type="number"
          id="modeloPedales"
          label="Modelo de pedales"	
          value={bycicle.modeloPedales}
          onChange={handleChange}
        />

        <Input
          type="number"
          id="modeloCasstte"
          label="Modelo de cassette"	
          value={bycicle.modeloCassette}
          onChange={handleChange}
        />

        <Input
          type="number"
          id="modeloCadena"
          label="Modelo de cadena"	
          value={bycicle.modeloCadena}
          onChange={handleChange}
        /> */}
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de suspensión
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoSuspension"
          label="Suspensión"
          options={filters['bicicleta'].suspension}
          value={bycicle.tipoSuspension}
          onChange={handleChange}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de los frenos
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoFrenos"
          label="Tipo de frenos"
          options={filters['bicicleta'].frenos}
          value={bycicle.tipoFrenos}
          onChange={handleChange}
        />

        {/* <Input
          type="number"
          id="modeloFrenos"
          label="Modelo de los frenos"	
          value={bycicle.modeloFrenos}
          onChange={handleChange}
          className='col-span-2'
        /> */}
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles de peso
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          id="pesoBicicleta"
          label="Peso de la bicicleta (kg)"
          value={bycicle.pesoBicicleta}
          onChange={handleChange}
        />

        <Input
          type="number"
          id="pesoMaximo"
          label="Peso máximo soportado (kg)"
          value={bycicle.pesoMaximo}
          onChange={handleChange}
        />
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Detalles del manubrio
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <CustomSelect
          name="tipoManubrio"
          label="Tipo de Manubrio"
          options={filters['bicicleta'].manubrio}
          value={bycicle.tipoManubrio}
          onChange={handleChange}
        />

        {/* <Input
          type="number"
          id="modeloManubrio"
          label="Modelo del manubrio"	
          value={bycicle.modeloManubrio}
          onChange={handleChange}
          className='col-span-2'
        /> */}
      </div>

      <h3 className="text-xl mt-8 text-primary justify-self-stretch">
        Adicionales
      </h3>
      {/*       
      <Input
          type="number"
          id="modeloSillin"
          label="Modelo del sillin"	
          value={bycicle.modeloSillin}
          onChange={handleChange}
      /> */}

      <TextArea
        id="extras"
        label="Extras"
        value={bycicle.extras}
        onChange={handleChange}
      />
    </>
  )
}

export default BycicleForm
