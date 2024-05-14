import susi from '../logo.gif';
import '../App.css';
import MyButton from '../components/myButton';
import Profile from '../components/profile';
import Introduction from '../components/introduction';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

function Home() {
  const navText = "Pujinnn";
  const navHeader = "ini Header navbar";

  const Paragraf = (props) => {
    return (
      <div>
        <i>Mantap Bang</i>
        <marquee>Menyala Abangku</marquee>
      </div>

    )
  }

  return (
    
    <div className="App">
      <NavBar name={navText} head={navHeader}/>

      <header className="App-header margin-top-3">

        <Profile name={navText} />
        <img src={susi} alt="susi"/>
        <p>
          HALO SEMUA!!
          <Introduction name="Bayu Ariyadi" />
        </p>
        <MyButton pages="/pacar" buttonName="Cari Pacar Anda!" size="lg"/>
        <Footer name={Paragraf()} />
      </header>
    </div>
  );
}

export default Home;
