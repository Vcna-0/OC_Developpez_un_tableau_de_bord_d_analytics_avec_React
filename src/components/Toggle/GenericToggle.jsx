
function GenericToggle({ options, currentValue, getValue, getLabel, getKey, onToggle }) {
  return (
    <div style={{
      display: 'inline-flex',
      backgroundColor: '#f0f0f0',
      borderRadius: 25,
      padding: 4,
      gap: 0
    }}>
      {options.map((option) => {
        const optionValue = getValue(option)
        const isSelected = currentValue === optionValue

        return (
          <button
            key={getKey(option)}
            onClick={() => !isSelected && onToggle(optionValue)}
            style={{
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 500,
              border: 'none',
              borderRadius: 20,
              backgroundColor: isSelected ? '#E60000' : 'transparent',
              color: isSelected ? '#fff' : '#666',
              cursor: isSelected ? 'default' : 'pointer',
              transition: 'all 0.3s',
              opacity: isSelected ? 1 : 0.7
            }}
          >
            {getLabel(option)}
          </button>
        )
      })}
    </div>
  )
}

export default GenericToggle
