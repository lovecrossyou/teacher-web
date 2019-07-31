import fetch from '@/config/fetch'


export const addLottery = data=> fetch('/lottery/add',data,'POST');
export const listLottery = ()=> fetch('/lottery/list');
export const updateLottery = data=> fetch('/lottery/update',data,'POST');


export const addCategoryM = data=> fetch('/category_m/add',data,'POST');
export const listCategoryM = data=> fetch('/category_m/list');
export const delCategoryM = id=> fetch('/category_m/del/'+id,'','DELETE');

