import * as s from "./UserInfoStyle";

export default function UserInfo() {
  return (
      <s.User>
        <s.UserImg />
        <s.UserText>
          <s.UserName>Сергей</s.UserName>
          <s.UserArrow>
            <s.UserArrowImg src="../../icons/arrow.svg" />
          </s.UserArrow>
        </s.UserText>
      </s.User>
  );
}
