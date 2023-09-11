import './App.css';
// import ArrayElementsRendering from './Components/Question 1/ArrayElementsRendering';
// import ArrayObject from './Components/Question 2/ArrayObject';
// import ImageArray from './Components/Question 4/ImageArray';
// import Dropdown from './Components/Question 3/Dropdown';
import UserInfo from './Components/Question 5/UserInfo';

function App() {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  // const arr = [
  //   {
  //     name: 'Himanshu',
  //     age: 22,
  //     email: 'h1m6n5hu@gmail.com'
  //   },
  //   {
  //     name: 'Lucifer',
  //     age: 22,
  //     email: 'hs098605@gmail.com'
  //   },
  //   {
  //     name: 'Devil',
  //     age: 22,
  //     email: 'hlucifers18@gmail.com'
  //   },
  //   {
  //     name: 'Waseem',
  //     age: 18,
  //     email: 'priyanshusingh@gmail.com'
  //   }
  // ]
  // const images = ['https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://plus.unsplash.com/premium_photo-1669497495583-d552beb8ece4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1667738969059-279a97058ef5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRyZWslMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60', 'https://images.unsplash.com/photo-1674691336686-d5ae67632a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyZWslMjBiaWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60']
  // const arr = ['Bhugati', 'Lamborgini', 'Ferrai', 'McLaren', 'Rolls Royce', 'Lykan Hypersport', 'Thar']
  const obj = [
    {
      name: 'Akshay Kumar',
      profilePicture: 'https://i.pinimg.com/originals/b5/a1/8c/b5a18c001b7be552e31da146ba467eeb.jpg',
      bio: 'Rajiv Hari "Akshay Kumar" Om Bhatia was born on September 09, 1967, in Amritsar, Punjab to Aruna\nBhatia and Hari Om Bhatia. He is an Indian actor, film producer, former model, and television\npersonality. He went to Bangkok to learn how to use a sword and also worked as a waiter in a\nrestaurant. He studied martial arts in Hong Kong. It was a student who suggested that he should try\nmodeling. Because of his success as model, he was offered films. Along with his good looks and\nexcellent martial art skills, he was always the first choice to do adventurous movies. He does his own\nstunts in his films. His breakthrough performance was in Saugandh (1991). He was well known for his\nKhiladi series, an Indian version of James Bond, such as Mr. Bond (1992), Khiladi (1992), Main Khiladi\nTu Anari (1994), Mr. & Mrs. Khiladi (1997) and Khiladi 420 (2000). He dated strings of his co-stars\nincluding Raveena Tandon, Shilpa Shetty Kundra, Pooja Batra and Rekha. His recent critically acclaimed\nperformances include Airlift (2016), Baby (2015) and Rustom (2016). He is married to former actress\nand now author Twinkle Khanna with whom he has two children.'
    },
    {
      name: 'Shahid Kapoor',
      profilePicture: 'https://e1.pxfuel.com/desktop-wallpaper/477/839/desktop-wallpaper-stunning-shahid-kapoor-and-in-shahid-kapoor.jpg',
      bio: 'Born to actor Pankaj Kapur and Neelima Azeem, Shahid was born 25th February 1981 in Delhi. He studied and completed his primary education from Gyan Bharti School. His parents got divorced when he was three years old. Pankaj Kapur shifted to Mumbai, while Neelima Azeem continued to work as a dancer in Delhi. It is believed that Shahid was extremely close to his maternal grandfather and that the two shared a great relationship. Pankaj Kapur, who was then a struggling actor, would visit Shahid on his birthday every year. Shahid shifted to Mumbai with his mother when he turned ten. After coming to Mumbai, Neelima Azeem married actor and voice-over artist Rajesh Khattar, and the couple has a son, Ishaan Khattar. Shahid Kapoor continued to stay with Neelima and Rajesh until the couple got divorced in 2001. Stepbrothers Shahid and Ishaan continue to have a good rapport. Pankaj Kapur married Supriya Pathak and the couple has two children - Sanah Kapoor and Ruhaan Kapoor.'
    },
    {
      name: 'Tom Ellis',
      profilePicture: 'https://i.pinimg.com/originals/7c/fc/34/7cfc344a443360e4ec335c58d9e11089.jpg',
      bio: 'Tom Ellis is a Welsh actor from Cardiff, Wales. He is best known for playing Lucifer Morningstar in the American television series Lucifer (2016-2021). Ellis was born in Cardiff. He studied BA Dramatic Studies at the Royal Conservatoire of Scotland (previously the Royal Scottish Academy of Music and Drama). Ellis\' notable roles include Hollywood physician in the USA Network series Rush, Mark Etches in the British supernatural drama The Fades and Gary Preston in the hit TV show Miranda which aired on the BBC from November 9, 2009 to January 1, 2015. In February 2015, it was announced that Ellis was cast as Lucifer Morningstar in the Fox television drama Lucifer, based on the comic of the same name, which premiered on 25 January 2016. The show was continued by Netflix from its fourth to sixth season, later was released on the 10th of September 2021.'
    },
    {
      name: 'Robert Downey Jr.',
      profilePicture: 'https://c4.wallpaperflare.com/wallpaper/256/819/794/avengers-age-of-ultron-the-avengers-tony-stark-robert-downey-jr-wallpaper-preview.jpg',
      bio: 'Robert Downey Jr. has evolved into one of the most respected actors in Hollywood. With an amazing list of credits to his name, he has managed to stay new and fresh even after over four decades in the business. Downey was born April 4, 1965 in Manhattan, New York, the son of writer, director and filmographer Robert Downey Sr. and actress Elsie Downey (née Elsie Ann Ford). Robert\'s father is of half Lithuanian Jewish, one quarter Hungarian Jewish, and one quarter Irish, descent, while Robert\'s mother was of English, Scottish, German, and Swiss-German ancestry. Robert and his sister, Allyson Downey, were immersed in film and the performing arts from a very young age, leading Downey Jr. to study at the Stagedoor Manor Performing Arts Training Center in upstate New York, before moving to California with his father following his parents\' 1978 divorce. In 1982, he dropped out of Santa Monica High School to pursue acting full time. Downey Sr., himself a drug addict, exposed his son to drugs at a very early age, and Downey Jr. would go on to struggle with abuse for decades.'
    }
  ]

  return (
    <div className="App">
      {/* <ArrayElementsRendering arr={arr}></ArrayElementsRendering> */}
      {/* <ArrayObject arr={arr}></ArrayObject> */}
      {/* <ImageArray images={images}></ImageArray> */}
      {/* <Dropdown arr={arr}></Dropdown> */}
      <UserInfo obj={obj}></UserInfo>
    </div>
  );
}

export default App;
