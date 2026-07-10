// Shared SVG Icons
export function CheckIcon({ color = '#1D9E75', size = 17 }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
 <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
 <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8"/>
 </svg>
 )
}

export function LogoMark({ size = 40 }) {
 return (
 <img src="/image.png" alt="Logo" style={{ width: size, height: size }} className="shrink-0 object-contain" />
 )
}

export function ArrowRight({ color = '#0D1F1A', size = 18 }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
 <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 )
}

export function PlayIcon({ color = '#fff', size = 11 }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
 <path d="M8 5v14l11-7z"/>
 </svg>
 )
}

export function ClockIcon({ size = 17 }) {
 return (
 <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
 <circle cx="12" cy="12" r="9" stroke="#0F6E56" strokeWidth="1.8"/>
 <path d="M12 7v5l3 2" stroke="#0F6E56" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>
 )
}
