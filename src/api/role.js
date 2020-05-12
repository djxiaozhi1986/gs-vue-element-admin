import { api1Service } from '@/http'

export function getRouters() {
     return  api1Service('/auth/modules',{},'post');

}