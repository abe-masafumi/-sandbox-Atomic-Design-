import styled from "styled-components";
import { SeachInput } from "../molecules/SeachInput";
import { UserCard } from "../organisms/user/UserCard";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `まさ${val}`,
    image: "https://source.unsplash.com/NEOXGVKTMCA",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

const user = {
  name: "まさ",
  image: "https://source.unsplash.com/NEOXGVKTMCA",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export const Users = () => {
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SeachInput />
      <SUseraArea>
        {users.map(() => (
          <UserCard />
        ))}
      </SUseraArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUseraArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
