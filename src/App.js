import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


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
          allDesc: [
            {
              id: 1,
              text: "Free Rein To Dominate: Our blacked-out PowerPlus liquid-cooled engine is a fully-modern design and redefines American V-twin performance. Class-leading 128 ft-lbs of torque and 122 hp dominate straight from the factory.",
            },
            {
              id: 2,
              text: "Lean Into Every Ride: Smart Lean Technology, keeps you confidently grounded and in command of the road with 6-axis Bosch® IMU, Dynamic traction control, ABS with cornering control, and Drag Torque Control. Inverted front suspension, lightweight cast-aluminum frame, and hydraulically adjustable Fox® rear shock deliver curve-hugging handling and unyielding stability.",
            },
            {
              id: 3,
              text: "Touchscreen Powered By Ride Command: A gorgeous 7-inch touchscreen powered by RIDE COMMAND features Apple CarPlay® integration, turn-by-turn navigation, Bluetooth® connectivity, live traffic and weather, and more.",
            },
            {
              id: 4,
              text: "Mean Style That Stands Alone: Aggressive fairing design with full LED lighting and menacingly styled running lights provide a signature face that leads the way in both style and function. Blacked out finishes and premium paint add to the mean look.",
            },
            {
              id: 5,
              text: "Carve Corners. All of Them.: Chassis mounted fairing for incredibly stable handling also provides class-leading wind protection. Inverted front suspension, lightweight cast-aluminum frame, and hydraulically adjustable Fox® rear shock deliver curve-hugging precise handling.",
            },
            {
              id: 6,
              text: "Beats For The Streets: Go bigger with 6.5-inch speakers that deliver 100-watts of crystal-clear audio while a dynamic equalizer automatically adjusts for road, wind and engine noise so you never miss a beat.",
            },
            {
              id: 7,
              text: "Supreme Traction. Superior Stopping Power.: Race-spec, radially-mounted Brembo® brakes provide superior stopping power, and performance touring Metzeler® Cruisetec® tires offer supreme traction.",
            },
            {
              id: 8,
              text: "Ride In Comfort, Your Way: Choose between three ride modes, Rain, Standard, and Sport, for an experience that's customized to your riding style. Rear Cylinder Deactivation automatically shuts off the rear cylinder when the bike is stopped for enhanced comfort in slow-moving traffic.",
            },
            {
              id: 9,
              text: "Features For Going The Distance: Ride in comfort for longer with keyless ignition, remote-locking hard saddlebags, cruise control and USB charging port.", 
            }
          ],
          category: "Indian",
          urlVideo: "https://youtu.be/0R4Y5N9iASw",
          price: "36229"
        },
        {
          id: 2,
          title: "Indian Motorcycle Chieftain Limited (2023)",
          img: "Indian_Motorcycle_Chieftain_Limited.jpg",
          desc: "All the same great features of the Chieftain Dark Horse in a classic package of premium metallic paints and chrome finishes.",
          allDesc: [
            {
              id: 1,
              text: "Thunderstroke 116 V-Twin Engine: The air-cooled Thunderstroke 116 engines produces 126 ft-lbs of torque for exceptional power at low RPM and a smooth ride at any speed.",
            },
            {
              id: 2,
              text: "Modern. Aggressive.: Premium chrome finishes, a sleek fairing, slammed saddlebags, and gunfighter style seat deliver a streamlined, commanding presence. A lowered stance and LED lighting from nose to tail complete the custom-inspired look.",
            },
            {
              id: 3,
              text: "Touchscreen Powered By Ride Command: A gorgeous 7-inch touchscreen powered by RIDE COMMAND features Apple CarPlay® integration, turn-by-turn navigation, Bluetooth® connectivity, live traffic and weather, and more.",
            },
            {
              id: 4,
              text: "Agile Handling And Control: Low seat height, ergonomically-designed controls, and a lightweight cast aluminum frame come together for responsive handling and agile cornering — providing a confidence inspiring ride for riders across the board.",
            },
            {
              id: 5,
              text: "Ride In Comfort, Your Way: Choose between three ride modes, Tour, Standard, and Sport, for an experience that's customized to your riding style. Rear Cylinder Deactivation automatically shuts off the rear cylinder when the bike is stopped for enhanced comfort in slow-moving traffic.",
            },
            {
              id: 6,
              text: "Push-Button Power Windshield: With the push of a handlebar-mounted button, this flare windshield will raise or lower to your preferred position.",
            },
            {
              id: 7,
              text: "Features For The Win: The Chieftain Limited comes standard with keyless ignition, cruise control, ABS and tire pressure monitoring.",
            },
            {
              id: 8,
              text: "18+ Gallons of Cargo Space: Keep your cargo protected from the elements with 18+ gallons of weatherproof storage in power-locking slammed saddlebags."
            },
            ],
          category: "Indian",
          urlVideo: "https://youtu.be/72DeBeE9Iok",
          price: "34999"
        },
        {
          id: 3,
          title: "Indian Motorcycle Roadmaster (2023)",
          img: "Indian_Motorcycle_Roadmaster.jpg",
          desc: "Fully loaded with Classic American Style as a nod to our heritage. The classically designed fairing and valanced fender makes it easy to tell this bike is an Indian Motorcycle.",
          allDesc: [
            {
              id: 1,
              text: "Ride The Long Haul In Comfort And Style: The road may be long, but it doesn't have to feel like it. No matter how far you ride, the Roadmaster is equipped to get you there in style and comfort.",
            },
            {
              id: 2,
              text: "Touchscreen Powered By Ride Command: A gorgeous 7-inch touchscreen powered by RIDE COMMAND features Apple CarPlay® integration, turn-by-turn navigation, Bluetooth® connectivity, live traffic and weather, and more.",
            },
            {
              id: 3,
              text: "Thunderstroke 116 V-Twin Engine: The air-cooled Thunderstroke 116 engine produces 126 ft-lbs of torque for exceptional power at low RPM and smooth ride at any speed.",
            },
            {
              id: 4,
              text: "36+ Gallons of Cargo Space: Protect your cargo from the elements in weatherproof storage with remote-locking saddlebags, trunk, and easy access storage in the lowers.",
            },
            {
              id: 5,
              text: "Premium Audio: High-output speakers in the fairing and trunk deliver 200-watts of crystal-clear audio. It also sports a dynamic equalizer that automatically adjusts for road, wind and engine noise.",
            },
            {
              id: 6,
              text: "Comfort For Miles: Heated grips and a plush 2-up seat with independent heat controls for both the passenger and driver guarantee you'll go further in comfort. Hard lower fairings with adjustable vents allow riders to tailor airflow for superior rider comfort.",
            },
            {
              id: 7,
              text: "Push-Button Power Windshield: A push-button power windshield allows you to easily change the height. Keep it low for wind in your face or raise it up to cruise in comfort.",
            },
            {
              id: 8,
              text: "Ride In Comfort, Your Way: Choose between three ride modes, Tour, Standard, and Sport, for an experience that's customized to your riding style. Rear Cylinder Deactivation automatically shuts off the rear cylinder when the bike is stopped for enhanced comfort in slow-moving traffic.",
            },
            {
              id: 9,
              text: "A Higher Standard: Top-of-the-line riding amenities include LED lighting, keyless ignition, cruise-control, ABS and tire pressure monitoring."
            },
            ],
          category: "Indian",
          urlVideo: "https://youtu.be/kUzG1JHc3Ik",
          price: "38299"
        },
        {
          id: 4,
          title: "Indian Motorcycle Scout (2023)",
          img: "Indian_Motorcycle_Scout.jpg",
          desc: "For those who want the best, Scout has the same great heritage style cues of the Scout Sixty, with more power and integrated tech, plus room for two.",
          allDesc: [
            {
              id: 1,
              text: "Originality Comes Standard: A name that goes back a century. An experience that lives up to the legacy. The Scout is where heritage-inspired design meets modern performance.",
            },
            {
              id: 2,
              text: "100 Horses. Unleashed: The liquid-cooled, 69-cubic-inch, 100 hp V-twin delivers punchy acceleration and the power to pass anyone, anywhere. Electronic fuel injection delivers class-leading horsepower and acceleration, while a responsive 6-speed transmission allows for sporty, aggressive riding.",
            },
            {
              id: 3,
              text: "Draped In Chrome: Premium chrome provides plenty of head-turning shine. Make a statement that's sure to get noticed.",
            },
            {
              id: 4,
              text: "Two-Up Riding: A genuine leather two-up seat is designed to withstand the elements while maintaining its natural beauty. Passenger pegs come standard.",
            },
            {
              id: 5,
              text: "Ride With Confidence: A low seat height and a lightweight frame makes for an easy, confident ride at every speed.",
            },
            {
              id: 6,
              text: "Always Charging: The hidden USB port makes it easy to keep your devices in the green, meaning you don't have to sacrifice style for modern function."
            },
            ],
          category: "Indian",
          urlVideo: "https://youtu.be/F-s8eUlxhvk",
          price: "16499"
        },
        {
          id: 5,
          title: "Triumph Rocket 3 R (2023)",
          img: "Triumph_Rocket_3_R.jpg",
          desc: "In a world-leading class of its own, the Rocket 3 is the ultimate high performance muscle roadster, and the genesis of a motorcycle legend.",
          allDesc: [
            {
              id: 1,
              text: "Setting a benchmark for handling and character, the Triumph Rocket 3 R delivers incredible control, comfort and capability. Providing instantaneous, world-leading torque that's an amazing 71% higher than the closest competition, the Rocket 3 serves up effortless acceleration and response in any gear, with a flat, rich curve that reaches its peak at 4,000 rpm then holds maximum torque all the way through the mid-range. ",
            },
            {
              id: 2,
              text: "Peak power is 164 HP at 6,000 rpm (11% up on the previous generation), with more power from a low 3,500 rpm and all the way up to a higher redline of 7,000 rpm, making the Rocket 3 R an unparalleled thrilling riding experience with all-day, any-gear, breathtaking capability. ",
            },
            {
              id: 3,
              text: "On top of its unbeatable performance, the Rocket 3 R has an incredible pure muscular presence and magnificent cruiser style, together with beautiful details and an premium finish. And you can enhance this incredible ride even more by personalizing your ride with over 50 custom accessories.",
            },
            ],
          category: "Triumph",
          urlVideo: "https://youtu.be/7pRH-6UTgu8",
          price: "27500"
        },
        {
          id: 6,
          title: "Triumph Tiger 900 Rally (2023)",
          img: "Triumph_Tiger_900_Rally.jpg",
          desc: "The Tiger 900 Rally combines a class-defining new chassis, enhanced state-of-the-art rider-focused technology and an all-new more aggressive style to take your adventure ride wherever you want to go.",
          allDesc: [
            {
              id: 1,
              text: "With a higher capacity 900cc triple engine for more performance, power and torque, the Rally represents a quantum leap forward in Adventure bike capability.",
            },
            {
              id: 2,
              text: "7-Inch Full-Color TFT Instruments: The new class-leading full-color TFT screen has a crisp image with no reflective layer underneath giving better clarity in all weather conditions.",
            },
            {
              id: 3,
              text: "Premium Showa Suspension Setup: Dedicated, purposeful high-specification off-road suspension. Front: manually adjustable Showa 45mm USD cartridge forks with 9.44-inches (240mm) wheel travel. Rear: manually adjustable Showa gas pressurized RSU with 9.05-inches (230mm) wheel travel.",
            },
            {
              id: 4,
              text: "Optimized Cornering ABS And Traction Control: Cornering functionality maintains optimum braking and traction control performance whatever the lean angle. Can be switched off when desired.",
            },
            {
              id: 5,
              text: "Brembo Stylema® Brakes: Superior stopping power with top-specification category-leading Brembo Stylema® brakes which are lightweight, compact and carefully sculpted high performance calipers.",
            },
            {
              id: 6,
              text: "Spoked Tubeless Wheels: Spoked tubeless front and rear wheels were designed to meet the unique challenges of off-road riding, making them ideal for the Tiger 900 Rally range.",
            },
            {
              id: 7,
              text: "All-LED Lighting: Signature Tiger 900 lighting includes LED headlight, tail light and indicators for maintenance-free visibility."
            },
            ],
          category: "Triumph",
          urlVideo: "https://youtu.be/CippTbMxOow",
          price: "17500"
        },
        {
          id: 7,
          title: "Indian Motorcycle Indian Pursuit Limited (2023)",
          img: "Indian_Motorcycle_Indian_Pursuit_Limited.jpg",
          desc: "This chromed-out powerhouse redefines American touring performance. It's ready for any route you can dream up.",
          allDesc: [
            {
              id: 1,
              text: "American V-Twin Touring Reimagined: This chromed-out powerhouse redefines American touring performance. It's ready for any route you can dream up.",
            },
            {
              id: 2,
              text: "Big Motor With Big Torque: You'll crush miles with unimaginable low end torque right off the line and exhilarating top end passing power from the liquid-cooled V-twin PowerPlus motor.",
            },
            {
              id: 3,
              text: "Rock Solid Stability: With a chassis-mounted fairing, with optional electronically adjustable Fox® rear suspension, inverted front forks, and a cast-aluminum frame, you have the ultimate control.",
            },
            {
              id: 4,
              text: "Cutting Edge Technology: Cruise control, built in audio, keyless ignition and even more ride enhancing tech are combined with a 7-inch touchscreen. The touchscreen is powered by RIDE COMMAND with Apple CarPlay® integration, turn-by-turn navigation, and RIDE COMMAND+ connected features like live weather and traffic overlays.",
            },
            {
              id: 5,
              text: "Unsurpassed Comfort: The frame-mounted fairing provides exceptional wind protection on its own. For even more, adjust the vent in the lowers or simply push a button to send up the windshield. While it's considerate to check in on a passenger when you have one, you don't really need to: in this two-up configuration with optional heated seats, they'll be just as comfortable as you.",
            },
            {
              id: 6,
              text: "Premium Audio: High-output speakers in the fairing and trunk deliver 200-watts of crystal-clear audio. It also sports a dynamic equalizer that automatically adjusts for road, wind and engine noise.",
            },
            {
              id: 7,
              text: "Long-Haul Storage: More than 35 gallons of weatherproof, remote-locking storage can handle all the gear you've got. Or take off the quick-release trunk to drop weight and give yourself a whole new profile.",
            },
            {
              id: 8,
              text: "Bright, Bold Lighting: You won't go unnoticed, thanks to LED running lights and a LED headlight with a menacing style."
            },
            ],
          category: "Indian",
          urlVideo: "https://youtu.be/FdtJsMLFCdM",
          price: "38199"
        },
        {
          id: 8,
          title: "Moto Guzzi V85 TT TRAVEL (2022)",
          img: "Moto_Guzzi_V85_TT_TRAVEL.jpg",
          desc: "EVERY TRIP BECOMES AN ADVENTURE",
          allDesc: [
            {
              id: 1,
              text: "Packed with standard gear that is anything but standard and featuring a higher Touring windshield and capacious side bags, the Moto Guzzi V85 TT is designed to make the journey of your dreams an exhilarating reality. Its exploring spirit is immediately evident in its high-performance Michelin Anakee Adventure tires, while a series of multimedia and electronic functions simplify riding both on and off road. Available in a new livery, it is always ready to transform every trip into an adrenalin-charged adventure.",
            },
            {
              id: 2,
              text: "The Greatness of Grey: The Moto Guzzi V85 TT Travel sports a new livery in the form of Grigio Grigna, a steely grey embellished with graphics and colors that showcase its sides, fuel tank and all the various bells and whistles that are provided as standard. Sporty yet elegant, the Moto Guzzi V85 TT is the perfect adventure companion.",
            },
            {
              id: 3,
              text: "Comfort That Goes Beyond the Norm: With a host of features included as standard, the Moto Guzzi V85 TT is a dream to ride, whether you are enjoying adventures on or off road. Generous suspension, a higher Touring windshield for greater protection, Urban side bags and heated handgrips are just some of the features that deliver outstanding comfort. Add in a central kickstand and all that’s left to do is for you to don your helmet and set off for your next destination.",
            },
            {
              id: 4,
              text: "Smartphone, Smart Bike: When you’re on the seat of your Moto Guzzi V85 TT Travel, enjoy the extra dimension that the Moto Guzzi MIA multimedia platform can bring to your experience. Linking your smartphone to your bike, it simplifies touring by extending instrument functions and allowing you have total control of every detail so that you can enjoy every moment and kilometre of your trip."
            },
            ],
          category: "Moto Guzzi",
          urlVideo: "https://youtu.be/p-JsFn8P3m0",
          price: "15790"
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} countOrders={this.state.orders.length} />

        {this.state.showFullItem ? <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />
          : <div>
            <Categories chooseCategory={this.chooseCategory} />
            <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} />
          </div>
        }

        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
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
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    });
  }
}

export default App;
