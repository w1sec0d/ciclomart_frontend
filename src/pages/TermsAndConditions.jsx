const TermsAndCondition = () => {
    const sections = [
        {
            title: "1. Introducción",
            content: "Este acuerdo establece las condiciones generales para el uso de CicloMart y todos los servicios prestados por medio de su página web (en adelante, sitio web). Al acceder y utilizar los servicios de CicloMart usted acepta cumplir con los términos y condiciones de este acuerdo."
        },
        {
            title: "2. Registro y cuenta",
            content: "Para utilizar los servicios ofrecidos por CicloMart debes de realizar el registro con los datos que sean necesarios. Los datos proporcionados deben ser verdaderos, actualizados y precisos. La cuenta es personal e intransferible, es decir, no se la puede transferir o vender a otra persona. En cualquier caso, el usuario registrado a la cuenta es el único responsable de las acciones realizadas en ella. En caso de detectar un uso no autorizado, se debe informarnos de manera inmediata. Nos reservamos el derecho de eliminar o suspender su cuenta si incumple este acuerdo o daña nuestra reputación."
        },
        {
            title: "3. Contenido Usuario",
            content: "Eres responsable de todas las acciones que ocurran en tu cuenta, esto incluye publicación de artículos de ciclismo, compras, ventas, reseñas y pagos. Al momento de publicar contenido en el sitio web se compromete a proporcionar información verdadera, mantenerla actualizada y nos brinda el permiso de utilizarla con el fin de proveerle nuestros servicios."
        },
        {
            title: "4. Comisiones y pagos",
            content: "Algunos de nuestros servicios son sujetos a Comisiones como exposiciones y transacciones. Al realizar un pago usted acepta pagar las comisiones aplicables y los términos de pago en específico que se le proporcionen. Las transacciones se llevan a cabo por medio de mercado pago, por lo cual están sujetos a sus propias políticas y términos."
        },
        {
            title: "5. Compra de producto",
            content: "Al adquirir un artículo de ciclismo en nuestro sitio web, usted, como comprador, tiene la obligación de informarnos sobre la recepción del producto en el plazo de cinco dias a partir de la entrega. En caso de no recibir el artículo o de que haya algún inconveniente con el envío, le solicitamos que nos notifique de inmediato para poder brindarle una solución. Por otro lado, si usted es el vendedor, tiene la obligación de entregar el producto de acuerdo con la descripción y las características publicadas en el sitio web, garantizando que el artículo enviado sea el mismo que fue anunciado en la plataforma."
        },
        {
            title: "6. Uso prohibido",
            content: "Está prohibido el uso de nuestros servicios para fines ilegales, comercializar productos adquiridos de manera ilegal, acosar, dañar, discriminar, estafar y afectar el buen nombre de otros usuarios. Si tiene algún problema en particular con alguno de nuestros usuarios, no dude en comunicarnos."
        },
        {
            title: "7. Seguridad",
            content: "Tomamos medidas de seguridad razonables para proteger su información de pérdida, robo, acceso no autorizado, divulgación, alteración o destrucción. Sin embargo, no podemos garantizar que su información esté completamente segura. Por lo cual le recomendamos aplicar prácticas de protección para datos personales (no compartir su contraseña, no iniciar sesión en dispositivos desconocidos y demás)."
        },
        {
            title: "8. Propiedad intelectual",
            content: "Todos los derechos de propiedad intelectual relacionados con el sitio web pertenecen al operador del sitio (CicloMart). Se prohíbe la reproducción, distribución o uso del contenido sin permiso explícito."
        },
        {
            title: "9. Modificaciones",
            content: "Nos reservamos el derecho de actualizar estos terminos de vez en cuando. Le notificaremos de cualquier cambio que ocurra en esta. Si continúa haciendo uso de los servicios ofrecidos por CicloMart se infiere que acepta los nuevos términos y condiciones."
        },
        {
            title: "10. Acepto de términos",
            content: "Al acceder y utilizar nuestros servicios usted reconoce que haber leído y aceptado los términos y condiciones mencionados anteriormente. Si no está de acuerdo con los términos y condiciones mencionados anteriormente, no podrá realizar el uso de nuestros servicios."
        },
        {
            title: "11. Contacto",
            content: "Si tiene alguna pregunta puede contactarnos en: ciclomartsoporte@gmail.com"
        },
    ];

    return (
        <div className="flex flex-col h-auto w-full px-56 py-10">
            <h1 className="font-bold text-3xl mb-6">Términos y condiciones</h1>
            {sections.map((section, index) => (
                <section key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    <p>{section.content}</p>
                </section>
            ))}
        </div>
    );
};

export default TermsAndCondition;
