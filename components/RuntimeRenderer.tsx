type Props = {
  schema: any;
};

function renderComponent(
  component: any,
  index: number
) {
  switch (component.type) {

    case "input":
      return (
        <input
          key={index}
          placeholder={component.label}
          className="border rounded-lg p-3 w-full mb-3"
        />
      );

    case "button":
      return (
        <button
          key={index}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg mr-2"
        >
          {component.label}
        </button>
      );

    case "card":
      return (
        <div
          key={index}
          className="bg-blue-100 p-5 rounded-xl shadow"
        >
          <h4 className="font-semibold">
            {component.label}
          </h4>

          <p className="text-2xl font-bold mt-2">
            Sample Data
          </p>
        </div>
      );

    case "chart":
      return (
        <div
          key={index}
          className="bg-purple-100 p-5 rounded-xl shadow"
        >
          <h4 className="font-semibold mb-2">
            {component.label}
          </h4>

          <div className="h-24 bg-purple-300 rounded flex items-center justify-center">
            📈 Analytics Chart
          </div>
        </div>
      );

    case "table":
      return (
        <table
          key={index}
          className="w-full border rounded-lg overflow-hidden"
        >
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left">
                Name
              </th>
              <th className="p-3 text-left">
                Email
              </th>
              <th className="p-3 text-left">
                Status
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
                Active
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
                Active
              </td>
            </tr>
          </tbody>
        </table>
      );

    default:
      return (
        <div
          key={index}
          className="bg-gray-100 p-4 rounded"
        >
          {component.label}
        </div>
      );
  }
}

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
            <h3 className="font-bold text-2xl capitalize mb-5 text-gray-800">
              {page.name}
            </h3>

            <div className="space-y-4">
              {page.components?.map(
                (
                  component: any,
                  index: number
                ) =>
                  renderComponent(
                    component,
                    index
                  )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}