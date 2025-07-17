import type { ProjectData } from '~/content/Project';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
	title,
	description,
	platforms,
	status,
}: ProjectData['metadata']) => {
	return (
		<div className={styles.projectPreview}>
			<img
				src={`https://placehold.co/600x320/000015/00aaff?text=${title.replace(' ', '+')}`}
				alt={title}
			/>
			<div
				className={`${styles.statusBadge} ${status === 'live' ? styles.live : styles.inDevelopment}`}
			>
				{status === 'live' ? 'Live' : 'In Dev'}
			</div>
			<div className={styles.details}>
				<h3>{title}</h3>
				<p className={styles.description}>{description}</p>
				<div className={styles.devices}>
					{platforms?.map((device) => (
						<span key={device} className={styles.deviceTag}>
							{device}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
