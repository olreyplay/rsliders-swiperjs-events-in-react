import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SwiperEventsExample() {
  const slides = useMemo(
    () => [
      {
        id: "perf",
        title: "Fast Performance",
        desc: "Smooth transitions and responsive UI.",
        icon: "⚡️",
      },
      {
        id: "ux",
        title: "Great UX",
        desc: "Touch-first interaction that feels native.",
        icon: "🖐️",
      },
      {
        id: "style",
        title: "Easy Styling",
        desc: "Style slides like modern cards.",
        icon: "🎨",
      },
      {
        id: "ship",
        title: "Production Ready",
        desc: "Events help your UI react to state.",
        icon: "🚀",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const total = slides.length;
  const progress = ((activeIndex + 1) / total) * 100;

  return (
    <div style={wrap}>
      <div style={panel}>
        <div style={top}>
          <div>
            <h2 style={h2}>Slider that updates your UI</h2>
            <p style={muted}>
              Using Swiper events to track progress and end state.
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={badge}>{isEnd ? "End reached" : "In progress"}</div>
            <div style={muted}>
              Slide <b>{activeIndex + 1}</b> / {total}
            </div>
          </div>
        </div>

        <div style={progressTrack} aria-label="Progress">
          <div style={{ ...progressFill, width: `${progress}%` }} />
        </div>

        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setIsEnd(swiper.isEnd);
          }}
          onReachEnd={() => setIsEnd(true)}
          onReachBeginning={() => setIsEnd(false)}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div style={card}>
                <div style={icon}>{s.icon}</div>
                <h3 style={h3}>{s.title}</h3>
                <p style={muted}>{s.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {isEnd && (
          <p style={{ ...muted, marginTop: 12 }}>
            ✅ You reached the last slide.
          </p>
        )}
      </div>
    </div>
  );
}

/* minimal styles */
const wrap = { maxWidth: 720, margin: "40px auto", padding: "0 16px" };

const panel = {
  padding: 16,
  borderRadius: 16,
  border: "1px solid #e5e7eb",
  background: "#fff",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const top = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 12,
};

const h2 = { margin: 0, fontSize: 22 };
const h3 = { margin: "10px 0 6px", fontSize: 18 };

const muted = { margin: 0, color: "#6b7280", fontSize: 14, lineHeight: 1.5 };

const badge = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  background: "#f3f4f6",
  border: "1px solid #e5e7eb",
  fontSize: 12,
};

const progressTrack = {
  height: 10,
  borderRadius: 999,
  background: "#f3f4f6",
  overflow: "hidden",
  border: "1px solid #e5e7eb",
  marginBottom: 14,
};

const progressFill = {
  height: "100%",
  background: "#111827",
  transition: "width 200ms ease",
};

const card = {
  height: 200,
  borderRadius: 14,
  padding: 16,
  border: "1px solid #e5e7eb",
  background: "#fafafa",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const icon = {
  width: 40,
  height: 40,
  borderRadius: 12,
  background: "#111827",
  color: "#fff",
  display: "grid",
  placeItems: "center",
  fontSize: 18,
};
