export default function RestaurantsGrid({restaurants}) {

  return (
    <div>
      <div>RestaurantsGrid</div>
      {restaurants.map(restaurant => ( 
        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
        ))}
    </div>

  )

  function RestaurantCard({restaurant}) {
    return (
      <article>
        <h4>{restaurant.name}</h4>
      </article>
    )
  }
}
