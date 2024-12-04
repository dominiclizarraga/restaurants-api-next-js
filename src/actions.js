'use server'
// place here all the actions that will run on the server

export async function getRestaurants () {
  const resp = await fetch(process.env.API_URL)
  const data = await resp.json();
  return data
}

export async function fetchRestaurantById(id) {
  const resp = await fetch(`${process.env.API_URL}/${id}`, {
    method: "GET",
    headers: {
      "X-User-Email": process.env.API_EMAIL,
      "X-User-Token": process.env.API_TOKEN,
    },
  });

  if (!resp.ok) {
    const errorData = await resp.json();
    throw new Error(
      errorData.error || `Failed to fetch restaurant with ID: ${id}`
    );
  }

  return resp.json();
}