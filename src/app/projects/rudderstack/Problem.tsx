import * as React from "react";
import Link from "next/link";

export default function Problem() {
  return (
    <div id="problem">
      <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-left mb-8">
        Integrating data across platforms is hard.
      </h1>
      <div className="prose max-w-prose text-text-base mb-12">
        <p>Talking about it is also hard, so I will spare you the details.</p>
        <p>What I will talk about is how implementing basic UX strategies made it easier.</p>
      </div>
      
      <h2 className="text-3xl font-bold mb-8 font-sans">The Problem</h2>
      <div className="prose max-w-prose text-text-base">
        <p>
          Many of the core functions of RudderStack were built by developers. In this case engineers had 
          designed a form that put everything users could ever want to tell us on one page. (It's too 
          long to show here, but{' '}
          <Link 
            href="/images/projects/rudderstack/Connections-Before.png" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            click here to see it
          </Link>
          .)
          <br />
          <br />
        </p>
        <p>
          It was an act of generosity, that fell short on user empathy.
          <br />
        </p>
        <p>
          From a design perspective it felt overwhelming. The data backed up that this all-in-one 
          approach wasn't working. Less than 50% of users who started the form completed it.
          <br />
          <br />
        
        </p>
        <p>
          This was the project that I used to change our process at RudderStack.
        </p>
      </div>
    </div>
  );
}
