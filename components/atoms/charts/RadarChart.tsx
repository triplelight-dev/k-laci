points.map((pt, i) => {
  const category = categories[i];
  if (!category) return null;

  <circle
    onMouseEnter={() => {
    }}
    onMouseLeave={() => {
    }}
    data-index={i}
  />

  <text
    x={pt.x}
    y={pt.y - 15}
    textAnchor="middle"
    fontSize="12"
    fontWeight="600"
    fill={['인구성장형', '안전복원형'].includes(category)
      ? colorMap[category] || '#333'
      : '#333'}
    className="category-text"
    style={{
      opacity: 0,
      transition: 'opacity 0.3s ease',
    }}
  >
    {category}
  </text>
}) 