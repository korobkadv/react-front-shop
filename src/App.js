import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Indian Challenger Dark Horse (2023)",
          img: "Indian_Challenger_Dark_Horse.jpg",
          desc: "High performance in a full size bagger. Everything you love about the Indian Challenger, with more ride-enhancing technology and blacked-out style.",
          category: "Indian",
          price: "36229"
        },
        {
          id: 2,
          title: "Indian Motorcycle Chieftain Limited (2023)",
          img: "Indian_Motorcycle_Chieftain_Limited.jpg",
          desc: "All the same great features of the Chieftain Dark Horse in a classic package of premium metallic paints and chrome finishes.",
          category: "Indian",
          price: "34999"
        },
        {
          id: 3,
          title: "Indian Motorcycle Roadmaster (2023)",
          img: "Indian_Motorcycle_Roadmaster.jpg",
          desc: "Fully loaded with Classic American Style as a nod to our heritage. The classically designed fairing and valanced fender makes it easy to tell this bike is an Indian Motorcycle.",
          category: "Indian",
          price: "38299"
        },
        {
          id: 4,
          title: "Indian Motorcycle Scout (2023)",
          img: "Indian_Motorcycle_Scout.jpg",
          desc: "For those who want the best, Scout has the same great heritage style cues of the Scout Sixty, with more power and integrated tech, plus room for two.",
          category: "Indian",
          price: "16499"
        },
        {
          id: 5,
          title: "Triumph Rocket 3 R (2023)",
          img: "Triumph_Rocket_3_R.jpg",
          desc: "In a world-leading class of its own, the Rocket 3 is the ultimate high performance muscle roadster, and the genesis of a motorcycle legend.",
          category: "Triumph",
          price: "27500"
        },
        {
          id: 6,
          title: "Triumph Tiger 900 Rally (2023)",
          img: "Triumph_Tiger_900_Rally.jpg",
          desc: "The Tiger 900 Rally combines a class-defining new chassis, enhanced state-of-the-art rider-focused technology and an all-new more aggressive style to take your adventure ride wherever you want to go.",
          category: "Triumph",
          price: "17500"
        },
        {
          id: 7,
          title: "Indian Motorcycle Indian Pursuit Limited (2023)",
          img: "Indian_Motorcycle_Indian_Pursuit_Limited.jpg",
          desc: "This chromed-out powerhouse redefines American touring performance. It's ready for any route you can dream up.",
          category: "Indian",
          price: "38199"
        },
        {
          id: 8,
          title: "Moto Guzzi V85 TT TRAVEL (2022)",
          img: "Moto_Guzzi_V85_TT_TRAVEL.jpg",
          desc: "EVERY TRIP BECOMES AN ADVENTURE",
          category: "Moto Guzzi",
          price: "15790"
        }
      ]
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    });

    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)});
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items});
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    });
  }
}

export default App;
