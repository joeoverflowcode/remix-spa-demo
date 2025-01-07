import { useLoaderData } from "@remix-run/react"

export function clientLoader () {
    return {message: "My name is Joe and I'm a Web Developer"}
}

const about = () => {
  const loader = useLoaderData<typeof clientLoader>()
    return (
    <div>{loader.message}</div>
  )
}

export default about