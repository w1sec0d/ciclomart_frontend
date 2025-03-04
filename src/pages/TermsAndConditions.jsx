import { useEffect } from "react"

const TermsAndCondition = () => {

  const sections = [
    {
      title: '1. Introducción',
      content:
        'Este acuerdo establece las condiciones generales para el uso de CicloMart y todos los servicios prestados por medio de su página web (en adelante, sitio web). Al acceder y utilizar los servicios ofrecidos, usted acepta estos términos y condiciones en su totalidad.',
    },
    {
      title: '2. Registro y cuenta',
      content:
        'Para utilizar los servicios ofrecidos por CicloMart debes de realizar el registro con los datos que sean necesarios. Los datos proporcionados deben ser verdaderos, actualizados y precisos.',
    },
    {
      title: '3. Contenido Usuario',
      content:
        'Eres responsable de todas las acciones que ocurran en tu cuenta, esto incluye publicación de artículos de ciclismo, compras, ventas, reseñas y pagos. Al momento de publicar contenido en nuestro sitio web, asegúrese de seguir nuestras políticas y directrices.',
    },
    {
      title: '4. Comisiones y pagos',
      content:
        'Algunos de nuestros servicios son sujetos a Comisiones como exposiciones y transacciones. Al realizar un pago usted acepta pagar las comisiones aplicables y los términos de pago en específico.',
    },
    {
      title: '5. Compra de producto',
      content:
        'Al adquirir un artículo de ciclismo en nuestro sitio web, usted, como comprador, tiene la obligación de informarnos sobre la recepción del producto en el plazo de cinco días a partir de la entrega.',
    },
    {
      title: '6. Uso prohibido',
      content:
        'Está prohibido el uso de nuestros servicios para fines ilegales, comercializar productos adquiridos de manera ilegal, acosar, dañar, discriminar, estafar y afectar el buen nombre de otros usuarios.',
    },
    {
      title: '7. Seguridad',
      content:
        'Tomamos medidas de seguridad razonables para proteger su información de pérdida, robo, acceso no autorizado, divulgación, alteración o destrucción. Sin embargo, no podemos garantizar la seguridad absoluta.',
    },
    {
      title: '8. Propiedad intelectual',
      content:
        'Todos los derechos de propiedad intelectual relacionados con el sitio web pertenecen al operador del sitio (CicloMart). Se prohíbe la reproducción, distribución o uso del contenido sin autorización previa.',
    },
    {
      title: '9. Modificaciones',
      content:
        'Nos reservamos el derecho de actualizar estos términos de vez en cuando. Le notificaremos de cualquier cambio que ocurra en esta. Si continúa haciendo uso de los servicios ofrecidos por CicloMart, acepta los términos actualizados.',
    },
    {
      title: '10. Acepto de términos',
      content:
        'Al acceder y utilizar nuestros servicios usted reconoce que haber leído y aceptado los términos y condiciones mencionados anteriormente. Si no está de acuerdo con los términos y condiciones, por favor no utilice nuestros servicios.',
    },
    {
      title: '11. Contacto',
      content:
        'Si tiene alguna pregunta puede contactarnos en: ciclomartsoporte@gmail.com',
    },
  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="flex flex-col h-auto w-full px-4 py-10 md:px-20 lg:px-32 xl:px-56">
      <h1 className="font-bold text-3xl mb-6 text-center md:text-left">Términos y condiciones</h1>
      {sections.map((section, index) => (
        <section key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </div>
  )
}

export default TermsAndCondition