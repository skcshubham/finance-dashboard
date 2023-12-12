import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween
      mb="0.75rem"
      p="0.2rem 0rem"
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0.5rem">
        <PixIcon sx={{ fontSize: "25px" }} />
        <Typography variant="h4" fontSize="18px">
          finboard
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="1rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            style={{
              color:
                selected === "dashboard"
                  ? "inherit"
                  : palette.grey[700],
              textDecoration: "inherit",
            }}
            onClick={() => setSelected("dashboard")}
          >
            <Typography
              variant="h4"
              fontSize="14px"
              style={{
                color:
                  selected === "dashboard"
                    ? "inherit"
                    : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color:
                selected === "predictions"
                  ? palette.primary[100]
                  : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <Typography
              variant="h4"
              fontSize="14px"
              style={{
                color:
                  selected === "predictions"
                    ? palette.primary[100]
                    : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              Predictions
            </Typography>
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
