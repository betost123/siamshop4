import * as React from "react";
import styled from "styled-components";
import { MediaQuery } from "../utils";

export const Spacer = styled.div<{ spacing: number }>`
  width: ${(props) => `${props.spacing}rem`};

  ${MediaQuery.XS} {
    width: ${(props) => `${props.spacing * 0.5}rem`};
  }
`;

export const HorizontalSpacer = styled.div<{ spacing: number }>`
  height: ${(props) => `${props.spacing}rem`};

  ${MediaQuery.XS} {
    height: ${(props) => `${props.spacing * 0.5}rem`};
  }
`;
