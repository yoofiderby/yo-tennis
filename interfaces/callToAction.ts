import { ButtonProps } from "./components/button";


export type CallToActionBlockProps = {
    title: string;
    subtitle: string;
    button: ButtonProps;
  };


export type CallToActionBlockType = {
  title: string;
  subtitle: string;
  button: ButtonProps;
};

export type CallToActionSectionProps = {
  subtitle: string;
  CTA: CallToActionBlockType[];
  button: ButtonProps;
};