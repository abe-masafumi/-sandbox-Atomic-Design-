import styled from "styled-components";
import { Card } from "../../atom/card/Card";
import { UserlconWithName } from "./UserIconWithName";

const user = {
  name: "まさ",
  image: "https://source.unsplash.com/lvFlpqEvuRM",
  email: "12345@example.com",
  phone: "090–1111-2222",
  company: {
    name: "FRITA"
  },
  website: "https://google.com"
};

export const UserCard = () => {
  return (
    <Card>
      <UserlconWithName name={user.name} image={user.image} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
  text-align: left;
  margin-bottom: Opx;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
