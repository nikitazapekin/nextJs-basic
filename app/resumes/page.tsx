/*import { TheFooter } from "../components/footer/footer";
import { TheHeader } from "../components/header/header";
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
      next: {
       revalidate: 60,
      },
    }
    );
    
    return response.json()
}
export default async  function Resumes() {
    const posts = await getData();
    console.log(posts)
    return (
    <div>
        <TheHeader />
{posts.map((item: any)=> (
    <p>
        {item.id}
        {item.title}
    </p>
))}
<TheFooter />
    </div>
    );
  }
   */