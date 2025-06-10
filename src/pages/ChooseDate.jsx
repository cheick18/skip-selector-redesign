import EmptyHeroPage from "../components/EmptyHeroPage";
import { AppContext } from "../context/AppContext";

export default function ChooseDate() {
  return (
    <div>
      <EmptyHeroPage title="Choose Date" nextLink="payment" />
    </div>
  );
}
