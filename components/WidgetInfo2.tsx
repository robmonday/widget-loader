import { delay } from "@/lib/async";

const WidgetInfo1 = async () => {
  await delay(5000);
  return (
    <div>
      <ul>
        <li>four</li>
        <li>five</li>
        <li>six</li>
      </ul>
    </div>
  );
};

export default WidgetInfo1;
