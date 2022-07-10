import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1) { //будет возвращать список постов
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response; // возвр.непосредственно список постов 
        }

        static async getById(id) {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            return response;
        }
    
        static async getСommentsByPostId(id) {
            console.log('fbgfbngngngngngn')
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            return response;
        }
    }


