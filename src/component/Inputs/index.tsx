import { ChangeEvent, CSSProperties } from "react";
import { Avatar, InputAdornment, TextField, IconButton } from "@mui/material";

// import { InputAdornment, IconButton, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "submit" | "file";
  variant?: "outlined" | "filled" | "standard";
  style?: CSSProperties;
  sx?: { [key: string]: any };
  iconSrc?: string;
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  helperText?: string;
  multiline?: boolean;
};

function Index({
  placeholder,
  type,
  variant,
  style,
  sx,
  iconSrc,
  name,
  value,
  onChange,
  helperText,
  error,
  multiline,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      placeholder={placeholder}
      value={value}
      helperText={helperText}
      error={error}
      onChange={onChange}
      type={showPassword ? 'text' : type}
      multiline={multiline || false}
      name={name}
      variant={variant}
      style={style}
      sx={sx}
      InputProps={{
        startAdornment: iconSrc ? (
          <InputAdornment position="start">
            <Avatar alt="Icon" src={iconSrc} sx={{ width: "22px", height: "22px" }} />
          </InputAdornment>
        ) : undefined,
        endAdornment: type === "password" ? (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) : undefined,
        disableUnderline: true,
      }}
    />
  );
}

export default Index;
