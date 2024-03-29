import Logo from './Logo';
import DarkModeSwitcher from './DarkModeSwitcher';
import { useAppSelector } from '../../redux/hooks';
import Spinner from '../Spinner';

const StartHeader = () => {
	const logoAnimated = useAppSelector((state) => state.user.logoAnimated);
	const logoLoaded = useAppSelector((state) => state.user.logoLoaded);

	return (
		<div>
			{logoAnimated === true && logoLoaded === false ? <Spinner /> : null}
			{logoLoaded === true ? <DarkModeSwitcher /> : null}
			<Logo />
		</div>
	);
};

export default StartHeader;
