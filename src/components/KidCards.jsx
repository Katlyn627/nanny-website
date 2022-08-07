

export default function KidCard({chef}){
    return(
        <div className="chef-card">
            <img src={chef.img} alt=""/>
                <div className="chef-card-info">
                <h3 className="chef-card-name">{chef.name}</h3>
                <p className="chef-recipe-count">Age: <b>{chef.recipesCount}</b></p>
                <p className="chef-cuisine">Favorite Things: <b>{chef.cuisine}</b></p>
                </div>

            </div>

    )
}