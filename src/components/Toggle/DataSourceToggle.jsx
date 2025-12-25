import GenericToggle from './GenericToggle'

function DataSourceToggle({ useMock, onToggle }) {

  const options = [
    { value: false, label: 'API' },
    { value: true, label: 'Mock' }
  ]

  return (
    <GenericToggle
      options={options}
      currentValue={useMock}
      getValue={(option) => option.value}
      getLabel={(option) => option.label}
      getKey={(option) => option.label}
      onToggle={onToggle}
    />
  )
}

export default DataSourceToggle
