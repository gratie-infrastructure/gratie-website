"use client"

import Image from 'next/image';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const roadMap = require("./../public/images/roadmap.svg");

export default function Working() {

  return (
    <>
      <Grid container spacing={10} sx={{ mt: 8 }} item xs={12}>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            textAlign: "center",
            width: "100%",
            fontFamily: "ClashDisplay-Variable",
            fontWeight: "600",
            fontSize: "42px",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        >
          Our Roadmap
        </Typography>
      </Grid>
      <div
        className="image-container"
        style={{ marginLeft: "-380px", position: "relative" }}
      >
         <Image
      priority
      src={roadMap}
      alt="Follow us on Twitter"
    />
      </div>
    </>
  );
}
