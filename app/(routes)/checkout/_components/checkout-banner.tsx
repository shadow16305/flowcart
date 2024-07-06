import Container from "@/components/ui/container";

const CheckoutBanner = () => {
  return (
    <section className="w-full bg-amber-300 py-7">
      <Container className="flex justify-center text-[32px] font-semibold lg:justify-between">
        <span className="hidden tracking-widest text-amber-400 lg:block">
          CHECKOUT
        </span>
        <span className="hidden tracking-widest text-amber-400 lg:block">
          CHECKOUT
        </span>
        <span className="tracking-widest text-black">CHECKOUT</span>
        <span className="hidden tracking-widest text-amber-400 lg:block">
          CHECKOUT
        </span>
        <span className="hidden tracking-widest text-amber-400 lg:block">
          CHECKOUT
        </span>
      </Container>
    </section>
  );
};

export default CheckoutBanner;
