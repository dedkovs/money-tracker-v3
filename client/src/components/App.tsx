import { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { light, dark } from '../services/theme';
import Layout from './Layout';
import axios from 'axios';
import Routes from './Routes';
// import { setAllTransactions } from '../redux/slices/transactions';
// import { setAllTransactions } from '../redux/slices/transactions2';
import { setIsAuth } from '../redux/slices/isAuth';
// import { setWalletsTopOrder } from '../redux/slices/walletsTopOrder';
// import { setWallets } from '../redux/slices/wallets';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const App = () => {
    const isAuth = useAppSelector((state) => state.isAuth);
    const darkTheme = useAppSelector((state) => state.darkTheme);

    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const onError = (err: Error) => {
        setError(true);
        setLoading(false);
        console.log(err);
        console.log('error: ', error);
    };

    const [errorRegister, setErrorRegister] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get('/isauth')
            .then((res) => {
                setLoading(false);
                dispatch(setIsAuth(res.data.isAuth));
                // if (isAuth) {
                // axios
                // .get(`/getdata/${res.data.userId}`)
                // .then((res) => {
                // console.log(res.data);
                // setLoading(false);
                // dispatch(setAllTransactions(res.data.transactions));
                // dispatch(
                //     setWalletsTopOrder(res.data.wallets_top_order)
                // );
                // dispatch(setWallets(res.data.wallets));
                // })
                // .catch((err) => {
                // setLoading(false);
                // console.log(err);
                // });
                // } else {
                // setLoading(false);
                // }
            })
            .catch((err) => {
                setLoading(false);
                onError(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth]);

    return (
        <ThemeProvider theme={darkTheme ? dark : light}>
            <Layout>
                <Routes
                    loading={loading}
                    setLoading={setLoading}
                    errorRegister={errorRegister}
                    setErrorRegister={setErrorRegister}
                />
            </Layout>
        </ThemeProvider>
    );
};

export default App;
