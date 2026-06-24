type Props = {
  schema: any;
};

export default function RuntimeRenderer({
  schema,
}: Props) {
  return (
    <div className="mt-10">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-3xl font-bold">
          🚀 Runtime Preview
        </h2>
        <p className="mt-2 opacity-90">
          Executable application generated from validated schema
        </p>
      </div>

      {schema?.ui?.pages?.map(
        (page: any) => (
          <div
            key={page.name}
            className="mb-8 bg-white border rounded-xl shadow-md p-6"
          >
            <h3 className="font-bold text-2xl capitalize mb-4 text-gray-800">
              {page.name}
            </h3>

            {/* LOGIN PAGE */}
            {page.name === "login" && (
              <div className="max-w-md space-y-3">
                <input
                  placeholder="Email"
                  className="border rounded-lg p-3 w-full"
                />

                <input
                  placeholder="Password"
                  type="password"
                  className="border rounded-lg p-3 w-full"
                />

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Login
                </button>
              </div>
            )}

            {/* DASHBOARD PAGE */}
            {page.name === "dashboard" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-100 p-5 rounded-xl shadow">
                  <h4 className="font-semibold">
                    Users
                  </h4>
                  <p className="text-3xl font-bold">
                    120
                  </p>
                </div>

                <div className="bg-green-100 p-5 rounded-xl shadow">
                  <h4 className="font-semibold">
                    Contacts
                  </h4>
                  <p className="text-3xl font-bold">
                    450
                  </p>
                </div>

                <div className="bg-purple-100 p-5 rounded-xl shadow">
                  <h4 className="font-semibold">
                    Revenue
                  </h4>
                  <p className="text-3xl font-bold">
                    $1,250
                  </p>
                </div>
              </div>
            )}

            {/* CONTACTS PAGE */}
            {page.name === "contacts" && (
              <div>
                <table className="w-full border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3 text-left">
                        Name
                      </th>
                      <th className="p-3 text-left">
                        Email
                      </th>
                      <th className="p-3 text-left">
                        Phone
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t">
                      <td className="p-3">
                        John Doe
                      </td>
                      <td className="p-3">
                        john@gmail.com
                      </td>
                      <td className="p-3">
                        9876543210
                      </td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-3">
                        Sarah
                      </td>
                      <td className="p-3">
                        sarah@gmail.com
                      </td>
                      <td className="p-3">
                        9123456789
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
                  Add Contact
                </button>
              </div>
            )}

            {/* BILLING PAGE */}
            {page.name === "billing" && (
              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5">
                <h4 className="font-bold text-xl mb-2">
                  Premium Plan
                </h4>

                <p className="mb-4">
                  Access advanced features and analytics.
                </p>

                <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg">
                  Upgrade Now
                </button>
              </div>
            )}

            {/* ADMIN PAGE */}
            {page.name === "admin" && (
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded-lg">
                  Manage Users
                </div>

                <div className="bg-blue-100 p-4 rounded-lg">
                  System Analytics
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  Payments
                </div>

                <div className="bg-purple-100 p-4 rounded-lg">
                  Reports
                </div>
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
}