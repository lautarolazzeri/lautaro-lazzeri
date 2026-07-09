import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import ParticlesConfig from './config/particles-config';

const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		// carga el bundle completo de tsparticles
		await loadFull(engine);
	}, []);

	return (
		<div id='particle-background'>
			<Particles
				id='tsparticles'
				init={particlesInit}
				options={ParticlesConfig}
			></Particles>
		</div>
	);
}

export default ParticleBackground;