import "./index.scss"

type TestProps = {
  title: string
}

export default function Test({ title }: TestProps) {
  return (
    <div className="c-test">
      <h2 className="c-test__title">{title}</h2>
    </div>
  )
}
