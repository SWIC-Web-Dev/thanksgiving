import DishRow from "./dish-row";

export default function DishesTable(dishes) {
  return `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Assigned To</th>
          <th>Estimated Time</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        ${dishes.map(DishRow).join("")}
      </tbody>
    </table>
  `;
}
