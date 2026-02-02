import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Invoices',
    default: 'Invoices',
  },
};

 export default function Layout({ children }: { children: React.ReactNode }) {
   return (
     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
       <div className="w-full flex-none md:w-0">
       </div>
       <div className="grow p-0 md:overflow-y-auto md:p-0">{children}</div>
     </div>
   );
 }