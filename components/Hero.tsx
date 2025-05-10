export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="font-heading text-6xl text-light uppercase tracking-wide mb-4">
        Vyoma: Autonomous Delivery, Redefined
      </h1>
      <p className="max-w-2xl text-muted mb-8 text-lg">
        Building the future of urban logistics with fully driverless electric vehicles.
      </p>
      <button className="px-8 py-4 border-2 border-accent text-accent font-semibold uppercase hover:bg-accent hover:text-primary transition">
        Request Early Access
      </button>
    </section>
  );
}
