
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'serif', background: '#f8f5f2', color: '#333' }}>
      <Head>
        <title>Kül ve Gül Arasında</title>
      </Head>
      <main>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kül ve Gül Arasında</h1>
        <p>Doğanın izinde, ateşin dilinde, seramiğin şiirle buluştuğu bir koleksiyon.</p>
      </main>
    </div>
  );
}
