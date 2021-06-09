import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      secondary: string;
      background: string;
      textContrastPrimary: string;
      textHover: string;
    };
  }
}
