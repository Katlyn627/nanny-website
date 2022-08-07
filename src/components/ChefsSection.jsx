import KidCard from "./KidCards"

export default function ChefsSection(){
    const chefs = [
        {
            name: "James Peter",
            img: "/images/chefs/img_1.jpg",
            recipesCount: "6 months",
            cuisine: "Finger painting",
        },
        {
            name: "Casey Brown",
            img: "/images/chefs/img_2.jpg",
            recipesCount: "2 years",
            cuisine: "Dress up",
        },
        {
            name: "Maxwell Smith",
            img: "/images/chefs/img_4.jpg",
            recipesCount: "9 months",
            cuisine: "Playing with trains",
        },
        {
            name: "Irene Johnson",
            img: "/images/chefs/img_5.jpg",
            recipesCount: "1 year",
            cuisine: "Coloring",
        },
        {
            name: "Bobby Marks",
            img: "/images/chefs/img_6.jpg",
            recipesCount: "6 months",
            cuisine: "Story time",
        },
        {
            name: "Parker Johnson",
            img: "/images/chefs/img_7.jpg",
            recipesCount: "7 months",
            cuisine: "Music and signing",
        }
    ]
   
    return (
        <div className="section chefs">
            <h1 className="title">Our Top Kids</h1>
            <div className="top-chefs-container">
                {/* {<ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />} */}
                
                { chefs.map(chef => <KidCard key={chef.name} chef={chef} />) }  
            </div>
        </div>
    )
}
