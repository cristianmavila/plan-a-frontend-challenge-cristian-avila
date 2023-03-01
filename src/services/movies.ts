import api from ".";

export async function latestMoviesService(page: number) {
  try {
    const response = await api.get<any>("/movie/popular", {
      params: {
        page: page,
      },
    });
    if (!!response?.data.results) return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
