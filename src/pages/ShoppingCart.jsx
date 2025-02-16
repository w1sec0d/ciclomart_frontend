import React from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';

const ShoppingCart = () => {
  const columns = [
    {
      accessorKey: 'producto',
      header: 'Producto',
    },
    {
      accessorKey: 'precio',
      header: 'Precio',
    },
    {
      accessorKey: 'cantidad',
      header: 'Cantidad',
    },
    {
      accessorKey: 'total',
      header: 'Total',
    },
  ];

  const data = [
    {
      producto: 'Bicicleta de Ruta Poca Everest Carbono 11V',
      precio: '$5990.000',
      cantidad: 1,
      total: '$5990.000',
    },
    {
      producto: 'Pacha Shimano Mitzgo - 7 Velocidades Rosca - 14-28t',
      precio: '$42.000',
      cantidad: '',
      total: '',
    },
  ];

  return (
    <>
        <h1 className="font-black text-5xl text-center mt-20">
            Tu carrito de compras
        </h1>
        <div className='flex flex-row m-10 space-x-20'>
            
            <div className = "flex flex-col w-full">
                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enablePagination={false}
                    enableSorting={false}
                    enableColumnActions={false}
                    enableBottomToolbar={false}
                    muiTableContainerProps={{ sx: { boxShadow: 'none' } }}
                />
                
                <Box sx={{ marginTop: 2 }}> 
                    <Button href="/" color="primary">
                    ← Volver a la tienda
                    </Button>
                </Box>
            </div>
            <div className = "flex flex-col w-full">
                <Box sx={{ marginTop: 4, borderTop: '1px solid #e0e0e0', paddingTop: 2 }}>
                    <Typography variant="h5" gutterBottom>
                    Resumen de compra
                    </Typography>
                    <TableContainer component={Paper} elevation={0}>
                    <Table>
                        <TableBody>
                        <TableRow>
                            <TableCell>Subtotal</TableCell>
                            <TableCell align="right">$6.074.000</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Envío</TableCell>
                            <TableCell align="right">$0</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impuestos</TableCell>
                            <TableCell align="right">$253.200</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>

                <Box sx={{ marginTop: 4, borderTop: '1px solid #e0e0e0', paddingTop: 2 }}>
                    <Typography variant="h5" gutterBottom>
                    Total
                    </Typography>
                    <Typography variant="h4">$6.327.200</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                    Continuar al pago
                    </Button>
                </Box>
                
            </div>
        </div>
    </>
  );
};

export default ShoppingCart;