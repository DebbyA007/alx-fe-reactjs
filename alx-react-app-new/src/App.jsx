import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', paddingBottom: '60px' }}>
            <Header />
            <MainContent />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
            <UserProfile name="Bob" age="30" bio="Software developer and coffee enthusiast" />
            <Footer />
        </div>
    );
}

export default App;
