import { Head } from "minista"
import Layout from "../layouts"
import Card from "../components/Card"
import Test from "../components/Test"
import ListItem from "../components/ListItem"
import data from "./data.json"
import { Image } from "minista"

export default function () {
  return (
    <>
      <Head>
        <title>Hello!</title>
      </Head>
      <Layout>
        <h1>Hello!</h1>
        <Card title="テスト" description="ああああ" />
        <Test title="Test" />
        <ul className="p-top__list">
          {data.list.map((item) => (
            <ListItem href={item.href} title={item.title} />
          ))}
        </ul>
        <Image src="/src/assets/images/img/cat.jpg" alt="cat" />
      </Layout>
    </>
  )
}
