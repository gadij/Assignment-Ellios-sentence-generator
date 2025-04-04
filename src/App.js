import "./styles.css";
import Screen from "./components/screen";

// try again can be done 3 times,
// paging should be made between the sentences

export default function App() {
  return (
    <div>
      <Screen />
      <Screen />;
    </div>
  );
}
