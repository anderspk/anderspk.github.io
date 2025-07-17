import styles from './home.module.css';
import ProjectCard from './ui/ProjectCard';
import type { Route } from './+types/home';
import { Link } from 'react-router';
import type { ProjectData } from '~/content/Project';

export function meta() {
	return [
		{ title: 'Costello' },
		{ name: 'description', content: 'Welcome to Costello!' },
	];
}

export const loader = async () => {
	const inDevelopmentModules = import.meta.glob(
		'../content/projects/in-development/*.tsx',
		{
			eager: true,
			import: 'metadata',
		},
	);

	const liveModules = import.meta.glob('../content/projects/live/*.tsx', {
		eager: true,
		import: 'metadata',
	});

	const [inDevelopment, live] = [inDevelopmentModules, liveModules].map((m) =>
		Object.entries(m).map(([path, metadata]) => {
			return {
				slug: path.split('/').pop()?.replace('.tsx', '') || '',
				metadata: metadata as ProjectData['metadata'],
			};
		}),
	);

	return { projects: { inDevelopment, live } };
};

export default ({ loaderData: { projects } }: Route.ComponentProps) => {
	return (
		<div className={styles.projectsContainer}>
			{projects.live.length > 0 && (
				<section className={styles.section}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>Live Projects</h2>
						<span className={`${styles.sectionBadge} ${styles.live}`}>
							{`${projects.live.length} project${projects.live.length !== 1 ? 's' : ''}`}
						</span>
					</div>
					<div className={styles.projectsGrid}>
						{projects.live.map(({ slug, metadata }) => (
							<Link to={`/project/${slug}`} key={slug}>
								<ProjectCard key={slug} {...metadata} />
							</Link>
						))}
					</div>
				</section>
			)}

			{projects.inDevelopment.length > 0 && (
				<section className={styles.section}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>In Development</h2>
						<span className={`${styles.sectionBadge} ${styles.inDevelopment}`}>
							{`${projects.inDevelopment.length} project${projects.inDevelopment.length !== 1 ? 's' : ''}`}
						</span>
					</div>
					<div className={styles.projectsGrid}>
						{projects.inDevelopment.map(({ slug, metadata }) => (
							<Link to={`/project/${slug}`} key={slug}>
								<ProjectCard key={slug} {...metadata} />
							</Link>
						))}
					</div>
				</section>
			)}
		</div>
	);
};
