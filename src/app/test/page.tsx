import { headers } from "next/headers";

export default function TestPage() {
  const headersInstance = headers();
  const country = headersInstance.get("cf-ipcountry");

  return (
    <div className="flex justify-center items-center min-h-screen">
      Hello! {country ? country : "unknown place"}
    </div>
  );
}
