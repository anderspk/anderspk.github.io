import Project from '~/content/Project';

export default () => {
	return (
		<Project>
			<Project.Metadata
				title="Wzzapp"
				description="A platform so you never miss a thing"
				status="in-development"
				platforms={['Web', 'Mobile']}
			/>
			{/* <Content>
				<p>
					Wzzapp is an innovative platform designed to ensure you never miss
					important updates, notifications, or events. Built with modern web
					technologies, it provides a seamless experience across web and mobile
					platforms.
				</p>
			</Content> */}
			<Project.Screenshots>
				{/* Add your screenshot components here when ready */}
			</Project.Screenshots>
		</Project>
	);
};

export const metadata = {
	title: 'Wzzapp',
	description: 'A platform so you never miss a thing',
	status: 'in-development' as const,
};
