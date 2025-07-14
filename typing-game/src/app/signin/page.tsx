import Header from '@/components/Header';

function SigninPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-8 py-12">
      <Header />

      <section className="h-5/6 flex items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold">
          Sign In
        </h1>
      </section>
    </div>
  );
}

export default SigninPage;
