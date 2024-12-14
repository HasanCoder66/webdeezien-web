import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Fade } from "react-awesome-reveal";

function SectionThreeCard({ data }) {
  return (
    <Fade cascade damping={0.4} direction="up" triggerOnce>
      <Card sx={{ maxWidth: 345, marginBottom: 5 }}>
        <CardActionArea>
          <CardContent className="text-center">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-[#097969] "
            >
              {data?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data?.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Fade>
  );
}

export default SectionThreeCard;
