
type Props = {
  schema: any;
};

export default function RuntimeRenderer({
  schema,
}: Props) {
  return (
    <div className="mt-8 border rounded p-4">
      <h2 className="text-2xl font-bold mb-4">
        Runtime Preview
      </h2>

      {schema?.ui?.pages?.map(
        (page: any) => (
          <div
            key={page.name}
            className="mb-6 border p-4 rounded"
          >
            <h3 className="font-semibold text-lg">
              {page.name}
            </h3>
{page.name === "login" && (
  <div className="mt-3 space-y-2">
    <input
      placeholder="Email"
      className="border p-2 w-full"
    />
    <input
      placeholder="Password"
      className="border p-2 w-full"
    />
    <button className="border px-4 py-2">
      Login
    </button>
  </div>
)}

{page.name === "contacts" && (
  <div className="mt-3">
    <div className="border p-3 mb-2">
      Contacts Table
    </div>

    <button className="border px-4 py-2">
      Add Contact
    </button>
  </div>
)}

{page.name === "dashboard" && (
  <div className="mt-3">
    <div className="border p-3">
      Analytics Widget
    </div>
  </div>
)}
            
          </div>
        )
      )}
    </div>
  );
}