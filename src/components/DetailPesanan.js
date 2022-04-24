import React, { useState, useEffect } from "react";
import { PeopleOutline, SettingsOutlined, CalendarTodayOutlined } from "@material-ui/icons";
import { makeStyles, Button, CardActionArea, Card, CardContent, Box, Typography } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router";
import HeroDetail from "./HeroDetail";

const useStyles = makeStyles((theme) => ({
  detailCard: {
    background: "white",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default function DetailPesanan() {
  const { carId } = useParams();

  const [item, setItem] = useState();

  const getCarData = async () => {
    const res = await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${carId}`);

    setItem(res.data);
  };

  useEffect(() => {
    getCarData();
  }, [item]);

  const classes = useStyles();
  return (
    <div>
      <HeroDetail />

      <div className={classes.detailCard}>
        <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: "20px" }}>
          <Card item={true} style={{ width: "54%", marginBottom: "10px" }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingBottom: "8px" }}>
                  Pilih Bank Transfer
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ paddingBottom: "8px" }}>
                  Kamu bisa membayar dengan transfer melalui ATM, internet Banking, atau Mobile Banking
                </Typography>
                {/* pilihan bank */}
                <Typography style={{ display: "flex" }}>
                  <Box component="span" sx={{ p: 2, border: "2px solid black" }}>
                    BCA
                  </Box>
                  <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "14px" }}>BCA Transfer</Typography>
                </Typography>
                <Typography style={{ display: "flex" }}>
                  <Button variant="outlined" style={{ fontSize: "10px", p: 2, border: "2px solid black" }}>
                    BNI
                  </Button>
                  <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "14px" }}>BNI Transfer</Typography>
                </Typography>
                <Typography style={{ display: "flex" }}>
                  <Button variant="outlined" style={{ fontSize: "10px" }}>
                    Mandiri
                  </Button>
                  <Typography style={{ marginLeft: "20px", marginTop: "8px", fontSize: "14px" }}>Mandiri Transfer</Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {/* 
        <Card style={{ width: "32%", marginBottom: "10px" }}>
          <CardActionArea>
            <CardMedia component="img" image={item?.image} alt="green iguana" style={{ padding: "10px" }} />
            <CardContent>
              <Typography variant="h6" component="div" style={{ paddingBottom: "8px" }}>
                {item?.name}
              </Typography>
              <Typography style={{ display: "flex", color: "grey" }}>
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                  <PeopleOutline /> 4 Orang &nbsp;
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                  <SettingsOutlined /> {item?.category} &nbsp;
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ display: "flex", alignItems: "center" }}>
                  <CalendarTodayOutlined /> Tahun 2020 &nbsp;
                </Typography>
              </Typography>

              <Typography style={{ display: "flex" }}>
                <Typography style={{ paddingTop: "40px" }}>Total </Typography>
                <Typography variant="p" component="div" style={{ fontWeight: "bold", paddingTop: "40px", marginLeft: "188px" }}>
                  Rp {item?.price.toLocaleString("id-ID")}
                </Typography>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant="contained" style={{ background: "#5CB85F", color: "white" }} fullWidth>
              Pilih Mobil
            </Button>
          </CardActions>
        </Card> */}
        </div>
      </div>
    </div>
  );
}
