import { CSSProperties } from "react";
import { Button } from "@mui/material";

type BtnProp = {
  label: string;
  handleClick?: () => void;
  variant?: "outlined" | "text" | "contained";
  style?: CSSProperties;
  sx?: { [key: string]: any };
  iconSrc?: string;
  iconPosition?: "before" | "after";
  disabled?: boolean;
};

function index({
  label,
  handleClick,
  style,
  sx,
  iconSrc,
  variant,
  iconPosition,
  disabled,
}: BtnProp) {
  const renderIcon = (iconSrc: any) => (
    <img src={iconSrc} alt="Icon" style={{ marginRight: "8px" }} />
  );

  return (
    <Button
      variant={variant}
      style={style}
      sx={sx}
      onClick={handleClick}
      disabled={disabled}
      startIcon={iconPosition === "before" ? renderIcon(iconSrc) : null}
      endIcon={iconPosition === "after" ? renderIcon(iconSrc) : null}
    >
      {label}
    </Button>
  );
}

export default index;
