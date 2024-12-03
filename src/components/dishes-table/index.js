import DishRow from "./dish-row";

export default function DishesTable(dishes) {
  return `
    <table class="w-full mt-4 border-collapse border">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">Name</th>
          <th class="p-2 text-left">Status</th>
          <th class="p-2 text-left">Assigned To</th>
          <th class="p-2 text-left">Estimated Time</th>
          <th class="p-2 text-left">Temperature</th>
        </tr>
      </thead>
      <tbody>
        ${dishes.map((dish) => DishRow(dish)).join("")}
      </tbody>
    </table>
  `;
}
