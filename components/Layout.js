import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className="wrapper">
        {/* I am writing this in the Layout Component in the Header Tag! */}
        {props.aTitle}
        {props.children}
        {/* This is also written in the Header Tag, but after the curly braces with the
      children props! */}
        <Footer />
      </div>
    </div>
  );
}
