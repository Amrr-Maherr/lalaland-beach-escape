import { Phone } from 'lucide-react';

const CallIcon = () => {
  return (
    <a
      href="tel:+201234567890"  // استبدل هذا الرقم برقم الهاتف الخاص بك
      className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors fixed bottom-24 right-4 z-50"
      aria-label="Call"
    >
      <Phone className="h-8 w-8" />
    </a>
  );
};

export default CallIcon;
