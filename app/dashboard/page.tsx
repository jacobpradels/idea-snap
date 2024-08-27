import ButtonAccount from "@/components/ButtonAccount";
import IdeaDisplay from "@/components/IdeaDisplay";
export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
// See https://shipfa.st/docs/tutorials/private-page
export default async function Dashboard() {
  return (
    <main className="h-screen min-h-0 w-full p-4 pb-24 bg-base-200">
        <h1 className="text-3xl font-extrabold tracking-tight italic">
          Dashboard
        </h1>
        <div className="w-full h-full min-h-0 min-w-0 overflow-x-hidden border-2 border-base-300 rounded">
          <IdeaDisplay />
        </div>
    </main>
  );
}
