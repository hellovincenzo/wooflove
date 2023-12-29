import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

interface OptionsUrl {
  breed?: string;
  imageLength?: string;
}

interface GetAllBreedProps {
  message: Record<string, string[] | []>;
}

interface GetRandomImageProps {
  message: string | string[];
  status: string;
}

export const DogAPI = {
  // Get All Breeds
  getAll: async function (cancel = false): Promise<GetAllBreedProps> {
    const response = await api.request({
      url: "/breeds/list/all",
      method: "GET",

      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },

  // Get All Sub-Breeds
  getAllSubBreeds: async function (
    data: OptionsUrl,
    cancel = false
  ): Promise<GetAllBreedProps> {
    const response = await api.request({
      url: `/breed/${data.breed}/list/all`,
      method: "GET",

      signal: cancel
        ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },

  // Get Random Images
  getRandomImages: async function (
    data: OptionsUrl,
    cancel = false
  ): Promise<GetRandomImageProps> {
    const response = await api.request({
      url: `/breeds/image/random/${data.imageLength || "1"}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getRandomImages.name].handleRequestCancellation()
            .signal
        : undefined,
    });
    return response.data;
  },

  // Get Breed Images
  getBreedImages: async function (
    data: OptionsUrl,
    cancel = false
  ): Promise<GetRandomImageProps> {
    const response = await api.request({
      url: `/breed/${data.breed}/images/random/${data.imageLength || "1"}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.getRandomImages.name].handleRequestCancellation()
            .signal
        : undefined,
    });
    return response.data;
  },
};

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(DogAPI);
