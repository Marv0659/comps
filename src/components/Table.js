"react-dom";

function Table({ data, config, keyFn }) {
  const renderedheaders = config.map((column) => {
    return (
      <th key={column.label} className="p-3">
        {column.label}
      </th>
    );
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedheaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
