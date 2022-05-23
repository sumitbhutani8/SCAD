import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
export default function TopBarCalender() {
  const [fromValue, fromSetValue] = React.useState<Date | null>(null);
  const [toValue, toSetValue] = React.useState<Date | null>(null);
  const [fromTimeValue, fromSetsValue] = React.useState<Date | null>(null);
  const [toTimeValue, fromTimeSetValue] = React.useState<Date | null>(null);
  return (
    <Paper>
      <Card style={{ marginBottom: "5px" }}>
        <CardContent>
          <div className="row">
            <div className="col-lg-5" style={{borderRight: "3px solid #ccc"}}>
              <div
                style={{
                  paddingLeft: "30px",
                  paddingBottom: "20px",
                  fontWeight: "500",
                  fontSize: "20px",

                }}
              >
                Preference Time Period
              </div>

              <Grid container spacing={2} style={{fontSize: "13px"}}>
                <Grid item xs={2}>
                  May
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={2}>
                  May
                </Grid>
                <Grid item xs={6}>
                  Preference Time
                </Grid>

                <Grid item xs={2}>
                  <span style={{ fontWeight: "bold" }}>1st</span>
                </Grid>
                <Grid item xs={2}>
                  <span style={{ fontWeight: "bold" }}>-</span>
                </Grid>
                <Grid item xs={2}>
                  <span style={{ fontWeight: "bold" }}>5th</span>
                </Grid>
                <Grid item xs={6}>
                  <span style={{ fontWeight: "bold", paddingLeft: "31%", textDecoration: "underline" }}>127</span>
                </Grid>
              </Grid>

            </div>

            <div className="col-lg-2" style={{fontSize:"13px"}}>
              <div style={{paddingTop: "10%"}}>
                <div><div className="square-box light"></div> &nbsp; Light Capacity</div>
                <div style={{marginTop:"10px"}}><div className="square-box medium"></div> &nbsp;  Medium Capacity</div>
                <div  style={{marginTop:"10px"}}> <div className="square-box heavy"></div>  &nbsp; Heavy Capacity</div>


              </div>

            </div>
            <div className="col-lg-5">
            <div style={{paddingTop: "10%"}}>
                <Button variant="outlined" className="pill-button" size="small">
                  Remind
                </Button>
                <Button variant="contained" className="pill-button" size="small">
                  Auto Fill
                </Button>
                <Button
                  variant="outlined"
                  className="pill-button" size="small"
                  endIcon={<AddIcon />}
                >
                  Add
                </Button>
                <Button variant="outlined" disabled className="pill-button" size="small">
                  Publish
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
}
