import Card from "./components/Card";
import Header from "./components/Header";
import Slider from "./components/Slider";
import TitleDesc from "./components/TitleDesc";

const cardData = [
  {
    id: 1,
    title: "Life lessons with Katie Zaferes Life lessons with Katie Zaferes ",
    image: "/images/cards/card1.png",
    rating: 5,
    price: 136,
    count: 6,
    status: "Sold Out",
    country: "USA",
    isOnline: false,
  },
  {
    id: 2,
    title: "Learn wedding photography",
    image: "/images/cards/card2.png",
    rating: 5,
    price: 125,
    count: 30,
    status: "Online",
    country: "USA",
    isOnline: true,
  },
  {
    id: 3,
    title: "Group Mountain Biking",
    image: "/images/cards/card3.png",
    rating: 4.8,
    price: 50,
    count: 2,
    country: "USA",
    isOnline: false,
  },
];




function App() {
  return (
   <>
   <Header/>
   <Slider />
   <TitleDesc />
   <div className="flex gap-4 items-center justify-center mt-10">
        {cardData.map((card) => {
          const { id, title, image, rating, price, count, country, isOnline } =
            card;
          return (
            <Card
              key={id}
              title={title}
              img={image}
              rating={rating}
              price={price}
              voteCount={count}
              location={country}
              isOnline={isOnline}
            />
          );
        })}
      </div>
   </>
  );
}

export default App
