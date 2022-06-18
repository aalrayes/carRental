export async function getAllCars() {
  const res = await fetch(
    `https://radiant-caverns-30708.herokuapp.com/api/v1/cars`
  );
  const data = await res.json();
  if (!res.ok) {
    const message = `An error has occurred: ${res.status}`;
    throw new Error(message);
  }
  return data;
}

export async function getCar(id) {
  const res = await fetch(
    `https://radiant-caverns-30708.herokuapp.com/api/v1/cars/${id}`
  );
  if (!res.ok) {
    const message = `An error has occurred: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();

  return data;
}
