import Script from "next/script";

export default function Schema() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to block ads on spotify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you don’t know how to block ads on spotify, then don’t worry because by installing it on your browser. You can block the spot where the ads come from.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does adblock work on spotify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it works on Spotify and you can blocks ads by downloading and installing the extension in your browser.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this extension free to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is free of cost with no hidden charges So, hurry up and install the extension now to listen ad free music.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of ads spotify block?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It blocks all types of ads such as pop ups, banner ads, and spotify ads.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
}
