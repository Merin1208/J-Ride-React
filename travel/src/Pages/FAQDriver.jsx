import React, { useState } from 'react';

const faqData = [
  {
    question: "வாகன ஓட்டுனர்கள் எவ்வாறு பதிவு செய்வது?",
    answer: "வாகன ஓட்டுனர்கள் Google Play Store இல் JRide -Driver & Deliver என்ற பெயரில் உள்ள அப்பினை தரவிறக்கி உங்கள் தொலைபேசி இலக்த்தினை பயன்படுத்தி பதிவு செய்யமுடியும். அவ்வேளை உங்கள் தொலைபேசிக்கு OTP இலக்கம் ஒன்று JRIDE இல் இருந்து அனுப்பப்படும் அதனை பயன்படுத்தி பதிவை உறுதி செய்யமுடியும். அதன் பின் உங்கள் வாகனங்களை பதிவு செய்ய முடியும் பதிவு செய்வதில் ஏதேனும் சிக்கல் இருப்பின் உங்கள் Photo,அடையாள அட்டை,ரைவிங் லைசன்ஸ்,வாகன முன்படம்,ரக்ஸ்,இன்சூரன்ஸ் ஆகியவற்றை வட்சப் இலக்கங்களில் ஒன்றுக்கு அனுப்பி வைத்தால் பதிவு செய்து விட முடியும்",
  },
  {
    question: "ஒரு வாகன ஓட்டுனர் எத்தனை வாகனங்களை பதிவு செய்யலாம்?",
    answer: "ஒரு வாகன ஓட்டுனர் எத்தனை வாகனங்களையும் பதிவு செய்யலாம். ஆனால் ஒரு தடவையில் ஒருவாகனத்தை மாத்திரமே செயலில் வைத்திருக்க முடியும்",
  },
  {
    question: "எவ்வாறு ஒட்டத்திற்கான அழைப்பு ஒன்றை ஏற்பது ?",
    answer: "ஓட்டத்திற்கான அழைப்பொலி கேட்கும்போது Notification Bar இனை இழுத்து அதில் JRide Ride Notification இனை கிளிக்செய்யவும். அதன்போது தோன்றும் திரையில் Accept இனை அழுத்தவும் . உங்கள் Ride உறுதி செய்யப்பட்டால் Call Passenger தோன்றும்.அத்துடன் பயணியின் விபரங்கள் உடனான் SMS ஒன்று வரும். பயணியை தொடர்பு கொண்டு உறுதிப்படுத்தி அவரிடம் செல்லவும்.Google Map இல் ஏற்றவேண்டிய இடம் பச்சை நிறப்புள்ளியாகவும் இறக்க வேண்டிய இடம் சிவப்புநிறப்புள்ளியாகவும் தோன்றும் . உரிய புள்ளிகளை கிளிக் செய்து கீழுள்ள அம்புக்குறியினை அழுத்தினால் அந்த இடங்களுக்கான வழியினை Google Map ஊடாக பெறமுடியும் பயணியை ஏற்றியவுடன் Pickup Passenger மற்றும் Start Ride கொடுங்கள். பயணியை இறக்கியபின் Complete Trip அமத்தி பிறகு Payment Received கொடுங்கள்.ஒன்றும் தெரியவில்லை எனில் அப்பினை குளோஸ் பண்ணி ஓப்பின் செய்யவும் அல்லது Refresh பட்டனை அழுத்தவும் .தேவையின்றி Start Waiting கொடுக்க வேண்டாம்.Cancel செய்ய வேண்டாம் . தொழில் நுட்ப சிக்கல் இருப்பின் 0703563213 இற்கு அழைக்கலாம்.",
  },
  
  {
    question: "வாகனத்தை சேர்த்ததும் சேவையில் ஈடுபட முடியுமா?",
    answer: "இல்லை முதலில் உங்கள் Driver கணக்கு எம்மால் பரிசீலிக்கப்பட்டு அங்கு கொடுக்கப்பட்ட வாகன ஓட்டுனர் அனுமதிப்பத்த்திரம் ஆள் அடையாள அட்டை உறுதிப்படுத்தப்படும் பின்னர் ஒவ்வொரு வாகனங்களினதும் அனுமதிப்பத்திரம் காப்புறுதி ஆகியன உறுதி செய்யப்படும் இதன் பின்னரே சேவையில் ஈடுபட அனுமதிக்கப்படுவர். மாற்றங்களை நீங்கள் செய்தால் மீளவும் எம்மால் உறுதிப்படுத்தவேண்டியிருக்கும்",
  },
  {
    question: "வாகன ஓட்டுனர் வாகனம் சொந்தமானதாக வைத்திருக்க வேண்டுமா?",
    answer: "இல்லை ,உரிமையற்றதாயின் உரிமையாளரின் அனுமதிக்கடிதம் கொண்டிருக்கவேண்டும்",
  },
  {
    question: "கி.மீ க்கு எவ்வளவு செலவாகும்? தரகுப்பணம் எவ்வளவு?",
    answer: "வாகனத்துக்கு ஏற்ப மாறுபடும் . தற்போது ஓட்டோக்களுக்கு முதல் கி.மீ ரூ 130 , பிறகு வரும் ஒவ்வொரு கி.மீ இற்கும் ரூ 100 என விலைகள் உள்ளது ஏனைய வாகனங்களுக்கு கி.மீ 130 என நிர்ணயிக்கப்பட்டுள்ளது.காத்திருப்பு கட்டணம் நிமிடத்திற்கு 5 ரூபா .தரகுப்பணமாக தற்போது 0% உள்ளது. நவம்பர் முதல் 5% மட்டும் தரகுப்பணம் வாகன ஓட்டுனர்களிடம் பெறப்படும்",
  },
  {
    question: "வாகன ஓட்டிகளிடம் இருந்து எவ்வளவு வீதத்தை JRIDE எடுத்துக்கொள்ளும்?",
    answer: "ஒப்பீட்டளவில் மிக மிக குறைந்த அளவிலான கொமிசனையே எமது சேவை பெற்றுக்கொள்ளும். இதன் மூலம் வாகன ஓட்டுனர்களும் பயணிகளும் நன்மையடைவர். ஆரம்பத்தில் 5% வீதம் எடுக்க முடிவு செய்துள்ளோம்",
  },
  {
    question: "உங்கள் சேவை யாழ்ப்பாணத்திற்கு மட்டுமா?",
    answer: "இல்லை . எமது சேவைகள் யாழ்ப்பாணத்தில் ஆரம்பிக்கப்பட்டாலும் குறிப்பாக வடக்கு கிழக்கு மாகாணங்களில் கூடிய கவனம் செலுத்துவோம். இலங்கையின் எந்தப்பாகத்தில். இருந்தாலும் பதிவு செய்யலாம் .எமது சேவை இலங்கை முழுவதும் உள்ளது.",
  },
  {
    question: "வெளிநாட்டவர்கள் சாரதிகளாக பதிவு செய்ய முடியுமா?",
    answer: "இல்லை",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-bold text-black focus:outline-none"
      >
        {question}
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-black">{answer}</p>}
    </div>
  );
};

const FAQDriver = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">FAQ's for Drivers</h1>
      <div>
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQDriver;
