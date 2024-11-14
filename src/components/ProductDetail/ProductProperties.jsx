"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ProductProperties({ product }) {
  const productDetails = [
    { label: "Brand", value: product.brand },
    { label: "Weight", value: product.weight },
    { label: "Width", value: product.dimensions.width },
    { label: "Height", value: product.dimensions.height },
    { label: "Depth", value: product.dimensions.depth },
    { label: "Warranty Information", value: product.warrantyInformation },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableBody>
          {productDetails.map((detail, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {detail.label}
              </StyledTableCell>
              <StyledTableCell align="right">{detail.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
