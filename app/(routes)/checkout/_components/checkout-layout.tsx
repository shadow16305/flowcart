import { ReactNode } from "react";

interface CheckoutLayoutProps {
  name: string;
  children: ReactNode;
}

const CheckoutLayout: React.FC<CheckoutLayoutProps> = ({ name, children }) => {
  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold uppercase tracking-widest text-amber-400">
        {name}
      </p>
      {children}
    </div>
  );
};

export default CheckoutLayout;
