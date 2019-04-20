import Goods from '@/components/Goods'
import DragFile from '@/components/fileupload/DragFile'

export default [
    {
        path: '/',
        name: 'goods',
        component: Goods
    },
    {
        path: '/file',
        name: 'file',
        component: DragFile
    },
    {
        path: '*',
        redirect: '/'
    }
]
