import React  from 'react';
import '../App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Cards/Cards';
import CardItem from '../components/Cards/CardItem';
import vinyls from '../vinyls.json'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card>
          <CardItem
          image={vinyls}
          />
        </Card>
      <Footer />
      </div>
    );
  }
}

export default Home;
