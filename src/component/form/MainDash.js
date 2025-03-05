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
import { Box, Typography, Grid } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashGridItem from "./DashGridItem";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const initialRows = [
  { id: 1, doctorName: "Dr. Richard James", bookingDate: "24th July, 2024" },
  { id: 2, doctorName: "Dr. Sarah Parker", bookingDate: "25th July, 2024" },
  { id: 3, doctorName: "Dr. John Doe", bookingDate: "26th July, 2024" },
  { id: 4, doctorName: "Dr. Emma Watson", bookingDate: "27th July, 2024" },
  { id: 5, doctorName: "Dr. David Smith", bookingDate: "28th July, 2024" },
];

function MainDash() {
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <StyledContainer>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
        <Grid item xs={12} md={4}>
          <DashGridItem
            Icons={
              <AccountBoxIcon sx={{ fontSize: "50px", color: "#4F6FE7" }} />
            }
            number={"15"}
            name={"Doctors"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashGridItem
            Icons={<MenuBookIcon sx={{ fontSize: "50px", color: "#4F6FE7" }} />}
            number={"2"}
            name={"Appointments"}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DashGridItem
            Icons={
              <ManageAccountsIcon sx={{ fontSize: "50px", color: "#4F6FE7" }} />
            }
            number={"4"}
            name={"Patients"}
          />
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ border: "#D8D8D8" }}>
        <Table size="small" aria-label="patient appointments">
          <TableHead sx={{ borderBottom: "1px solid #E1E1E1" }}>
            <Box padding={"20px 0 20px 30px"}>
              <Box display="flex" alignItems="center">
                <ListAltIcon style={{ marginRight: 8, color: "#5F6FFF" }} />
                <Title>Latest Appointment</Title>
              </Box>
            </Box>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.id}>
                <TableCell>
                  <AvatarBox>
                    <StyledAvatar
                      src="/doctor-avatar.jpg"
                      alt={row.doctorName}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ color: "#555" }}>
                        {row.doctorName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#777" }}>
                        Booking on {row.bookingDate}
                      </Typography>
                    </Box>
                  </AvatarBox>
                </TableCell>
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

export default MainDash;

const StyledContainer = styled(Container)({
  marginTop: "30px",
  padding: "0",
});

const Title = styled(Typography)({
  fontSize: "18px",
  color: "#323232",
  fontWeight: 500,
});

const StyledTableRow = styled(TableRow)({
  "&:last-child td, &:last-child th": { borderBottom: "none" },
  "&:hover": { backgroundColor: "#E2E5FF" },
});

const AvatarBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const StyledAvatar = styled(Avatar)({
  width: 40,
  height: 40,
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
