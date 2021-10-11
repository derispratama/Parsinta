import React from 'react';
import { useRecoilState } from 'recoil';
import AuthenticatedUser from '../components/AuthenticatedUser';
import { theme } from '../store';
import { UserProvider } from './context/User';

function Home() {
    const [currentTheme, setCurrentTheme] = useRecoilState(theme);
    return (
        <div>
            {/* <UserProvider>
                My name is <AuthenticatedUser />
            </UserProvider> */}
            <div>
                <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)}>
                    <option value="dark">dark</option>
                    <option value="light">light</option>
                </select>
            </div>
            <div>you are selecting the {currentTheme} theme.</div>
        </div >
    )
}

export default Home;