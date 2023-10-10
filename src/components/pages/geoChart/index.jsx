import { Box, useTheme } from "@mui/material";
import GeoChart from "../../charts/GeoChart";
import Header from "../../base/Header";
import { colorTokens } from "../../../theme/theme";

const Geography = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;