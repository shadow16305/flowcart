import CheckoutBanner from "@/components/checkout/checkout-banner";
import CheckoutForm from "@/components/checkout/checkout-form";
import Container from "@/components/ui/container";

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
