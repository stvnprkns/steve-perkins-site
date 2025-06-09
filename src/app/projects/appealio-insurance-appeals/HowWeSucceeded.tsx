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
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">75%</div>
            <p className="text-gray-700 dark:text-gray-100">Decrease in appeal time, saving providers more than an hour every day. <a href="https://docvocate.com/auctus-case-study.html" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">Case Study →</a></p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">+26%</div>
            <p className="text-gray-700 dark:text-gray-100">Increase in revenue through prioritized appeals.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">40%</div>
            <p className="text-gray-700 dark:text-gray-100">Higher volume of appeals completed through automation and prediction.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-purple-900/30 transition-all duration-200 hover:border-purple-300 dark:hover:border-purple-900/50 hover:shadow-sm dark:hover:shadow-purple-900/10">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">32%</div>
            <p className="text-gray-700 dark:text-gray-100">More appeals accepted by insurance with AI-driven accuracy.</p>
          </div>
        </div>
        
        
      </div>
    </section>
  );
}
