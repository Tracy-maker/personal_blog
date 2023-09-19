import { defineField,defineType } from "sanity";

export default defineType ({
    name: 'post',
    title:'Post',
    type:'document',
    fields: [
        defineField({
            name: 'post',
            title:'Title',
            type:'string',
        }),
        defineField({  name: 'post',
        title:'Title',
        type:'string',
   }),   ]

})
