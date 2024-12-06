'use server'
// place here all the actions that will run on the server

export async function getRestaurants () {
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL)
  const data = await resp.json();
  return data
}

export async function fetchRestaurantById(id) {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
      method: "GET",
      headers: {
        "X-User-Email": process.env.NEXT_PUBLIC_API_EMAIL,
        "X-User-Token": process.env.NEXT_PUBLIC_API_TOKEN,
      },
    });

    if (!resp.ok) {
      throw new Error(
        `Failed to fetch restaurant with ID: ${id}`
      );
    }

    const data = await resp.json()
    return data;
  } catch (error) {
    return undefined;
  }
}

export async function createRestaurant(formData) {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Email": process.env.NEXT_PUBLIC_API_EMAIL,
          "X-User-Token": process.env.NEXT_PUBLIC_API_TOKEN,
        },
        body: JSON.stringify(formData),
      }
    );
  
    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("API Response:", errorResponse);
      throw new Error(errorResponse.message || `Failed with status ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error at createRestaurant`, error)
    throw error
  }
}
