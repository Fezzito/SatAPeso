import { callBtcPrice } from "../public/apiCalls/callBtcPrice";
import { callBluePrice } from "../public/apiCalls/callBluePrice";

export default function Home() {
  console.log(callBluePrice);
  console.log(callBtcPrice);
  return (
    <div>
      <p>asdasdad</p>
    </div>
  );
}
