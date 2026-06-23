export default function TrustStrip() {
  const stats = [
    { num: '12', label: 'Deep hardware checks' },
    { num: 'A–F', label: 'Clear health grade' },
    { num: '~3 min', label: 'Average scan time' },
    { num: <><span className="text-amber-base">₹</span>199</>, label: 'One-time · no subscription' },
  ]

  return (
    <div className="border-t border-b border-[rgba(29,158,117,0.16)] bg-off-white">
      <div className="wrap flex flex-wrap justify-around items-center py-7.5 gap-6">
        {stats.map(s => (
          <div key={s.label} className="text-center">
            <div className="font-inter font-black text-[34px] text-teal-mid leading-none">
              {s.num}
            </div>
            <div className="text-[13px] text-text-soft mt-1.5">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
