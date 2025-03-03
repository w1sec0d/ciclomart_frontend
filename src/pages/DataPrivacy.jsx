import { useEffect } from "react"
const DataPrivacy = () => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  
  return (
    <div className="flex flex-col px-56 py-10 h-auto w-full">
      <h1 className="font-bold text-3xl mb-6">Politica de privacidad</h1>
      <p className="mb-6">
        CicloMart está comprometida con la protección de la privacidad de sus
        datos personales. Esta Política de Privacidad describe cómo recopilamos,
        utilizamos y divulgamos sus datos personales uando utiliza nuestro sitio
        web de acuerdo a la Política de protección de datos personales de la ley
        1582 de 2012 de Colombia.
      </p>

      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">1. Información recogida</h2>
        <p>
          CicloMart recoge la siguiente información personal: nombres,
          apellidos, dirección de correo electrónico, ubicación, teléfono y
          edad. Así mismo, cuando sea necesario, podrá ser requerida información
          específica para procesar algún pedido, entrega, pago, facturación o
          publicación de un artículo de ciclismo.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">
          2. Uso de la información recogida
        </h2>
        <p>
          Nuestro sitio web utiliza la información recopilada de los usuarios
          para proporcionar los servicios de CicloMart, mejorar su experiencia,
          analizar el uso de nuestros servicios para realizar investigaciones
          que conduzcan a su mejora continua, y para cumplir con la ley y
          nuestras obligaciones legales.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">
          3. Divulgación de información
        </h2>
        <p>
          Podemos divulgar su información con proveedores de servicios, los
          cuales nos ayudan a operar nuestros servicios como proveedores de pago
          y con autoridades legales si creemos que es necesario para cumplir con
          la ley o para proteger nuestros derechos o los derechos de terceros.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">4. Derecho de titulares</h2>
        <p className="mb-4">
          De acuerdo con el artículo 8 de la Ley 1581 de 2012, usted tiene
          derecho a:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Acceder a su información personal</li>
          <li>Corregir información incorrecta</li>
          <li>Eliminar su información personal </li>
          <li>
            Restringir el tratamiento de tus datos. Solo podemos seguir tratando
            tu información con tu consentimiento o si tenemos un interés
            legítimo. Todavía podemos almacenar tus datos.
          </li>
          <li>Acceder en forma gratuita a sus datos personales</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">
          5. Retención de información
        </h2>
        <p>
          La información que nos proporciones solo se almacenará en nuestros
          sistemas mientras estés utilizando nuestros servicios. Si decides
          eliminar tu cuenta, toda tu información será eliminada de nuestros
          sistemas, excepto en aquellos casos donde sea necesario retenerla para
          cumplir con obligaciones legales o resolver disputas.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">6. Medidas de seguridad</h2>
        <p>
          Tomamos medidas de seguridad razonables para proteger su información
          de pérdida, robo, acceso no autorizado, divulgación sin
          consentimiento, alteración o destrucción.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="font-semibold text-2xl mb-4">
          7. Vigencia de la política
        </h2>
        <p>
          Esta política entra en vigor a partir del 1 de marzo de 2025. Nos
          reservamos el derecho de modificarla o actualizarla. Te recomendamos
          revisar periódicamente esta política para estar al tanto de cualquier
          cambio.
        </p>
      </section>
    </div>
  )
}

export default DataPrivacy
