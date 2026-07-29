import { AnimatePresence, motion } from 'framer-motion';
import type L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function RegionMap({ delay = 500 }: { delay?: number }) {
  const mapRef = useRef<L.Map | null>(null);
  const holderRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setReady(true), delay);
    return () => clearTimeout(id);
  }, [delay]);

  // Observe size only when mounted
  useEffect(() => {
    if (!ready || !holderRef.current) return;

    let raf = 0;
    const invalidate = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        mapRef.current?.invalidateSize({ animate: true }),
      );
    };

    const ro = new ResizeObserver(invalidate);
    ro.observe(holderRef.current);

    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === 'max-width' || e.propertyName === 'width')
        invalidate();
    };
    const el = holderRef.current.closest('main') || holderRef.current;
    el.addEventListener('transitionend', onTransitionEnd);

    // initial nudge right after mount
    requestAnimationFrame(invalidate);

    return () => {
      ro.disconnect();
      el.removeEventListener('transitionend', onTransitionEnd);
      cancelAnimationFrame(raf);
    };
  }, [ready]);

  return (
    <div
      ref={holderRef}
      className="relative w-full h-120 rounded-2xl overflow-hidden"
    >
      {/* Loader */}
      <AnimatePresence initial={false} mode="wait">
        {!ready && (
          <motion.div
            key="loader"
            className="absolute inset-0 grid place-items-center bg-black/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-6 w-6 animate-spin rounded-full border border-white/30 border-t-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Map */}
      {ready && (
        <motion.div
          key="map"
          className="h-full" // <-- give the wrapper height
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <MapContainer
            whenCreated={(m) => {
              mapRef.current = m;
              // ensure a first render after being hidden
              requestAnimationFrame(() => m.invalidateSize());
            }}
            className="w-full h-full"
            center={[49.1951, 16.6068]}
            zoom={6}
            scrollWheelZoom
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </motion.div>
      )}
    </div>
  );
}
