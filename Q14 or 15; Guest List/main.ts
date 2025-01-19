let guest_list : string[] = ["saadi", "ali", "hannan","yousuf"];
for(let i = 0; i < guest_list.length; i++) {
    console.log("Dear friends: " + guest_list[i] + "\n we invited you on dinner my home tommorow, \n Thank You\n" );
}


//Q15:
let not_present : string = "ali";
let new_guest : string = "umer";
guest_list[1] = new_guest;
for(let i = 0; i < guest_list.length; i++) {
    console.log("Dear friends: " + guest_list[i] + "\n we invited you on dinner my home tommorow, \n Thank You\n" );
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner\n. `)

