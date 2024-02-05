import "./index.scss"

type CardProps = {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="c-card">
      <h2 className="c-card__title">{title}</h2>
      <p className="c-card__description">{description}</p>
    </div>
  )
}
