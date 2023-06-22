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
            fullWidth={!sm}
            sx={{
                backgroundColor: active ? 'primary.main' : 'secondary.main',
                textTransform: {xs: "uppercase", lg: "capitalize"},
                borderRadius: sm && !active ? '100%' : 1,
                color: "white"
            }}>
            {sm && active ? label : sm && !active ? `${getInitials(label)}` : label}
        </Button>
    )
}

export default Pill;