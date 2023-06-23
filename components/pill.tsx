import {Theme, useMediaQuery, Button} from "@mui/material";

interface PillProps {
    label: string;
    active: boolean;
    value: string;
    onClick: (tab: string) => void;
}

const getInitials = (text: string): string => {
    const words = text.split(" ");
    return `${words[0][0]}${words[1][0]}`
}
const Pill = ({active, label, value, onClick}: PillProps) => {

    const sm: boolean = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const handleButtonClick = () => {
        onClick(value);
    }

    return (
        <Button
            onClick={handleButtonClick}
            size={sm ? "small" : "large"}
            variant="text"
            fullWidth={true}
            sx={{
                backgroundColor: active ? 'primary.main' : 'secondary.main',
                textTransform: "capitalize",
                borderRadius: 1,
                color: "white"
            }}>
            {label}
        </Button>
    )
}

export default Pill;