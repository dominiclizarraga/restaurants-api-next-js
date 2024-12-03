'use server'
// place here all the actions that will run on the server

export async function getRestaurants () {
  const resp = await fetch(process.env.API_URL)
  console.log(resp)
}