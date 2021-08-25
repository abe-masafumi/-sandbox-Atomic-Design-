import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SeachInput } from "./components/molecules/SeachInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Headeronly } from "./components/templates/HeaderOnly";
import "./styles.css";

export default function App() {
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

  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ボタン</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SeachInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
