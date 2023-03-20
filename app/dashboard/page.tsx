import { delay } from "@/lib/async";

export default async function DashboardPage() {
  await delay(2000);
  return <div>This is the dashboard page!</div>;
}
