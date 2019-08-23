import request from '@/config/fetch'


export const addLottery = data => request('/lottery/add', data, 'POST');
export const listLottery = () => request('/lottery/list');
export const updateLottery = data => request('/lottery/update', data, 'POST');


export const addCategoryM = data => request('/category_m/add', data, 'POST');
export const listCategoryM = data => request('/category_m/list');
export const delCategoryM = id => request('/category_m/del/' + id, '', 'DELETE');

export const weChatOauth = data => request.post('/common/wx/weChatOauth',data)
export const saveUserOrUpdate = data => request.post('/common/user/saveUserOrUpdate',data)

export const saveClass = data => request.post('/wap/teacher/class/saveClass',data)
export const subjectList = data => request.get('/common/subject/list',data)
export const listClass = () => request.get('/wap/teacher/class/list')