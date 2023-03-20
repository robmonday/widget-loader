import { delay } from "@/lib/async";

const WidgetInfo1 = async () => {
  await delay(3000);
  return (
    <div>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </div>
  );
};

export default WidgetInfo1;
