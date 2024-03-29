import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-700">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
