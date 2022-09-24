import {
    Button as MuiButton
} from '@mui/material'

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    primary?: boolean;
    secondary?: boolean;
    component?: React.ElementType;
}

const Button = (params: ButtonProps) => {
    return (
        <MuiButton
            onClick={params.onClick}
            size={params.size}
            disabled={params.disabled}
            children={params.children}
            color={params.primary ? 'primary' : params.secondary ? 'secondary' : undefined}
            variant={params.primary ? 'contained' : 'outlined'}
        />
    )
}

export default Button