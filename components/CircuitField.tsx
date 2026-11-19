/** Fixed ambient background: hex lattice + circuit traces with travelling light pulses. */
export default function CircuitField() {
  return (
    <div className="field" aria-hidden="true">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="hexgrid" width="56" height="97" patternUnits="userSpaceOnUse" patternTransform="scale(.7)">
            <path d="M28 0 56 16v32L28 64 0 48V16zM28 64v33" fill="none" stroke="rgba(232,181,74,.07)" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#hexgrid)" />
        <g fill="none" stroke="rgba(232,181,74,.2)" strokeWidth="1">
          <path id="trace1" d="M0 140h220l40 40h180l30-30h300" />
          <path id="trace2" d="M1200 620H960l-40-40H700l-30 30H420" />
          <path id="trace3" d="M80 800V600l40-40V420" />
          <path id="trace4" d="M1120 0v160l-40 40v120" />
        </g>
        <g fill="none" strokeWidth="2" strokeLinecap="round" className="pulses">
          <use href="#trace1" stroke="#ffe6a3" strokeDasharray="30 900">
            <animate attributeName="stroke-dashoffset" from="930" to="0" dur="6s" repeatCount="indefinite" />
          </use>
          <use href="#trace2" stroke="#c2183c" strokeDasharray="30 900">
            <animate attributeName="stroke-dashoffset" from="930" to="0" dur="7s" repeatCount="indefinite" />
          </use>
          <use href="#trace3" stroke="#1fb58a" strokeDasharray="20 500">
            <animate attributeName="stroke-dashoffset" from="520" to="0" dur="5s" repeatCount="indefinite" />
          </use>
          <use href="#trace4" stroke="#e8b54a" strokeDasharray="20 500">
            <animate attributeName="stroke-dashoffset" from="520" to="0" dur="5.5s" repeatCount="indefinite" />
          </use>
        </g>
      </svg>
    </div>
  );
}
