import Input from "../Input";
import Textarea from "../Textarea";
import CustomSelect from "./Select";
import Select from "./Select";

const AvailabilityForm = ({ product, handleChange }) => {

    return (
        <>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <CustomSelect
                name="availability"
                label="Disponibilidad"
                options={ {options:[
                            {label:'Inmediata',value: 'inmediata'},
                            {label:'Preventa',value: 'preventa'},
                            {label:'Sobre pedido',value: 'pedido'},
                            {label:'Agotado',value: 'agotado'}] } }
                value={product.availability}
                onChange={handleChange}
            />

            <CustomSelect
                name="retire"
                label="Retiro disponible"
                options={ {options:[{label:'Si',value:true},{label:'No',value:false}] } }
                value={product.retire}
                onChange={handleChange}
            />

            <CustomSelect
                name="state"
                label="Condición"
                options={ {options:[
                            {label:'Nuevo',value:'nuevo'},
                            {label:'Usado',value:'usado'}, 
                            {label:'Reacondicionado',value:'reacondicionado'}] } }
                value={product.retire}
                onChange={handleChange}
            />
        </div>   
            <Input
                type="number"
                id="sendPrice"
                label="Precio de envio"
                value={product.sendPrice}
                onChange={handleChange}
            />
        </>
      );
}

export default AvailabilityForm;