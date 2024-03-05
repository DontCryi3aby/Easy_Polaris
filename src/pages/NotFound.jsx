import { Box } from "@shopify/polaris";
import NotFoundImg from "../assets/images/NotFound.jpg";

export function NotFound() {
  return (
    <Box>
      <img
        src={NotFoundImg}
        alt="Page Not Found"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
}
