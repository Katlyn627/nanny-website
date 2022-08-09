import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/BlogCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Terrible Twos",
            image: "/images/gallery/img_1.jpg",
            body: "Terrible Two's we've all heard of it the ",
            authorImg: "/images/chefs/img_1.jpg",
        }, 
        {
            title: "Potty Training",
            image: "/images/gallery/img_2.jpg",
            body: "Blah blah blah",
            authorImg: "/images/chefs/img_1.jpg",
        }, 
        {
            title: "Beef Stroganoff",
            image: "/images/gallery/img_3.jpg",
            authorImg: "/images/chefs/img_2.jpg",
        }, 
        {
            title: "French Toast",
            image: "/images/gallery/img_4.jpg",
            authorImg: "/images/chefs/img_3.jpg",
        }, 
        {
            title: "Hummus with Roasted Veggies",
            image: "/images/gallery/img_5.jpg",
            authorImg: "/images/chefs/img_4.jpg",
        }, 
        {
            title: "Chicken Pan Pizza",
            image: "/images/gallery/img_6.jpg",
            authorImg: "/images/chefs/img_5.jpg",
        }, 
        {
            title: "Garlic Croutons",
            image: "/images/gallery/img_7.jpg",
            authorImg: "/images/chefs/img_6.jpg",
        }, 
        {
            title: "Summer Pasta with Mint",
            image: "/images/gallery/img_8.jpg",
            authorImg: "/images/chefs/img_6.jpg",
        }, 
        {
            title: "Greek Appetizer",
            image: "/images/gallery/img_9.jpg",
            authorImg: "/images/chefs/img_5.jpg",
        }, 
        {
            title: "Cobb Salad",
            image: "/images/gallery/img_10.jpg",
            authorImg: "/images/chefs/img_7.jpg",
        },
        {
            title: "Bacon Wrapped Zuchinni",
            image: "/images/gallery/img_11.jpg",
            authorImg: "/images/chefs/img_5.jpg",
        }, 
        {
            title: "Buffalo Cicken Wings",
            image: "/images/gallery/img_12.jpg",
            authorImg: "/images/chefs/img_7.jpg",
        }

    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}