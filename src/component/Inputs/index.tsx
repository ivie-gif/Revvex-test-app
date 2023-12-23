import React, { CSSProperties } from "react";
import { Avatar, InputAdornment, TextField } from "@mui/material";

type InputProps = {
  placeholder?: string;
  type?: "text" | "password" | "email" | "submit";
  variant: "outlined" | "filled" | "standard";
  style?: CSSProperties;
  sx?: { [key: string]: any };
  iconSrc?: string;
};

function index({ placeholder, type, variant, style, sx, iconSrc }: InputProps) {
  return (
    <TextField
      placeholder={placeholder}
      type={type}
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
      }}
    />
  );
}

export default index;
