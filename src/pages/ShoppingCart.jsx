import React from 'react';
import { useState } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { MaterialReactTable } from 'material-react-table';
import { SiEac } from 'react-icons/si';

const ShoppingCart = () => {
    
    const columns = [
        {
        accessorKey: 'producto',
        header: 'Producto',
        },
        {
        accessorKey: 'precio',
        header: 'Precio',
        Cell: ({ cell }) =>  {return formatCurrency(cell.getValue())},
        },
        {
        accessorKey: 'cantidad',
        header: 'Cantidad',
        },
        {
        accessorKey: 'total',
        header: 'Total',
        Cell: ({ cell }) =>  {return formatCurrency(cell.getValue())},
        }
    ];

    const data = [
        {
        producto: 'Bicicleta de Ruta Poca Everest Carbono 11V',
        precio: 5990000,
        cantidad: 2,
        envio: 20000,
        },
        {
        producto: 'Pacha Shimano Mitzgo - 7 Velocidades Rosca - 14-28t',
        precio: 42000,
        cantidad: 1,
        envio: 0
        },
    ];

    // Calcular el total para cada producto
    const calculateTotal = (precio, cantidad) => {
        return precio * cantidad;
    };

    // Añadir el total calculado a cada producto en data
    const dataWithTotal = data.map(item => ({
        ...item,
        total: calculateTotal(item.precio, item.cantidad),
    }));

    const formatCurrency = (value) => {
        return value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    };

    //Calcular el subtotal
    const subtotal = dataWithTotal.reduce((acc, item) => {
        return acc + item.total;
    }, 0);
    
    const envio = dataWithTotal.reduce((acc, item) => {
        return acc + item.envio;
    }, 0);
    
    const impuestos = 253200;

    const total = subtotal + envio + impuestos;
  return (
    <>
        <h1 className="font-black text-5xl text-center mt-20">
            Tu carrito de compras
        </h1>
        <div className='flex flex-row m-10 space-x-20'>
            
            <div className = "flex flex-col w-full">
                <MaterialReactTable
                    columns={columns}
                    data={dataWithTotal}
                    enablePagination={false}
                    enableSorting={false}
                    enableColumnActions={false}
                    enableBottomToolbar={false}
                    enableCellActions={false}
                    enableColumnFilters={false}
                    enableHiding={false}
                    enableTopToolbar={false}
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
                            <TableCell align="right">{formatCurrency(subtotal)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Envío</TableCell>
                            <TableCell align="right">{formatCurrency(envio)}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Impuestos</TableCell>
                            <TableCell align="right">{formatCurrency(impuestos)}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Box>

                <Box sx={{ marginTop: 4, borderTop: '1px solid #e0e0e0', paddingTop: 2 }}>
                    <Typography variant="h5" gutterBottom>
                    Total
                    </Typography>
                    <Typography variant="h4">{formatCurrency(total)}</Typography>
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