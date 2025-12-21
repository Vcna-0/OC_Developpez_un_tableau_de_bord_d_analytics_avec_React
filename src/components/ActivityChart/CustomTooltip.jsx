

// Tooltip personnalisé pour respecter le design
function CustomTooltip({ active, payload }) {
	if (active && payload && payload.length === 2) {
		return (
			<div style={{ background: '#E60000', color: '#fff', padding: 10, minWidth: 50, textAlign: 'center', fontSize: 12, lineHeight: 1.5 }}>
				<div>{payload[0].value}kg</div>
				<div>{payload[1].value}kcal</div>
			</div>
		);
	}
	return null;
}

export default CustomTooltip;
