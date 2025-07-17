import type { ReactNode } from 'react';
import styles from './Project.module.css';

export type ProjectData = {
	metadata: {
		title: string;
		description: string;
		status: 'live' | 'in-development';
		platforms: string[];
		url?: string;
		repo?: string;
	};
};

const Project = ({
	children,
}: {
	children: [
		React.ReactElement<typeof Metadata>,
		React.ReactElement<typeof Screenshots>,
	];
}) => {
	return <div className={styles.container}>{children}</div>;
};

const Metadata = ({
	title,
	description,
	status,
	url,
	repo,
	platforms,
}: ProjectData['metadata']) => (
	<>
		<header className={styles.header}>
			<h1 className={styles.title}>{title}</h1>
			<div className={`${styles.statusBadge} ${styles[status]}`}>
				{status === 'live' ? 'Live' : 'In Development'}
			</div>
		</header>
		<p className={styles.description}>{description}</p>

		<div className={styles.metadata}>
			<div className={styles.metadataItem}>
				<strong>Platforms:</strong>
				<div className={styles.platforms}>
					{platforms.map((platform) => (
						<span key={platform} className={styles.platformTag}>
							{platform}
						</span>
					))}
				</div>
			</div>

			{url && (
				<div className={styles.metadataItem}>
					<strong>Live URL:</strong>
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						{new URL(url).hostname}
					</a>
				</div>
			)}

			{repo && (
				<div className={styles.metadataItem}>
					<strong>Repository:</strong>
					<a
						href={repo}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						View Source
					</a>
				</div>
			)}
		</div>
	</>
);

const Screenshots = ({ children = null }: { children?: ReactNode }) => (
	<div className={styles.screenshots}>{children}</div>
);

Project.Metadata = Metadata;

Project.Screenshots = Screenshots;

export default Project;
