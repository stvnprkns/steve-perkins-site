import Image from 'next/image';

export default function TalkingShop() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 font-sans">Talking Shop</h2>
      <div className="prose max-w-prose text-text-base space-y-6">
        <p>
          We talked to every business owner we could find. Walking shop to shop across the business corridors of Dallas 
          asking owners questions about their business, what kept them up at night, and their relationship with CPAs. 
          We chatted with more than 100 business owners in a week.
        </p>
        <p>
          A big insight we found was that the owners who worked with tax professionals delegated all the things they 
          hated about running a business: expense reporting, bookkeeping, etc., so they could focus on building the 
          business, marketing, improving inventory, and connecting with customers.
        </p>
        <figure className="w-full my-12">
          <div className="w-full max-w-4xl mx-auto bg-purple-50 p-4 rounded-lg">
            <div className="relative w-full aspect-video">
              <Image 
                src="/images/qb-cpa-owners.png" 
                alt="Photos featuring various small business owners we talked to across Dallas." 
                fill
                className="object-cover w-full h-full rounded" 
              />
            </div>
            <figcaption className="text-sm text-muted-foreground mt-2 text-center">
              [Fig. 1] Photos featuring various small business owners we talked to across Dallas.
            </figcaption>
          </div>
        </figure>
      </div>
    </>
  );
}
