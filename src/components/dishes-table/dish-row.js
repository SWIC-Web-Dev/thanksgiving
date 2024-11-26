export default function DishRow(dish) {
  return `
    <tr>
      <td>${dish.name}</td>
      <td>${dish.status}</td>
      <td>${dish.assignedTo}</td>
      <td>${dish.estimatedTime}</td>
      <td>${dish.temperature}</td>
    </tr>
  `;
}
