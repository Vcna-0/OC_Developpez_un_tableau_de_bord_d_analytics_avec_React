
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './CustomTooltip';
import styles from './ActivityChart.module.css';

function ActivityChart({ data }) {
         
         console.log("data", )

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.title}>Activité quotidienne</h3>
				<div className={styles.legend}>
					<span className={styles.legendItem}>
						<span className={`${styles.dot} ${styles.dotWeight}`}></span>
						Poids (kg)
					</span>
					<span className={styles.legendItem}>
						<span className={`${styles.dot} ${styles.dotCalories}`}></span>
						Calories brûlées (kCal)
					</span>
				</div>
			</div>
			<ResponsiveContainer width="100%" height={200}>
				<BarChart
					data={data}
					barSize={7}
					barGap={8}
					margin={{ top: 40, right: 30, left: 40, bottom: 10 }}
				>
					<CartesianGrid strokeDasharray="3" vertical={false} stroke="#DEDEDE" />
					<XAxis
						dataKey="day"
						tick={{ fill: '#9B9EAC', fontSize: 14 }}
						tickLine={false}
						axisLine={{ stroke: '#DEDEDE', strokeWidth: 2 }}
						tickMargin={16}
						padding={{ left: 10, right: 10 }}
					/>
					<YAxis
						yAxisId="kilogram"
						orientation="right"
						tickMargin={30}
						tick={{ fill: '#9B9EAC', fontSize: 14 }}
						tickLine={false}
						axisLine={false}
						domain={['dataMin-2', 'dataMax+1']}
						tickCount={3}
						allowDecimals={false}
					/>
					<YAxis hide yAxisId="calories" />
					<Tooltip
						cursor={{ fill: 'rgba(196,196,196,0.5)' }}
						content={<CustomTooltip />}
						wrapperStyle={{ outline: 'none', border: 'none', boxShadow: 'none' }}
					/>
					<Bar
						name="Poids (kg)"
						dataKey="kilogram"
						yAxisId="kilogram"
						fill="#282D30"
						radius={[3, 3, 0, 0]}
						maxBarSize={7}
					/>
					<Bar
						name="Calories brûlées (kCal)"
						dataKey="calories"
						yAxisId="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
						maxBarSize={7}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}

export default ActivityChart;
