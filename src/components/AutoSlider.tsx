import { makeStyles } from "@mui/styles";
import { useState, useEffect, FC } from "react";
import { Box } from "@mui/material";
import sliderImg1 from "../assets/sliderImg1.png";
import sliderImg2 from "../assets/sliderImg2.png";

const useSytles = makeStyles({
  sliderContainer: {
    position: "relative",
    width: "58vw",
    height: "100%",
    overflow: "hidden",
    margin: "auto",
    border: "2px solid #ddd",
    borderRadius: "8px",
  },
  sliderWrapper: {
    display: "flex",
    transition: "transform 0.5s ease-in-out",
    width: "100%",
  },
  image: { width: "99%", objectFit: "cover" },
});

const AutoSlider: FC = () => {
  const classes = useSytles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [sliderImg1, sliderImg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box className={classes.sliderContainer}>
      <Box
        className={classes.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={classes.image}
          />
        ))}
      </Box>
    </Box>
  );
};

export default AutoSlider;
