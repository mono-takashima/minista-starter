import type { GlobalProps } from "minista"
import { Head } from "minista"

export default function ({ url, title, children }: GlobalProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="description" content="description" />
        <script src="/src/assets/scripts/index.ts" />
      </Head>
      {url === "/" ? (
        <div className="home">{children}</div>
      ) : (
        <div className="child">{children}</div>
      )}
    </>
  )
}
