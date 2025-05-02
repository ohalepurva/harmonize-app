
"sue client"

 const useGetFieldComponent=({item})=>{
    function getFieldComponent(){

        switch (item.type) {
           case "input":
             return <Input />;
           case "select":
             return (
               <Select>
                 <SelectTrigger className="w-full">
                   <SelectValue placeholder="--Select--" />
                 </SelectTrigger>
                 <SelectContent>
                   {item.options?.map((opt) => {
                     return (
                       <SelectItem key={opt} value={opt}>
                         {opt}
                       </SelectItem>
                     );
                   })}
                 </SelectContent>
               </Select>
             );
           case "date":
             return <Calendar label={item.label} />;
         }
    }
    return getFieldComponent;
}

export default useGetFieldComponent;
   

