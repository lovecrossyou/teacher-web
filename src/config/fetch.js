import axios from 'axios'
import { Message } from 'element-ui';
// create an axios instance
const service = axios.create({
	baseURL: 'http://www.bluefing.com/jsb-api/v1'
	// withCredentials: true, // send cookies when cross-domain requests
	// timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	request => {
		// do something before request is sent
		const token = localStorage.getItem('token');
		request.headers['token'] = token;
		return request
	},
	error => {
		// do something with request error
		console.log('request interceptor ', error) // for debug
		return Promise.reject(error)
	}
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
	response => {
		const { code, msg } = response.data;
		if (response.status !== 200) {
			Message({
				message: msg,
				type: 'error'
			});
			return Promise.reject(new Error(status.message || 'Error'))
		} else {
			if (code != 0) {
				Message({
					message:msg,
					type: 'error'
				});
				return Promise.reject();
			}
			return response.data
		}
	},
	error => {
		console.log('err' + error) // for debug
		return Promise.reject(error)
	}
)

export default service
