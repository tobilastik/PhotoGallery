import { request } from "./requestHandler";


export const API = {
    getGallery: (onResponse: any, data?: []) => {
        request(onResponse, data, "GET",);
    },
    
}