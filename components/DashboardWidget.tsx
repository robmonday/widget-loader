import { delay } from "@/lib/async";
import { Suspense } from "react";
import Loader from "./Loader";
import WidgetInfo1 from "./WidgetInfo1";
import WidgetInfo2 from "./WidgetInfo2";

const DashboardWidget = () => {
  return (
    <div className="my-2 flex h-32 flex-wrap place-content-evenly rounded-lg border border-gray-400 p-4">
      <div className="h-full w-2/5 rounded-md border border-gray-400">
        <Suspense fallback={<Loader />}>
          <WidgetInfo1 />
        </Suspense>
      </div>
      <div className="h-full w-2/5  rounded-md border border-gray-400">
        <Suspense fallback={<Loader />}>
          <WidgetInfo2 />
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardWidget;
