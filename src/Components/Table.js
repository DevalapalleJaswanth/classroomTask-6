import React from 'react';
export default function Table({ title, labels, data, actions }) {
  let keys = data[0] && Object.keys(data[0]);
  let dataActions =
    actions &&
    actions.filter((ele, i) => {
      if (i !== 0) {
        return ele;
      }
    });

  return (
    <div>
      {title && title}
      <button
        onClick={() => {
          actions && actions[0].action({}, data);
        }}
      >
        {actions && actions[0].title}
      </button>
      <table border="2px">
        <thead>
          <tr>
            {labels &&
              labels.map((ele, i) => <th key={i}>{ele.toUpperCase()}</th>)}
            {actions && (
              <th colSpan={`${actions && actions.length}`}>ACTIONS</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((ele, i) => (
              <tr key={i}>
                {keys &&
                  keys.map((item, j) => <td key={j}>{ele[`${item}`]}</td>)}
                {dataActions &&
                  dataActions.map((item, k) => (
                    <td>
                      <button
                        key={k}
                        onClick={() => {
                          item.action(ele, data);
                        }}
                      >
                        {item.title}
                      </button>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
