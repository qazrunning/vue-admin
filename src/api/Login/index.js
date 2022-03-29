import $http from '../index'
// 这是其中一种写法 get post delete put 
export default function cellPhone(data) {
    return $http.get('/login/cellphone', data)
}