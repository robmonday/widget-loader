import DashboardWidget from "@/components/DashboardWidget";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <div className="text-3xl font-bold underline">Hello World</div>
      <br />
      <Link href="/dashboard">Go to the Dashboard Page</Link>
      <DashboardWidget />
    </div>
  );
}
