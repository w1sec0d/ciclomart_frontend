import ProductRow from "./ProductRow";

const Results = (items) => {
    return items.map((result, index) => (
        <ProductRow
          key={index}
          image="https://bicistore.com.co/wp-content/uploads/2020/11/imagen-5.jpg"
          alt={result.nombre}
          description={result.nombre}
          brand={result.marca}
          type={result.tipo.charAt(0).toUpperCase() + result.tipo.slice(1)}
          price={`$${result.precio.toString()}`}
        />
      ));
}

export default Results;