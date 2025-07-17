import Project from '~/content/Project';

export default () => {
	return (
		<Project>
			<Project.Metadata
				title="Chesscom Enhancer"
				description="A chrome extension that adds new and unique quality-of-life features to Chess.com matches."
				status="live"
				url="https://chromewebstore.google.com/detail/chesscom-enhancer/adbgpkeijmmkkbadniaclcbgmpifaoll"
				repo="https://codeberg.org/TheUllernProject/chesscom-enhancer-extension"
				platforms={['Chrome', 'Browser Extension']}
			/>
			<Project.Screenshots></Project.Screenshots>
		</Project>
	);
};

export const metadata = {
	title: 'Chesscom Enhancer',
	description:
		'A chrome extension that adds new and unique quality-of-life features to Chess.com matches.',
	status: 'live' as const,
};
