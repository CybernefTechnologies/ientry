import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

const Pagination = ({ setPage1, setRowsPerPage1, label }) => {

    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);

        setRowsPerPage1(parseInt(event.target.value, 10));
        setPage1(0);
    };


    return (
        <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            labelRowsPerPage={label}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default Pagination