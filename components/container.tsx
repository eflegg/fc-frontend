export default function Container({ children, id }) {
  return <div id={id} className="mx-auto px-5">{children}</div>
}
