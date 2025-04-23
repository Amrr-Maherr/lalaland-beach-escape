import { MessageCircle } from 'lucide-react';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/1234567890"  // استبدل هذا الرقم برقم واتساب الخاص بك
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppIcon;
