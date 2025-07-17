import { useEffect, useRef } from 'react';
import styles from './layout.module.css';
import mountains from '~/assets/images/mountains.svg';
import myself from '~/assets/images/myself.png';
import { Link, Outlet } from 'react-router';

export default () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		type Star = { x: number; y: number; r: number; a: number; d: number };
		let w: number, h: number, stars: Star[];
		let animationId: number;

		const resize = () => {
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;

			const STAR_COUNT = Math.min(200, (w * h) / 8000);
			stars = Array.from({ length: STAR_COUNT }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				r: Math.random() * 1.2 + 0.3,
				a: Math.random() * 0.6 + 0.2,
				d: Math.random() * 0.0005 * (Math.random() < 0.5 ? 1 : -1),
			}));
		};

		const step = () => {
			ctx.clearRect(0, 0, w, h);

			for (const s of stars) {
				s.x -= 0.05;
				if (s.x < 0) s.x = w;

				s.a += s.d;
				if (s.a < 0.2 || s.a > 0.8) s.d *= -1;

				const fade = 1 - s.y / h;
				const alpha = s.a * fade;

				ctx.beginPath();
				ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255,255,255,${alpha})`;
				ctx.fill();
			}

			animationId = requestAnimationFrame(step);
		};

		window.addEventListener('resize', resize);
		resize();
		step();

		return () => {
			window.removeEventListener('resize', resize);
			cancelAnimationFrame(animationId);
		};
	}, []);

	return (
		<>
			<canvas ref={canvasRef} className={styles.bg} />
			<div className={styles.centered}>
				<Link to="/">
					<h1 className={styles.title}>Costello</h1>
				</Link>
				<Outlet />
			</div>
			<footer>
				<img
					className={styles.mountains}
					src={mountains}
					alt="Mountains background"
				/>
				<img className={styles.myself} src={myself} alt="Myself" />
			</footer>
		</>
	);
};
