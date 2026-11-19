/** Original faceted "core" gem inside rotating HUD rings. Pure SVG + CSS animation. */
export default function CoreGem() {
  return (
    <svg viewBox="0 0 400 400" className="core-svg">
      <defs>
        <radialGradient id="gemFill" cx="45%" cy="38%" r="70%">
          <stop offset="0" stopColor="#fff6d6" />
          <stop offset=".35" stopColor="#ffd166" />
          <stop offset=".75" stopColor="#e09a1f" />
          <stop offset="1" stopColor="#8a4a08" />
        </radialGradient>
        <radialGradient id="gemHalo">
          <stop offset="0" stopColor="#ffd166" stopOpacity=".55" />
          <stop offset=".5" stopColor="#c2183c" stopOpacity=".18" />
          <stop offset="1" stopColor="#c2183c" stopOpacity="0" />
        </radialGradient>
        <filter id="gemBlur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#gemHalo)" />
      <g className="ring-spin">
        <circle cx="200" cy="200" r="168" fill="none" stroke="rgba(232,181,74,.45)" strokeDasharray="1 7" />
        <path d="M200 32a168 168 0 0 1 145 84" fill="none" stroke="#c2183c" strokeWidth="2" />
        <path d="M200 368a168 168 0 0 1-145-84" fill="none" stroke="#1fb58a" strokeWidth="2" />
      </g>
      <g className="ring-spin reverse">
        <circle cx="200" cy="200" r="132" fill="none" stroke="rgba(255,255,255,.08)" />
        <circle cx="200" cy="200" r="132" fill="none" stroke="#e8b54a" strokeWidth="1.5" strokeDasharray="40 160 10 120" />
        <circle cx="332" cy="200" r="4" fill="#ffe6a3" />
        <circle cx="68" cy="200" r="3" fill="#1fb58a" />
      </g>
      <path
        d="M200 140v-40h40l20-20M200 260v40h-40l-20 20M140 200h-50l-15 15M260 200h50l15-15"
        stroke="rgba(232,181,74,.35)"
        fill="none"
      />
      <g className="gem-breathe">
        <path d="M200 132 252 172 236 240 200 268 164 240 148 172z" fill="#e8b54a" filter="url(#gemBlur)" opacity=".8" />
        <path d="M200 132 252 172 236 240 200 268 164 240 148 172z" fill="url(#gemFill)" />
        <path
          d="M200 132 186 182 200 268M200 132 214 182 200 268M148 172h104M186 182 164 240M214 182 236 240M186 182h28"
          stroke="rgba(122,40,8,.55)"
          strokeWidth="1"
          fill="none"
        />
        <path d="M200 132 214 182h-28z" fill="rgba(255,255,255,.45)" />
      </g>
    </svg>
  );
}
