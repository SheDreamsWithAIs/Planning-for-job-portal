'use client';

export default function WorthBadge() {
  return (
    <>
      <div className="bg-gradient-to-r from-amber-100 to-green-100 text-green-800 px-4 py-2 rounded-full font-medium border border-green-200 shadow-sm animate-pulse">
        ✨ You have worth!
      </div>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 10px rgba(255, 255, 200, 0.4);
          }
          50% {
            opacity: 0.9;
            box-shadow: 0 0 20px rgba(255, 255, 200, 0.6);
          }
        }
      `}</style>
    </>
  );
}

