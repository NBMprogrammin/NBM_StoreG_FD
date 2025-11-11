import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { useMemo } from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";

export default function AllTabletOShowMoreData({
  background,
  heigthlop,
  MessageForUser,
  loadingTabelBody,
  dateX,
  GlesStyleTabl,
  datToShowTablec,
  AllsTrAndTdForMyTable,
}) {

  const ShowAllTableCell =useMemo(() => {
    return datToShowTablec.map((dat) => {
      return (
        <TableCell
          key={dat.id}
          style={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {dat.titel}
        </TableCell>
      );
    });
  }, [datToShowTablec]);

  const ShowBoxToDoSemthing = useMemo(() => {
    return AllsTrAndTdForMyTable.map((dat) => {
      return (
        <TableCell
          key={dat.id}
          style={{
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {dat.titel}
          <h4 style={{ paddingTop: "20px" }}>{dat.meesage}</h4>
        </TableCell>
      );
    });
  }, [AllsTrAndTdForMyTable, MessageForUser]);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" dir="rtl">
        <TableHead>
          <TableRow>{ShowAllTableCell}</TableRow>
        </TableHead>

        <TableBody
        key={98567}
          className={GlesStyleTabl}
          style={{ background: background, height: heigthlop }}
        >
          {loadingTabelBody ? (
            <TableRow>{ShowBoxToDoSemthing}</TableRow>
          ) : (
            dateX
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
