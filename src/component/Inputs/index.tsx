import React, { ChangeEvent, CSSProperties } from "react";
import { Avatar, InputAdornment, TextField } from "@mui/material";

type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "submit" | "file";
  variant?: "outlined" | "filled" | "standard";
  style?: CSSProperties;
  sx?: { [key: string]: any };
  iconSrc?: string;
  name?: string;
  value?: string;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  helperText?: string;
  multiline?: boolean
  ref?: any
  
};

function index({ placeholder, type, variant, style, sx, iconSrc, name, value, onChange, helperText, error, multiline, ref }: InputProps) {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      helperText={helperText}
      error={error}
      onChange={onChange}
      type={type}
      ref={ref}
      multiline={multiline || false}
      name={name}
      variant={variant}
      style={style}
      sx={sx}
      InputProps={{
        startAdornment: iconSrc ? (
          <InputAdornment position="start">
            <Avatar
              alt="Icon"
              src={iconSrc}
              sx={{ width: "22px", height: "22px" }}
            />
          </InputAdornment>
        ) : undefined,
        disableUnderline: true
      }}
    />
  );
}

export default index;
