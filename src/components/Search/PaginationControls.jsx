import Button from "../Button";

const PaginationControls = (props) => (
    <div className="flex justify-center mt-4">
      <Button onClick={props.handlePreviousPage} disabled={props.currentPage === 1}>Anterior</Button>
      <Button onClick={props.handleNextPage} disabled={props.startIndex + props.itemsPerPage >= props.filterResultsLength}>Siguiente</Button>
    </div>
  );

export default PaginationControls