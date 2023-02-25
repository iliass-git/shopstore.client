import Api from './services/api'
import AuthService from './services/auth.service'

export default {
    fetchProducts () {
        return Api().get('products', {headers: AuthService.authHeader()})
    },
    fetProduct(id) {
        return Api().get(`product/${id}`, {headers: AuthService.authHeader()})
    },
    addProduct (params) {
        return Api().post('product', params, {headers: AuthService.authHeader()})
    },
    updateProduct (params) {
        return Api().put('product', params, {headers: AuthService.authHeader()})
    },
    deleteProduct (id) {
        return Api().delete(`product/${id}`, {headers: AuthService.authHeader()})
    }

}
    