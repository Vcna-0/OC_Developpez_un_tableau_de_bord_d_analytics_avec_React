import KeyDataCard from '../KeyDataCard/KeyDataCard'
import appleIcon from '../../assets/apple.svg'
import energyIcon from '../../assets/energy.svg'
import chickenIcon from '../../assets/chicken.svg'
import cheeseburgerIcon from '../../assets/cheeseburger.svg'
import styles from './KeyDataSection.module.css'

const KEY_DATA_CONFIG = [
  {
    id: 'calories',
    icon: energyIcon,
    iconAlt: 'Energie',
    iconBgColor: '#FF000014',
    dataKey: 'calorieCount',
    unit: 'kCal',
    label: 'Calories',
  },
  {
    id: 'proteins',
    icon: chickenIcon,
    iconAlt: 'Proteines',
    iconBgColor: '#4E90F014',
    dataKey: 'proteinCount',
    unit: 'g',
    label: 'Proteines',
  },
  {
    id: 'carbs',
    icon: appleIcon,
    iconAlt: 'Glucides',
    iconBgColor: '#F3A50514',
    dataKey: 'carbohydrateCount',
    unit: 'g',
    label: 'Glucides',
  },
  {
    id: 'lipids',
    icon: cheeseburgerIcon,
    iconAlt: 'Lipides',
    iconBgColor: '#FD519214',
    dataKey: 'lipidCount',
    unit: 'g',
    label: 'Lipides',
  },
]

function KeyDataSection({ userData }) {
  if (!userData) {
    return null
  }

  return (
    <div className={styles.container}>
      {KEY_DATA_CONFIG.map((config) => (
        <KeyDataCard
          key={config.id}
          icon={<img src={config.icon} alt={config.iconAlt} style={{ width: 20, height: 20 }} />}
          iconBgColor={config.iconBgColor}
          value={userData.keyData[config.dataKey]}
          unit={config.unit}
          label={config.label}
        />
      ))}
    </div>
  )
}

export default KeyDataSection
