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
      <div className="w-full">
        <div className="text-center font-bold mb-10">
          Hello! {country ? country : "unknown place"}
        </div>
        <div className="p-10 w-full">
          <ul className="grid gap-2">
            {allHeaders.map((header) => (
              <li key={header.key} className="w-full">
                <span className="font-bold">{header.key}</span>:{" "}
                <input
                  readOnly
                  value={header.value}
                  className="w-full max-w-[80vw] bg-transparent underline"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
