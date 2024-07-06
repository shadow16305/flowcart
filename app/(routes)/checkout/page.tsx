import Container from "@/components/ui/container";
import CheckoutBanner from "./_components/checkout-banner";
import CheckoutForm from "./_components/checkout-form";

const CheckoutPage = () => {
  return (
    <main className="space-y-8 pt-[138px]">
      <CheckoutBanner />
      <Container className="flex justify-between">
        <CheckoutForm />
      </Container>
    </main>
  );
};

export default CheckoutPage;
