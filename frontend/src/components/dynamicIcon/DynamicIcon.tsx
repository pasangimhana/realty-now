import * as Icons from '@mui/icons-material'
import { SvgIconProps } from '@mui/material'

type IconProps = {
    iconName: string
} & SvgIconProps

const DynamicIcon = ({ iconName, ...props }: IconProps) => {
    const IconComponent = Icons[iconName as keyof typeof Icons]
    return IconComponent ? <IconComponent  {...props} /> : null
}

export default DynamicIcon