import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import CancelIcon from '@mui/icons-material/Cancel';
import PinDropIcon from '@mui/icons-material/PinDrop';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

export default function WidgetsComponent() {
  return (
    <div>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ fontWeight: "bold" }}
      >
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2.3}>
          <Card style={{ height: 130,borderRadius: '12px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <DoubleArrowRoundedIcon
                  style={{ fill: "green", width: 70, height: 70 }}
                />
                <Typography
                  component="div"
                  sx={{
                    color: "#1bb01b",
                    "marginLeft": "20px",
                    fontWeight: "bold",
                    "fontSize": "18px",
                  }}
                >
                  51%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  component="div"
                  sx={{
                    color: "#1bb01b",
                    "marginTop": "30px",
                    fontWeight: "bold",
                  }}
                >
                  Moving
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fill: "green",
                    "marginTop": "4px",
                    "fontSize": "24px",
                    fontWeight: "bold",
                  }}
                >
                  6065
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{
                      "marginLeft": "12px",
                      "marginTop": "4px",
                      "fontSize": "12px",
                    }}
                  >
                    View Details
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{ "marginTop": "4px", "fontSize": "12px" }}
                  >
                    View on map
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={2.3}>
          <Card style={{ height: 130,borderRadius: '12px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CancelIcon
                  style={{ fill: "red", width: 60, height: 70 }}
                />
                <Typography
                  component="div"
                  sx={{
                    color: "red",
                    "marginLeft": "20px",
                    fontWeight: "bold",
                    "fontSize": "18px",
                  }}
                >
                  10%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  component="div"
                  sx={{
                    color: "red",
                    "marginTop": "30px",
                    fontWeight: "bold",
                  }}
                >
                  Stopped
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fill: "green",
                    "marginTop": "4px",
                    "fontSize": "24px",
                    fontWeight: "bold",
                  }}
                >
                  166
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{
                      "marginLeft": "12px",
                      "marginTop": "4px",
                      "fontSize": "12px",
                    }}
                  >
                    View Details
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{ "marginTop": "4px", "fontSize": "12px" }}
                  >
                    View on map
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={2.3}>
          <Card style={{ height: 130,borderRadius: '12px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <PinDropIcon
                  style={{ fill: "orange", width: 60, height: 70 }}
                />
                <Typography
                  component="div"
                  sx={{
                    color: "orange",
                    "marginLeft": "20px",
                    fontWeight: "bold",
                    "fontSize": "18px",
                  }}
                >
                  25%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  component="div"
                  sx={{
                    color: "orange",
                    "marginTop": "30px",
                    fontWeight: "bold",
                  }}
                >
                  Idle
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fill: "green",
                    "marginTop": "4px",
                    "fontSize": "24px",
                    fontWeight: "bold",
                  }}
                >
                  666
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{
                      "marginLeft": "12px",
                      "marginTop": "4px",
                      "fontSize": "12px",
                    }}
                  >
                    View Details
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{ "marginTop": "4px", "fontSize": "12px" }}
                  >
                    View on map
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={2.3}>
          <Card style={{ height: 130,borderRadius: '12px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <WifiOffIcon
                  style={{ fill: "grey", width: 53, height: 70 }}
                />
                <Typography
                  component="div"
                  sx={{
                    color: "grey",
                    "marginLeft": "20px",
                    fontWeight: "bold",
                    "fontSize": "18px",
                  }}
                >
                  10%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  component="div"
                  sx={{
                    color: "grey",
                    "marginTop": "30px",
                    fontWeight: "bold",
                  }}
                >
                  Inactive
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fill: "green",
                    "marginTop": "4px",
                    "fontSize": "24px",
                    fontWeight: "bold",
                  }}
                >
                  246
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{
                      "marginLeft": "12px",
                      "marginTop": "4px",
                      "fontSize": "12px",
                    }}
                  >
                    View Details
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{ "marginTop": "4px", "fontSize": "12px" }}
                  >
                    View on map
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={2.7}>
          <Card style={{ height: 130,borderRadius: '12px' }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <PrivacyTipIcon
                  style={{ fill: "#8d5656de", width: 55, height: 70 }}
                />
                <Typography
                  component="div"
                  sx={{
                    color: "#8d5656de",
                    "marginLeft": "20px",
                    fontWeight: "bold",
                    "fontSize": "18px",
                  }}
                >
                  4%
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  component="div"
                  sx={{
                    color: "#8d5656de",
                    "marginTop": "30px",
                    fontWeight: "bold",
                  }}
                >
                  Out of Service
                </Typography>
                <Typography
                  component="div"
                  sx={{
                    fill: "",
                    "marginTop": "4px",
                    "fontSize": "24px",
                    fontWeight: "bold",
                  }}
                >
                  159
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{
                      "marginLeft": "12px",
                      "marginTop": "4px",
                      "fontSize": "12px",
                    }}
                  >
                    View Details
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Link href="#" color="inherit" underline="none">
                  <Typography
                    component="div"
                    sx={{ "marginTop": "4px", "fontSize": "12px" }}
                  >
                    View on map
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>

      <br />
    </div>
  );
}