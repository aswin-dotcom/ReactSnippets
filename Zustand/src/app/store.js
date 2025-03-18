import { create } from 'zustand'

const form  =  create((set)=>({
    name:[],
    Addname:(newname)=>set((state)=>({
        name:[...state.name,newname]
    })),
    changename:(update)=>set((state)=>({
        name:state.name.map((item)=>item.id===update.id? {...item,name:update.name} :item)
    })),
    deletename:(id)=>set((state)=>({
        name:state.name.filter((item)=>item.id!==id)
    })),
}))

export default form;