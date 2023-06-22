import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {CardMedia} from "@mui/material";
import Container from "@mui/material/Container";

export default function Working() {

    return (
        <Box>
            <Container>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        fontFamily: "Clash Display",
                        fontWeight: "600",
                        mb: 4
                    }}>
                    Our Roadmap
                </Typography>
                <Box>
                    <Box sx={{display: {xs: "block", lg: "none"}}}>
                        <CardMedia
                            component="img"
                            sx={{width: "100%", objectFit: "contain"}}
                            src="images/road-map.png"
                        />
                    </Box>
                    <Box sx={{display: {xs: "none", lg: "block"}}}>
                        <CardMedia
                            component="img"
                            sx={{width: "100%", objectFit: "contain"}}
                            src="images/roadmap.png"
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
