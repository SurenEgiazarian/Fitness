import * as s from "./LogoStyle";

export default function Logo({color}) {
  return (
      <s.Logo>
        <s.LogoImg src={color === "white" ? "/img/logo-white.svg" : "/img/logo-black.svg"} />
      </s.Logo>
  );
}
