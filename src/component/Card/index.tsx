import Box from "@mui/material/Box";
import { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  style?: CSSProperties;
  sx?: { [key: string]: any };
};

function Card({ children, style }: Props) {
  return <Box style={{ ...style }}>{children}</Box>;
}

export default Card;
