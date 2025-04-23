export default function LalaLandMap() {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-lala-sand/60 to-white dark:from-[#23211c] dark:to-[#18182a]">
      {/* Google Maps iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.947998902928!2d34.6605!3d29.0173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDAxJzAyLjMiTiAzNMKwMzknMzguMCJF!5e0!3m2!1sen!2ssa!4v1713869234567!5m2!1sen!2ssa"
        width="100%"
        height="440"
        style={{
          border: 0,
          borderRadius: "1.25rem",
          outline: "2px solid #E8D0B0",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Map overlay: open and directions buttons */}
      <div className="absolute z-10 top-3 right-4 flex gap-2 flex-col sm:flex-row">
        <a
          href="https://maps.app.goo.gl/KRjs54ZjzCuPnf6h7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 hover:bg-lala-blue/90 text-lala-blue hover:text-white shadow transition text-xs font-medium backdrop-blur handwriten"
        >
          Open in Google Maps
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=29.0173,34.6627"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-lala-orange/80 hover:bg-lala-orange text-white shadow transition text-xs font-medium"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
