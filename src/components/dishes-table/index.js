import DishRow from "./dish-row";

export default function DishesTable(dishes) {
  return `
    <table class="w-full mt-4 border-collapse border">
      <thead class="bg-gray-100">
        <tr class="*:p-2 *:text-left">
          <th>Name</th>
          <th>Status</th>
          <th>Assigned To</th>
          <th>Estimated Time</th>
          <th>Temperature</th>
        </tr>
      </thead>
      <tbody>
        ${dishes.map((dish) => DishRow(dish)).join("")}
      </tbody>
    </table>
  `;
}
