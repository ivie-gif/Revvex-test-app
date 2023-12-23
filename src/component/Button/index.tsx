import { CSSProperties } from 'react'
import {Button} from '@mui/material'

type BtnProp = {
    label: string
    handleClick?: ()=> void
    variant?: "outlined" | "text" | "contained";
    style?: CSSProperties
    sx?: { [key: string]: any };
    iconSrc?: string;
    iconPosition?: 'before' | 'after';
}

function index({label, handleClick, style, sx, iconSrc, variant, iconPosition}: BtnProp) {
  const renderIcon = () => <img src={iconSrc} alt="Icon" style={{ marginRight: '8px' }} />;

  return (
    <Button variant={variant} style={style} sx={sx} onClick={handleClick}  startIcon={iconPosition === 'before' ? renderIcon() : null}
    endIcon={iconPosition === 'after' ? renderIcon() : null}>
       {iconSrc && (
        <img
          src={iconSrc}
          alt="Button Icon"
          style={{ marginRight: '8px' }} 
        />
      )}
{label}
    </Button>
  )
}

export default index