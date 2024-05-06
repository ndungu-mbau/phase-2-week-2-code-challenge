const url = import.meta.env.VITE_APP_API_URL;

export const getBots = async () => {
  try {
    const response = await fetch(`${url}/bots`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bots: ", error);
  }
};

export const deleteBot = async (id) => {
  try {
    const res = await fetch(`${url}/bots/${id}`, {
      method: "DELETE",
    });
    console.log(res);
    return await res.json;
  } catch (error) {
    console.error("Error deleting bot: ", error);
  }
};
