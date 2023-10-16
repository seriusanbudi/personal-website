import { headers } from "next/headers";

export default function TestPage() {
  const headersInstance = headers();
  const country = headersInstance.get("cf-ipcountry");

  const allHeaders: any[] = [];
  headersInstance.forEach((value, key) => {
    allHeaders.push({ key, value });
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="text-center font-bold mb-10">
          Hello! {country ? country : "unknown place"}
        </div>
        <div className="p-10">{JSON.stringify(allHeaders)}</div>
      </div>
    </div>
  );
}
