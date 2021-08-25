import { Header } from "../atom/layout/Header";

export const Headeronly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
