import {
    IconButton
} from '@mui/material'
import {
    Blender as BlenderIcon
} from '@mui/icons-material'

type AppLogoProps = {
    onClick: () => void;
    size?: 'small' | 'medium' | 'large';
}

const AppLogo = (params: AppLogoProps) => {
    return (
        <IconButton
            onClick={params.onClick}
            sx={{
            }}
        >
            <BlenderIcon sx={{
                color: 'primary.main',
                fontSize: params.size === 'small' ? '2.5rem' : params.size === 'medium' ? '5rem' : '10rem'
            }} />
            </IconButton>

    )
}

export default AppLogo
