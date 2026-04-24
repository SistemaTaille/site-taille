import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/5551995539405?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Sistema%20Taille"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/60 transition-shadow"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10 fill-white" strokeWidth={0} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
