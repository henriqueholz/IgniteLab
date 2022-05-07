import { useUser } from "@auth0/nextjs-auth0"

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      <h1>Hello World</h1>
      { JSON.stringify(user, null, 2)}
      <a href="/api/auth.login">Login</a>
    </div>
  )

}
