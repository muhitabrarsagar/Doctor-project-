import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";

const initialRows = [
  {
    id: 1,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Cardiology",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 2,
    patientName: "Emily Watson",
    patientImage: "/patient-avatar.jpg",
    department: "Neurology",
    age: 35,
    dateTime: "25th July, 2024, 11:AM",
    doctorName: "Dr. Sarah Parker",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$70",
  },
  {
    id: 3,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Cardiology",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
  {
    id: 4,
    patientName: "Richard James",
    patientImage: "/patient-avatar.jpg",
    department: "Cardiology",
    age: 28,
    dateTime: "24th July, 2024, 10:AM",
    doctorName: "Dr. Richard James",
    doctorImage: "/doctor-avatar.jpg",
    fees: "$50",
  },
];

function TablePa() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <StyledContainer>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="patient appointments">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Patient</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Doctor</TableCell>
              <TableCell align="center">Fees</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <AvatarBox>
                    <StyledAvatar
                      src={row.patientImage}
                      alt={row.patientName}
                    />
                    {row.np}
                  </AvatarBox>
                </TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.dateTime}</TableCell>
                <TableCell>
                  <AvatarBox>
                    <StyledAvatar src={row.doctorImage} alt={row.doctorName} />
                    {row.doctorName}
                  </AvatarBox>
                </TableCell>
                <TableCell align="center">{row.fees}</TableCell>
                <TableCell align="center">
                  <DeleteButton onClick={() => handleDelete(row.id)}>
                    <DeleteIcon />
                  </DeleteButton>
                </TableCell>
              </StyledTableRow>
            ))}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No Data Available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledContainer>
  );
}

export default TablePa;

const StyledContainer = styled(Container)({
  marginTop: "30px",
  padding: "0",
});

const StyledTableRow = styled(TableRow)({
  "&:last-child td, &:last-child th": { borderBottom: "none" },
  "&:hover": { backgroundColor: "#E2E5FF" },
});

const AvatarBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StyledAvatar = styled(Avatar)({
  width: 30,
  height: 30,
  marginRight: 8,
});

const DeleteButton = styled(IconButton)({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  backgroundColor: "#FEF7F5",
  border: "1px solid #FEE7E1",
  marginTop: "10px",
  marginBottom: "10px",
});

const DeleteIcon = styled(CloseIcon)({
  color: "#E57373",
});
