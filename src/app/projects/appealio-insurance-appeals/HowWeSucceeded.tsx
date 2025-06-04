import Image from 'next/image';

export default function HowWeSucceeded() {
  return (
    <section id="outcomes" className="scroll-mt-20 mb-24">
      <div className="prose max-w-prose text-text-base space-y-6">
        <h2 className="text-3xl font-bold mb-8 font-sans">Outcomes</h2>
        
        <p>
          We introduced the beta version to a select group of hospitals and small healthcare providers. The feedback from customers surpassed our expectations. The tool not only saved time and reduced stress but also increased financial returns for providers. They earned more by processing appeals faster and more efficiently, with fewer rounds of appeals and a much higher acceptance rate.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
            <p className="text-gray-700">Decrease in appeal time, saving providers more than an hour every day. <a href="https://docvocate.com/auctus-case-study.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Case Study →</a></p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">+26%</div>
            <p className="text-gray-700">Increase in revenue through prioritized appeals.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
            <p className="text-gray-700">Higher volume of appeals completed through automation and prediction.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100">
            <div className="text-4xl font-bold text-purple-600 mb-2">32%</div>
            <p className="text-gray-700">More appeals accepted by insurance with AI-driven accuracy.</p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
