import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Post, PPost } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./theme/global.css";

const posts: PPost[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/62476762?s=500&v=4",
      name: "Lucas Marcel",
      role: "Wev Developer"
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { id: 3, type: "link", content: "jane.design/doctorcare" }        
    ],
    publishedAt: new Date("2022-05-03 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/62476762?s=500&v=4",
      name: "Lucas Marcel",
      role: "Wev Developer"
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { id: 3, type: "link", content: "jane.design/doctorcare" }        
    ],
    publishedAt: new Date("2022-05-10 20:00:00")
  }
];

function App() {
  return (
    <div className="App">
      <Header/>
      <div
        className={styles.wrapper}
      >
        <Sidebar/>
        <main>
          {
            posts.map(p => {
              return (
                <Post
                  key={p.id}
                  {...p}
                />
              );
            })
          }
        </main>
      </div>
    </div>
  );
};

export default App;
