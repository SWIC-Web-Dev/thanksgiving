export default function Button({
  type = "button",
  additionalClasses = "",
  text,
}) {
  return `
    <button 
      type="${type}" 
      class="rounded shadow transition-colors ${additionalClasses}"
    >
      ${text}
    </button>
  `;
}
