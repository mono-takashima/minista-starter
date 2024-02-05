import "./index.scss"

type ListItemProps = {
  href: string
  title: string
}

export default function ListItem({ href, title }: ListItemProps) {
  return (
    <>
      <li className="c-list-item">
        <a href={href}>{title}</a>
      </li>
    </>
  )
}
