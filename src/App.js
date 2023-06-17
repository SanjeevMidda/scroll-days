import { useEffect, useState } from 'react';
import './index.css';

function App() {

  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setColor] = useState("black");

  useEffect(() => {
    scrolling()
  },[])

  window.addEventListener('scroll', scrolling);

  let styles = {
    color: color,
  }

  function scrolling(){
    setScrollPosition(window.scrollY);

    console.log(window.scrollY)

    if(scrollPosition > -1 && scrollPosition< 540){
      setDayOfTheWeek("MONDAY");
      setColor("black");

    }else if (scrollPosition > 540 && scrollPosition < 1065){
      setDayOfTheWeek("TUESDAY");
      setColor("red");

    }else if(scrollPosition > 1065 && scrollPosition < 1590){
      setDayOfTheWeek("WEDNESDAY");
      setColor("pink");

    }else if(scrollPosition > 1590 && scrollPosition < 2090){
      setDayOfTheWeek("THURSDAY");
      setColor("green");

    }else if (scrollPosition > 2090 && scrollPosition < 2570){
      setDayOfTheWeek("FRIDAY");
      setColor("purple");

    }else if(scrollPosition > 2570 && scrollPosition < 3052){
      setDayOfTheWeek("SATURDAY");
      setColor("grey");

    }else if(scrollPosition > 3025 && scrollPosition < 3204){
      setDayOfTheWeek("SUNDAY");
      setColor("orange");

    }
  
  }

  return (
    <div className="App">

      <h1 id='dayOfTheWeek' style={styles}>{dayOfTheWeek}</h1>
       <section className="divider">
        <h1>MONDAY</h1>
       </section>
       <section className="divider">
        <h1>TUESDAY</h1>
       </section>
       <section className="divider">
        <h1>WEDNESDAY</h1>
       </section>
       <section className="divider">
        <h1>THURSDAY</h1>
       </section>
       <section className="divider">
        <h1>FRIDAY</h1>
       </section>
       <section className="divider">
        <h1>SATURDAY</h1>
       </section>
       <section className="divider">
        <h1>SUNDAY</h1>
       </section>
    </div>
  );
}

export default App;
