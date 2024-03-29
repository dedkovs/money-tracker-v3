import { Dispatch, SetStateAction } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register';
import StartHeader from './StartHeader/StartHeader';
import Spinner from './Spinner';
import TransactionForm from './TransactionForm/TransactionForm';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
// import { setOpenDrawer } from '../redux/slices/user';
import { setOpenTransactionForm } from '../redux/slices/user';
import DataTabs from './Data/DataTabs';
import Records from './Data/Records';
interface Props {
	loading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
	errorRegister: string;
	setErrorRegister: Dispatch<SetStateAction<string>>;
}

const Routes = (props: Props) => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	const dispatch = useAppDispatch();

	return (
		<Router>
			<Switch>
				<Route
					path="/auth/google/callback"
					render={() => {
						return <Redirect to="/" />;
					}}
				/>
				<Route
					exact
					path="/"
					render={() => {
						dispatch(setOpenTransactionForm(false));
						return props.loading ? (
							<Spinner />
						) : isAuth ? (
							<>
								<Header />
								<DataTabs />
								<Records />
								<TransactionForm />
							</>
						) : (
							<Redirect to="/login" />
						);
					}}
				/>
				<Route
					exact
					path="/login"
					render={() => {
						dispatch(setOpenTransactionForm(false));
						return props.loading ? (
							<Spinner />
						) : isAuth ? (
							<Redirect to="/" />
						) : (
							<>
								<StartHeader />
								<Login />
							</>
						);
					}}
				/>
				<Route
					exact
					path="/register"
					render={() => {
						dispatch(setOpenTransactionForm(false));
						return isAuth ? (
							<Redirect to="/" />
						) : (
							<>
								<StartHeader />
								<Register />
							</>
						);
					}}
				/>
				<Route path="/" render={() => <Redirect to="/" />} />
			</Switch>
		</Router>
	);
};

export default Routes;
