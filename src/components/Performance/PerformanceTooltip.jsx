function PerformanceTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const value = payload[0].value
    const kind = payload[0].payload?.kind || ''
    return (
      <div
        style={{
          backgroundColor: '#ffffff',
          color: '#000',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 500
        }}
      >
        <p style={{ margin: 0 }}>{kind}</p>
        <p style={{ margin: '4px 0 0 0', color: '#FF0000' }}>{value}</p>
      </div>
    )
  }
  return null
}

export default PerformanceTooltip
