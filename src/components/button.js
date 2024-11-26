export default function Button(
  type = "button",
  addlClasses = "",
  onClick = () => {},
  text,
) {
  return `<button type="${type}" class="button ${addlClasses}" onclick="${onClick}">${text}</button>`;
}
