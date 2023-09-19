function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 p-5 mb-10">
      <div>
        <h1 className="text-6xl">Hang Gao&apos;s Personal Blogs</h1>
        <h2 className="mt-5 md:mt-2 text-green-400">
          Welcome to Every Developers favorite blog in the devosphere.
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, itaque,
        maiores autem repellat aliquam incidunt dicta dignissimos eum.
      </p>
    </div>
  );
}

export default Banner;
