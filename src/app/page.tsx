export default function Home() {
  return (
    <main style={{padding:40}}>
      <h1>Next DevOps Demo</h1>

      <p>Environment:</p>
      <pre>{process.env.NEXT_PUBLIC_ENV}</pre>

      <p>API test:</p>

      <a href="/api/hello">Call API</a>
    </main>
  );
}