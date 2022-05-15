import { getAccessToken, getSession, useUser, withPageAuthRequired, WithPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

export default function Home() {
  const { user } = useUser();

  return ( 
    <div>
      <h1>Hello world</h1>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getAccessToken(req, res));
    return {
      props: {}
    }
  }
})
