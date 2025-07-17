import Project from '~/content/Project';

export default () => {
	return (
		<Project>
			<Project.Metadata
				title="Tab Switcher Ultra"
				description="A chrome extension that allows you to effortlessly and instantly toggle between tabs with a Windows Alt+Tab like interface and hotkeys."
				status="live"
				url="https://chromewebstore.google.com/detail/tab-switcher-ultra/egfpenlgkaahbopdghjbmkfbpkfogeje"
				repo="https://codeberg.org/TheUllernProject/tab-switcher-ultra"
				platforms={['Chrome', 'Browser Extension']}
			/>
			<Project.Screenshots>
				<div>placeholder</div>
			</Project.Screenshots>
		</Project>
	);
};

export const metadata = {
	title: 'Tab Switcher Ultra',
	description:
		'A chrome extension that allows you to effortlessly and instantly toggle between tabs with a Windows Alt+Tab like interface and hotkeys.',
	status: 'live' as const,
};
